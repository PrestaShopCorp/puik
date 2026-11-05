---
"@prestashopcorp/puik-components": minor
"@prestashopcorp/puik-theme": minor
---

feat: [Alert] update PuikAlert to match the new Alert Banner design

- Add the `disableBackground` prop, which mirrors `disableBorders`. Combined with the borders, it renders the new `outlined` style (white background + colored border) of the design kit, available on the 4 variants.
- Display the leading icon in a round container: 24px icon, 8px padding on desktop (40px) and 4px on small screens (32px), `color-100` background on the filled styles and `color-50` on the outlined one.
- Switch the title typography to Body default bold (14/20, no letter-spacing) instead of `puik-h3`.
- Add an optional inline link below the description, inside the text block: `inlineLinkLabel`, `internalInlineLink`, `externalInlineLink`, `inlineLinkTarget` and `ariaLabelInlineLink`. Setting `inlineLinkTarget` to `_blank` also displays the trailing `open_in_new` icon. A `clickInlineLink` event is emitted on click. This is different from `linkLabel`, which remains the "Learn more" text button of the actions area.
- Rework the layouts: on desktop, 16px padding and gap, text block centered on a single line, actions and close button aligned to the top; on small screens, the close button moves next to the text and the actions go to their own full-width row of equally sized 40px buttons.
- Render the close button as a real `<button>` with an `aria-label` so it is focusable and operable with the keyboard. The label comes from the new `puik.alert.closeBtnLabel` translation key (`en` and `fr`) and can be overridden per instance with `ariaLabelClose`.

All existing props keep working. The internal markup changed: the `puik-alert__content` wrapper is replaced by `puik-alert__icon-wrapper` and `puik-alert__actions`, and the close button is now a `button` element carrying the `puik-alert__close` class.
