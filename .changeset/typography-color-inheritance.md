---
'@prestashopcorp/puik-theme': major
---

**Breaking change:** typography utilities no longer hardcode a text color.

`puik-jumbotron`, `puik-h1` → `puik-h6`, `puik-brand-*`, `puik-body-*`, `puik-body-default-link`, `puik-monospace-*` and `puik-text-button-*` used to apply `text-primary` on top of their typographic properties, which made the text color impossible to inherit from a parent. They now only carry font family, size, line height, weight and letter spacing.

The default text color is set once in the base layer instead (`body` and `:host`, the latter for the shadow roots of the web components), so it stays overridable by a single utility without relying on declaration order or `!important`.

Consumers who relied on the implicit `text-primary` carried by these classes will now inherit the color of their parent. Set the color explicitly where a specific one is required, and make sure `@prestashopcorp/puik-theme/base.css` is loaded when importing individual stylesheets.

Internal component rules were normalized so that their own `text-*` is declared after the typography utility; their rendered colors are unchanged.
