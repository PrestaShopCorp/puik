---
to: packages/web-components/components/<%= h.changeCase.param(name) %>.ts
---
import { defineCustomElement } from 'vue';
import { Puik<%= h.changeCase.pascal(name) %>} from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types'

const Puik<%= h.changeCase.pascal(name) %>Ce = defineCustomElement(Puik<%= h.changeCase.pascal(name) %>) as unknown as CustomElementWithTagName;
Puik<%= h.changeCase.pascal(name) %>Ce.tagName = 'puik-<%= h.changeCase.param(name) %>-ce'

export default Puik<%= h.changeCase.pascal(name) %>Ce;