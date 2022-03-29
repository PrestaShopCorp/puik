---
to: packages/puik/component.ts
inject: true
skip_if: "<%= h.changeCase.pascal(name) %>,"
after: export default \[
eof_last: false
---
  Puik<%= h.changeCase.pascal(name) %>,
