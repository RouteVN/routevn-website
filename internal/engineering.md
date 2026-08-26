# Engineering guidelines

## Page and partial markup

- Use Rettangoli components for layout. Prefer `rtgl-view`, `rtgl-grid`, and other suitable `rtgl-*` components over generic `div` elements.
- Use `rtgl-text` for presentation text, including visual headings and short labels. Add `role="heading"` and `aria-level` when the text is a semantic heading.
- Keep native HTML elements when they provide useful meaning or browser behavior that a Rettangoli component does not cover. Examples include `main`, `section`, `article`, `nav`, links, buttons, and images.
- Avoid deeply nested layout containers. Use Rettangoli properties for direction, alignment, spacing, and responsive layout when they cover the requirement.
- Add custom classes and CSS only for behavior or presentation that Rettangoli properties do not provide clearly.
