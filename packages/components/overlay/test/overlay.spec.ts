import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikOverlay from '../src/overlay.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Overlay tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikOverlay, {
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
