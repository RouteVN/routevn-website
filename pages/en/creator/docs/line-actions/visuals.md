---
template: documentation
title: Visuals
sidebarId: visuals
---

Visuals lets you add extra visual resources to the current line.

Unlike [Background](/en/creator/docs/line-actions/background/), Visuals can have multiple items at the same time. Visuals stay on following lines until the Visuals action changes or removes them.

## Visual sources

Visuals can use 3 resource types:

- [Images](/en/creator/docs/images/)
- [Videos](/en/creator/docs/videos/)
- [Layouts](/en/creator/docs/layouts/)

When selecting a layout as a visual, only layouts with the `General` type are shown.

## Adding a visual

To add a visual:

1. Click `+ Add Visual`.
2. Select the image, video, or layout you want to use.
3. Click `Select`.
4. Set the Transform and Animation options.

Use the search field when the resource list is large.

Double click a resource in the selector to preview it at a larger size.

## Changing a visual

Click an existing visual card to choose a different resource.

## Transform

Use Transform to apply a reusable [transform](/en/creator/docs/transforms/) to the visual.

Transforms can change the visual position, scale, rotation, and anchor.

## Animations

Animation controls whether the visual uses an [animation](/en/creator/docs/animations/).

The available animation modes are:

- `None`: no animation
- `Update`: animate the current visual
- `Transition`: animate the change from one visual to another

When Animation is set to `Update`, only update animations are shown. When Animation is set to `Transition`, only transition animations are shown.

## Z Index

Visual order controls the layer order.

The first visual is the bottom layer. The last visual is the top layer.

## Removing a visual

To remove a visual:

1. Right click the visual row.
2. Select `Delete`.
