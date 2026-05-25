---
template: documentation
title: Dialogue
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
