---
to: packages/web-components/index.ts
inject: true
skip_if: "import Puik<%= h.changeCase.pascal(name) %>Ce"
before: import
---
import Puik<%= h.changeCase.pascal(name) %>Ce from './components/<%= h.changeCase.param(name) %>';