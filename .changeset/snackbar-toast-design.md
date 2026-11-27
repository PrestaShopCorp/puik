---
"@prestashopcorp/puik-components": minor
"@prestashopcorp/puik-theme": minor
---

feat: [Snackbar] align the Snackbar with the Toast design kit

- Add the `reverse` and `warning` values to `PuikSnackbarVariants`
- Every variant now uses a light background with `primary` text, icon and close button, and `warning`, `danger` and `success` show a leading icon
- Typography, spacing, 450px width, drop shadow and `PuikButton` `text` action and close button aligned with the design kit
- The close button `aria-label` now comes from the `puik.snackbar.closeBtnLabel` locale key instead of a hardcoded English label

**Visual change:** `default`, `danger` and `success` change appearance. `default` moves from the dark `primary` background with white text to `primary-400`, and `danger` / `success` from saturated `red` / `green` with white text to light `red-100` / `green-100`; all three now use dark `primary` text, and `danger` and `success` gain a leading icon. Check any custom CSS override on `.puik-snackbar-root`.
