---
to: packages/puik/component.ts
inject: true
skip_if: <%= h.changeCase.param(name) %>
prepend: true
eof_last: false
---
import { Puik<%= h.changeCase.pascal(name) %> } from '@prestashopcorp/puik-components/<%= h.changeCase.param(name) %>'
