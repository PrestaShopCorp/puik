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

  it('should set the icon disabled', async () => {
    factory({
      icon: 'check',
      color: 'red',
      isDisabled: true,
    })

    expect(findIcon().element.style.color).toBe('rgb(187, 187, 187)')
  })

  it('should set the color', async () => {
    factory({
      icon: 'check',
      color: 'red',
    })

    expect(findIcon().element.style.color).toBe('red')
  })

  it('should set the font size when value is not number', async () => {
    factory({
      icon: 'check',
      fontSize: '56px',
    })

    expect(findIcon().element.style.fontSize).toBe('56px')
  })

  it('should set the font size when value is number', async () => {
    factory({
      icon: 'check',
      fontSize: 26,
    })

    expect(findIcon().element.style.fontSize).toBe('26px')
  })

  it('should set the node type into HTML DOM', async () => {
    factory({
      icon: 'check',
      nodeType: 'span',
    })

    expect(findIcon().element.nodeName).toBe('SPAN')
  })

  it('should have a data-test attribute', () => {
    factory({ 'data-test': 'test' })
    expect(findIcon().attributes('data-test')).toBe('test')
  })
})
function resolveConfig(tailwindConfig: any) {
  throw new Error('Function not implemented.')
}
