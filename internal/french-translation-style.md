# French translation style notes

Use this guide for French RouteVN website copy, SEO text, UI, and documentation.

## Translation source

The current English RouteVN content and actual app behavior are the source of truth.

- Translate directly from English.
- Use other locales only as inspiration, never as the translation source.
- Resolve differences against English and verify app labels or behavior.

## Goal

Write natural, direct French for people who create visual novels. Preserve the English meaning without following its sentence structure.

Use standard French and the locale code `fr`. Use a regional code such as `fr-FR` only for region-specific content.

## Voice and writing

- Address the reader as `vous` and use instructions such as `Ouvrez`, `Sélectionnez`, and `Cliquez`.
- Prefer short sentences and concrete benefits.
- Avoid switching between `vous` and `tu`, stiff corporate language, slang, and unnecessary English.
- Use neutral phrases such as `les personnes qui créent` when gendered wording feels awkward.
- Use sentence case for headings and labels.
- Write accents, apostrophes, and ligatures correctly, including `à`, `é`, `è`, `ç`, `œ`, and `l’application`.
- Follow French spacing before `:`, `;`, `?`, and `!`, and inside French quotation marks.
- Use `cliquez`, `double-cliquez`, and `clic droit` consistently.
- Put exact UI labels in backticks.
- Preserve placeholders, variables, interpolation syntax, file names, and technical values.

## Core terminology

### Product and content

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Visual novel | `visual novel` | Keep lowercase in prose. Use the plural `visual novels`. |
| Visual novel creation | `création de visual novels` | Use `créer un visual novel` for one project. |
| Creator tool | `outil de création de visual novels` | Prefer this over `créateur de visual novels`. |
| Visual novel engine | `moteur de visual novel` | Use for RouteVN's technical runtime or architecture. |
| No coding | `sans coder` | Use `sans code` in compact headings or SEO text. |
| Project | `projet` | |
| Story script | `scénario` | Use for the written story and writing workflow. |
| Technical script | `script` | Use for code-like files or exact technical concepts. |
| Resource | `ressource` | Preferred for beginner-facing copy. |
| Asset | `asset` | Keep only in technical copy or exact UI labels. |
| Live preview | `aperçu en temps réel` | Prefer over `éditeur live`. |

### Media and design

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Character | `personnage` | Never use `caractère` for this meaning. |
| Character sprite | `sprite de personnage` | Use the plural `sprites`. |
| Image | `image` | |
| Background | `arrière-plan` | Use `décor` for background artwork in marketing copy. |
| Event illustration | `illustration CG` | `CG` is enough when the context is clear. |
| Video | `vidéo` | |
| Audio | `audio` | Use for the resource category. |
| Background music | `BGM` | Preferred term. Explain as `musique de fond` only if needed. |
| Sound effects | `effets sonores` | `Bruitages` is acceptable in production-focused copy. |
| Voice | `voix` | Use `doublage` for voiced dialogue as a production feature. |
| Color | `couleur` | Use `palette` for a reusable palette. |
| Font | `police` | Use `police de caractères` when context is unclear. |
| Writing system | `système d’écriture` | Use for Latin, Cyrillic, Japanese, and similar font metadata. |
| Text style | `style de texte` | |
| Spritesheet | `feuille de sprites` | Add `spritesheet` when matching an English UI or file term. |

### Story and editor

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Scene | `scène` | |
| Section | `section` | Do not use `chapitre` for a RouteVN section. |
| Line | `ligne` | Use for a line in the Scene Editor. |
| Line Action | `action de ligne` | `Action associée à la ligne` is more natural in prose. |
| Dialogue | `dialogue` | |
| Narration | `narration` | |
| General written content | `texte` | Use when dialogue and narration do not need to be distinguished. |
| Choice | `choix` | |
| Branching story | `récit à embranchements` | Use `dialogue ramifié` for dialogue. |
| Branch | `embranchement` | Use for one branch in a graph or story. |
| Route | `parcours narratif` | Prefer over the English loan word in general copy. |
| Ending | `fin` | |
| Scene Map | `carte des scènes` | Explain it as the `flux narratif` when useful. |
| Node | `nœud` | |
| Variable | `variable` | |
| Condition | `condition` | Use `action conditionnelle` for a conditional action. |

### Presentation and publishing

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Visual transition | `transition` | For scene flow, use `passage`, `lien`, or `aller à`. |
| Transform | `transformation` | Explain with position, échelle, rotation, ancrage, and opacité. |
| Animation | `animation` | |
| Particle effect | `effet de particules` | |
| Layout | `mise en page` | Use for RouteVN's reusable UI and presentation structures. |
| Layout Editor | `éditeur de mise en page` | |
| Controls resource | `commandes` | Use for keyboard, mouse, and player controls. |
| User interface | `interface utilisateur` | `UI` is acceptable after the first mention or for an exact label. |
| App page or menu | `écran` | Use `zone de jeu` for the rendered game canvas. |
| Export | `exporter` | Generating files. |
| Publish | `publier` | Making a game available to players. |
| Release | `publier une version` | Use `sortie` as the noun when appropriate. |
| Distribution | `distribution` | A packaged platform build. |
| Web version | `version Web` | The exported HTML and JavaScript version. |

## Terms to avoid

| Avoid | Use instead |
| --- | --- |
| `nouvelle visuelle`, `roman graphique` | `visual novel` |
| `roman visuel` as the main category | `visual novel` |
| `Visual Novel` in normal prose | `visual novel` |
| `créateur de visual novels` for the app | `outil de création de visual novels` |
| `aucun codage requis` | `sans coder` |
| `éditeur live` | `aperçu en temps réel` |
| `puissant` without a concrete benefit | State what the feature does. |
| `actif` for an asset | `ressource` or `asset` |
| `caractère` for a story character | `personnage` |
| `route` in broad explanatory copy | `parcours narratif` |

## Marketing and UI labels

Use natural French for marketing copy, but reproduce the app's exact label in instructions. If the app still shows an English label, keep it in English and explain it when needed.

| English source | French label |
| --- | --- |
| Live Editor | `Aperçu en temps réel` |
| Asset Manager | `Gestion des ressources` |
| Layout Editor | `Éditeur de mise en page` |
| Scene Map | `Carte des scènes` |
| Choices and Branching | `Choix et embranchements` |
| Publishing | `Publier sur le Web` |

Good product copy:

- `RouteVN Creator est une application gratuite et open source qui permet de créer des visual novels sans coder.`
- `Modifiez le texte ou un effet et vérifiez immédiatement le résultat dans l’aperçu.`
- `Organisez vos décors, sprites de personnages et fichiers audio dans un seul projet.`
- `Reliez les choix à différentes scènes pour créer un récit à embranchements.`
- `Exportez la version Web et publiez-la en ligne.`

## Visual novel UI

- Use `historique des dialogues` for backlog. `Historique` is suitable for a compact label.
- Use `Sauvegarder` and `Charger` for buttons; use `sauvegarde` and `chargement` for the features.
- Describe rollback as `revenir en arrière dans le dialogue`.
- Use `mode automatique` in prose and keep `Auto` for an exact compact label.
- Explain skip as `avance rapide` or `passer le texte déjà lu`.
- Use `style ADV` and `style NVL` for layout presets.
- Use `mode ADV` and `mode NVL` for text-display behavior.

## Links and SEO

When a French translation of a target page does not exist, use French link labels but point them to the existing English page. Do not create `/fr/...` links before the target exists or imply that English documentation is French.

Useful SEO phrases:

- `créer un visual novel`
- `logiciel de création de visual novels`
- `éditeur de visual novels`
- `moteur de visual novel`
- `visual novel sans coder`
- `visual novel sans code`
- `outil gratuit pour créer un visual novel`
- `histoire interactive`
- `dialogues ramifiés`

Use `roman visuel` only as a secondary discovery phrase.

## Review checklist

Before publishing, check that:

- The translation follows the current English source and actual RouteVN behavior.
- The French reads naturally instead of following English structure.
- `visual novel` is lowercase and uses the correct French plural.
- Route, character, sprite, and asset terminology follows this guide.
- Marketing labels are natural and instructional labels match the app exactly.
- The page uses `vous` consistently.
- Accents, apostrophes, spacing, and capitalization are correct.
- Buttons, cards, and mobile layouts do not clip longer French text.
- Placeholders and technical values are unchanged.
- Links point to pages that exist and SEO phrases describe real features.
