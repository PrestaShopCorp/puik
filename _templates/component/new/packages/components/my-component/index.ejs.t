---
to: packages/components/<%= h.changeCase.param(name) %>/index.ts
---
import <%= h.changeCase.pascal(name) %> from './src/<%= h.changeCase.param(name) %>.vue';

export const Puik<%= h.changeCase.pascal(name) %> = <%= h.changeCase.pascal(name) %>;
export default Puik<%= h.changeCase.pascal(name) %>;

export * from './src/<%= h.changeCase.param(name) %>';
