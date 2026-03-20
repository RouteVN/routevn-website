---
template: documentation
title: Scene Editor
sidebarId: scene-editor
---

Use Scene Editor to write scene sections, arrange action lines, and preview chapter flow.

- Switch between section tabs to keep opening lines grouped and readable.
- Edit lines in the timeline/list editor and set actions for each line.
- Open the preview panel and validate pacing after each meaningful pass.
- Open the layout editor for active scenes when you need deeper frame control.
- Use scene sections overview to inspect all section nodes in one place.

Keep scene logic focused and split complexity into smaller scenes when necessary.

## Scene, Sections, and Lines

In RouteVN Creator, a scene follows this structure:

- Scene -> Sections -> Lines

- A scene has multiple sections.
- A scene always starts from the first section.
- After the first section, section order is flexible; it does not need to be strictly linear.
- A section is made up of sequential lines.
- Lines are always read sequentially from top to bottom.
- To move from one section to another, use an action-based command such as:
  - `Choices`
  - `Section Transition`
- A section without a transition is considered a dead end section and the visual flow will stop there.
- You can transition to any other section within the same scene or to another scene.
- When transitioning, the destination section always starts from its first line.

## Page Layout

- Left area:
  - Top: list of sections.
  - Main: text editor, similar to the normal text editor. Right preview of the scene change in the presentation state.
- Right area:
  - Top: live preview.
  - Bottom: final presentation state (what will be shown exactly on screen).

## Text Editor Modes

### Edit Mode

- Edit mode is just normal text editing.
- You can move line by line and edit content naturally.
- Caveat: due to technical limitations, you cannot select multiple lines at once.

### Block Mode

- Press `Esc` to enter block mode.
- Press `Enter` to go back to edit mode.
- Use block mode for faster block-level operations when needed.
- Keyboard navigation is heavily inspired by Vim.
- `j` or `ArrowDown` to go to one line below.
- `k` or `ArrowUp` to go to line above.
- `dd` to delete the current line.
- `o` to insert a new line below.
- `O` to insert a new line above.
- `J` or `ArrowDown` to swap current line with the line below.
- `K` or `ArrowUp` to swap current line with the line above.

<img src="/public/creator/docs/reference/scene-workspace.webp" style="width: 100%; margin-bottom: 20px;" alt="Scene editor and preview workflow">
