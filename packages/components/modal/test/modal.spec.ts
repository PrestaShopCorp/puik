import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikModal from '../src/modal.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Modal tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikModal, {
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
