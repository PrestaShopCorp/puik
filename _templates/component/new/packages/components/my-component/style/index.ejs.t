---
to: packages/components/<%= h.changeCase.param(name) %>/style/index.ts
---
import '@prestashopcorp/puik-components/base/style';
import '@prestashopcorp/puik-theme/src/puik-<%= h.changeCase.param(name) %>.postcss';
