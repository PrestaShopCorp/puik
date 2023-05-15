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

  const getMenuItems = (wrapper) => wrapper.findAll('.puik-menu-item')

  it('should be a vue instance', () => {
    wrapper = factoryMenu(template)
    expect(wrapper).toBeTruthy()
  })
})
