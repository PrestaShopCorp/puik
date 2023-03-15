import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikMenu from '../src/menu.vue'
import PuikButton from '../../button/src/button.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Menu tests', () => {
  let wrapper: VueWrapper<any>
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
      <puik-menu activatorAs="button" activatorLabel="Show menu">
        <template #activator>
          <puik-button>Show menu</puik-button>
        </template>
        Menu content
      </puik-menu>
    `)
    expect(wrapper).toBeTruthy()
  })
  it('should have puik button in activator slot', () => {
    factory(`
      <puik-menu>
        <template #activator>
          <puik-button>Show menu</puik-button>
        </template>
        Menu content
      </puik-menu>
    `)
    expect(getActivator().classes()).toContain('puik-button')
  })
  it('menu should appear on click', async () => {
    factory(`
      <puik-menu activatorLabel="Show menu">
        <template #activator>
          <puik-button>Show menu</puik-button>
        </template>
        Menu content
      </puik-menu>
    `)
    getActivator().trigger('click')
    await nextTick()
    expect(getContent().classes()).toContain('puik-menu__content--visible')
  })
  it('content should have top position', async () => {
    factory(`
      <puik-menu position="top">
        <template #activator>
          <puik-button>Show menu</puik-button>
        </template>
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
        <template #activator>
          <puik-button>Show menu</puik-button>
        </template>
        Menu content
      </puik-menu>
    `)
    getActivator().trigger('click')
    await nextTick()
    expect(getContent().classes()).toContain('puik-menu__content__align--left')
  })
})
