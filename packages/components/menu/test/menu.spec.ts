import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikMenu from '../src/menu.vue'
import PuikButton from '../../button/src/button.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Menu tests', () => {
  let wrapper: VueWrapper<any>
  const getPuikButton = () => wrapper.findComponent(PuikButton)
  const getActivator = () => wrapper.find('.puik-menu__activator')
  const getContent = () => wrapper.find('.puik-menu__content')
  const factory = (template: string, options: MountingOptions<any> = {}) => {
    wrapper = mount({
      components: {
        'puik-menu': PuikMenu,
        'puik-button': PuikButton,
      },
      template,
      ...options,
    })
  }
  it('should be a vue instance', () => {
    factory(`
      <puik-menu as="button" activatorLabel="Show menu">
        Menu content
      </puik-menu>
    `)
    expect(wrapper).toBeTruthy()
  })
  it('should render puik-button as activator', () => {
    factory(`
      <puik-menu activatorLabel="Show menu">
        Menu content
      </puik-menu>
    `)
    expect(getPuikButton()).toBeTruthy()
  })
  it('should render button as activator', () => {
    factory(`
      <puik-menu activatorLabel="Show menu" as="button">
        Menu content
      </puik-menu>
    `)
    expect(getActivator().element.tagName).toBe('BUTTON')
  })
  it('should render custom activator label using props', () => {
    const label = 'Show menu'
    factory(`
      <puik-menu activatorLabel="${label}">
        Menu content
      </puik-menu>
    `)
    expect(getActivator().text()).toBe(label)
    expect(getActivator().classes()).toContain('puik-menu__activator')
  })
  it('should render custom activator label using slot', () => {
    const label = 'Show menu'
    factory(`
      <puik-menu>
        <template #activator>${label}</template>
        Menu content
      </puik-menu>
    `)
    expect(getActivator().text()).toBe(label)
  })
  it('menu should appear on click', async () => {
    factory(`
      <puik-menu activatorLabel="Show menu">
        Menu content
      </puik-menu>
    `)
    getActivator().trigger('click')
    await nextTick()
    expect(getContent()).toBeTruthy()
  })
  it('content should have top position', async () => {
    factory(`
      <puik-menu position="top">
        Menu content
      </puik-menu>
    `)
    getActivator().trigger('click')
    await nextTick()
    expect(getContent().classes()).toContain(
      'puik-menu__content__position--top'
    )
  })
  it('content should have left align', async () => {
    factory(`
      <puik-menu align="left">
        Menu content
      </puik-menu>
    `)
    getActivator().trigger('click')
    await nextTick()
    expect(getContent().classes()).toContain('puik-menu__content__align--left')
  })
})
