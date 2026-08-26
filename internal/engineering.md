# Engineering guidelines

## Page and partial markup

- Use Rettangoli components for layout. Prefer `rtgl-view`, `rtgl-grid`, and other suitable `rtgl-*` components over generic `div` elements.
- Keep native HTML elements when they provide useful meaning or browser behavior. Examples include `main`, `section`, `article`, `nav`, headings, links, buttons, and images.
- Avoid deeply nested layout containers. Use Rettangoli properties for direction, alignment, spacing, and responsive layout when they cover the requirement.
- Add custom classes and CSS only for behavior or presentation that Rettangoli properties do not provide clearly.
