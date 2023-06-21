import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTextarea from '../src/textarea.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Textarea tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTextarea, {
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
