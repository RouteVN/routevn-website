---
template: documentation
title: Choices
seo:
  title: "Choices | RouteVN Creator Docs"
  description: "Choices show a list of options that the player selects to branch the story. Each choice item runs its own action."
sidebarId: choices
---

<img
  src="/public/creator/docs/reference/choices-1.png"
  alt="Choices editor and preview"
  style="width: 100%; height: auto; display: block; border: 1px solid var(--border); box-sizing: border-box;" width="1920" height="1080" decoding="async"
/>

Choices show a list of options for the player to select.

Each choice item has text and a click action. When the player selects a choice, RouteVN Creator runs that item's action.

## Choices Layout

Pick the [choice layout](/en/creator/docs/layouts/#choice) used to display the options. Only layouts with the `Choice` type are shown here.

## Choice items

Choice Items are the options shown to the player.

To add a choice item:

1. Click `Add Choice`.
2. Enter the choice content.
3. Select the action.
4. Fill any action fields that appear.
5. Click `Save Choice`.

To edit a choice item, click the item in the list.

To delete a choice item, right click the item and select `Delete`.

## Choice item fields

### Choice Content

Choice Content is the text shown for that option.

This field is required.

### Action

Action controls what happens when the player selects the choice.

Use `Continue` when the choice should move to the next line.

Use `Move to Section` when the choice should jump to another section. Select the scene and section to use as the target. This action uses the same target behavior as [Section Transition](/en/creator/docs/line-actions/section-transition/).
