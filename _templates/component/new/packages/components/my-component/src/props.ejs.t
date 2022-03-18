---
to: packages/components/<%= h.changeCase.param(name) %>/src/<%= h.changeCase.param(name) %>.ts
---
import { buildProps } from '@puik/utils/props'
import type { ExtractPropTypes } from 'vue'
import type <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.param(name) %>.vue'

export const <%= h.changeCase.camel(name) %>Props = buildProps({} as const)

export type <%= h.changeCase.pascal(name) %>Props = ExtractPropTypes<typeof <%= h.changeCase.camel(name) %>Props>

export type <%= h.changeCase.pascal(name) %>Instance = InstanceType<typeof <%= h.changeCase.pascal(name) %>>
