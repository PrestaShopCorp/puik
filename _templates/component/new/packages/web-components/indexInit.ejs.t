---
to: packages/web-components/index.ts
inject: true
skip_if: "puik-<%= h.changeCase.param(name) %>-ce"
after: const init
eof_last: false
---
  if (!customElements.get('puik-<%= h.changeCase.param(name) %>-ce')) {
    customElements.define('puik-<%= h.changeCase.param(name) %>-ce', Puik<%= h.changeCase.pascal(name) %>Ce);
  }