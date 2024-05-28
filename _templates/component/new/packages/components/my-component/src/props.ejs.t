---
to: packages/components/<%= h.changeCase.param(name) %>/src/<%= h.changeCase.param(name) %>.ts
---
import type <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.param(name) %>.vue';

export interface <%= h.changeCase.pascal(name) %>Props {}

export type <%= h.changeCase.pascal(name) %>Instance = InstanceType<typeof <%= h.changeCase.pascal(name) %>>;
