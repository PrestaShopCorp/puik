import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTag from '../src/tag.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Tag tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTag, {
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
