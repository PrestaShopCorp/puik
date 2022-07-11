import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikSnackBar from '../src/snack-bar.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('SnackBar tests', () => {
  let wrapper: VueWrapper<any>

  const findText = () => wrapper.find('.puik-snack-bar__text')
  const findAction = () => wrapper.find('.puik-snack-bar__right__action')
  const findVariant = () => wrapper.find('.puik-snack-bar')
  const findCloseButton = () => wrapper.find('.puik-snack-bar__close-button')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikSnackBar, {
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
