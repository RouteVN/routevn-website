---
template: documentation
title: Characters
seo:
  title: "Characters (line action) | RouteVN Creator Docs"
  description: "Characters lets you place character sprites on screen."
sidebarId: line-actions-characters
---

Characters lets you place [character sprites](/en/creator/docs/characters/#character-sprites) on screen.

There can be zero, one, or multiple character sprites at a time. Character sprites stay on following lines until the Characters action changes or removes them.

## Adding a character sprite

To add a character sprite:

1. Click `+ Add Character`.
2. Select a [character](/en/creator/docs/characters/).
3. Select the sprite you want to show.
4. Click `Select`.
5. Set the Transform and Animation options.

Use the search field when the character or sprite list is large.

## Changing a sprite

Click an existing character sprite card to choose a different sprite.

If the character uses [sprite groups](/en/creator/docs/characters/#sprite-groups), select one sprite for each group before clicking `Select`.

Double click a sprite in the selector to preview it at a larger size.

## Transform

Use Transform to apply a reusable [transform](/en/creator/docs/transforms/) to the character sprite.

Transforms can change the sprite position, scale, rotation, and anchor.

## Animations

Animation controls whether the character sprite uses an [animation](/en/creator/docs/animations/).

The available animation modes are:

- `None`: no animation
- `Update`: animate the current character sprite
- `Transition`: animate the change from one character sprite to another

When Animation is set to `Update`, only update animations are shown. When Animation is set to `Transition`, only transition animations are shown.

## Sprite groups

Sprite groups appear when the selected character has groups configured on the [Characters](/en/creator/docs/characters/#sprite-groups) page.

Each sprite group has its own selection tab. Select one sprite for each group, then click `Select`.

The sprite selector only shows sprites that match the tags configured for that sprite group.

## Removing a character sprite

To remove a character sprite:

1. Right click the character sprite row.
2. Select `Delete`.

## Notes

- The same character can be added more than once.
