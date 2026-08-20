---
template: documentation
title: Variables
seo:
  title: "Variables | RouteVN Creator Docs"
  description: "Variables store values that can change while the player goes through the Visual Novel."
sidebarId: variables
---

Variables store values that can change while the player goes through the Visual Novel.

Use variables for story flags, counters, player choices, settings, unlocks, and other state that should affect later lines or layouts.

Variables are available in the Project area under System.

## Creating a variable

Click `Add` in a variable folder to create a variable.

You will be asked to fill the following fields:

- Name (required)
- Description
- Tags
- [Scope](#scopes) (required)
- [Type](#types) (required)
- Default

Variable names must be unique.

Read the [File Explorer](/en/creator/docs/file-explorer/) docs for general folder navigation.

## Scopes

Scope controls how long the value should live.

| Scope | Use for |
| --- | --- |
| Context | Story state for the current playthrough, such as flags, counters, relationship points, or inventory-like values. |
| Device | Settings and preferences that should stay on the current device, such as text speed or volume. |
| Account | Account-level progress, such as completed story routes or unlocked bonus content. |

## Types

Type controls which values and operations are available.

| Type | Use for | Common examples |
| --- | --- | --- |
| String | Text values. | Player name, selected route, current menu page. |
| Number | Numeric values. | Score, affection points, counters, volume. |
| Boolean | True or false values. | Has seen scene, is unlocked, choice selected. |

The type is selected when the variable is created. When editing an existing variable, the type is read-only.

## Default values

Default is the starting value for the variable.

If you leave the default empty, RouteVN Creator uses a default value based on the type:

- String: empty text
- Number: `0`
- Boolean: `false`

## Usages

Variables are used in the following places:

- [Line action: Update Variable](/en/creator/docs/line-actions/update-variable/)
- [Line action: Input](/en/creator/docs/line-actions/input/)
- [Line action: Conditional](/en/creator/docs/line-actions/conditional/)
- [Controls](/en/creator/docs/controls/)
- [Layouts](/en/creator/docs/layouts/)
