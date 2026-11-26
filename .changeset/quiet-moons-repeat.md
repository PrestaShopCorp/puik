---
"@prestashopcorp/puik-components": minor
"@prestashopcorp/puik-theme": minor
---

feat: [Alert] update PuikAlert to match the new Alert Banner design

- Add `disableBackground`, which combined with the borders renders the new `outlined` style (white background + colored border) on the 4 variants
- Add an optional inline link below the description: `inlineLinkLabel`, `internalInlineLink`, `externalInlineLink`, `inlineLinkTarget`, `ariaLabelInlineLink` and the `clickInlineLink` event. Distinct from `linkLabel`, which remains the text button of the actions area
- Render the close button as a real focusable `<button>`, labelled by the new `puik.alert.closeBtnLabel` translation key (`en` and `fr`) and overridable per instance with `ariaLabelClose`
- Display the leading icon in a round container tinted with the alert color
- Switch the title typography to Body default bold instead of `puik-h3`
- Rework the layouts: on small screens the close button moves next to the text and the actions drop to their own full-width row

Existing props keep working, but the internal markup changed: the `puik-alert__content` wrapper is replaced by `puik-alert__icon-wrapper` and `puik-alert__actions`, and the close button is now a `button` element carrying the `puik-alert__close` class.
