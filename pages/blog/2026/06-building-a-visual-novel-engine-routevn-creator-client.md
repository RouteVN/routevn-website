---
template: post
author: han4wluc
title: Building a Visual Novel Engine Part 3 - RouteVN Creator
tags: [blogPost]
date: '2026-02-11'
seo:
  title: Building a Visual Novel Engine Part 3 - RouteVN Creator
  description: RouteVN Creator is the desktop-first editor that turns Route Engine into a no-code workflow. This post explains the client architecture, offline data model, scene editor runtime loop, and export pipeline.
  ogType: article
---

# Building a Visual Novel Engine Part 3 - RouteVN Creator

This series will explain the whole architecture and design of RouteVN Creator. By the end of the series, you should have a good understanding of how RouteVN Creator works, and essentially how to build a Visual Novel engine from scratch.

This is part 3 of a 3 part series:

- [Part 1 - Route Graphics: a declarative graphics and sound library](/blog/2026/03-building-a-visual-novel-engine-part-1-route-graphics)
- [Part 2 - Route Engine: a Visual Novel engine built on Route Graphics](/blog/2026/05-building-a-visual-novel-engine-route-engine)
- Part 3 - RouteVN Creator: a Desktop application to create Visual Novels without any coding

## RouteVN Creator

RouteVN Creator is the creator-facing product in this architecture.

Route Graphics is responsible for rendering.
Route Engine is responsible for Visual Novel runtime logic.
RouteVN Creator is responsible for authoring experience.

In short: this is the no-code layer.

The main constraints were:

- No coding required from creators
- Fast local editing and preview
- Works in both desktop and web environments
- Can eventually support collaborative sync without rewriting the data model

In this article, we'll:

- Walk through the codebase structure
- Explain the UI architecture pattern
- Explain the event-sourced offline data model
- Break down the Scene Editor runtime loop
- Explain the versioning and distribution pipeline

## Codebase Structure

The client repository is currently organized like this:

```text
routevn-creator-client/
  src/
    pages/              # route-level features (projects, scenes, scene-editor, resources, versions)
    components/         # reusable building blocks (lines-editor, whiteboard, system-actions, etc.)
    deps/
      services/         # appService, projectService, graphicsService, audioService
      infra/            # web + tauri adapters (db, file picker, updater, repository adapters)
    utils/              # projectData construction, bundle creation, file processing helpers
    setup.web.js        # web composition root
    setup.tauri.js      # desktop composition root
  src-tauri/            # Rust shell + Tauri plugins/capabilities
  static/templates/     # starter repository data and template files
  scripts/              # build and runtime bundle scripts
```

At the time of writing, the `src` tree has around:

- 24 page modules
- 33 component modules
- 171 `view/store/handlers` files

## UI Layer Pattern

RouteVN Creator uses a consistent module pattern:

- `*.view.yaml` for declarative UI
- `*.store.js` for local state/selectors
- `*.handlers.js` for events and side effects

This keeps features isolated and predictable.

For example, app routing is handled declaratively in `src/pages/app/app.view.yaml`:

```yaml
$elif currentRoutePattern == "/project/scenes":
  - rvn-scenes: []
$elif currentRoutePattern == "/project/scene-editor":
  - rvn-scene-editor: []
```

This pattern scales well because every page/component follows the same shape.

## Shared Services and Platform Adapters

The web and desktop apps share almost all domain code.

Both entry points compose the same core services:

- `appService`
- `projectService`
- `graphicsService`
- `audioService`
- `pendingQueueService`

The difference is infrastructure adapters:

- Web: IndexedDB + browser file APIs (`src/deps/infra/web`)
- Desktop: SQLite + native dialogs/filesystem via Tauri (`src/deps/infra/tauri`)

This split keeps business logic stable while allowing platform-specific optimizations.

## Repository and Offline-First State

The central design decision is event sourcing with `insieme`.

`projectService` creates a repository per project and writes events (`set`, `treePush`, `treeUpdate`, `treeDelete`, etc.) instead of mutating random objects directly.

State is organized as hierarchical `tree + items` collections for resources and scenes. This is why file explorers, grouped resources, and scene hierarchies stay consistent across the app.

```js
const repository = createRepository({
  originStore: store,
  snapshotInterval: 500,
});
await repository.init({ initialState: initialProjectData });
```

Why this matters:

- Offline writes are instant
- Full state can be rebuilt from events
- Versions can point to an event index
- Collaboration support can be added later by syncing event streams

## Scene Editor Runtime Loop

The Scene Editor is the most interesting part of the client:

This is also the one users are like to spend the most time on, because you do the actual writing here.

The key element is the text editor. 

It is a block based line editor, meaning each line is selectable. When the user moves to different lines, the preview will update directly.

This interaction, was not so eash ty do with a full textarea, and so we added special dealings, especially in the underlying data structure.



We implemented with using <div contenteditable>


## Asset Processing Pipeline

`projectService.uploadFiles()` does type-aware processing:

- Images: dimensions extraction
- Audio: waveform extraction + compressed metadata storage
- Video: thumbnail extraction
- Fonts: validation + dynamic loading

Storage differs by platform, but interface stays the same:

- Web stores blobs in IndexedDB
- Tauri stores files in `<project>/files` and serves via `convertFileSrc`

That lets all UI components use a single `getFileContent(fileId)` API.

## Scene Graph UX

The Scenes page uses a whiteboard model with:

- Drag-and-drop scene nodes
- Pan/zoom with fixed zoom steps
- Transition arrows generated from section transitions and choices
- Minimap for navigation

Viewport state (zoom/pan) is persisted in user config, so editors reopen with familiar context.

## Versioning and Distribution

Versions are lightweight pointers to event history:

- Saving a version stores `{ id, name, actionIndex, createdAt }`
- Exporting a version reconstructs state at that `actionIndex`
- The app bundles project data + assets into a binary package
- Distribution zip adds runtime files (`index.html`, `main.js`, `package.bin`)

Bundle format (from `bundleUtils.js`):

```text
[version(1)] [indexLength(4)] [reserved(11)] [index(JSON)] [assets...] [instructions(JSON)]
```

This allows deterministic builds from historical project states.

## Why This Architecture Works

This architecture gives us three important properties:

- Clear separation: UI authoring, runtime simulation, and persistence are independent layers
- Cross-platform parity: same feature code works in web and desktop with adapter swaps
- Long-term flexibility: event log model supports versioning now and collaboration later

## Conclusion

RouteVN Creator is where the engine architecture becomes a creator product.

Part 1 and Part 2 were about rendering and runtime execution. Part 3 is about turning those capabilities into a usable workflow: edit, preview, iterate, version, and export.

This is still evolving, but the current structure has proven robust enough to keep adding features without losing control over complexity.
