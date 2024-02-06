import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Tooltip from '../src/tooltip.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Tooltip tests', () => {
  let wrapper: VueWrapper<any>
  const findToolTipContainer = () => wrapper.find('.puik-tooltip')
  const findTitle = () => wrapper.find('.puik-tooltip__tip__content__heading')
  const findDescription = () =>
    wrapper.find('.puik-tooltip__tip__content__description')
  const findToolTip = () => wrapper.find('.puik-tooltip__tip')
  const findWrapper = () => wrapper.find('.puik-tooltip__wrapper')

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

  it('should have a heading and a description', () => {
    const heading = 'Title'
    const description = 'This is a tooltip'
    factory(
      {},
      {
        slots: {
          heading,
          description,
        },
      }
    )

    expect(findTitle().text()).toBe(heading)
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

  it('should have a data-test attribute for the container div, the content, the heading and the description', () => {
    factory({
      heading: 'long heading for displaying the tooltip',
      description: 'long description for displaying the tooltip',
      'data-test': 'test',
    })
    expect(findToolTipContainer().attributes('data-test')).toBe('test')
    expect(findTitle().attributes('data-test')).toBe('heading-test')
    expect(findDescription().attributes('data-test')).toBe('description-test')
    expect(findWrapper().attributes('data-test')).toBe('content-test')
  })
})
