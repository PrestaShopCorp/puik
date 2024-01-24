---
to: packages/components/index.ts
inject: true
skip_if: <%= h.changeCase.param(name) %>
append: true
eof_last: false
---
export * from './<%= h.changeCase.param(name) %>';
