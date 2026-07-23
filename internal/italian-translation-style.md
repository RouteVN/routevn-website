# Italian translation style notes

Use this guide for Italian RouteVN website copy, SEO text, UI, and documentation.

## Translation source

The current English RouteVN content and actual app behavior are the source of truth.

- Translate directly from English.
- Use other locales only as inspiration, never as the translation source.
- Resolve differences against English and verify app labels or behavior.

## Goal

Write natural, direct Italian for people who create visual novels. Rewrite the meaning instead of following English sentence structure.

Use standard Italian and the locale code `it`. Use a regional code such as `it-IT` only for region-specific content.

## Voice and writing

- Address the reader as `tu` and use direct instructions such as `Apri`, `Seleziona`, and `Fai clic`.
- Prefer short sentences and concrete benefits.
- Avoid formal `Lei`, stiff corporate language, slang, and unnecessary English.
- Use neutral phrases such as `chi crea` or `chi scrive` when gendered wording feels awkward.
- Use sentence case for headings and labels.
- Write accents and apostrophes correctly: `è`, `sì`, `più`, `perché`, `qual è`, and `un'applicazione`.
- Use `fai clic`, `doppio clic`, and `clic destro` consistently.
- Put exact UI labels in backticks.
- Preserve placeholders, variables, interpolation syntax, file names, and technical values.

## Core terminology

### Product and content

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Visual novel | `visual novel` | Keep lowercase and unchanged in the plural: `le visual novel`. |
| Visual novel creation | `creazione di visual novel` | Use `creare una visual novel` for one project. |
| Creator tool | `strumento per creare visual novel` | Prefer this over `creatore di visual novel`. |
| Visual novel engine | `motore per visual novel` | Use for RouteVN's technical runtime or architecture. |
| No coding | `senza programmare` | Use `senza codice` in compact headings or SEO text. |
| Project | `progetto` | |
| Story script | `sceneggiatura` | Use for the written story and writing workflow. |
| Technical script | `script` | Use for code-like files or exact technical concepts. |
| Resource | `risorsa` | Preferred for beginner-facing copy. |
| Asset | `asset` | Keep only in technical copy or exact UI labels. |
| Live preview | `anteprima in tempo reale` | Prefer over `editor live`. |

### Media and design

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Character | `personaggio` | Never use `carattere` for this meaning. |
| Character sprite | `sprite del personaggio` | Keep `sprite` unchanged. |
| Image | `immagine` | |
| Background | `sfondo` | |
| Event illustration | `illustrazione CG` | `CG` is enough when the context is clear. |
| Video | `video` | |
| Audio | `audio` | Use for the resource category. |
| Background music | `BGM` | Preferred term. Explain as `musica di sottofondo` only if needed. |
| Sound effects | `effetti sonori` | Add `SFX` when matching an app label. |
| Voice | `voce` | Use `doppiaggio` for voiced dialogue as a production feature. |
| Color | `colore` | Use `palette` for a reusable palette. |
| Font | `font` | Prefer over `carattere tipografico` in UI copy. |
| Writing system | `sistema di scrittura` | Use for Latin, Cyrillic, Japanese, and similar font metadata. |
| Text style | `stile del testo` | |
| Spritesheet | `foglio sprite` | Add `spritesheet` when matching an English UI or file term. |

### Story and editor

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Scene | `scena` | |
| Section | `sezione` | Do not use `capitolo` for a RouteVN section. |
| Line | `riga` | Use for a line in the Scene Editor. |
| Line Action | `azione della riga` | `Azione associata alla riga` is more natural in prose. |
| Dialogue | `dialogo` | |
| Narration | `narrazione` | |
| General written content | `testo` | Use when dialogue and narration do not need to be distinguished. |
| Choice | `scelta` | |
| Branching story | `storia ramificata` | Use `dialogo ramificato` for dialogue. |
| Branch | `diramazione` | Use for one branch in a graph or story. |
| Route | `percorso narrativo` | Never use `rotta`. |
| Ending | `finale` | |
| Scene Map | `mappa delle scene` | Explain it as the `flusso narrativo` when useful. |
| Node | `nodo` | |
| Variable | `variabile` | |
| Condition | `condizione` | Use `azione condizionale` for a conditional action. |

### Presentation and publishing

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Visual transition | `transizione` | For scene flow, use `passaggio`, `collegamento`, or `vai a`. |
| Transform | `trasformazione` | Explain with position, scala, rotazione, ancoraggio, and opacità. |
| Animation | `animazione` | |
| Particle effect | `effetto particellare` | |
| Layout | `layout` | Keep unchanged in the plural. |
| Layout Editor | `editor del layout` | |
| Controls resource | `controlli` | Use `comandi` for general keyboard, mouse, or player controls. |
| User interface | `interfaccia utente` | `UI` is acceptable after the first mention. |
| App page or menu | `schermata` | Use `schermo` for the display and `area di gioco` for the rendered canvas. |
| Export | `esportare` | Generating files. |
| Publish | `pubblicare` | Making a game available to players. |
| Release | `rilasciare` | Making a new game or software version available. |
| Distribution | `distribuzione` | A packaged platform build. |
| Web version | `versione web` | The exported HTML and JavaScript version. |

## Terms to avoid

| Avoid | Use instead |
| --- | --- |
| `novella visiva`, `romanzo visuale` | `visual novel` |
| `romanzo visivo` as the main category | `visual novel` |
| `Visual Novel`, `visual novels` in normal prose | `visual novel`, `le visual novel` |
| `creatore di visual novel` for the app | `strumento per creare visual novel` |
| `codifica`, `senza alcuna codifica` | `senza programmare` |
| `editor live` | `anteprima in tempo reale` |
| `potente` without a concrete benefit | State what the feature does. |
| `beni`, `attività`, or `patrimonio` for assets | `risorse` or `asset` |
| `folletto` for sprite | `sprite` |
| `carattere` for a story character | `personaggio` |
| `rotta` for a story route | `percorso narrativo` |

## Marketing and UI labels

Use natural Italian for marketing copy, but reproduce the app's exact label in instructions. If the app still shows an English label, keep it in English and explain it when needed.

Preferred marketing labels:

| English source | Italian label |
| --- | --- |
| Live Editor | `Anteprima in tempo reale` |
| Asset Manager | `Gestione delle risorse` |
| Layout Editor | `Editor del layout` |
| Scene Map | `Mappa delle scene` |
| Choices and Branching | `Scelte e diramazioni` |
| Publishing | `Pubblica sul web` |

Good product copy:

- `RouteVN Creator è un'applicazione gratuita e open source per creare visual novel senza programmare.`
- `Modifica il testo o un effetto e controlla subito il risultato nell'anteprima.`
- `Organizza sfondi, sprite dei personaggi e audio in un unico progetto.`
- `Collega le scelte a scene diverse per creare una storia ramificata.`
- `Esporta la versione web e pubblicala online.`

## Visual novel UI

- Use `cronologia dei dialoghi` for backlog. `Cronologia` is suitable for a compact label.
- Use `Salva` and `Carica` for buttons; use `salvataggio` and `caricamento` for the features or data.
- Describe rollback as `tornare indietro nel dialogo`.
- Use `modalità automatica` in prose and keep `Auto` for an exact compact label.
- Explain skip as `avanzamento rapido` or `salta il testo già letto`.
- Use `stile ADV` and `stile NVL` for layout presets.
- Use `modalità ADV` and `modalità NVL` for text-display behavior.

## Links and SEO

When an Italian translation of a target page does not exist, use Italian link labels but point them to the existing English page. Do not create `/it/...` links before the target exists or imply that English documentation is Italian.

Useful SEO phrases:

- `creare visual novel`
- `programma per creare visual novel`
- `editor per visual novel`
- `motore per visual novel`
- `visual novel senza programmazione`
- `visual novel senza codice`
- `software gratuito per visual novel`
- `storia interattiva`
- `dialoghi ramificati`

Use `romanzo visivo` only as a secondary discovery phrase.

## Review checklist

Before publishing, check that:

- The Italian reads naturally instead of following English structure.
- `visual novel` is lowercase and unchanged in the plural.
- Route, character, sprite, and asset terminology follows this guide.
- Marketing labels are natural and instructional labels match the app exactly.
- The page uses one consistent form of address and terminology.
- Accents, apostrophes, and capitalization are correct.
- Buttons, cards, and mobile layouts do not clip longer Italian text.
- Placeholders and technical values are unchanged.
- Links point to pages that exist.
- SEO phrases describe features RouteVN actually provides.
