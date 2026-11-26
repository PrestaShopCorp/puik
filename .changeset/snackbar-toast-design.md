---
"@prestashopcorp/puik-components": minor
"@prestashopcorp/puik-theme": minor
---

feat: [Snackbar] align the Snackbar with the Toast design kit

- Add the `reverse` and `warning` values to `PuikSnackbarVariants`
- Light backgrounds and a leading icon on `warning`, `danger` and `success`, with `primary` text, icon and close button; the `default` variant is unchanged
- Typography, spacing, 450px width, drop shadow and `PuikButton` `text` action and close button aligned with the design kit
- The close button `aria-label` now comes from the `puik.snackbar.closeBtnLabel` locale key instead of a hardcoded English label

**Visual change:** `danger` and `success` move from saturated `red`/`green` backgrounds with white text to light `red-100`/`green-100` with dark `primary` text, and now show a leading icon. Check any custom CSS override on `.puik-snackbar-root`.
