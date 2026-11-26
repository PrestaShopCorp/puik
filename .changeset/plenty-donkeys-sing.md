---
"@prestashopcorp/puik-components": minor
"@prestashopcorp/puik-theme": minor
---

**Modal**: align the component with the Figma design kit (issue #531)

- `titleIcon` is now honoured on the `destructive` variant, which keeps `warning` as its default icon.
- A long title wraps on several lines instead of being truncated, and it no longer shows a tooltip. The title icon and the close button stay on its first line.
- The close button clickable area goes from 36 × 36 to 48 × 48.
- The second ("Cancel") button uses the `text` variant on the `feedback` and `destructive` variants (it used `secondary` and `tertiary`). The `dialog` variant is unchanged.
