---
template: documentation
title: Voice
seo:
  title: "Voice | RouteVN Creator Docs"
  description: "Voice plays voice audio on the current line."
sidebarId: voice
---

Voice plays voice audio on the current line.

Use Voice for spoken dialogue, narration, or other line-specific voice clips.

<video src="/public/creator/changelog/1-6-4-voice.mp4" controls playsinline preload="metadata" style="width: 100%; height: auto; display: block; border: 1px solid var(--border); box-sizing: border-box;"></video>

## Add a Voice action

To add voice audio to a line:

1. Open the line in the Scene Editor.
2. Add a Voice action.
3. Click `Select Voice`.
4. Select an audio file.
5. Preview the audio if needed.
6. Set Loop and Volume.
7. Click `Submit`.

## Supported formats

Voice accepts these audio formats:

- `mp3`
- `wav`
- `ogg`

Note: `ogg` may not be supported on macOS.

## Loop

Loop controls whether the voice clip repeats.

Use `Don't Loop` for normal dialogue voice lines.
Use `Loop` only when the voice audio should repeat.

## Volume

Volume controls how loud the voice clip is.

Use a value from 0 to 100. If you do not change the value, RouteVN Creator uses the default volume shown in the Voice action editor.

## Removing voice audio

To remove the selected voice audio from the action:

1. Right click the selected voice audio.
2. Click `Remove`.
3. Click `Submit`.

Voice audio is selected inside the Voice action. It does not need to be uploaded on the [Sounds](/en/creator/docs/sounds/) page first.
