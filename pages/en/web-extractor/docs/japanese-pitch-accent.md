---
template: documentation
url: /en/web-extractor/docs/japanese-pitch-accent/
_bind:
  docs: webExtractorDocs
title: Japanese Pitch Accent
seo:
  title: "Japanese Pitch Accent | RouteVN Web Extractor Docs"
  description: "Install Japanese pitch accent data and view pronunciation patterns in RouteVN Web Extractor."
sidebarId: japanese-pitch-accent
---

## Install Japanese pitch accent

Pitch accent shows the high and low pitch pattern of a Japanese word. It is optional and is not installed during initial dictionary setup. The Kanjium pitch data is bundled with the extension and can be installed and used offline.

1. [Open Settings](/en/web-extractor/docs/using-the-dictionary/#open-settings).
2. Under **Dictionary & Language**, turn on **Japanese pitch accent**.
3. In the **Japanese pitch accent** dialog, select **Install**.
4. Wait for **Japanese pitch accent is enabled.** The dialog closes when installation succeeds.
5. Return to a Japanese game and look up a word. Pitch information appears when the installed data contains a matching word and reading.

<img src="/public/reader/web-extractor/screenshots/pitch-install.png" alt="Japanese pitch accent installation dialog with Install and Cancel buttons." width="380" height="720" loading="lazy" style="display: block; max-width: 100%; height: auto; margin: 24px auto;">

## Look up pitch accent

<img src="/public/reader/web-extractor/screenshots/pitch-accent.png" alt="Dictionary entry for 図書室 with its reading としょしつ and pitch accent graph." width="419" height="296" loading="lazy" style="display: block; max-width: 100%; height: auto; margin: 24px auto;">

If pitch data is already installed, turning on **Japanese pitch accent** enables it without opening the installation dialog. Keep a Japanese definition dictionary enabled as well: pitch data supplies pronunciation information, not word meanings.

## Troubleshooting

If no pitch information appears, check that **Japanese pitch accent** is on and a Japanese definition dictionary is enabled. Not every word and reading has a matching pitch record.

If installation fails, read the error in the dialog and select **Retry**. To hide pitch information later, turn off **Japanese pitch accent**; the installed data remains available to enable again.
