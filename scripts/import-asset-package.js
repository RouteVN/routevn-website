import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const SUPPORTED_SCHEMA = 'routevn.import-pack.v1';
const ASSET_PACKAGE_KIND = 'routevn.creator.asset-package';
const PROJECT_REFERENCE_KEYS = new Set(['lineId', 'sceneId', 'sectionId']);
const MIME_EXTENSIONS = {
  'application/json': '.json',
  'audio/mpeg': '.mp3',
  'audio/ogg': '.ogg',
  'audio/wav': '.wav',
  'font/otf': '.otf',
  'font/ttf': '.ttf',
  'font/woff': '.woff',
  'font/woff2': '.woff2',
  'image/gif': '.gif',
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/svg+xml': '.svg',
  'image/webp': '.webp',
  'video/mp4': '.mp4',
  'video/webm': '.webm',
};

const MIME_LABELS = {
  'application/json': 'JSON',
  'audio/mpeg': 'MP3',
  'audio/ogg': 'OGG',
  'audio/wav': 'WAV',
  'font/otf': 'OTF',
  'font/ttf': 'TTF',
  'font/woff': 'WOFF',
  'font/woff2': 'WOFF2',
  'image/gif': 'GIF',
  'image/jpeg': 'JPEG',
  'image/png': 'PNG',
  'image/svg+xml': 'SVG',
  'image/webp': 'WEBP',
  'video/mp4': 'MP4',
  'video/webm': 'WEBM',
};

function fail(message) {
  throw new Error(message);
}

function parseArgs(argv) {
  const options = { sourceDir: '', metadataPath: '' };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--metadata' || arg === '-m') {
      options.metadataPath = argv[index + 1] || '';
      index += 1;
      continue;
    }

    if (arg.startsWith('-')) {
      fail(`Unknown option: ${arg}`);
    }

    if (options.sourceDir) {
      fail(`Unexpected argument: ${arg}`);
    }

    options.sourceDir = arg;
  }

  if (!options.sourceDir) {
    fail('Usage: bun run asset-store:import -- <package-directory> --metadata <store-metadata.yaml>');
  }

  if (!options.metadataPath) {
    fail('Store metadata is required. Pass --metadata <store-metadata.yaml>.');
  }

  return options;
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`Could not read JSON from ${filePath}: ${error.message}`);
  }
}

function readYaml(filePath) {
  try {
    return yaml.load(fs.readFileSync(filePath, 'utf8'), { schema: yaml.JSON_SCHEMA });
  } catch (error) {
    fail(`Could not read YAML from ${filePath}: ${error.message}`);
  }
}

function slugify(value) {
  return String(value ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleCase(value) {
  return String(value)
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    fail(`Invalid date: ${value}. Use YYYY-MM-DD.`);
  }

  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(date);
}

function formatDuration(value) {
  const duration = Number(value);

  if (!Number.isFinite(duration) || duration < 0) {
    return 'Not specified';
  }

  const totalSeconds = Math.round(duration);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function formatDefaultValue(value) {
  if (value === undefined) {
    return 'Not specified';
  }

  if (typeof value === 'string') {
    return value === '' ? '""' : value;
  }

  const serializedValue = JSON.stringify(value);
  return serializedValue === undefined ? String(value) : serializedValue;
}

function formatControlBindings(item) {
  const actionLabels = {
    nextLine: 'Next Line',
    startSkipMode: 'Start Skip Mode',
    stopSkipMode: 'Stop Skip Mode',
    toggleDialogueUI: 'Toggle Dialogue Box Visibility',
  };
  const keyOrder = ['enter', 'space', 'ctrl'];
  const eventGroups = [
    ['Keydown', item.keyboard],
    ['Keyup', item.keyup],
  ];

  return eventGroups.flatMap(([event, keyboard]) => {
    const bindings = Object.entries(keyboard ?? {})
      .sort(([firstKey], [secondKey]) => {
        const firstIndex = keyOrder.indexOf(firstKey);
        const secondIndex = keyOrder.indexOf(secondKey);
        const firstRank = firstIndex === -1 ? keyOrder.length : firstIndex;
        const secondRank = secondIndex === -1 ? keyOrder.length : secondIndex;
        return firstRank - secondRank || firstKey.localeCompare(secondKey);
      })
      .flatMap(([key, binding]) => Object.keys(binding?.payload?.actions ?? {}).map((action) => ({
        action: actionLabels[action] || titleCase(action),
        key: titleCase(key),
      })));

    return bindings.length > 0 ? [{ event, bindings }] : [];
  });
}

function ensureInside(parentPath, childPath, label) {
  const relative = path.relative(parentPath, childPath);

  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    fail(`${label} resolves outside its allowed directory.`);
  }
}

function safeOutputFileName(fileId, extension) {
  if (
    typeof fileId !== 'string'
    || fileId.length === 0
    || fileId === '.'
    || fileId === '..'
    || fileId.includes('..')
    || fileId.includes('/')
    || fileId.includes('\\')
    || fileId.includes('\0')
  ) {
    fail(`File id ${JSON.stringify(fileId)} is not safe for use as an output file name.`);
  }

  return fileId.toLowerCase().endsWith(extension) ? fileId : `${fileId}${extension}`;
}

function sha256(filePath) {
  return createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function readPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  const signature = '89504e470d0a1a0a';

  if (buffer.length < 24 || buffer.subarray(0, 8).toString('hex') !== signature) {
    return null;
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function readJpegDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);

  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    return null;
  }

  let offset = 2;
  while (offset + 8 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    const isStartOfFrame = marker >= 0xc0 && marker <= 0xc3;

    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    if (length < 2) {
      break;
    }

    offset += length + 2;
  }

  return null;
}

function readDimensions(filePath, mimeType) {
  if (mimeType === 'image/png') {
    return readPngDimensions(filePath);
  }

  if (mimeType === 'image/jpeg') {
    return readJpegDimensions(filePath);
  }

  return null;
}

function countCharacterSprites(character) {
  return Object.values(character?.sprites?.items ?? {})
    .filter((item) => item?.type !== 'folder' && item?.fileId)
    .length;
}

function defaultDescription(item, repositoryKey) {
  if (item.description) {
    return item.description;
  }

  if (repositoryKey === 'characters') {
    const count = countCharacterSprites(item);
    return `${item.name} character with ${count} ${count === 1 ? 'sprite' : 'sprites'}.`;
  }

  return `${item.name} ${titleCase(item.type || repositoryKey).toLowerCase()}.`;
}

function validateMetadata(metadata) {
  const slug = slugify(metadata?.slug);

  if (!slug || slug !== metadata.slug) {
    fail('metadata.slug must be a lowercase URL slug such as "city-backgrounds".');
  }

  for (const key of ['released', 'updated', 'coverAssetId']) {
    if (!metadata?.[key]) {
      fail(`metadata.${key} is required.`);
    }
  }

  if (!metadata?.author?.name || !metadata?.author?.slug || !metadata?.author?.avatarSrc) {
    fail('metadata.author requires name, slug, and avatarSrc.');
  }

  formatDate(metadata.released);
  formatDate(metadata.updated);
}

function validateManifest(manifest) {
  if (manifest?.schema !== SUPPORTED_SCHEMA) {
    fail(`Unsupported package schema: ${manifest?.schema || 'missing'}. Expected ${SUPPORTED_SCHEMA}.`);
  }

  const hasLegacyPackageMetadata = manifest?.package?.id
    && manifest.package.name
    && manifest.package.version;
  const hasCurrentPackageKind = manifest?.package?.kind === ASSET_PACKAGE_KIND;

  if (!hasLegacyPackageMetadata && !hasCurrentPackageKind) {
    fail('asset-package.json requires package.kind or the legacy package id, name, and version fields.');
  }

  if (!manifest?.repository?.files?.items || typeof manifest.repository.files.items !== 'object') {
    fail('asset-package.json requires repository.files.items.');
  }
}

function validateAndDescribeFiles(sourceDir, files) {
  const describedFiles = {};
  const outputFileNames = new Map();

  for (const [fileId, file] of Object.entries(files)) {
    if (file.id !== fileId) {
      fail(`File key ${fileId} does not match its id ${file.id}.`);
    }

    const extension = MIME_EXTENSIONS[file.mimeType];
    if (!extension) {
      fail(`Unsupported MIME type for ${fileId}: ${file.mimeType}.`);
    }

    if (!file?.source?.url) {
      fail(`File ${fileId} is missing source.url.`);
    }

    const sourcePath = path.resolve(sourceDir, file.source.url);
    ensureInside(sourceDir, sourcePath, `File ${fileId}`);

    if (!fs.existsSync(sourcePath) || !fs.statSync(sourcePath).isFile()) {
      fail(`File ${fileId} does not exist at ${sourcePath}.`);
    }

    const actualSize = fs.statSync(sourcePath).size;
    if (file.size !== actualSize) {
      fail(`File ${fileId} has size ${actualSize}; asset-package.json declares ${file.size}.`);
    }

    const actualHash = sha256(sourcePath);
    if (file.sha256 && file.sha256 !== actualHash) {
      fail(`File ${fileId} failed SHA-256 validation.`);
    }

    const fileName = safeOutputFileName(fileId, extension);
    const normalizedFileName = fileName.toLowerCase();
    const collidingFileId = outputFileNames.get(normalizedFileName);

    if (collidingFileId) {
      fail(`Files ${collidingFileId} and ${fileId} resolve to the same output file name.`);
    }

    outputFileNames.set(normalizedFileName, fileId);
    describedFiles[fileId] = {
      ...file,
      extension,
      fileName,
      sha256: actualHash,
      sourcePath,
      dimensions: readDimensions(sourcePath, file.mimeType),
    };
  }

  return describedFiles;
}

function validateProjectOwnedReferences(value, pathParts = ['repository']) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => validateProjectOwnedReferences(item, [...pathParts, String(index)]));
    return;
  }

  if (!value || typeof value !== 'object') {
    return;
  }

  for (const [key, childValue] of Object.entries(value)) {
    const childPath = [...pathParts, key];

    if (PROJECT_REFERENCE_KEYS.has(key)) {
      fail(`${childPath.join('.')} contains project-owned reference ${key}, which asset packages cannot import.`);
    }

    validateProjectOwnedReferences(childValue, childPath);
  }
}

function validateFileReferences(value, files, pathParts = ['repository']) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => validateFileReferences(item, files, [...pathParts, String(index)]));
    return;
  }

  if (!value || typeof value !== 'object') {
    return;
  }

  for (const [key, childValue] of Object.entries(value)) {
    if ((key === 'fileId' || key.endsWith('FileId')) && typeof childValue === 'string') {
      if (!files[childValue]) {
        fail(`${[...pathParts, key].join('.')} references missing file ${childValue}.`);
      }
      continue;
    }

    validateFileReferences(childValue, files, [...pathParts, key]);
  }
}

function createGeneratedThumbnail(item, repositoryKey, previewFile, outputDir) {
  const mediaType = previewFile?.mimeType?.split('/')[0];
  const dimensions = previewFile?.dimensions ?? {};
  const needsThumbnail = mediaType === 'video'
    || (mediaType === 'image' && (
      dimensions.width > 480
      || dimensions.height > 300
      || previewFile.size > 200_000
    ));

  if (!needsThumbnail) {
    return null;
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const baseName = slugify(`${repositoryKey}-${item.id}`) || 'asset';
  const fileName = `${baseName}-${previewFile.sha256.slice(0, 12)}.thumbnail.webp`;
  const outputPath = path.resolve(outputDir, fileName);
  ensureInside(outputDir, outputPath, `Generated thumbnail ${fileName}`);

  if (!fs.existsSync(outputPath) || fs.statSync(outputPath).size === 0) {
    const baseArgs = ['-loglevel', 'error', '-y'];
    const outputArgs = [
      '-vf',
      'scale=480:-2:force_original_aspect_ratio=decrease',
      '-frames:v',
      '1',
      '-c:v',
      'libwebp',
      '-quality',
      '75',
      outputPath,
    ];
    const runFfmpeg = (seek) => spawnSync('ffmpeg', [
      ...baseArgs,
      ...(seek ? ['-ss', '0.25'] : []),
      '-i',
      previewFile.sourcePath,
      ...outputArgs,
    ], { encoding: 'utf8' });
    let result = runFfmpeg(mediaType === 'video');

    if (result.status !== 0 && mediaType === 'video') {
      result = runFfmpeg(false);
    }

    if (result.status !== 0 || !fs.existsSync(outputPath) || fs.statSync(outputPath).size === 0) {
      fail(`Could not generate thumbnail for ${item.name || item.id}: ${result.stderr.trim()}`);
    }
  }

  return {
    fileName,
    mimeType: 'image/webp',
    sha256: sha256(outputPath),
    size: fs.statSync(outputPath).size,
    sourcePath: outputPath,
  };
}

function toGalleryAsset(
  item,
  repositoryKey,
  files,
  publicBasePath,
  objectFit = 'cover',
  thumbnailOutputDir = '',
) {
  const file = item.fileId ? files[item.fileId] : null;
  const dedicatedPreviewFileId = item.previewMediaFileId || item.previewFileId;
  const dedicatedPreviewFile = dedicatedPreviewFileId ? files[dedicatedPreviewFileId] : null;
  const thumbnailFileId = item.thumbnailMediaFileId || item.thumbnailFileId;
  const thumbnailFile = thumbnailFileId ? files[thumbnailFileId] : null;
  const isNativePreview = (candidate) => ['audio', 'image', 'video'].includes(
    candidate?.mimeType?.split('/')[0],
  );
  const sourceMediaType = file?.mimeType?.split('/')[0];
  const previewFile = sourceMediaType === 'audio'
    ? file
    : [dedicatedPreviewFile, file, thumbnailFile].find(isNativePreview) ?? null;
  const generatedThumbnail = !thumbnailFile && previewFile && thumbnailOutputDir
    ? createGeneratedThumbnail(item, repositoryKey, previewFile, thumbnailOutputDir)
    : null;
  const cardPreviewFile = [thumbnailFile, generatedThumbnail, dedicatedPreviewFile, previewFile].find((candidate) => {
    const mediaType = candidate?.mimeType?.split('/')[0];
    return mediaType === 'image' || mediaType === 'video';
  }) ?? null;
  const width = item.width || file?.dimensions?.width || previewFile?.dimensions?.width;
  const height = item.height || file?.dimensions?.height || previewFile?.dimensions?.height;
  const resolution = width && height ? `${width} × ${height}` : 'Not specified';
  const resourceLabel = titleCase(item.type || repositoryKey);
  const isVariable = item.type === 'variable';
  const isControl = item.type === 'control';
  const isTextStyle = repositoryKey === 'textStyles';
  const showVideoControls = repositoryKey === 'videos';

  return {
    id: item.id,
    name: item.name || titleCase(item.id),
    description: defaultDescription(item, repositoryKey),
    mediaType: previewFile?.mimeType?.split('/')[0] || 'resource',
    thumbnailMediaType: cardPreviewFile?.mimeType?.split('/')[0] || 'resource',
    format: file ? (MIME_LABELS[file.mimeType] || file.mimeType) : resourceLabel,
    resolution,
    duration: sourceMediaType === 'audio' ? formatDuration(item.duration) : '',
    variableScope: isVariable ? titleCase(item.scope || 'Not specified') : '',
    variableType: isVariable ? titleCase(item.variableType || 'Not specified') : '',
    defaultValue: isVariable ? formatDefaultValue(item.default) : '',
    controlBindings: isControl ? formatControlBindings(item) : [],
    showVideoControls,
    thumbnailAspectRatio: isTextStyle ? '32/9' : '16/10',
    dialogAspectRatio: isTextStyle ? '32/9' : '16/9',
    src: previewFile ? `${publicBasePath}/${previewFile.fileName}` : '',
    thumbnailSrc: cardPreviewFile
      ? `${publicBasePath}/${cardPreviewFile.fileName}`
      : '',
    placeholderLabel: resourceLabel,
    previewColor: item.hex || '',
    objectFit,
  };
}

function collectGroups(repositoryKey, repository, files, publicBasePath, thumbnailOutputDir) {
  const items = repository?.items ?? {};
  const groups = [];

  function visit(nodes, pathNames = []) {
    const directAssets = [];

    for (const node of nodes ?? []) {
      const item = items[node.id];
      if (!item) {
        fail(`${repositoryKey}.tree references missing item ${node.id}.`);
      }

      if (item.type === 'folder') {
        visit(node.children ?? [], [...pathNames, item.name]);
        continue;
      }

      directAssets.push(toGalleryAsset(
        item,
        repositoryKey,
        files,
        publicBasePath,
        'cover',
        thumbnailOutputDir,
      ));
    }

    if (directAssets.length > 0) {
      const name = pathNames.length > 0 ? pathNames.join(' / ') : titleCase(repositoryKey);
      groups.push({
        id: slugify(`${repositoryKey}-${name}`),
        name,
        assets: directAssets,
      });
    }
  }

  visit(repository?.tree ?? []);
  return groups;
}

function collectCharacterGroups(repository, files, publicBasePath, thumbnailOutputDir) {
  const characters = repository?.items ?? {};
  const groups = [];

  function normalizeSpriteFolderName(name) {
    return String(name || 'Default').replace(/\s+sprites$/i, '').trim() || 'Default';
  }

  function collectSpriteFolders(character) {
    const spriteItems = character?.sprites?.items ?? {};
    const folders = [];

    function visitSpriteNodes(nodes, pathNames = []) {
      const directAssets = [];
      const childFolders = [];

      for (const node of nodes ?? []) {
        const sprite = spriteItems[node.id];
        if (!sprite) {
          fail(`characters.${character.id}.sprites.tree references missing item ${node.id}.`);
        }

        if (sprite.type === 'folder') {
          childFolders.push({ node, sprite });
          continue;
        }

        if (sprite.fileId) {
          directAssets.push(toGalleryAsset(
            sprite,
            'sprites',
            files,
            publicBasePath,
            'contain',
            thumbnailOutputDir,
          ));
        }
      }

      if (directAssets.length > 0) {
        const name = pathNames.length > 0 ? pathNames.join(' / ') : 'Default';
        folders.push({
          id: slugify(`characters-${character.id}-${name}`),
          name,
          assets: directAssets,
        });
      }

      for (const childFolder of childFolders) {
        visitSpriteNodes(
          childFolder.node.children ?? [],
          [...pathNames, normalizeSpriteFolderName(childFolder.sprite.name)],
        );
      }
    }

    visitSpriteNodes(character?.sprites?.tree ?? []);
    return folders;
  }

  function visitCharacterNodes(nodes) {
    for (const node of nodes ?? []) {
      const character = characters[node.id];
      if (!character) {
        fail(`characters.tree references missing item ${node.id}.`);
      }

      if (character.type === 'folder') {
        visitCharacterNodes(node.children ?? []);
        continue;
      }

      if (character.type !== 'character') {
        continue;
      }

      const folders = collectSpriteFolders(character);
      if (folders.length === 0) {
        continue;
      }

      groups.push({
        id: slugify(`characters-${character.name}-${character.id}`),
        name: character.name || titleCase(character.id),
        avatarSrc: character.fileId
          ? `${publicBasePath}/${files[character.fileId].fileName}`
          : '',
        folders,
      });
    }
  }

  visitCharacterNodes(repository?.tree ?? []);
  return groups;
}

function buildSections(repository, files, publicBasePath, thumbnailOutputDir) {
  const sections = [];

  for (const [repositoryKey, repositoryValue] of Object.entries(repository)) {
    if (repositoryKey === 'files' || !repositoryValue?.items || !repositoryValue?.tree) {
      continue;
    }

    const groups = repositoryKey === 'characters'
      ? collectCharacterGroups(repositoryValue, files, publicBasePath, thumbnailOutputDir)
      : collectGroups(repositoryKey, repositoryValue, files, publicBasePath, thumbnailOutputDir);
    if (groups.length === 0) {
      continue;
    }

    sections.push({
      id: slugify(repositoryKey),
      name: titleCase(repositoryKey),
      groups,
    });
  }

  return sections;
}

function findAsset(sections, assetId) {
  for (const section of sections) {
    for (const group of section.groups) {
      const groupAssets = [
        ...(group.assets ?? []),
        ...(group.folders ?? []).flatMap((folder) => folder.assets ?? []),
      ];
      const asset = groupAssets.find((candidate) => candidate.id === assetId);
      if (asset) {
        return asset;
      }
    }
  }

  return null;
}

function writeTextFileIfChanged(outputPath, content) {
  if (fs.existsSync(outputPath) && fs.readFileSync(outputPath, 'utf8') === content) {
    return;
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content);
}

function copyFiles(files, outputDir) {
  fs.mkdirSync(outputDir, { recursive: true });

  for (const file of Object.values(files)) {
    const outputPath = path.resolve(outputDir, file.fileName);
    ensureInside(outputDir, outputPath, `Output file ${file.fileName}`);
    const alreadyMatches = fs.existsSync(outputPath)
      && fs.statSync(outputPath).size === file.size
      && sha256(outputPath) === file.sha256;

    if (!alreadyMatches) {
      fs.copyFileSync(file.sourcePath, outputPath);
    }
  }
}

function writePublicManifest(manifest, metadata, files, outputPath, publicBasePath) {
  const publicManifest = structuredClone(manifest);

  publicManifest.package.kind = ASSET_PACKAGE_KIND;
  publicManifest.package.id = metadata.packageId || manifest.package.id;
  publicManifest.package.name = metadata.name || manifest.package.name;
  publicManifest.package.version = metadata.version || manifest.package.version || '1.0.0';
  publicManifest.package.description = metadata.description || manifest.package.description || '';

  for (const [fileId, file] of Object.entries(publicManifest.repository.files.items)) {
    file.source.url = `${publicBasePath}/${files[fileId].fileName}`;
    file.sha256 = files[fileId].sha256;
  }

  writeTextFileIfChanged(outputPath, `${JSON.stringify(publicManifest, null, 2)}\n`);
}

function writePage(pack, outputPath) {
  const frontmatter = {
    template: 'creator',
    title: `${pack.name} - RouteVN Creator Asset Store`,
    tags: ['assetPack'],
    disableFooterSpacer: true,
    seo: {
      title: `${pack.name} - RouteVN Creator Asset Store`,
      description: pack.description,
    },
    assetPack: pack,
  };
  const yamlText = yaml.dump(frontmatter, {
    lineWidth: -1,
    noRefs: true,
    sortKeys: false,
  });
  const body = '- $partial: asset-store/pack\n  pack: ${assetPack}\n';

  writeTextFileIfChanged(outputPath, `---\n${yamlText}---\n${body}`);
}

function publishStagedOutputs(outputs, backupRoot) {
  const published = [];
  fs.mkdirSync(backupRoot, { recursive: true });

  try {
    outputs.forEach(({ stagedPath, targetPath }, index) => {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      const backupPath = path.join(backupRoot, String(index));
      const hadExistingTarget = fs.existsSync(targetPath);

      if (hadExistingTarget) {
        fs.renameSync(targetPath, backupPath);
      }

      try {
        fs.renameSync(stagedPath, targetPath);
      } catch (error) {
        if (hadExistingTarget && fs.existsSync(backupPath)) {
          fs.renameSync(backupPath, targetPath);
        }
        throw error;
      }

      published.push({ backupPath, hadExistingTarget, targetPath });
    });
  } catch (error) {
    for (const output of published.reverse()) {
      fs.rmSync(output.targetPath, { force: true, recursive: true });

      if (output.hadExistingTarget && fs.existsSync(output.backupPath)) {
        fs.renameSync(output.backupPath, output.targetPath);
      }
    }

    throw error;
  }
}

function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const args = parseArgs(process.argv.slice(2));
  const sourceDir = path.resolve(args.sourceDir);
  const metadataPath = path.resolve(args.metadataPath);
  const manifestPath = path.join(sourceDir, 'asset-package.json');

  if (!fs.existsSync(manifestPath)) {
    fail(`No asset-package.json found in ${sourceDir}.`);
  }

  const manifest = readJson(manifestPath);
  const metadata = readYaml(metadataPath);
  validateManifest(manifest);
  validateMetadata(metadata);

  const files = validateAndDescribeFiles(sourceDir, manifest.repository.files.items);
  validateFileReferences(manifest.repository, files);
  validateProjectOwnedReferences(manifest.repository);
  const publicBasePath = `/public/creator/asset-store/${metadata.slug}/files`;
  const staticFilesDir = path.join(
    repoRoot,
    'static',
    'public',
    'creator',
    'asset-store',
    metadata.slug,
    'files',
  );
  const publicManifestPath = path.join(
    repoRoot,
    'static',
    'en',
    'creator',
    'asset-store',
    `${metadata.slug}.json`,
  );
  const pagePath = path.join(
    repoRoot,
    'pages',
    'en',
    'creator',
    'asset-store',
    `${metadata.slug}.yaml`,
  );
  const stagingRoot = fs.mkdtempSync(path.join(repoRoot, '.asset-store-import-'));
  const stagedStaticFilesDir = path.join(stagingRoot, 'files');
  const stagedPublicManifestPath = path.join(stagingRoot, 'manifest.json');
  const stagedPagePath = path.join(stagingRoot, 'page.yaml');

  try {
    const sections = buildSections(
      manifest.repository,
      files,
      publicBasePath,
      stagedStaticFilesDir,
    );
    const coverAsset = findAsset(sections, metadata.coverAssetId);

    if (!coverAsset) {
      fail(`coverAssetId ${metadata.coverAssetId} is not a displayable package asset.`);
    }

    const assetCount = sections.reduce(
      (sectionTotal, section) => sectionTotal + section.groups.reduce(
        (groupTotal, group) => groupTotal
          + (group.assets?.length ?? 0)
          + (group.folders ?? []).reduce(
            (folderTotal, folder) => folderTotal + (folder.assets?.length ?? 0),
            0,
          ),
          0,
        ),
      0,
    );
    const pageUrl = `/en/creator/asset-store/${metadata.slug}/`;
    const packageId = metadata.packageId || manifest.package.id;
    const pack = {
      slug: metadata.slug,
      packageId,
      name: metadata.name || manifest.package.name,
      version: metadata.version || manifest.package.version || '1.0.0',
      description: metadata.description || manifest.package.description || '',
      url: pageUrl,
      importUrl: `${pageUrl.replace(/\/$/, '')}.json`,
      assetCount,
      coverSrc: metadata.coverSrc || coverAsset.src,
      coverThumbnailSrc: metadata.coverThumbnailSrc || metadata.coverSrc || coverAsset.thumbnailSrc,
      coverWidth: metadata.coverWidth || null,
      author: metadata.author,
      released: metadata.released,
      releasedLabel: formatDate(metadata.released),
      updated: metadata.updated,
      updatedLabel: formatDate(metadata.updated),
      sections,
    };

    copyFiles(files, stagedStaticFilesDir);
    writePublicManifest(
      manifest,
      metadata,
      files,
      stagedPublicManifestPath,
      publicBasePath,
    );
    writePage(pack, stagedPagePath);
    publishStagedOutputs([
      { stagedPath: stagedStaticFilesDir, targetPath: staticFilesDir },
      { stagedPath: stagedPublicManifestPath, targetPath: publicManifestPath },
      { stagedPath: stagedPagePath, targetPath: pagePath },
    ], path.join(stagingRoot, 'backups'));

    console.log(`Imported ${pack.name} (${assetCount} assets, ${Object.keys(files).length} files).`);
    console.log(`Page data: ${path.relative(repoRoot, pagePath)}`);
    console.log(`Import manifest: ${path.relative(repoRoot, publicManifestPath)}`);
    console.log(`Static files: ${path.relative(repoRoot, staticFilesDir)}`);
  } finally {
    fs.rmSync(stagingRoot, { force: true, recursive: true });
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    console.error(`Asset package import failed: ${error.message}`);
    process.exitCode = 1;
  }
}

export {
  publishStagedOutputs,
  safeOutputFileName,
  validateProjectOwnedReferences,
};
