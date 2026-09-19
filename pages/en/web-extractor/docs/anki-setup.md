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

## Prepare Desktop Anki

1. **Install** and open [desktop Anki](https://apps.ankiweb.net/).
2. In Anki, open **Tools → Add-ons**.
3. Select **Get Add-ons**.
4. Enter the **AnkiConnect** add-on code, [**2055492159**](https://ankiweb.net/shared/info/2055492159), and confirm the installation.
5. Restart Anki. It must stay open while you save words.

Please see the [Anki manual](https://docs.ankiweb.net/addons.html) for more information on installing add-ons.

## Install Lapis and Choose a Deck

RouteVN Web Extractor supports only the Lapis **note type**. We chose this **note type** because of its comprehensive features. A **note type** defines the fields that hold the word, definition, and sentence. Please don’t confuse this with a **deck**, which is simply a group of cards.

1. Download the example **deck** from the [Lapis releases page](https://github.com/donkuri/lapis/releases).
2. In [desktop Anki](https://apps.ankiweb.net/), use **File → Import** to import the downloaded **deck** and install the Lapis **note type**.
3. Choose a **deck** in Anki to store your vocabulary and note its name for the extension settings below. Alternatively, you can use the Lapis **deck** that is created automatically. Feel free to rename it.

## Connect the Extension

1. Open the extension’s [**Settings**](/en/web-extractor/docs/using-the-dictionary/#open-settings).
2. Scroll down to the **AnkiConnect** section.
3. Leave the **AnkiConnect** URL as [http://127.0.0.1:8765](http://127.0.0.1:8765) unless you changed it in **AnkiConnect's** configuration.
4. Enter the precise **Deck Name** you want to save your words to.
5. Choose a card type using the descriptions below.
6. Select **Test Connection** and check the result. It should say **Connected! Lapis note type ready (v6)** if everything went well.

<img src="/public/reader/web-extractor/screenshots/anki-connect-settings.png" alt="AnkiConnect settings with the local URL, Mining Deck, Lapis note type, Word Card, and Test Connection button." width="386" height="438" loading="lazy" style="width: 386px; display: block; max-width: 100%; height: auto; margin: 24px auto;">

## Card Type

The card type determines what you see on the front of a card during review. The options are:

1. **Word Card** – Shows only the saved word on the front of the card.
2. **Click Card** – Shows the word on the front of the card and reveals the sentence when you click the word. You can distinguish a **Click Card** from a **Word Card** by its dotted underline.
3. **Sentence Card** – Shows the full sentence containing the word so you can review it in context.
4. **Word and Sentence Card** – Shows the word with the sentence below it as a hint.

The extension follows Lapis’s card type settings. Start with a **Word Card** if you’re unsure. If you’d like a middle ground between **Word Card**s and **Sentence Card**s, use a **Click Card**.

Use a **Sentence Card** or **Word and Sentence Card** if you want to review words in context, but keep in mind that you may end up memorizing the meaning of the sentence instead of the target word.

## Save Your First Word

1. Open Anki and keep it running while you read. Otherwise, you won’t be able to save words.
2. **Hover** over a word to lookup its definition.
3. Select **+** in the popup.
4. Wait for the save confirmation.
5. The word is now saved to your Anki **deck**. You can review it later.

## Troubleshooting

### Test Connection Fails

* Anki must be running in the background.
* **AnkiConnect** must be installed and enabled. Restart Anki after installation.
* The **AnkiConnect** URL must match the add-on configuration.

### Connected, but Lapis Is Not Installed

1. Follow [**Install Lapis and Choose a Deck**](/en/web-extractor/docs/anki-setup/#install-lapis-and-choose-a-deck).
2. Then return to [**Settings**](/en/web-extractor/docs/using-the-dictionary/#open-settings) and select **Test Connection** again.

### Connected, but Saving Fails

* Lapis must still be installed in Anki under its original name.
* The **Deck Name** must match the **deck** where you want to save your vocabulary.

If the problem continues, [contact us](/en/contact/) with the error message and your Lapis version.
