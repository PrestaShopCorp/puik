---
to: docs/.vitepress/config.ts
inject: true
skip_if: "{ text: '<%= h.changeCase.title(name) %>', link: '/components/<%= h.changeCase.param(name) %>' },"
after: /*Components pages*/
eof_last: false
---
  { text: '<%= h.changeCase.title(name) %>', link: '/components/<%= h.changeCase.param(name) %>' },