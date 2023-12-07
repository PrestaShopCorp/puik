---
to: packages/web-components/components/<%= h.changeCase.param(name) %>.ts
---
import { defineCustomElement } from 'vue';
import { Puik<%= h.changeCase.pascal(name) %>} from '@prestashopcorp/puik-components';

const Puik<%= h.changeCase.pascal(name) %>Ce = defineCustomElement(Puik<%= h.changeCase.pascal(name) %>);

export default Puik<%= h.changeCase.pascal(name) %>Ce;