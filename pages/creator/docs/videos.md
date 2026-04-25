---
template: documentation
title: Videos
sidebarId: videos
---

<!-- [screenshot of video page] -->

On this page you can upload all video files for your project.
Common categories include intro video, cutscenes. Video can also act as a background.

## Video resolution

- Video dimensions should match or be relative to the project [resolution](/creator/docs/projects/#resolution).
- Video size optimization is especially important. Make sure your videos are compressed and optimized for file size.
- Videos that are unnecessarily large may slow down the app and make the exported Visual Novel bundle larger than necessary.

## Supported video formats

The following file formats are supported:

- `mp4`

## Upload videos

You can upload single or multiple videos at once.

There are 2 ways to upload:

- Click the upload button and select one or more videos.
- Drag and drop videos directly into the area below the folder.

When you upload multiple videos, RouteVN Creator uploads them one by one. This is usually fast, but it can take time for large batches. Stay on this page and keep the application open until the upload finishes.

## Updating a video

There is a significant difference between updating an existing video and uploading a new one.

If a video is already used in places such as layouts or line actions, replacing the video updates those references automatically.

If you upload a new video instead, you need to manually update the video reference in each layout or line action that uses it.

To update a video:

1. Select a video.
2. In the top right, click the video name or edit icon.
3. Click the video file to upload a new one.

## Navigating the page

### File explorer

Read the [File Explorer](/creator/docs/file-explorer/) docs for general navigation.

### Previewing a video

- Double click a video item to start playing it.

## Usages

Videos are treated very similarly to images. Most things that you can do to images, such as transforms, can also be done to videos.

Videos are used in the following places:

- [Layouts](/creator/docs/layouts/)
- [Line action: Background](/creator/docs/line-actions/background/)
- [Line action: Visuals](/creator/docs/line-actions/visual/)

## Keyboard shortcuts

The Videos page inherits the general [File Explorer keyboard shortcuts](/creator/docs/file-explorer/#keyboard-shortcuts).

- `Enter`: Plays the selected video.
