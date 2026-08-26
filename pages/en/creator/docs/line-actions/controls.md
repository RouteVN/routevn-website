---
template: documentation
title: Controls
seo:
  title: "Controls (line action) | RouteVN Creator Docs"
  description: "The Controls action selects which control resource is active for this line."
sidebarId: controls
---

The Controls action selects which [control](/en/creator/docs/controls/) resource is active for this line.

Controls define what happens when the player clicks, presses a key, or interacts with a control area on screen. Edit those input rules on the [Controls](/en/creator/docs/controls/) page.

The Controls line action only chooses which control resource to use.

## Control

Pick the control resource you want this line to use.

The selected control stays active on following lines until it is changed or removed.

## Removing controls

Clear the Control field when this line should remove the active control.

Without an active control, the player will not be able to use the keyboard or general screen clicks from Controls.

They can still interact with actions that define their own click behavior, such as [Choices](/en/creator/docs/line-actions/choices/) or specific layout element actions.
