---
'@prestashopcorp/puik-theme': major
---

**Breaking change:** typography utilities no longer hardcode a text color

- `puik-jumbotron`, `puik-h1` → `puik-h6`, `puik-brand-*`, `puik-body-*`, `puik-body-default-link`, `puik-monospace-*` and `puik-text-button-*` now only carry font properties, so their color is inherited from the parent
- The default text color is set once on `body` in the base layer
- **Migration:** set the color explicitly where a specific one is required, and make sure `@prestashopcorp/puik-theme/base.css` is loaded when importing individual stylesheets
