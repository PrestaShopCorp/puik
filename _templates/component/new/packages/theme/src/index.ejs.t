---
to: packages/theme/src/index.postcss
inject: true
skip_if: <%= h.changeCase.param(name) %>
append: true
eof_last: false
---
@import 'puik-<%= h.changeCase.param(name) %>';
