---
template: documentation
url: /en/web-extractor/docs/using-the-dictionary/
_bind:
  docs: webExtractorDocs
title: Using the Dictionary
seo:
  title: "Using the Dictionary | RouteVN Web Extractor Docs"
  description: "Download additional dictionaries, rearrange dictionary order, install Japanese pitch accent, and look up words with RouteVN Web Extractor."
sidebarId: using-the-dictionary
---

First, [install a dictionary](/en/web-extractor/docs/getting-started/#install-a-dictionary).

## Look up words while reading

1. Start a supported web visual novel and advance to a line of dialogue.
2. Hover over a word in the extracted dialogue overlay.
3. Read its definition in the pop-up dictionary. Readings and other details depend on the installed dictionary.

Some supported games also allow lookup directly on game text and choices.

## Review earlier dialogue

1. Click the RouteVN Web Extractor icon in your browser's Extensions menu.
2. Select **Open Side Panel** if it is not already open.
3. Use the search field to find a captured line.
4. Hover over a word in that line to look it up.

<img src="/public/reader/web-extractor/screenshots/backlog-cropped.png" alt="Backlog of Masshiro dialogue with a dictionary definition for 不思議." width="438" height="952" loading="lazy" style="width: 438px; display: block; max-width: 100%; height: auto; margin: 24px auto;">

The backlog contains dialogue captured while the extension was running. New lines appear as you advance through the game.

## Open Settings

1. Click the RouteVN Web Extractor icon in your browser's Extensions menu.
2. Select **Open Side Panel** if it is not already open.
3. Select **Settings**.

Settings save automatically.

## Change the lookup control

1. [Open Settings](#open-settings).
2. Under **Dictionary & Language**, find **Look up words**.
3. Choose **Hover**, **Shift + Hover**, **Ctrl / Cmd + Hover**, or **Alt + Hover**.
4. Return to the game and hover over a word, holding your selected key if needed.

## Add or change dictionaries

You can download more dictionaries after setup from Settings.

1. [Open Settings](#open-settings).
2. Under **Dictionary & Language**, choose the **Reading language** of your game.
3. Choose the **Definition language** you want word meanings displayed in.
4. Select **Add dictionary**. Keep the side panel open while it downloads and installs. An internet connection is required.
5. Wait for **Ready!** and the installed term count.
6. Under **Installed dictionaries**, check that the dictionary is enabled. Repeat these steps to add another dictionary.

If the dictionary is already installed, a confirmation asks whether to download it again and replace its terms. If installation fails, read the error, check your connection, and select **Add dictionary** to try again.

<img src="/public/reader/web-extractor/screenshots/dictionary-settings.png" alt="Dictionary and Language settings with Japanese reading, English definitions, and an enabled JMdict dictionary." width="409" height="808" loading="lazy" style="width: 409px; display: block; max-width: 100%; height: auto; margin: 24px auto;">

Dictionary sources and license information are available through **Dictionary sources and licenses** in Settings.

## Rearrange dictionary order

Enabled dictionaries higher in the list appear first in definitions.

1. [Open Settings](#open-settings) and find **Installed dictionaries** under **Dictionary & Language**.
2. Enable the dictionaries you want to use with their checkboxes. A disabled dictionary cannot be reordered.
3. Drag an enabled dictionary's name above or below another enabled dictionary, or use its **Move up** and **Move down** arrow buttons.
4. Wait for **Saving dictionary order…** to finish before making another change.
5. Look up a word again to see definitions in the new order.

For example, move your preferred definition dictionary above a supplemental dictionary to see its results first. Uncheck a dictionary to exclude it from lookups without removing it.

## Japanese pitch accent

See [Japanese Pitch Accent](/en/web-extractor/docs/japanese-pitch-accent/) for installation steps, screenshots, and troubleshooting.

## Save a word for review

1. Complete [Set Up Anki](/en/web-extractor/docs/anki-setup/) and leave desktop Anki open.
2. Look up a word in the game or backlog.
3. Select **+** in the dictionary popup and wait for confirmation.

The **S** shortcut also saves the inspected word when **Press S to save the inspected word to Anki** is enabled in Settings.
