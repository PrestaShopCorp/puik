---
"@prestashopcorp/puik-components": patch
"@prestashopcorp/puik-theme": patch
---

**Modal**: align the component with the Figma design kit (issue #531)

- `titleIcon` now takes precedence over the `destructive` variant icon, which keeps `warning` as its default value when no `titleIcon` is provided.
- A long title now wraps on several lines instead of being truncated. The ellipsis and the title tooltip are removed, and header items are aligned to the top so the title icon and the close button stay next to the first line. The title is now a plain `h2` carrying the `puik-modal__dialogPanelContainer__dialogPanel__header__title` class (the inner `.title` element is gone).
- The close button clickable area goes from 36 × 36 to 48 × 48 (12px padding).
- The second ("Cancel") button now uses the `text` variant on the `feedback` and `destructive` variants (it used `secondary` and `tertiary`). The `dialog` variant is unchanged.
