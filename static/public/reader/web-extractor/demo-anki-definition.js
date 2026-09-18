// Unmodified formatter from production AnkiService (MIT).
export function formatMainDefinitionHtml(
    meanings,
    pos,
    source = "Dictionary",
    examples = [],
    attribution,
    sourceUrls = [],
    pitchCredits = ""
  ) {
    const escape = globalThis.__MasshiroAttribution.escapeHtml;
    const list = (Array.isArray(meanings) ? meanings : [meanings].filter(Boolean)).map(escape);
    const suppliedTags = (Array.isArray(pos) ? pos : [pos]).filter(
      (tag) => typeof tag === "string" && tag.trim()
    );
    const labels = suppliedTags.length
      ? globalThis.__MasshiroAttribution
          .normalizeDefinitionTags(suppliedTags)
          .filter((label) => !/^sense \d+$/.test(label))
      : [];
    const posStr = escape(labels.map(globalThis.__MasshiroAttribution.compactDefinitionTag).join(", "));
    const posTitle = escape(labels.join(", "));
    const sourceTitle = escape(attribution?.title || source);
    const credits = globalThis.__MasshiroAttribution.renderAttribution(
      { source, attribution, sourceUrls },
      false
    );
    if (list.length === 0) return "";

    let exampleBlock = "";
    if (Array.isArray(examples) && examples.length > 0) {
      const ex = examples[0];
      const exJp = globalThis.__MasshiroAttribution.renderExampleJapanese(ex);
      const exEn = escape(ex.english || "");
      if (exJp) {
        exampleBlock = `
          <div style="margin-top: 14px; padding-inline-start: 12px; border-inline-start: 2px solid rgba(128,128,128,0.35); font-size: 0.9em; line-height: 1.6;">
            <div lang="ja">${exJp}</div>
            ${exEn ? `<div dir="auto" style="font-size: 0.9em; margin-top: 4px; opacity: 0.8;">${exEn}</div>` : ""}
            ${ex.source ? `<div style="font-size: 0.8em; margin-top: 6px; opacity: 0.75;">Example: ${escape(ex.source)}</div>` : ""}
          </div>
        `.trim();
      }
    }

    return `<div class="yomitan-glossary masshiro-anki-definition" style="text-align: start; color: inherit; font-weight: normal; overflow-wrap: anywhere;">
      <style>
        .main-def > .definition:has(.masshiro-anki-definition) {
          width: auto;
          --masshiro-anki-background: transparent;
          --masshiro-anki-border: 0;
          --masshiro-anki-padding: 0;
        }
      </style>
      <ol style="list-style: none; margin: 0; padding: 0;">
        <li data-dictionary="${sourceTitle}" style="list-style: none; margin: 0; padding: var(--masshiro-anki-padding, 14px 16px); background: var(--masshiro-anki-background, rgba(128,128,128,0.06)); border-inline-start: var(--masshiro-anki-border, 2px solid rgba(128,128,128,0.35)); border-radius: 4px;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; margin-bottom: 10px; font-size: 0.75em; line-height: 1.5;">
            <span style="opacity: 0.75;">${sourceTitle}</span>
            ${posStr ? `<span title="${posTitle}" style="padding: 1px 6px; border: 1px solid rgba(128,128,128,0.35); border-radius: 4px;">${posStr}</span>` : ""}
          </div>
          <div dir="auto" style="font-size: 1.05em; line-height: 1.6;">${list.map((meaning) => `<div>${meaning}</div>`).join("")}</div>
          ${exampleBlock}
          <details style="margin-top: 14px; padding-top: 8px; border-top: 1px solid rgba(128,128,128,0.25); font-size: 0.75em; line-height: 1.65;">
            <summary style="cursor: pointer; padding: 4px 0; opacity: 0.75;">Sources &amp; licenses</summary>
            <div style="padding-top: 8px;">${credits}${pitchCredits}</div>
          </details>
        </li>
      </ol>
    </div>`;
  }
