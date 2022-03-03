---
to: packages/components/<%= h.changeCase.param(name) %>/test/<%= h.changeCase.param(name) %>.spec.ts
---
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import <%= h.changeCase.pascal(name) %> from '../src/<%= h.changeCase.param(name) %>.vue'

describe('<%= h.changeCase.pascal(name) %> tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(<%= h.changeCase.pascal(name) %>, {
      props: {
        ...propsData,
      },
      ...options,
    })
  }
  it('should be a vue instance', () => {
      factory()
      expect(wrapper).toBeTruthy()
  })
})
