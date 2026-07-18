# Documentation Guidelines

## Scope

All documentation pages must live in:

- `pages/creator/docs`

## Objectives

- Help users understand RouteVN Creator quickly and safely.
- Define key terms and concepts clearly (RouteVN, RouteVN Creator, etc.).
- Explain how to use the app in practical terms, including where to find features.
- Guide users to do things step-by-step when needed.
- Point to support channels and changelog content when needed.
- Keep content discoverable for users who are new to the app.

## Writing style

- Be accurate and precise.
- Be useful first, not decorative.
- Use short, simple language.
- Keep each page skimmable: short paragraphs, clear headings, and short lists.
- Prefer high signal per sentence: include meaning, not fluff.
- Add examples where they reduce confusion.
- Include screenshots or image references when they materially improve clarity.
- Be concise: same information with fewer words is better.
- Present user flows as step by step instructions whenever you describe actions.

## Punctuation and list style

- End complete sentences in paragraphs with a period.
- Do not end headings with periods.
- End full-sentence bullets with a period.
- End instruction bullets with a period.
- Do not end short label bullets with a period.
- Do not end link or index bullets with a period when they are only labels or short fragments.
- Keep each list parallel. If one item needs sentence punctuation and another does not, rewrite the list so all items use the same structure.
- Use numbered lists only when order matters or when the user should follow a sequence.
- Use unnumbered bullets for unordered notes, options, references, or troubleshooting checks.

## Content quality checks

- Prefer real app terms over generic placeholders.
- Avoid vague statements and unverified claims.
- If a feature is advanced or hidden, explain where to find it.
- If behavior depends on something in the app, mention it directly and clearly.
- Keep links practical and relevant.
- When instructions must be followed in order, keep them ordered and numbered so users can follow without guessing.

## Release and changelog updates

When adding a new RouteVN Creator version, check each release-facing place that may need a version update:

- Add a changelog page in `pages/creator/changelog` using the existing release page format.
- Set the new changelog page `isLatest: true`.
- Set the previous latest changelog page `isLatest: false`.
- Update `creator.download.version` in `data/site.yaml` when the download page should show the new version.
- Update platform download URLs in `data/site.yaml` when new artifacts are available.
- Use the same static download base URL as the existing platform links unless the user gives a different base URL.
- URL-encode spaces in artifact URLs.
- Update `pages/creator/download.yaml` SEO text if platform availability changes.
- Run `bun run build`.
- Check the generated download page or build output for stale version text, missing buttons, or old placeholder text.
