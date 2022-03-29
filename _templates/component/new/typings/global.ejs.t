---
to: typings/global.d.ts
inject: true
skip_if: "<%= h.changeCase.pascal(name) %>:"
after: "export interface GlobalComponents {"
eof_last: false
---
    Puik<%= h.changeCase.pascal(name) %>: typeof import('puik')['Puik<%= h.changeCase.pascal(name) %>']
