import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PuikIcon from '../src/icon.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Icon tests', () => {
  let wrapper: VueWrapper<any>
  const findIcon = () => wrapper.find('.puik-icon')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikIcon, {
      props: {
        ...propsData,
      },
      ...options,
    })
  }
  it('should be a vue instance', () => {
    factory({
      icon: 'check',
    })
    expect(wrapper).toBeTruthy()
  })

  it('should set the icon', async () => {
    factory({
      icon: 'check',
      color: 'red',
    })
    expect(findIcon().text()).toBe('check')
  })

  it('should set the color', async () => {
    factory({
      icon: 'check',
      color: 'red',
    })

    expect(findIcon().element.style.color).toBe('red')
  })

  it('should set the font size', async () => {
    factory({
      icon: 'check',
      fontSize: '56px',
    })

    expect(findIcon().element.style.fontSize).toBe('56px')
  })
})
