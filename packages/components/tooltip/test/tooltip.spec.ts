import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Tooltip from '../src/tooltip.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Tooltip tests', () => {
  let wrapper: VueWrapper<any>
  const findTitle = () => wrapper.find('.puik-tooltip__tip__title')
  const findDescription = () => wrapper.find('.puik-tooltip__tip__description')
  const findToolTip = () => wrapper.find('.puik-tooltip__tip')

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

  it('should be displayed on the right', async () => {
    await factory({ position: 'right' })
    expect(findToolTip().attributes('data-popper-placement')).toBe('right')
  })

  it('should be disabled', async () => {
    await factory(
      { isDisabled: true },
      {
        slots: {
          default: '<button>Hover me</button>',
        },
      }
    )
    await expect(wrapper.find('button').trigger('mouseover'))
    expect(findToolTip().isVisible()).toBe(false)
  })

  it('should have a custom z-index', async () => {
    await factory({ zindex: 5000 })
    expect(findToolTip().element.style.getPropertyValue('z-index')).toBe('5000')
  })

  it('should have a custom max-width', async () => {
    await factory({ maxWidth: '200px' })
    expect(findToolTip().element.style.getPropertyValue('max-width')).toBe(
      '200px'
    )
  })
})
