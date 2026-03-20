---
template: documentation
title: Push Layered View
sidebarId: push-layered-view
---

Use this action to add a layered view on top of the current scene.

- `pushLayeredView.resourceId` is the overlay resource.
- The layered view is added as a new UI/visual layer.
- Useful for effects, modal visuals, or temporary overlays.
- Pair with pop layered view when the overlay should close.
- Keep overlays lightweight so they remain predictable on lower-end devices.
