---
template: documentation
title: Set Next Line Config
seo:
  title: "Set Next Line Config | RouteVN Creator Docs"
  description: "Set Next Line Config controls how the player advances to the next line."
sidebarId: next-line-config
---

Set Next Line Config controls how the player advances to the next line.

Use it to disable click-to-advance for cutscenes, or to make a line advance automatically after a delay.

## Apply Mode

Apply Mode controls how long this config is used.

Use `Single Line` when the config should apply only to the next line.

Use `Persistent` when the config should stay active until another Set Next Line Config action changes it.

## Manual

Manual controls whether the player can click to move to the next line.

In the app, this is the `Click to Advance` field.

Use `Yes` for normal dialogue flow.

Use `No` when the line should not advance from a general click, such as during a timed sequence or video.

## Auto Advance

Auto Advance controls whether the line moves forward automatically.

## Trigger

Trigger controls when the auto-advance timer starts.

Trigger appears when Auto Advance is enabled.

Use `Text Complete` when the delay should start after the line content and animations complete.

Use `Line Start` when the delay should start as soon as the line begins.

## Delay interval

Delay interval controls how long to wait before moving to the next line.

Delay interval appears when Auto Advance is enabled.

Enter the delay in milliseconds. For example, `1000` means 1 second.
