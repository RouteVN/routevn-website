---
template: documentation
title: Particles
sidebarId: particles
---

Particles are reusable animated effects, such as rain, snow, fire, smoke, embers, or sparkle effects.

Particle effects are created from a preset and a texture image. The texture image is the image used for each spawned particle.

## Before creating particles

Upload the texture image in the [Images](/en/creator/docs/images/) page first.

For full-screen effects, the particle canvas size should usually match or be relative to the project [resolution](/en/creator/docs/projects/#resolution).

## Creating a particle

Click the add button to create a particle.

You will first be asked to select:

- Preset
- Texture image

Available presets include:

- Snow
- Rain
- Fire
- Smoke
- Embers
- Sparkle

After selecting a preset and texture image, the full particle editor opens.

## Particle editor

The particle editor is split into tabs.
The preview updates while you edit the particle.

### Appearance

Appearance controls how each particle looks.

| Field | Description |
| --- | --- |
| Texture image | The image used to draw each spawned particle. |
| Scale min | The smallest size multiplier a particle can use. |
| Scale max | The largest size multiplier a particle can use. |

Use smaller scale values for effects like rain, snow, dust, and sparks.
Use larger scale values for effects like smoke, fire, and magic glows.

### Basics

Basics controls the resource metadata and effect area.

| Field | Description |
| --- | --- |
| Name | The name shown in the particle resource list. |
| Description | Optional notes about how the particle should be used. |
| Tags | Tags used for filtering and organization. |
| Width | The width of the particle effect canvas. |
| Height | The height of the particle effect canvas. |
| Seed | A fixed random seed that makes the particle effect replay consistently. |

For full-screen effects, width and height should usually match the project [resolution](/en/creator/docs/projects/#resolution).

Use the same seed when you want the same particle pattern to appear each time.
Change the seed when you want a different random pattern.

### Emission

Emission controls how particles are spawned.

| Field | Description |
| --- | --- |
| Emission mode | `Continuous` spawns particles over time. `Burst` spawns a group of particles at once. |
| Rate / second | Number of particles spawned each second in continuous mode. |
| Burst count | Number of particles spawned in each burst. |
| Max active | Maximum number of particles that can exist at the same time. |
| Duration | `Infinite` keeps emitting. `Timed` stops emitting after a set duration. |
| Duration seconds | How long emission lasts when duration is timed. |
| Lifetime min | Shortest time a particle can stay alive. |
| Lifetime max | Longest time a particle can stay alive. |

Higher rate, burst count, and max active values can make effects denser, but they can also make the effect heavier to render.

### Source

Source controls where particles are spawned from.
Coordinates are relative to the particle canvas.

| Field | Description |
| --- | --- |
| Source shape | The emitter shape. It can be `Point`, `Rectangle`, `Circle`, or `Line`. |
| Source X | Horizontal start position for the source. |
| Source Y | Vertical start position for the source. |
| Source width | Width of the rectangle source. |
| Source height | Height of the rectangle source. |
| Source radius | Outer radius of the circle source. |
| Inner radius | Optional empty center area for circle sources. |
| Line X2 | Horizontal end position for line sources. |
| Line Y2 | Vertical end position for line sources. |

Common source patterns:

- Use a wide rectangle above the screen for rain or snow.
- Use a small rectangle near the bottom for fire or smoke.
- Use a point or circle for sparks, bursts, and magic effects.

### Movement

Movement controls how particles move after they spawn.

| Field | Description |
| --- | --- |
| Velocity type | `Directional` moves particles in a direction. `Radial` spreads particles outward across an angle range. |
| Speed min | Minimum starting speed. |
| Speed max | Maximum starting speed. |
| Direction / angle min | Minimum movement direction or radial angle, in degrees. |
| Direction / angle max | Maximum movement direction or radial angle, in degrees. |
| Acceleration X | Horizontal acceleration applied during the particle lifetime. |
| Acceleration Y | Vertical acceleration applied during the particle lifetime. |
| Max speed | Optional speed limit. `0` means no limit. |
| Rotate particles toward movement | Rotates each particle to face its movement direction. |

Use acceleration to make particles drift, fall, rise, or curve over time.
For example, positive vertical acceleration can make particles fall faster.

### Bounds

Bounds controls what happens when particles leave the effect area.

| Field | Description |
| --- | --- |
| Bounds mode | `Recycle` can reuse particles when they leave the bounds. `None` disables bounds recycling. |
| Bounds source | `Area` uses the particle canvas. `Custom` uses a custom rectangle. |
| Bounds padding | Extra padding around the particle canvas before recycling starts. |
| Custom bounds X | Horizontal start position of custom bounds. |
| Custom bounds Y | Vertical start position of custom bounds. |
| Custom bounds width | Width of custom bounds. |
| Custom bounds height | Height of custom bounds. |

Use recycle bounds for continuous effects such as rain, snow, smoke, and drifting particles.
Use custom bounds when particles should recycle outside a larger or smaller region than the canvas.

## Previewing a particle

- Double click a particle to preview it.
- Select a particle to show its detail preview on the right.

## Navigating the page

### File explorer

Read the [File Explorer](/en/creator/docs/file-explorer/) docs for general navigation.

## Usages

Particles are used in the following places:

- [Layout editor](/en/creator/docs/layouts/#layout-editor)
- [Line action: Visuals](/en/creator/docs/line-actions/visuals/)
