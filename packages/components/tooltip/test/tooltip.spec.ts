import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Tooltip from '../src/tooltip.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Tooltip tests', () => {
  let wrapper: VueWrapper<any>
  const findTitle = () => wrapper.find('.puik-tooltip__tip__title')
  const findDescription = () => wrapper.find('.puik-tooltip__tip__description')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Tooltip, {
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

  it('should have a title and a description', () => {
    const title = 'Title'
    const description = 'This is a tooltip'
    factory(
      {},
      {
        slots: {
          title,
          description,
        },
      }
    )

    expect(findTitle().text()).toBe(title)
    expect(findDescription().text()).toBe(description)
  })

  it('should be displayed on the right', () => {
    factory({ position: 'right' })
    expect(wrapper.find('.puik-tooltip--right').exists()).toBeTruthy()
  })
})
