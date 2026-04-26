---
template: documentation
title: Reset Story At Section
sidebarId: reset-story-at-section
---

Reset Story At Section moves to a section and resets the story context.

Use it when returning to the title page, or when moving from the title page to the first story section.

## Target

Reset Story At Section has 2 required fields:

- `Scene`: the scene that contains the target section
- `Section`: the section to move to

## How it runs

When the player reaches the line, it resets the story context and jumps to the target section.

Current variables and other context state are not carried into the target section.

Reset Story At Section always starts at the first line of the target section.

## Section Transition

Use [Section Transition](/creator/docs/line-actions/section-transition/) when the story should keep the current variables and context state.
