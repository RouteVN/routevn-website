---
template: documentation
title: Update Variable
sidebarId: update-variable
---

Update Variable changes one or more [variables](/creator/docs/variables/) when the action runs.

Use it for story flags, counters, settings, unlocks, and any other value that should change during the game.

## Adding operations

To add a variable operation:

1. Add an Update Variable action.
2. Click `Add Operation`.
3. Select a variable.
4. Select an operation.
5. Fill the value when the operation needs one.
6. Click `Save Operation`.
7. Add more operations if needed.
8. Submit the action.

One Update Variable action can contain multiple operations.

## Operations

The available operations depend on the variable type.

| Type | Available operations |
| --- | --- |
| String | Set to |
| Number | Set to, Increment by, Decrement by, Multiply by, Divide by |
| Boolean | Set to, Toggle |

`Toggle` does not need a value. It switches a boolean variable between `true` and `false`.

## Usages

Update Variable can be used in the following places:

- Scene line actions.
- [Controls](/creator/docs/controls/).
- [Layout editor](/creator/docs/layouts/#layout-editor) interaction actions.
