---
template: documentation
title: Spritesheets
sidebarId: spritesheets
---

Spritesheets are animated image resources made from a single PNG image and a JSON atlas.

The PNG contains the frames. The atlas JSON describes where each frame is located and how frames are grouped into animation clips.

## Creating simple spritesheets

If you have separate PNG frames, use the [Spritesheet Tool](/creator/tools/spritesheet/) to make a simple spritesheet package in the browser.

The tool exports a `.zip` file with one PNG atlas and one PixiJS-style JSON atlas file.

Basic flow:

1. Set the frame width and frame height.
2. Upload PNG images.
3. Set `Duration frames` when an image should stay on screen for more than one frame.
4. Move images up or down until the list matches the playback order.
5. Use the preview controls to check the animation.
6. Download the zip file.

Use this tool for simple animations. It does not trim transparent pixels, rotate frames, or create multiple animation clips.

## Supported files

Spritesheet import requires:

- One `.png` spritesheet image.
- One `.json` atlas file.

If you drag and drop files, select exactly one PNG file and one JSON file.

## Atlas JSON

The atlas JSON must contain frame data.

RouteVN Creator can detect animation clips from atlas animation data or frame tags used by popular spritesheet tools. If no clips are defined, it creates a default clip from all frames.

## Adding a spritesheet

Click the add button to create a spritesheet.

You will be asked to fill the following fields:

- Name (required)
- Description
- Image
- Atlas JSON
- Tags
- Default width
- Default height

The default width and height control the size used when inserting the spritesheet animation into a layout.

## Updating a spritesheet

There is a significant difference between updating an existing spritesheet and uploading a new one.

If a spritesheet is already used in a layout, replacing the existing spritesheet keeps those references connected.

If you upload a new spritesheet instead, you need to manually update each layout that uses the old spritesheet.

To update a spritesheet:

- Select a spritesheet.
- In the top right, click the spritesheet name or edit icon.
- Replace the PNG image or atlas JSON as needed.
- Submit the changes.

## Previewing a spritesheet

- Double click a spritesheet to preview it.
- Select an animation clip to preview that clip.

The detail panel shows information such as file size, sheet size, frame count, and detected animations.

## Navigating the page

### File explorer

Read the [File Explorer](/creator/docs/file-explorer/) docs for general navigation.

## Usages

Spritesheets are used in the following places:

- [Layout editor](/creator/docs/layouts/#layout-editor)
