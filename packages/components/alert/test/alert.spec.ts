import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Alert from '../src/alert.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Alert tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Alert, {
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
