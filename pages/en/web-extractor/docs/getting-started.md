---
template: documentation
url: /en/web-extractor/docs/getting-started/
_bind:
  docs: webExtractorDocs
title: Getting Started
seo:
  title: "Getting Started | RouteVN Web Extractor Docs"
  description: "Set up RouteVN Web Extractor in Chrome or Firefox, install a dictionary, and look up your first word in a supported web visual novel."
sidebarId: getting-started
---

RouteVN Web Extractor is a popup dictionary for web visual novels on [novelgame.jp](http://novelgame.jp) and [itch.io](https://itch.io/). It works on games made with RouteVN, Ren'Py, and TyranoScript. You can instantly lookup definitions by hovering over words. This guide will help you get started on Chrome and Firefox.

## Install the Extension

### Chrome

1. Open [RouteVN Web Extractor in the Chrome Web Store](https://chromewebstore.google.com/detail/routevn-web-extractor/mmaeimemigaiffcbhaaplmgkoimijcik).
2. Select **Add to Chrome**.
3. Review the permissions and select **Add extension**.
4. **Install** a dictionary (refer to the [Install a Dictionary](/en/web-extractor/docs/getting-started/#install-a-dictionary) section).
5. Open Chrome's Extensions menu in the toolbar.
6. Pin RouteVN Web Extractor for quick access.

### Firefox

1. Open [RouteVN Web Extractor on Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/routevn-web-extractor/).
2. Select **Add to Firefox**.
3. Review the permissions and confirm the installation.
4. **Install** a dictionary.
5. Open Firefox's Extensions menu to access RouteVN Web Extractor.

### Safari

Safari support is coming soon. We’ll add the installation link here when it’s available.

## Install a Dictionary

Before you can lookup words, you need to install a dictionary. Our onboarding will guide you through the process:

* **Reading language** is the language of the visual novel: Japanese or English.
* **Definition language** is the language used to explain words. Available choices depend on the reading language.

For Japanese dialogue with English definitions, choose Japanese for the reading language and English for the definition language. The default reading language is Japanese. The extension will automatically choose your definition language based on your browser preferences, but feel free to change it.

<img src="/public/reader/web-extractor/screenshots/onboarding.png" alt="Setup page with English definitions, Japanese reading, and the Install Japanese Dictionary button." width="1024" height="768" loading="lazy" style="display: block; max-width: 100%; height: auto; margin: 24px auto;">

1. Choose your **Reading language**.
2. Choose your **Definition language** for word meanings.
3. Select **Install Japanese Dictionary** or **Install English Dictionary**.
4. The extension will now download the required dictionary. Keep the setup page open while it downloads and installs.
5. Wait for the completion message, then select the **Start Reading**. This will redirect you to either itch.io or novelgame.jp depending on your reading language.

**Installation** may take a few minutes. The extension downloads the dictionary, unpacks its entries, and indexes them for local lookups. How long will depend on the dictionary size, your internet connection, and your device. This is a one-time setup for each dictionary.

For download errors, see [Dictionary Download Fails](/en/web-extractor/docs/getting-started/#dictionary-download-fails). After setup, you can [download more dictionaries](/en/web-extractor/docs/using-the-dictionary/#add-or-change-dictionaries), [rearrange the dictionary order](/en/web-extractor/docs/using-the-dictionary/#rearrange-dictionary-order), or [install Japanese pitch accent data](/en/web-extractor/docs/japanese-pitch-accent/).

## Look Up Your First Word

The extension supports web visual novels built with RouteVN, Ren’Py, and TyranoScript. We have engineered the extension to extract as much text as possible, but some edge cases may still prevent extraction, most notably text inside images.

1. Open a browser-playable visual novel on [novelgame.jp](http://novelgame.jp) or [itch.io](https://itch.io).
2. Reload the game page if it was already open when you installed the extension.
3. Start the game and advance until dialogue appears.
4. **Hover** over a word in the dialogue overlay to show its definition.

<img src="/public/reader/web-extractor/screenshots/masshiro-first-word.webp" alt="Dictionary definition for 驚かせる open over dialogue in the Masshiro library scene." width="1920" height="1080" loading="lazy" style="width: 960px; display: block; max-width: 100%; height: auto; margin: 24px auto;">

See [Using the Dictionary](/en/web-extractor/docs/using-the-dictionary/) to review earlier dialogue, change [lookup control](/en/web-extractor/docs/using-the-dictionary/#change-the-lookup-control)s, or add dictionaries.

## Save Vocab to Anki (Optional)

Anki is a flashcard app that helps you memorize vocabulary efficiently. It is not required to use our extension, but we highly recommend using it.

To set up and connect Anki, follow our [Set Up Anki](/en/web-extractor/docs/anki-setup/) guide.

## Troubleshooting

### Dictionary Download Fails

1. Check that you have a stable internet connection.
2. Select **Retry Download** on the setup page.
3. If it’s still not working, reinstall the extension or [contact us](/en/contact/).

### No Definition Appears

- **Extension Enabled** must be turned on in the extension popup.
- If the game was opened before installation, it needs to be reloaded.
- Check that the game is running on a supported game engine. It won’t work outside of RouteVN, Ren’Py, and TyranoScript.
- A dictionary must be installed. Please see [Install a Dictionary](/en/web-extractor/docs/getting-started/#install-a-dictionary) and check whether you missed a step.
- If you have installed a dictionary, make sure its reading language matches the game you want to read.
- Check whether you accidentally changed the key for looking up words. The default is hover, but if you changed it to **Shift + Hover**, you need to press Shift while hovering over the target word before a definition appears.
- The extension uses JMdict and Wiktionary as its dictionaries. We chose them because of their wide range of definitions. Despite this, they do not contain every expression, so please keep that in mind.

## Need More Help?

[Contact us](/en/contact/) with the game's URL, your browser version, the setup step that failed, and any error messages.
