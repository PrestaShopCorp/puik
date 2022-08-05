import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PuikOverlay from '../src/overlay.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Overlay tests', () => {
  let wrapper: VueWrapper<any>
  const findOverlay = () => wrapper.find('.puik-overlay')
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

  it('should be change background color', () => {
    factory({
      backgroundColor: 'rgba(1, 1, 1, 0.5)',
    })
    expect(findOverlay().element.style.backgroundColor).toBe(
      'rgba(1, 1, 1, 0.5)'
    )
  })
})
