---
template: documentation
url: /en/web-extractor/docs/
_bind:
  docs: webExtractorDocs
title: Getting Started
seo:
  title: "Getting Started | RouteVN Web Extractor Docs"
  description: "Set up RouteVN Web Extractor in Chrome, install a dictionary, and look up your first word in a supported web visual novel."
sidebarId: getting-started
---

RouteVN Web Extractor is a browser extension that captures dialogue from supported web visual novels and shows word definitions as you read. This guide covers setup in desktop Chrome.

## Install the extension

1. Open [RouteVN Web Extractor in the Chrome Web Store](https://chromewebstore.google.com/detail/routevn-web-extractor/mmaeimemigaiffcbhaaplmgkoimijcik).
2. Select **Add to Chrome**.
3. Review the permissions and select **Add extension**.
4. Open Chrome's **Extensions** menu in the toolbar.
5. Pin **RouteVN Web Extractor** for quick access.

## Install a dictionary

The setup page opens after installation. To open it again:

1. Click the RouteVN Web Extractor icon in Chrome's toolbar.
2. Select **Languages & dictionaries**.

- **Reading language** is the language of the visual novel: Japanese or English.
- **Definition language** is the language used to explain words. Available choices depend on the reading language.

For Japanese dialogue with English definitions, choose **Japanese** for reading and **English** for definitions.

1. Choose your **Reading language**.
2. Choose your **Definition language**. The language you want word meanings displayed in.
3. Select **Install Japanese Dictionary** or **Install English Dictionary**, depending on your choice.
4. Keep the setup page open while the dictionary downloads and installs. This step requires an internet connection.
5. Wait for the completion message, then select the **Start Reading** button to open the suggested platform.

For download errors, see [Dictionary download fails](#dictionary-download-fails). After setup, you can [download more dictionaries](/en/web-extractor/docs/using-the-dictionary/#add-or-change-dictionaries), [rearrange dictionary order](/en/web-extractor/docs/using-the-dictionary/#rearrange-dictionary-order), or [install Japanese pitch accent](/en/web-extractor/docs/using-the-dictionary/#install-japanese-pitch-accent).

## Look up your first word

The extension supports browser games built with RouteVN, Ren'Py, or TyranoScript. Some edge cases may prevent dialogue extraction. Text that is part of an image cannot be extracted.

1. Open a browser-playable visual novel on [novelgame.jp](https://novelgame.jp/) or [itch.io](https://itch.io/games/tag-visual-novel).
2. Reload the game page if it was already open when you installed the extension.
3. Start the game and advance until dialogue appears.
4. Hover over a word in the dialogue overlay to show its definition.

<img src="/public/reader/web-extractor/screenshots/first-word.png" alt="A Japanese word highlighted in visual novel dialogue with its dictionary definition open." width="1683" height="944" loading="lazy" style="width: 1683px; display: block; max-width: 100%; height: auto; margin: 24px auto;">

See [Using the Dictionary](/en/web-extractor/docs/using-the-dictionary/) to review earlier dialogue, change lookup controls, or add dictionaries.

## Save vocabulary to Anki (optional)

Anki is a flashcard app. The AnkiConnect add-on lets the extension save words and sentences to desktop Anki. Dictionary lookup works without it.

To connect Anki, follow [Set Up Anki](/en/web-extractor/docs/anki-setup/).

## Troubleshooting

### Dictionary download fails

1. Check your internet connection.
2. Select **Retry Download** on the setup page.

### No dialogue appears

- **Extension Enabled** must be on in the extension popup.
- A game opened before installation needs a page reload. Dialogue is captured as you advance through the game.
- The game must run in your browser and use a supported engine.

### No definition appears

- A dictionary must be installed. See [Install a dictionary](#install-a-dictionary) if you skipped setup.
- In [Settings](/en/web-extractor/docs/using-the-dictionary/#open-settings), **Reading language** must match the game, and a matching dictionary must be enabled under **Installed dictionaries**.
- **Look up words** determines whether hovering requires a key. For **Shift + Hover**, hold Shift while hovering.
- Dictionaries may not contain every name or expression.

## Need help?

[Contact us](/en/contact/) with the game's URL, your browser version, the setup step that failed, and any error message.
