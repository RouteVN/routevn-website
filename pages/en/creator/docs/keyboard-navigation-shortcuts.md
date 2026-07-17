---
template: documentation
title: Keyboard Navigation Shortcuts
sidebarId: keyboard-navigation-shortcuts
---

Use these shortcuts to switch project pages and move through RouteVN Creator without using a mouse.

Press shortcut keys in sequence unless the shortcut includes `+`. For example, press and release `g`, then press and release `i` to open Images.

## Switch project pages

Start every project page shortcut with `g`, then enter the destination code. Press each next key within 1.5 seconds.

| Shortcut | Destination |
| --- | --- |
| `g p r` | Project |
| `g i` | Images |
| `g s p` | Spritesheets |
| `g c h` | Characters |
| `g s o` | Sounds |
| `g t r` | Transforms |
| `g a n` | Animations |
| `g p a` | Particles |
| `g v i` | Videos |
| `g c o` | Colors |
| `g f` | Fonts |
| `g t s` | Text Styles |
| `g l` | Layouts |
| `g c t` | Controls |
| `g v a` | Variables |
| `g s c` | Scenes |
| `g r` | Release Versions |
| `g w s` | Web Server |
| `g a b` | About |
| `g a p` | Appearance |

These shortcuts work only after you open a project. They are not active while you type in an input, text area, select menu, or other editable field.

The keys are case-insensitive. Do not hold `Ctrl`, `Command`, or `Alt`. If you press an unsupported key or wait too long, start again with `g`.

Some editor pages do not have a global shortcut because you must select a resource before opening them:

- Character Sprites.
- Scene Editor.
- Animation Editor.
- Layout Editor.

## Navigate the File Explorer

These shortcuts are available on Animations, Character Sprites, Characters, Colors, Controls, Fonts, Images, Layouts, Particles, Scenes, Sounds, Spritesheets, Text Styles, Transforms, Variables, and Videos.

| Shortcut | Action |
| --- | --- |
| `↓` or `j` | Select the next item |
| `↑` or `k` | Select the previous item |
| `→` or `l` | Expand the selected folder |
| `←` or `h` | Collapse the selected folder |
| `Ctrl+D` | Move forward by up to 10 items |
| `Ctrl+U` | Move backward by up to 10 items |

If no item is selected, a movement shortcut selects the first available item. Movement stops at the first or last item.

On Images and Character Sprites, press `Enter` to open a preview of the selected item.

The shortcuts do not run while you type in an editable control. `Alt` and `Command` shortcuts are left to the operating system. The only supported `Ctrl` shortcuts are `Ctrl+D` and `Ctrl+U`.

Read the [File Explorer guide](/en/creator/docs/file-explorer/) for mouse controls and item organization.

## Change the resource grid size

Use these shortcuts on resource pages that show grid size controls.

| Shortcut | Action |
| --- | --- |
| `+` | Zoom in and show fewer columns |
| `-` | Zoom out and show more columns |

These shortcuts are available on Animations, Character Sprites, Colors, Controls, Fonts, Images, Layouts, Particles, Sounds, Spritesheets, Text Styles, Transforms, and Videos.

They do not run while you type in an editable control or hold `Ctrl`, `Command`, or `Alt`.

## Navigate an image or character sprite preview

The full-screen preview on Images and Character Sprites supports these shortcuts.

| Shortcut | Action |
| --- | --- |
| `↓` or `j` | Show the next item |
| `↑` or `k` | Show the previous item |
| `Ctrl+D` | Move forward by up to 10 items |
| `Ctrl+U` | Move backward by up to 10 items |
| `←` or `h` | Show the item at its canvas-relative size |
| `→` or `l` | Fit the item to the preview |
| `Escape` or `Enter` | Close the preview |

In a preview, left and right change the display mode. They do not move between items.

## Navigate Scene Editor lines

The Scene Editor has two keyboard modes:

- Block mode selects and moves between whole lines.
- Text mode edits the selected line.

| Shortcut | Mode | Action |
| --- | --- | --- |
| `↓` or `j` | Block | Select the next line |
| `↑` or `k` | Block | Select the previous line |
| `Enter` | Block | Enter text mode at the end of the selected line |
| `i` or `Shift+I` | Block | Enter text mode at the start of the selected line |
| `Shift+A` | Block | Enter text mode at the end of the selected line |
| `Escape` | Text | Return to block mode on the current line |
| `↑` | Text | Move to the previous section from the first line boundary |
| `↓` | Text | Move to the next section from the last line boundary |

Read the [Scene Editor guide](/en/creator/docs/scene-editor/) to learn how scenes, sections, and lines work.
