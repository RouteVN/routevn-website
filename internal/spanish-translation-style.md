# Spanish translation style notes

Use this guide for Spanish RouteVN website copy, UI, and documentation.

## Translation source

The current English RouteVN content and actual app behavior are the source of truth.

- Translate directly from English.
- Use other locales only as inspiration, never as the translation source.
- When researching terminology, check both visual novel tools and narrative design tools in Spanish. Use them only as references.
- Resolve differences against English and verify app labels or behavior.

## Goal

Write natural, direct Spanish for people who create visual novels. Preserve the English meaning without following its sentence structure.

Use neutral international Spanish and the locale code `es`. Use a regional code such as `es-ES` only for region-specific content.

## Voice and writing

- Address the reader as `tú` and use instructions such as `Abre`, `Selecciona`, and `Haz clic`.
- Prefer short sentences and concrete benefits.
- Avoid switching between `tú`, `usted`, and `vos`, as well as stiff corporate language, slang, and unnecessary English.
- Avoid region-specific words when a widely understood alternative exists.
- Use neutral phrases such as `quienes crean` when gendered wording feels awkward.
- Use sentence case for headings and labels.
- Write accents and punctuation correctly, including `tú`, `sí`, `más`, `qué`, `¿?`, and `¡!`.
- Use `haz clic`, `doble clic`, and `clic derecho` consistently.
- Put exact UI labels in backticks.
- Preserve placeholders, variables, interpolation syntax, file names, and technical values.

## Core terminology

### Product and content

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Visual novel | `novela visual` | Use the plural `novelas visuales`. |
| Visual novel creation | `creación de novelas visuales` | Use `crear una novela visual` for one project. |
| Creator tool | `herramienta para crear novelas visuales` | Prefer this over `creador de novelas visuales`. |
| Visual novel engine | `motor de novelas visuales` | Use for RouteVN's technical runtime or architecture. |
| No coding | `sin programar` | Use `sin código` in compact headings. |
| Project | `proyecto` | |
| Story script | `guion` | Use for the written story and writing workflow. |
| Technical script | `script` | Use for code-like files or exact technical concepts. |
| Resource | `recurso` | Preferred for beginner-facing copy. |
| Asset | `asset` | Keep only in technical copy or exact UI labels. |
| Live preview | `vista previa en tiempo real` | Prefer over `editor en vivo`. |

### Media and design

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Character | `personaje` | Never use `carácter` for this meaning. |
| Character sprite | `sprite del personaje` | Use the plural `sprites`. |
| Image | `imagen` | |
| Background | `fondo` | |
| Event illustration | `ilustración CG` | `CG` is enough when the context is clear. |
| Video | `video` | |
| Audio | `audio` | Use for the resource category. |
| Background music | `BGM` | Preferred term. Explain as `música de fondo` only if needed. |
| Sound effects | `efectos de sonido` | Add `SFX` when matching an app label. |
| Voice | `voz` | Use `doblaje` for voiced dialogue as a production feature. |
| Color | `color` | Use `paleta` for a reusable palette. |
| Font | `fuente` | Use `fuente tipográfica` when context is unclear. |
| Writing system | `sistema de escritura` | Use for Latin, Cyrillic, Japanese, and similar font metadata. |
| Text style | `estilo de texto` | |
| Spritesheet | `hoja de sprites` | Add `spritesheet` when matching an English UI or file term. |

### Story and editor

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Scene | `escena` | |
| Section | `sección` | Do not use `capítulo` for a RouteVN section. |
| Line | `línea` | Use for a line in the Scene Editor. |
| Line Action | `acción de línea` | `Acción asociada a la línea` is more natural in prose. |
| Dialogue | `diálogo` | |
| Narration | `narración` | |
| General written content | `texto` | Use when dialogue and narration do not need to be distinguished. |
| Choice | `opción` | Use `elección` for the act or consequence of choosing. |
| Branching story | `historia ramificada` | Use `diálogo ramificado` for dialogue. |
| Branch | `rama narrativa` | Use for one path through the story. |
| Branch point | `bifurcación` | Use for a point where the story splits. |
| Route | `ruta narrativa` | Use `ruta del personaje` for a character route. |
| Ending | `final` | |
| Scene Map | `mapa de escenas` | Explain it as the `flujo narrativo` when useful. |
| Node | `nodo` | |
| Variable | `variable` | |
| Condition | `condición` | Use `acción condicional` for a conditional action. |

### Presentation and publishing

| Concept | Preferred term | Notes |
| --- | --- | --- |
| Visual transition | `transición` | For scene flow, use `cambio`, `enlace`, or `ir a`. |
| Transform | `transformación` | Explain with posición, escala, rotación, anclaje, and opacidad. |
| Animation | `animación` | |
| Particle effect | `efecto de partículas` | |
| Layout | `diseño` | Use for RouteVN's reusable UI and presentation structures. |
| Layout Editor | `editor de diseño` | |
| Controls resource | `controles` | Use for keyboard, mouse, and player controls. |
| User interface | `interfaz de usuario` | Use `IU` after the first mention; keep `UI` for an exact English label. |
| App page or menu | `pantalla` | Use `área de juego` for the rendered game canvas. |
| Export | `exportar` | Generating files. |
| Publish | `publicar` | Making a game available to players. |
| Release | `lanzar` | Making a new game or software version available. |
| Distribution | `distribución` | A packaged platform build. |
| Web version | `versión web` | The exported HTML and JavaScript version. |

## Terms to avoid

| Avoid | Use instead |
| --- | --- |
| `visual novel` as the main category | `novela visual` |
| `novela gráfica` | `novela visual` |
| `creador de novelas visuales` for the app | `herramienta para crear novelas visuales` |
| `codificación`, `sin codificación` | `programación`, `sin programar` |
| `editor en vivo` | `vista previa en tiempo real` |
| `poderoso` without a concrete benefit | State what the feature does. |
| `activo`, `bienes`, or `recursos patrimoniales` for assets | `recurso` or `asset` |
| `carácter` for a story character | `personaje` |
| `layout` in general copy | `diseño` |

## Marketing and UI labels

Use natural Spanish for marketing copy, but reproduce the app's exact label in instructions. If the app still shows an English label, keep it in English and explain it when needed.

| English source | Spanish label |
| --- | --- |
| Live Editor | `Vista previa en tiempo real` |
| Asset Manager | `Gestión de recursos` |
| Layout Editor | `Editor de diseño` |
| Scene Map | `Mapa de escenas` |
| Choices and Branching | `Opciones y ramificaciones` |
| Publishing | `Publica en la web` |

Good product copy:

- `RouteVN Creator es una aplicación gratuita y de código abierto para crear novelas visuales sin programar.`
- `Edita el texto o un efecto y comprueba el resultado de inmediato en la vista previa.`
- `Organiza fondos, sprites de personajes y archivos de audio en un solo proyecto.`
- `Conecta las opciones con escenas distintas para crear una historia ramificada.`
- `Exporta la versión web y publícala en línea.`

## Visual novel UI

- Use `historial de diálogos` for backlog. `Historial` is suitable for a compact label.
- Use `Guardar` and `Cargar` for buttons; use `guardado` and `carga` for the features.
- Describe rollback as `volver atrás en el diálogo`.
- Use `modo automático` in prose and keep `Auto` for an exact compact label.
- Explain skip as `avance rápido` or `saltar el texto ya leído`.
- Use `estilo ADV` and `estilo NVL` for layout presets.
- Use `modo ADV` and `modo NVL` for text-display behavior.

## Review checklist

Before publishing, check that:

- The translation follows the current English source and actual RouteVN behavior.
- The Spanish reads naturally instead of following English structure.
- `novela visual` is used consistently instead of the English category name.
- Route, character, sprite, and asset terminology follows this guide.
- Marketing labels are natural and instructional labels match the app exactly.
- The page uses neutral international Spanish and addresses the reader as `tú`.
- Accents, punctuation, and capitalization are correct.
- Buttons, cards, and mobile layouts do not clip longer Spanish text.
- Placeholders and technical values are unchanged.
