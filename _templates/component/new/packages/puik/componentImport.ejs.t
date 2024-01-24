---
to: packages/puik/component.ts
inject: true
skip_if: <%= h.changeCase.param(name) %>
after: import \{
eof_last: false
---
  Puik<%= h.changeCase.pascal(name) %>,
