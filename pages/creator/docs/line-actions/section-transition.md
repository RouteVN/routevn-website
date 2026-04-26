---
template: documentation
title: Section Transition
sidebarId: section-transition
---

Section Transition moves the story to another section.

Use it when a line should end the current path and continue from a specific section. The target can be in the current scene or another scene.

## Target

Section Transition has 2 required fields:

- `Scene`: the scene that contains the target section
- `Section`: the section to move to

## How it runs

When the player reaches the line, it immediately jumps to the target section.

If this line also has dialogue content, the dialogue will not be shown.

Section Transition always starts at the first line of the target section.

## Notes

### Loop

You can transition to the same section you are already in.

This can be useful for menu or hub flows, but it can also create an infinite loop if there is no choice, condition, or later transition that lets the player leave.
