---
template: documentation
url: /en/web-extractor/docs/anki-setup/
_bind:
  docs: webExtractorDocs
title: Set Up Anki
seo:
  title: "Set Up Anki | RouteVN Web Extractor Docs"
  description: "Connect RouteVN Web Extractor to desktop Anki, install the required Lapis note type, and save your first vocabulary card."
sidebarId: anki-setup
---

The AnkiConnect add-on lets RouteVN Web Extractor save vocabulary to Anki on your computer. This setup is optional; dictionary lookup works without Anki.

## Prepare desktop Anki

1. Install and open [desktop Anki](https://apps.ankiweb.net/).
2. In Anki, open **Tools → Add-ons**.
3. Select **Get Add-ons**.
4. Enter the [AnkiConnect](https://ankiweb.net/shared/info/2055492159) add-on code, `2055492159`, and confirm installation.
5. Restart Anki. It must stay open while you save words.

For more on installing add-ons, see the [Anki manual](https://docs.ankiweb.net/addons.html).

## Install Lapis and choose a deck

RouteVN Web Extractor supports only the **Lapis** note type. A **note type** defines the fields that hold the word, definition, and sentence. A **deck** groups cards for study.

1. Download the example deck from [the Lapis releases page](https://github.com/donkuri/lapis/releases).
2. In desktop Anki, use **File → Import** to import the downloaded deck and install the Lapis note type.
3. Choose a deck in Anki for your vocabulary and note its name for the extension settings below.

Lapis must be installed separately before you save vocabulary from the extension.

## Connect the extension

1. [Open the extension's Settings](/en/web-extractor/docs/using-the-dictionary/#open-settings).
2. Find **AnkiConnect**.
3. Leave **AnkiConnect URL** as `http://127.0.0.1:8765` for Anki running on the same computer with its default configuration.
4. Enter your **Deck name** exactly as it appears in Anki.
5. **Note type** is fixed to **Lapis** and cannot be edited. Use the installation link below it if you have not installed Lapis in Anki.
6. Choose a **Card type** using the descriptions below.
7. Select **Test Connection** and check the result.

<img src="/public/reader/web-extractor/screenshots/anki-connect-settings.png" alt="AnkiConnect settings with the local URL, Mining Deck, Lapis note type, Word Card, and Test Connection button." width="386" height="438" loading="lazy" style="width: 386px; display: block; max-width: 100%; height: auto; margin: 24px auto;">

Settings save automatically. **Test Connection** checks access to AnkiConnect and confirms that Lapis is installed. A successful result says the Lapis note type is ready.

## Choose a card type

The **Card type** setting controls what appears on the front of a card during review. The options are:

- **Word Card** shows the word on the front so you can practise recalling its meaning without sentence context.
- **Click Card** shows the word first. Click it to reveal the sentence when you need context.
- **Sentence Card** shows the full sentence on the front so you can review the word in context.
- **Word and Sentence Card** shows the word with the sentence below it as a hint on the front.

Start with **Word Card** if you are unsure. These modes follow [Lapis's card type settings](https://github.com/donkuri/lapis#how-to-use-lapis).

## Save your first word

1. Keep Anki open and return to your visual novel.
2. Hover over a word to open its dictionary definition.
3. Select **+** in the popup.
4. Wait for the save confirmation.
5. The word is now saved in your Anki deck. You can review it later.

The extension fills the Lapis fields when saving vocabulary. It does not install Lapis or rewrite its templates.

## Troubleshooting

### Test Connection fails

- Desktop Anki must be running.
- AnkiConnect must be installed and enabled. Anki needs a restart after installation.
- **AnkiConnect URL** must match the add-on configuration.

### Connected, but Lapis is not installed

1. Follow [Install Lapis and choose a deck](#install-lapis-and-choose-a-deck).
2. Return to Settings and select **Test Connection** again.

### Connected, but saving fails

- The save error may identify a missing note type or a problem with its fields.
- Lapis must still be installed in Anki under its original name.
- **Deck name** must be the deck where you want to save vocabulary.

If the problem continues, [contact us](/en/contact/) with the error message and your Lapis version.
