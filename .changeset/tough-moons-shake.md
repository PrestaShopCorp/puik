---
"@prestashopcorp/puik-components": patch
"@prestashopcorp/puik-theme": patch
---

fix(button): never underline the icon in the text variants

- The icon of a `text` / `text-reverse` button is no longer underlined, in any state, which makes an icon only button match the design kit
- `PuikButton` now wraps its default slot in a `span.puik-button__label`, which carries the underline: code targeting `.puik-button > span` or the button text node in CSS or in end-to-end selectors has to be updated
- An icon of a text button must be set through the `left-icon` / `right-icon` props: a `PuikIcon` placed in the default slot lands inside the label and is underlined with it
- Plain HTML/CSS usage of `puik-button.css` without a `.puik-button__label` element keeps its current rendering
