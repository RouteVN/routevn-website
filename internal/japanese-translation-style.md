# Japanese translation style notes

This document records translation choices for Japanese RouteVN pages.

Use this for website copy, SEO text, landing pages, product pages, and future Japanese documentation.

## Goal

Japanese copy should sound like a Japanese product page for a novel game creation tool.

Do not translate English literally. Rewrite copy so it is clear, natural, and useful for Japanese users.

## Core terminology

Use these terms consistently:

- `ノベルゲーム`: Use this as the main genre term.
- `ノベルゲーム制作`: Use for creating novel games.
- `制作ツール`: Use for RouteVN Creator in general product copy.
- `ゲーム制作`: Use when talking about making games broadly.
- `リアルタイムプレビュー`: Use for live preview.
- `素材`: Use instead of `アセット` in beginner-facing copy.
- `素材管理`: Use instead of `アセットマネージャー` when possible.
- `画像`: Use for image.
- `動画`: Use for video.
- `音声`: Use for audio as a resource category. Use `音楽と効果音` when explicitly distinguishing music and sound effects.
- `立ち絵`: Use for character sprites in visual novel context.
- `色`: Use for color in app UI labels and design controls.
- `フォント`: Use for font.
- `文字体系`: Use for font metadata meaning writing system/script. Do not use `スクリプト` for this meaning.
- `選択肢`: Use for choices.
- `分岐`: Use for branching.
- `シーン`: Use for scenes.
- `バックログ`: Use for the player-facing dialogue log/backlog. Use `会話ログ` when a plain descriptive phrase is clearer.
- `ADVスタイル`: Use for ADV dialogue layout/style labels.
- `NVLスタイル`: Use for NVL dialogue layout/style labels. Use `NVLモード` when referring to engine behavior rather than a layout preset.
- `トランジション`: Use for visual transitions such as image, layer, screen, or animation transitions.
- `遷移`: Use for scene or section flow when describing movement from one story node to another. Use `分岐` when the transition is specifically a branch choice.
- `トランスフォーム`: Use for transform/visual transform.
- `レイアウト`: Use for layout.
- `テキストスタイル`: Use for text style.
- `公開`: Use for publishing a game.
- `出力`: Use for export output when talking about generated files.

Avoid these as primary terms:

- `ビジュアルノベル`: Avoid for Japanese product copy. Use `ノベルゲーム`.
- `ライブエディター`: Avoid unless there is a strong reason. Prefer `リアルタイムプレビュー`.
- `強力な`: Usually sounds like a literal translation of "powerful". Prefer a concrete benefit.
- `アセット`: Too technical for broad landing-page copy. Prefer `素材`.
- `コーディングなし`: Understandable, but less natural than `プログラミング不要` or `コードを書かずに`.
- `カラー`: Avoid as the primary app UI term for color. Prefer `色`; use `配色` for color scheme/palette wording when natural.
- `履歴`: Too broad for dialogue backlog. Prefer `バックログ` or `会話ログ`.
- `ADV会話` / `NVL会話`: Avoid for layout type names. Prefer `ADVスタイル` / `NVLスタイル`.
- `対応スクリプト`: Misleading for font metadata because `スクリプト` reads as code. Prefer `対応文字体系`.

## Tone

Use clear, direct Japanese.

- Prefer short sentences.
- Use `です` / `ます` for public-facing copy.
- Prefer concrete benefits over abstract adjectives.
- Write for individual creators, writers, artists, and hobbyists.
- Avoid stiff corporate phrasing.
- Avoid overly casual internet slang.

## Product positioning

RouteVN Creator should be described as:

- A tool for `ノベルゲーム制作`.
- Usable without programming.
- Useful for scenario, illustration, layout, branching, preview, and publishing workflows.
- Beginner-friendly, but not toy-like.

Good phrasing:

- `プログラミング不要でノベルゲームを制作できます。`
- `シナリオや演出を変更すると、プレビュー画面にすぐ反映されます。`
- `素材やシーンが増えても整理しやすい構成です。`
- `完成したゲームをWeb向けに出力して公開できます。`

Avoid:

- `コーディングなしでビジュアルノベルを制作できます。`
- `強力なライブエディター`
- `ビジュアルノベルに必要な機能を実装しています。`
- `アセットを一つのワークスペースで管理できます。`

## Page headings

Headings should describe the benefit plainly.

Preferred examples:

- `あなたの物語をノベルゲームに`
- `リアルタイムプレビュー`
- `ノベルゲーム制作に必要な機能をひとつに`
- `FAQ`

Avoid headings that feel translated from English:

- `ビジュアルノベルに命を吹き込もう`
- `強力なライブエディター`
- `すべてを備えたビジュアルノベル機能`

## Feature names

Use Japanese labels when they are clearer:

- `画面レイアウト編集`, not `レイアウトエディター`, for marketing/card headings.
- `素材管理`, not `アセットマネージャー`.
- `選択肢と分岐`, not `Choices and Branching`.
- `公開`, not `Publishing`.

Keep established UI/tool terms if the app itself uses them in English, but explain them in Japanese if needed.

Distinguish between product marketing copy and in-app feature names:

- Use natural Japanese benefit labels in page headings and cards.
- Use exact in-app names only when the page is teaching where to click or what the user sees in the UI.
- If an English source label is a feature name, do not automatically transliterate it. First ask whether a Japanese user would understand the benefit from the label alone.

Examples:

- Marketing/card heading: `画面レイアウト編集`.
- In-app feature reference: `レイアウトエディター`.
- Marketing/card heading: `素材管理`.
- In-app feature reference: `Asset Manager` or the app's exact UI label, if the UI is not localized.

## Visual novel engine terminology

Use common Japanese visual novel engine terms when translating RouteVN Creator UI and docs. Ren'Py Japanese docs, TyranoScript, and Light.vn Japanese materials are useful references for category language, but do not copy their product wording.

In app UI:

- Use `画像`, `音声`, `動画`, `キャラクター`, `立ち絵`, `選択肢`, `トランジション`, `トランスフォーム`, `レイアウト`, and `テキストスタイル` consistently.
- Use `トランジション` only for visual effects. For story graph movement, section links, and scene flow, prefer `遷移`, `移動`, or `分岐` depending on the UI action.
- Use `バックログ` for a player-facing dialogue log/history feature. Use `履歴` only for generic history outside dialogue/backlog context.
- Use `ADVスタイル` and `NVLスタイル` when naming RouteVN layout presets. Use `ADVモード` and `NVLモード` when explaining engine-level text display modes.
- Use `色` for color labels such as resource names, form fields, and design controls. Use `配色` when the concept is a palette or scheme.
- Use `文字体系` for font metadata meaning Latin, Japanese, Cyrillic, etc. Reserve `スクリプト` for code/scripts.

For layout explanations:

- ADV refers to a dialogue window style, usually near the bottom of the screen.
- NVL refers to a novel-style full-screen or broad text presentation that can show multiple lines/pages of dialogue and narration.
- Backlog/dialogue history should be described as `バックログ` or `会話ログ`, not just `履歴`.

## Export and publishing wording

Use `出力` when referring to generated files.

Use `公開` when referring to making the game available to users.

Example:

`現在はWeb版として出力できます。HTMLとJavaScriptのファイルとして出力し、Web上で公開できます。`

## Links on Japanese pages

Until Japanese docs exist, Japanese landing pages may link to existing English pages.

When doing this:

- Keep the visible label Japanese, such as `ドキュメント`.
- Point the link to the existing `/en/...` page.
- Do not create `/ja/...` links unless that page exists.

## SEO notes

Japanese SEO text should include natural Japanese search terms:

- `ノベルゲーム制作`
- `ノベルゲーム制作ツール`
- `プログラミング不要`
- `ノーコード`
- `ゲーム制作`

Use `ビジュアルノベル` only as a secondary keyword if needed.

## Review checklist

Before finishing any Japanese translation, review the page line by line.

Check every heading, card title, CTA, FAQ label, SEO field, and alt text for these issues:

- Literal English structure.
- Unnatural transliteration.
- English feature names used where Japanese benefit wording would be clearer.
- Avoided terms from this document.
- Mixed terminology for the same concept.
- Links that point to `/ja/...` before the Japanese target page exists.
- SEO terms that do not match likely Japanese search language.

For every feature/card title, ask:

- Is this a public marketing label or an exact in-app UI reference?
- Would a Japanese creator understand what this does without reading the English source?
- Can this be phrased as a natural benefit rather than a translated noun phrase?

Do not mark a Japanese page ready until this checklist has been applied.

## Reference terminology

These notes are based on common Japanese wording used by related novel game engines, creation tools, and creator communities:

- `ノベルゲーム制作`
- `ノベルゲーム開発`
- `ゲーム制作`
- `画像`
- `立ち絵`
- `音声`
- `音楽と効果音`
- `選択肢`
- `遷移`
- `バックログ`
- `ADVスタイル`
- `NVLスタイル`
- `トランジション`
- `トランスフォーム`
- `色`
- `文字体系`
- `直感的な操作`
- `リアルタイムプレビュー`
- `作成・公開`
- `公開`

Do not copy wording from other products. Use shared category terminology so RouteVN sounds familiar to Japanese users.
