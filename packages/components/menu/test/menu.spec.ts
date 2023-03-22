import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikMenu from '../src/menu.vue'
import PuikMenuItem from '../src/menu-item.vue'
import PuikMenuItemGroup from '../src/menu-item-group.vue'
import PuikMenuItemSeparator from '../src/menu-item-separator.vue'
import PuikButton from '../../button/src/button.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

export function factoryMenu(
  template: string,
  options: MountingOptions<any> = {}
) {
  return mount({
    components: {
      'puik-menu': PuikMenu,
      'puik-menu-item': PuikMenuItem,
      'puik-menu-item-group': PuikMenuItemGroup,
      'puik-menu-item-separator': PuikMenuItemSeparator,
      'puik-button': PuikButton,
    },
    template,
    ...options,
  })
}
export const getMenuActivator = (wrapper) =>
  wrapper.find('.puik-menu__activator')
export const getMenuContent = (wrapper) => wrapper.find('.puik-menu__content')
export const getMenuSeparator = (wrapper) =>
  wrapper.find('.puik-menu-item-separator')
export const showMenu = (wrapper) => {
  getMenuActivator(wrapper).trigger('click')
  return nextTick()
}

describe('Menu tests', () => {
  let wrapper: VueWrapper<any>
  it('should be a vue instance', () => {
    wrapper = factoryMenu(`
      <puik-menu>
        <template #activator>
          <puik-button>Show menu</puik-button>
        </template>
        <puik-menu-item>Link</puik-menu-item>
      </puik-menu>
    `)
    expect(wrapper).toBeTruthy()
  })
  it('content should appear on click', async () => {
    wrapper = factoryMenu(`
      <puik-menu>
        <template #activator>
          <puik-button>Show menu</puik-button>
        </template>
        <puik-menu-item>Link</puik-menu-item>
      </puik-menu>
    `)
    await showMenu(wrapper)
    expect(getMenuContent(wrapper).classes()).toContain(
      'puik-menu__content--visible'
    )
  })
  it('content should have top position', async () => {
    wrapper = factoryMenu(`
      <puik-menu position="top">
        <template #activator>
          <puik-button>Show menu</puik-button>
        </template>
        <puik-menu-item>Link</puik-menu-item>
      </puik-menu>
    `)
    await showMenu(wrapper)
    expect(getMenuContent(wrapper).classes()).toContain(
      'puik-menu__content__position--top'
    )
  })
  it('content should have right align', async () => {
    wrapper = factoryMenu(`
    <puik-menu align="right">
      <template #activator>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item>Link</puik-menu-item>
    </puik-menu>
    `)
    await showMenu(wrapper)
    expect(getMenuContent(wrapper).classes()).toContain(
      'puik-menu__content__align--right'
    )
  })
  it('menu should have maxHeight', async () => {
    const maxHeight = '100px'
    wrapper = factoryMenu(`
    <puik-menu max-height="${maxHeight}">
      <template #activator>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item>Link</puik-menu-item>
    </puik-menu>
    `)
    await showMenu(wrapper)
    const content = getMenuContent(wrapper)
    expect(content.element.style.maxHeight).toBe(maxHeight)
  })
  it('menu should have width', async () => {
    const width = '100px'
    wrapper = factoryMenu(`
    <puik-menu width="${width}">
      <template #activator>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item>Link</puik-menu-item>
    </puik-menu>
    `)
    await showMenu(wrapper)
    const content = getMenuContent(wrapper)
    expect(content.element.style.width).toBe(width)
  })
})
