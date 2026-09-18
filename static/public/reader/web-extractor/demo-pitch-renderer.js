/** Japanese pronunciation data shared by the worker and classic content scripts. */
(() => {
  function readingKey(reading) {
    if (typeof reading !== "string" || !reading || reading.length > 128) return "";
    const normalized = reading
      .normalize("NFKC")
      .replace(/[ァ-ヶ]/g, (c) => String.fromCodePoint(c.codePointAt(0) - 0x60));
    return /^[ぁ-ゖー]+$/u.test(normalized) ? normalized : "";
  }

  function morae(reading) {
    const normalized = readingKey(reading);
    const result = [];
    for (const kana of normalized) {
      if (/[ぁぃぅぇぉゃゅょゎ]/u.test(kana) && result.length) result[result.length - 1] += kana;
      else result.push(kana);
    }
    return result;
  }

  function parseRecord(row, tags = new Map()) {
    const invalid = () => {
      throw new Error("Invalid dictionary pitch record");
    };
    if (
      !Array.isArray(row) ||
      row.length !== 3 ||
      typeof row[0] !== "string" ||
      !row[0] ||
      row[0].length > 4096
    )
      invalid();
    const data = row[2];
    const count = morae(data?.reading).length;
    if (!count || !Array.isArray(data.pitches) || !data.pitches.length || data.pitches.length > 128)
      invalid();
    const positions = (value) => {
      const values = value === undefined ? [] : Array.isArray(value) ? value : [value];
      if (values.length > 128 || values.some((n) => !Number.isInteger(n) || n < 0 || n > count)) invalid();
      return [...new Set(values.filter((n) => n > 0))].sort((a, b) => a - b);
    };
    const patterns = data.pitches.map((pattern) => {
      const position = pattern?.position;
      if (
        !(Number.isInteger(position) && position >= 0 && position <= count) &&
        !(
          typeof position === "string" &&
          /^[HL]+$/.test(position) &&
          [count, count + 1].includes(position.length)
        )
      )
        invalid();
      const labels = pattern.tags ?? [];
      if (
        !Array.isArray(labels) ||
        labels.length > 64 ||
        labels.some((tag) => typeof tag !== "string" || tag.length > 256)
      )
        invalid();
      return {
        position,
        tags: [...new Set(labels.map((tag) => tags.get(tag) || tag))],
        nasalPositions: positions(pattern.nasal),
        devoicePositions: positions(pattern.devoice),
      };
    });
    return { term: row[0], reading: data.reading, patterns };
  }
  function contour(count, position) {
    if (typeof position === "string") return position;
    const levels = [];
    for (let i = 0; i <= count; i++) {
      const high = position === 0 ? i > 0 : position === 1 ? i === 0 : i > 0 && i < position;
      levels.push(high ? "H" : "L");
    }
    return levels.join("");
  }

  let disclosureId = 0;
  function render(definitions = [], shown = true) {
    const { escapeHtml: escape, renderAttribution } = globalThis.__MasshiroAttribution;
    const groups = new Map();
    for (const definition of definitions) {
      for (const source of definition.pronunciations || []) {
        if (source.type !== "japanese-pitch-accent" || source.language !== "ja") continue;
        try {
          const normalized = parseRecord([
            source.term,
            "pitch",
            {
              reading: source.reading,
              pitches: source.patterns.map((p) => ({
                position: p.position,
                tags: p.tags,
                nasal: p.nasalPositions,
                devoice: p.devoicePositions,
              })),
            },
          ]);
          const key = JSON.stringify([source.dictionaryId, source.term, source.reading, normalized.patterns]);
          if (!groups.has(key))
            groups.set(key, {
              ...source,
              ...normalized,
              inflected: Boolean(definition.deinflectionReasons?.length),
            });
        } catch {
          /* Old or invalid external data must not break a definition card. */
        }
      }
    }
    if (!groups.size) return "";
    const id = `masshiro-pitch-details-${++disclosureId}`;
    let compact = "";
    const patternCount = [...groups.values()].reduce((count, group) => count + group.patterns.length, 0);
    const html = [...groups.values()]
      .map((source, groupIndex) => {
        const units = morae(source.reading);
        const patternMarkup = (pattern, graph) => {
          const levels = contour(units.length, pattern.position);
          const description =
            typeof pattern.position === "number"
              ? pattern.position === 0
                ? "No downstep"
                : `Downstep after mora ${pattern.position}`
              : `Pitch levels: ${levels
                  .split("")
                  .map((level) => (level === "H" ? "high" : "low"))
                  .join(
                    ", "
                  )}${levels.length === units.length ? "; following mora unknown" : "; final level is the following mora"}`;
          const kana = units
            .map(
              (unit, i) =>
                `<span class="masshiro-pitch-mora" data-high="${levels[i] === "H"}" data-drop="${levels[i] === "H" && levels[i + 1] === "L"}">${escape(unit)}</span>`
            )
            .join("");
          const annotations = [
            pattern.tags.join(" · "),
            pattern.nasalPositions.length ? `Nasal morae: ${pattern.nasalPositions.join(", ")}` : "",
            pattern.devoicePositions.length ? `Devoiced morae: ${pattern.devoicePositions.join(", ")}` : "",
          ].filter(Boolean);
          const mini = graph === "mini";
          const points = [...levels].map((level, i) => `${16 + i * 30},${level === "H" ? 12 : 36}`);
          const svg = graph
            ? `<svg class="masshiro-pitch-graph${mini ? " masshiro-pitch-mini" : ""}" viewBox="0 0 ${levels.length * 30 + 2} ${mini ? 48 : 66}" aria-hidden="true" focusable="false"><polyline points="${points.slice(0, units.length).join(" ")}"/>${levels.length > units.length ? `<polyline class="masshiro-pitch-tail" points="${points.slice(-2).join(" ")}"/>` : ""}${points
                .map((point, i) => {
                  const [x, y] = point.split(",");
                  return `<circle cx="${x}" cy="${y}" r="3" class="${i === units.length ? "masshiro-pitch-following" : ""}"/>${!mini && i < units.length ? `<text x="${x}" y="58">${escape(units[i])}</text>` : ""}`;
                })
                .join("")}</svg>`
            : "";
          return `<span class="masshiro-pitch-pattern" data-levels="${levels}"><span class="masshiro-pitch-notation" lang="ja" aria-hidden="true">${kana}</span> <span aria-label="${escape(description)}">[${escape(pattern.position)}]</span>${graph && !mini ? `<span class="masshiro-pitch-description">${escape(description)}</span>` : ""}${svg}${!mini && annotations.length ? `<span class="masshiro-pitch-description">${escape(annotations.join(" · "))}</span>` : ""}</span>`;
        };
        if (groupIndex === 0)
          compact = `${source.inflected ? `<span class="masshiro-pitch-base">${escape(source.term)} · </span>` : ""}${patternMarkup(source.patterns[0], "mini")}${patternCount > 1 ? `<span class="masshiro-pitch-more">+${patternCount - 1}</span>` : ""}`;
        return `<div class="masshiro-pitch-group"><div class="masshiro-pitch-heading">${source.inflected ? "Dictionary form: " : ""}<span lang="ja">${escape(source.term)}・${escape(source.reading)}</span> <span class="masshiro-pitch-source">${escape(source.source || "Pitch dictionary")}</span></div>${source.patterns.map((pattern) => patternMarkup(pattern, true)).join("")}${renderAttribution(source)}</div>`;
      })
      .join("");
    const first = groups.values().next().value;
    const position = first.patterns[0].position;
    const accessiblePitch =
      position === 0
        ? "no downstep"
        : typeof position === "number"
          ? `downstep after mora ${position}`
          : `pitch levels ${position}; ${position.length === morae(first.reading).length ? "following mora unknown" : "includes following mora"}`;
    return `<section class="masshiro-pitch masshiro-pitch-summary" ${shown ? "" : "hidden"} aria-label="Japanese pitch accent"><button type="button" class="masshiro-pitch-toggle" aria-label="${escape(`${first.inflected ? "Dictionary form " : ""}${first.term}, ${first.reading}: ${accessiblePitch}. Show pitch details`)}${patternCount > 1 ? `; ${patternCount} patterns` : ""}" aria-controls="${id}" aria-expanded="false">${compact}<span class="masshiro-pitch-chevron" aria-hidden="true"></span></button></section><section id="${id}" class="masshiro-pitch masshiro-pitch-details" hidden aria-label="Pitch details"><button type="button" class="masshiro-pitch-close">Hide pitch details</button>${html}</section>`;
  }

  function setVisible(root, shown) {
    const summary = root?.querySelector(".masshiro-pitch-summary");
    const details = root?.querySelector(".masshiro-pitch-details");
    if (!summary || !details) return;
    summary.hidden = !shown;
    details.hidden = !shown || summary.querySelector("button").getAttribute("aria-expanded") !== "true";
  }

  /** Mount the compact row under the headword and details after meanings/examples. */
  function mount(root) {
    const summary = root?.querySelector(".masshiro-pitch-summary");
    const details = root?.querySelector(".masshiro-pitch-details");
    const header = root?.querySelector(".masshiro-yomi-main-group");
    const body = root?.querySelector(".masshiro-yomi-body");
    if (!summary || !details || !header || !body) return;
    header.append(summary);
    body.append(details);
    const toggle = summary.querySelector("button");
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      setVisible(root, !summary.hidden);
      if (open) details.scrollIntoView({ block: "nearest" });
    });
    details.querySelector(".masshiro-pitch-close").addEventListener("click", (event) => {
      event.stopPropagation();
      toggle.setAttribute("aria-expanded", "false");
      setVisible(root, !summary.hidden);
      toggle.focus({ preventScroll: true });
    });
  }

  globalThis.__MasshiroPitch = {
    readingKey,
    morae,
    parseRecord,
    render,
    mount,
    setVisible,
    archiveSha256: "93617907a408b183a50c9e2c6c4ebcdfff3a689cd3aa47bab5914e65a5139e95",
  };
})();
