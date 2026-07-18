---
template: documentation
title: Conditional
sidebarId: conditional
---

Conditional checks variable values and runs actions when a condition matches.

Use Conditional for story logic based on variables, such as route flags or values that change where the story goes.

Conditional does not show choices to the player. Use [Choices](/en/creator/docs/line-actions/choices/) when the player should select an option.

<video src="/public/creator/changelog/1-5-0-conditional.mp4" controls playsinline preload="metadata" style="width: 100%; height: auto; display: block; border: 1px solid var(--border); box-sizing: border-box;"></video>

## Requirements

Conditional needs a [variable](/en/creator/docs/variables/) before you can add a variable branch.

The command-line Conditional editor supports these variable types:

- String
- Number
- Boolean

The editor can create these condition operators:

- Equals
- Does Not Equal

If a string variable uses enum values, the condition value is selected from those enum values.

## Add a Conditional action

To add a Conditional action to a scene line:

1. Add a Conditional action.
2. Click `Add Branch`.
3. Select the variable to check.
4. Select `Equals` or `Does Not Equal`.
5. Enter or select the comparison value.
6. Add the actions that should run when the branch matches.
7. Click `Save Branch`.
8. Add more branches if needed.
9. Add a default branch if the line needs fallback behavior.
10. Click `Submit`.

## Branches

A branch has a condition and a set of actions.

When the line runs, RouteVN checks branches from top to bottom. It runs the actions in the first matching branch, then stops checking the rest.

If no branch matches, RouteVN runs the default branch when one exists. If there is no default branch, Conditional runs no actions.

## Default branch

The default branch is the fallback branch. It does not have a condition.

Use it when the story should always do something even if no condition matches.

The default branch must be the last branch. RouteVN Creator keeps new condition branches above the default branch.

## Branch actions

The command-line Conditional editor currently supports these branch actions:

- [Section Transition](/en/creator/docs/line-actions/section-transition/)
- [Reset Story At Section](/en/creator/docs/line-actions/reset-story-at-section/)
- [Update Variable](/en/creator/docs/line-actions/update-variable/)

Use Section Transition when a matching branch should move the story to another section.

Use Reset Story At Section when a matching branch should jump to a section and reset story context.

Use Update Variable when a matching branch should set or change another variable.

## Examples

Route by a boolean flag:

1. Create a boolean variable named `Helped Aki`.
2. Add a Conditional action.
3. Add a branch where `Helped Aki` equals `true`.
4. Add a Section Transition action to the Aki route section.
5. Add a default branch.
6. Add a Section Transition action to the common route section.
7. Click `Submit`.

Route by a string enum:

1. Create a string variable named `Selected Route`.
2. Enable enum values such as `common`, `aki`, and `ren`.
3. Add one branch for each route value.
4. Add a Section Transition action inside each branch.
5. Add a default branch if unknown values should go to a safe section.
6. Click `Submit`.
