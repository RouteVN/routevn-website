---
template: documentation
title: Input
seo:
  title: "Input | RouteVN Creator Docs"
  description: "Input shows a form to the player and saves submitted text into string variables."
sidebarId: input
---

Input shows a form to the player and saves submitted text into string variables.

Use Input for player names, profile fields, short answers, codes, or any text the story should remember.

<video src="/public/creator/changelog/1-5-0-input.mp4" controls playsinline preload="metadata" style="width: 100%; height: auto; display: block; border: 1px solid var(--border); box-sizing: border-box;"></video>

## Requirements

Input needs these project resources before it can be used:

- An [Input layout](/en/creator/docs/layouts/#input) with at least one Input element and an Input Submit Container.
- A string [variable](/en/creator/docs/variables/) for each input field.

Only layouts with the `Input` layout type appear in the Input action.

## Add an Input action

After adding Input to a scene line, select the [Input layout](/en/creator/docs/layouts/#input) to show its field rows.

Click each field row, choose the string variable that should receive the submitted value, adjust any field options, and click `Save Field`.

Repeat until every field is mapped, then click `Submit`.

## Field options

Each field row comes from an Input element in the selected layout.

### Variable

Variable is where the submitted value is saved.

Only string variables are available. Create the variable first on the [Variables](/en/creator/docs/variables/) page if it does not appear.

### Required

Required controls whether the player must enter a value before submitting.

Use Required for values the story needs immediately, such as a player name.

### Trim

Trim controls whether leading and trailing whitespace is removed before saving.

Keep Trim enabled for most text fields. Disable it only when spaces at the start or end are meaningful.

### Multiline

Multiline allows the field to accept multiple lines of text.

Use Multiline for longer answers. Keep it disabled for short values such as names or codes.

### Placeholder

Placeholder is hint text shown inside the input field before the player types.

Use it to show an example value, such as `Enter your name`.

### Max Length

Max Length limits how many characters the player can enter.

If the layout field does not define a max length, the Input action starts with `32`.

## What happens on submit

When the player submits the form, RouteVN saves each field value into its mapped variable and moves to the next line.

Input does not currently show custom submit action choices in the action editor.
