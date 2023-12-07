---
to: packages/web-components/index.ts
inject: true
skip_if: "Puik<%= h.changeCase.pascal(name) %>Ce,"
after: export \{
eof_last: false
---
  Puik<%= h.changeCase.pascal(name) %>Ce,