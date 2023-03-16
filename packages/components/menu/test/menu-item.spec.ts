import { nextTick } from 'vue'
import { describe, it, expect } from 'vitest'
import { factoryMenu, showMenu, getMenuActivator } from './menu.spec'
import type { VueWrapper } from '@vue/test-utils'

describe('Menu item group tests', () => {
  let wrapper: VueWrapper<any>
  const template = `
  <puik-menu>
    <template #activator>
      <puik-button>Show menu</puik-button>
    </template>
    <puik-menu-item>First link</puik-menu-item>
    <puik-menu-item destructive>Second link</puik-menu-item>
    <puik-menu-item disabled>Third link</puik-menu-item>
    </puik-menu>
  </puik-menu>
  `

  const getMenuItems = (wrapper) => wrapper.findAll('.puik-menu-item')

  it('should be a vue instance', () => {
    wrapper = factoryMenu(template)
    expect(wrapper).toBeTruthy()
  })
  it('should third item be disabled', async () => {
    wrapper = factoryMenu(template)
    await showMenu(wrapper)
    const items = getMenuItems(wrapper)
    expect(items[2].classes()).toContain('puik-menu-item--disabled')
  })
  it('should second item be destructive', async () => {
    wrapper = factoryMenu(template)
    await showMenu(wrapper)
    const items = getMenuItems(wrapper)
    expect(items[1].classes()).toContain('puik-menu-item--destructive')
  })
})
