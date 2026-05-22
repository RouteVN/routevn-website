# Spritesheet Tool Internal Spec

This file defines the expected behavior for the browser spritesheet tool at `/creator/tools/spritesheet/`.
It is an internal implementation/specification note, not user-facing Creator documentation.

## Purpose

The tool lets users create a simple PixiJS spritesheet package from normal PNG images without installing or paying for a separate app.
It is intended for small and medium animations where a simple browser workflow is good enough.

## Route

- Public route: `/creator/tools/spritesheet/`.
- The page is a single HTML/JavaScript tool page generated from `pages/creator/tools/spritesheet.yaml`.
- Use RTGL UI primitives for the static view structure where they fit.
- Do not use Rettangoli FE for this tool. Keep the behavior in plain page JavaScript.
- Keep native inputs and buttons where the JavaScript depends on native DOM APIs such as `.value`, `.disabled`, and file uploads.
- The page links users back to the normal Spritesheets docs instead of exposing a dedicated tool docs page.

## Inputs

The tool must provide these controls:

- Output file name.
- Frame width.
- Frame height.
- PNG file upload with drag-and-drop and file picker support.
- Per-image `Duration frames`, defaulting to `1`.
- Per-image preview thumbnail.
- Per-image remove action.
- Per-image move up and move down actions.
- Preview start/stop button.
- Preview FPS control next to the preview start/stop button.
- Download zip button.

The tool must not show a global `Animation frames` field.
The tool must not show a `Clear` button.

## Frame semantics

Each uploaded PNG is one visual atlas frame.
`Duration frames` is not a slicing or scaling setting.
If an image has `Duration frames` set to `2`, the generated animation should reference that same atlas frame name twice.

Example playback order:

- `open.png` with duration `1`.
- `half.png` with duration `2`.
- `closed.png` with duration `1`.

Expected animation list:

```json
["open.png", "half.png", "half.png", "closed.png"]
```

## Ordering

The current image list order controls both:

- Atlas frame order.
- Animation playback order.

Move up and move down must rebuild the preview/export state immediately.
Moving an image should reset preview playback to the start of the animation.

## Preview

The preview must render the generated animation in the browser.
The preview must support start and stop.
Preview FPS controls preview timing only and must not be written to the exported JSON.

The page should avoid status copy such as:

- `Ready to export ...`.
- `Atlas size ...`.
- `Source image will be scaled ...`.
- Summary text like `5 animation frame(s), 3 atlas image(s), ...`.

## Export

Clicking download must download a zip file containing exactly:

- `<file-name>.png`.
- `<file-name>.json`.

The PNG is the generated atlas.
The JSON is PixiJS spritesheet data with these top-level fields:

- `frames`.
- `animations`.
- `meta`.

The tool writes one animation clip named `animation`.
`meta.image` must match the PNG filename included in the zip.

## Layout and sizing

All atlas frames use the configured frame width and frame height.
Source images are drawn into those frame rectangles during atlas generation.
The tool does not trim transparent pixels.
The tool does not rotate frames.
The tool does not create multiple packed pages.

Current browser safety limits:

- Maximum animation frame references: `2048`.
- Maximum atlas width: `8192` pixels.
- Maximum atlas height: `8192` pixels.
- Maximum atlas area: `67108864` pixels.

## Visual style

The tool should match the RouteVN website style and avoid decorative styling that distracts from the workflow.
Do not use green accent colors or gradient backgrounds in this tool.
Use site foreground/primary colors for focus and primary actions.
