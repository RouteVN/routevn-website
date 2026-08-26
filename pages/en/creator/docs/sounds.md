---
template: documentation
title: Sounds
seo:
  title: "Sounds | RouteVN Creator Docs"
  description: "On this page you can upload all sound files for your project. Sounds can be used as BGM, voice, or sound effects."
sidebarId: sounds
---

<img
  src="/public/creator/docs/reference/sounds-1.png"
  alt="Sounds page"
  style="width: 100%; height: auto; display: block; border: 1px solid var(--border); box-sizing: border-box;" width="1920" height="1080" decoding="async"
/>

On this page you can upload all sound files for your project.
Common categories include BGM (Background music), and SFX (Sound effects).

## Supported sound formats

The following file formats are supported:

- `mp3`: Convenient, but it can cause small gaps when game music loops.
- `wav`: Has the best quality but produces larger files.
- `ogg`: Usually offers the best balance of quality, performance, and file size.

## Upload sounds

You can upload single or multiple sounds at once.

There are 2 ways to upload:

- Click the upload button and select one or more sounds.
- Drag and drop sound files directly into the area below the folder.

When you upload multiple sounds, RouteVN Creator uploads them one by one. This is usually fast, but it can take time for large batches. Stay on this page and keep the application open until the upload finishes.

## Updating a sound

There is a significant difference between updating an existing sound and uploading a new one.

If a sound is already used in places such as BGM or sound effect line actions, replacing the sound updates those references automatically.

If you upload a new sound instead, you need to manually update the sound reference in each line action that uses it.

To update a sound:

1. Select a sound.
2. In the top right, click the sound name or edit icon.
3. Click the sound file to upload a new one.

## Navigating the page

### File explorer

Read the [File Explorer](/en/creator/docs/file-explorer/) docs for general navigation.

### Playing a sound

Double-click a sound item to play it.

## Usages

Sounds are used in the following places:

- [Layouts](/en/creator/docs/layouts/)
- [Line action: BGM](/en/creator/docs/line-actions/bgm/)
- [Line action: Sound Effects](/en/creator/docs/line-actions/sfx/)

<!-- ## Keyboard shortcuts

The Sounds page inherits the general [File Explorer keyboard shortcuts](/en/creator/docs/file-explorer/#keyboard-shortcuts).

- `Enter`: Plays the selected sound. -->
