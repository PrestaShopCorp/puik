import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikAvatar from '../src/avatar.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Avatar tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikAvatar, {
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
