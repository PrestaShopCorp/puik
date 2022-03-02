---
to: packages/theme/src/index.scss
inject: true
skip_if: <%= h.changeCase.param(name) %>
append: true
eof_last: false
---
@use '<%= h.changeCase.param(name) %>';
