---
template: documentation
title: Animations
sidebarId: animations
---

<img src="/public/creator/docs/reference/scene-workspace.webp" style="width: 100%; margin-bottom: 20px;" alt="Scene workspace with timeline and animation preview">

Use animations to add motion to images and and other visual elements.

## Live and Replace

There are split into live and replace.

Live animations animate a single element, such as noving a character sprite.

Replace animation is used when there is an element transitioning out and a new element transitioning in. An example is a background transition

## Animation effects

There are 3 types of animaton effects: tween, mask, shader

### Tween

Tween animations use keyframes to change properties over time.

Keyframes have:

- Duration
- Properties

The properties that can be changed are:

- Position
- Dimension
- Alpha

Each property can have an initial value
Properties values can be aboslute or relative

Each property also has an 'easing' value

TODO: add UI

### Mask

TODO

### Shader

TODO

## Usage

Animations are used in:

- Scene editor
  - Background transition
  - Character sprite movements

