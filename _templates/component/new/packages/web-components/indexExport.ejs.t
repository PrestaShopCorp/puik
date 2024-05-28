---
to: packages/web-components/index.ts
inject: true
after: export \{
eof_last: false
---
  Puik<%= h.changeCase.pascal(name) %>Ce,