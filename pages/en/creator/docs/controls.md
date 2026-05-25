---
template: documentation
title: Controls
sidebarId: project-controls
---

Controls connect user input to actions.

Use controls to define what happens when the player clicks, presses a key, or interacts with a specific area of the screen.

Controls can be changed during the game, so they can be different in certain scenes.

## Mouse events

Mouse controls connect a mouse event to an action.

Editing mouse controls:

- Double click a control.
- This opens the layout editor interface.
- The only element that can be added is a rectangle.
- The rectangle has the full power of the layout editor, including positioning, conditionals, and triggering any available action.

## Keyboard events

Keyboard controls connect a key press to an action.

One keyboard event can trigger one or multiple actions.

Adding keyboard events:

- Select a control.
- On the right, click `Add keyboard event`.
- Select a keyboard key, such as `Space` or `Enter`.
- Select the event type: `Key down` or `Key up`.
- Submit the changes.

## Conventions

There is no universal standard for which keyboard or mouse events should bind to which actions. Some Visual Novels even include an option setting to change this behavior.

RouteVN ships with these defaults, but you are free to edit them.

Keyboard events:

- `Enter`: Move to the next line.
- `Space`: Show or hide the dialogue box.
<!-- - `Ctrl`: Skip. -->

Mouse events:

- Left click: Move to the next line.
- Right click: Show the menu options page.

## Usages

Controls are used in the following places:

- [Line action: Controls](/en/creator/docs/line-actions/controls/)
