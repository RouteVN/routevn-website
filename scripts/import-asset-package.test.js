import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  publishStagedOutputs,
  safeOutputFileName,
  validateProjectOwnedReferences,
} from './import-asset-package.js';

test('safeOutputFileName rejects path traversal and separators', () => {
  for (const fileId of ['../package.json', '..', 'folder/file', 'folder\\file', 'file..json']) {
    assert.throws(
      () => safeOutputFileName(fileId, '.json'),
      /not safe for use as an output file name/,
    );
  }

  assert.equal(safeOutputFileName('preview', '.png'), 'preview.png');
  assert.equal(safeOutputFileName('preview.png', '.png'), 'preview.png');
});

test('validateProjectOwnedReferences rejects project-only IDs', () => {
  for (const key of ['lineId', 'sceneId', 'sectionId']) {
    assert.throws(
      () => validateProjectOwnedReferences({ action: { [key]: 'project-owned-id' } }),
      new RegExp(`project-owned reference ${key}`),
    );
  }

  assert.doesNotThrow(() => validateProjectOwnedReferences({ action: { resourceId: 'asset-id' } }));
});

test('publishStagedOutputs restores prior outputs when a later publish fails', () => {
  const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'routevn-asset-import-test-'));

  try {
    const stagedFirst = path.join(temporaryRoot, 'staged-first');
    const stagedSecond = path.join(temporaryRoot, 'staged-second');
    const targetFirst = path.join(temporaryRoot, 'published-first');
    const blockedParent = path.join(temporaryRoot, 'blocked-parent');
    const targetSecond = path.join(blockedParent, 'published-second');
    const backupRoot = path.join(temporaryRoot, 'backups');

    fs.writeFileSync(stagedFirst, 'new first');
    fs.writeFileSync(stagedSecond, 'new second');
    fs.writeFileSync(targetFirst, 'old first');
    fs.writeFileSync(blockedParent, 'not a directory');

    assert.throws(() => publishStagedOutputs([
      { stagedPath: stagedFirst, targetPath: targetFirst },
      { stagedPath: stagedSecond, targetPath: targetSecond },
    ], backupRoot));
    assert.equal(fs.readFileSync(targetFirst, 'utf8'), 'old first');
  } finally {
    fs.rmSync(temporaryRoot, { force: true, recursive: true });
  }
});
