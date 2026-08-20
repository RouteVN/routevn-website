---
template: documentation
title: Dialogue
seo:
  title: "Dialogue | RouteVN Creator Docs"
  description: "Dialogue lets you manage the dialogue box. It is sometimes called Message Box in some other engines."
sidebarId: dialogue
---

Dialogue lets you manage the dialogue box. It is sometimes called `Message Box` in some other engines.

Dialogue has 2 modes: ADV and NVL.

## Dialogue mode

### ADV

In ADV mode, the dialogue shows one line of content at a time. The content is made up of the dialogue text and the speaker name.

### NVL

In NVL mode, the dialogue can show multiple lines on the screen.

Unlike ADV, NVL does not automatically remove the previous dialogue lines.

## Dialogue layout

Pick the [dialogue layout](/en/creator/docs/layouts/) you want this line to use. Only layouts with the `Dialogue ADV` or `Dialogue NVL` type are shown here.

## Click-to-continue indicator

Click-to-continue indicators are configured in the dialogue layout. Add them to the text revealing element that shows dialogue content.

<video src="/public/creator/changelog/1-6-4-click-to-continue.mp4" controls playsinline preload="metadata" style="width: 100%; height: auto; display: block; border: 1px solid var(--border); box-sizing: border-box;"></video>

There are 2 indicator states:

- Revealing: shown while the text is still revealing.
- Complete: shown after the text reveal finishes.

Use Complete for a click-to-continue prompt.

To add a click-to-continue indicator:

1. Open the dialogue layout in the Layout Editor.
2. Select the text revealing element that shows dialogue content, such as Text (Dialogue Content) or Text (Line Content).
3. Add a Complete indicator in the inspector.
4. Select an image or spritesheet animation for the visual.
5. Set Width, Height, Offset X, and Offset Y.
6. Click `Save`.

### Fixed-position indicator

Use a fixed-position indicator when the prompt should stay in one place instead of following the end of the revealed text.

To show a fixed-position indicator after the text finishes revealing:

1. Open the dialogue layout in the Layout Editor.
2. Add a Spritesheet element.
3. Select the Spritesheet element.
4. Open Visibility in the inspector.
5. Set the visibility condition to `Is Line Completed` equals `True`.
6. Position the Spritesheet element where the prompt should appear.
7. Click `Save`.

This makes the Spritesheet element visible only after the current line has finished revealing.

## Dialogue speaker

Pick the speaker for this line from the [Characters](/en/creator/docs/characters/) list. The speaker name fills automatically.

### Custom Speaker Name

The dialogue speaker name uses the name defined on the [Characters](/en/creator/docs/characters/) page by default.

Use Custom Speaker Name when you want this line to show a different name.

### Persist Speaker

By default, the selected speaker applies to the current line only. On the next line, the dialogue speaker is blank.

Enable Persist Speaker when the same speaker talks for multiple lines. RouteVN Creator will use this speaker for following lines until the speaker is removed or changed.

## Clear Page

Clear Page is only available in NVL mode. If enabled, it clears all previous messages from the NVL page.

## Keyboard shortcuts

### Add dialogue speaker

Opening the dialogue form every time you change the speaker can slow down scene editing.

If the speaker is the only thing you want to change, use the shortcut defined on the [Characters](/en/creator/docs/characters/#shortcut) page:

- Type `c` followed by the shortcut to set the dialogue speaker.
- Type `c0` to remove the dialogue speaker.
