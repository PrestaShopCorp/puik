import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikProgressStepper from '../src/progress-stepper.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('ProgressStepper tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikProgressStepper, {
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
