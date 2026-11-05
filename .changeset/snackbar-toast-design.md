---
"@prestashopcorp/puik-components": minor
"@prestashopcorp/puik-theme": minor
---

feat: [Snackbar] align the Snackbar with the Toast design kit

Adds two variants to `PuikSnackbarVariants` — `reverse` and `warning` — and realigns the
whole component with the Figma Toast / Snackbar component:

- light backgrounds for `reverse` (`white`), `warning` (`yellow-100`), `danger` (`red-100`)
  and `success` (`green-100`), with `primary` text, icon and close button;
- a 24px leading icon on `warning` (`warning`), `danger` (`error`) and `success`
  (`check_circle`);
- `Body-large-bold` title and `Body-default-medium` description, 4px apart;
- 16px/24px padding, 16px gap, vertically centered content, 450px width and an `xl` drop
  shadow;
- the action and close buttons are now `PuikButton` with the `text` variant (`text-reverse`
  on the `default` variant).

The `default` variant keeps its dark background and white content, and no prop was removed
or renamed, so this is not a breaking API change.

**Visual change:** the `danger` and `success` variants look noticeably different. Their
backgrounds move from saturated `red`/`green` with white text to light `red-100`/`green-100`
with dark `primary` text, and they now show a leading icon. Applications that relied on the
previous dark appearance (for example with custom CSS overrides on `.puik-snackbar-root`)
should check their rendering.
