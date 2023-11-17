import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikMenu from '../src/menu.vue'
import PuikMenuItem from '../src/menu-item.vue'
import PuikMenuItemSeparator from '../src/menu-item-separator.vue'
import PuikButton from '../../button/src/button.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

export function factoryMenu(
  template: string,
  options: MountingOptions<any> = {}
) {
  return mount({
    components: {
      PuikMenu,
      PuikMenuItem,
      PuikMenuItemSeparator,
      PuikButton,
    },
    template,
    ...options,
  })
}

export const getMenu = (wrapper) => wrapper.find('.puik-menu')
export const getMenuTrigger = (wrapper) => wrapper.find('.puik-menu__trigger')
export const getMenuContent = (wrapper) => wrapper.find('.puik-menu__content')

export const showMenu = async (wrapper) => {
  getMenuTrigger(wrapper).trigger('click')
  return nextTick()
}

describe('Menu tests', () => {
  let wrapper: VueWrapper<any>

  it('should be a vue instance', () => {
    wrapper = factoryMenu(`
      <puik-menu>
        <template #trigger>
          <puik-button>Show menu</puik-button>
        </template>
        <puik-menu-item>
          <puik-button>Link</puik-button>
        </puik-menu-item>
      </puik-menu>
    `)
    expect(wrapper).toBeTruthy()
  })

  it('content should appear on click', async () => {
    wrapper = factoryMenu(`
      <puik-menu>
        <template #trigger>
          <puik-button>Show menu</puik-button>
        </template>
        <puik-menu-item>
          <puik-button>Link</puik-button>
        </puik-menu-item>
      </puik-menu>
    `)
    await showMenu(wrapper)
    expect(getMenuContent(wrapper)).toBeTruthy()
  })

  it('content should have top position', async () => {
    wrapper = factoryMenu(`
      <puik-menu position="top">
        <template #trigger>
          <puik-button>Show menu</puik-button>
        </template>
        <puik-menu-item>
          <puik-button>Link</puik-button>
        </puik-menu-item>
      </puik-menu>
    `)
    await showMenu(wrapper)
    expect(getMenu(wrapper).classes()).toContain('puik-menu--position-top')
  })

  it('content should have right align', async () => {
    wrapper = factoryMenu(`
    <puik-menu align="right">
      <template #trigger>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item>
        <puik-button>Link</puik-button>
      </puik-menu-item>
    </puik-menu>
    `)
    await showMenu(wrapper)
    expect(getMenu(wrapper).classes()).toContain('puik-menu--align-right')
  })

  it('menu should have maxHeight', async () => {
    const maxHeight = '100px'
    wrapper = factoryMenu(`
    <puik-menu max-height="${maxHeight}">
      <template #trigger>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item>
        <puik-button>Link</puik-button>
      </puik-menu-item>
    </puik-menu>
    `)
    await showMenu(wrapper)
    const content = getMenuContent(wrapper)
    expect(content.element.style.maxHeight).toBe(maxHeight)
  })
})
