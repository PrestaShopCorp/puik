import { describe, it, expect } from 'vitest'
import { factoryMenu, showMenu } from './menu.spec'
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
  `

  const getMenuItem = (wrapper) => wrapper.find('.puik-menu-item')
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
  it('should have left icon', async () => {
    wrapper = factoryMenu(`
    <puik-menu>
      <template #activator>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item left-icon="check">Link with left icon</puik-menu-item>
    </puik-menu>
    `)
    await showMenu(wrapper)
    const icon = getMenuItem(wrapper).find('.puik-button__left-icon')
    expect(icon).toBeTruthy()
  })
  it('should have right icon', async () => {
    wrapper = factoryMenu(`
    <puik-menu>
      <template #activator>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item right-icon="check">Link with right icon</puik-menu-item>
    </puik-menu>
    `)
    await showMenu(wrapper)
    const icon = getMenuItem(wrapper).find('.puik-right__left-icon')
    expect(icon).toBeTruthy()
  })
  it('should item be a <a> with href', async () => {
    const href = '/'
    wrapper = factoryMenu(`
    <puik-menu>
      <template #activator>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item href="${href}">Link with href</puik-menu-item>
    </puik-menu>
    `)
    await showMenu(wrapper)
    const item = getMenuItem(wrapper).find('.puik-button')
    expect(item.element.tagName).toBe('A')
    expect(item.element.getAttribute('href')).toBe(href)
  })
  it('should item be a ROUTER-LINK balise', async () => {
    const to = '/'
    wrapper = factoryMenu(`
    <puik-menu>
      <template #activator>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item to="${to}">Link with href</puik-menu-item>
    </puik-menu>
    `)
    await showMenu(wrapper)
    const item = getMenuItem(wrapper).find('.puik-button')
    expect(item.element.tagName).toBe('ROUTER-LINK')
    expect(item.element.getAttribute('to')).toBe(to)
  })
})
