import { describe, it, expect } from 'vitest'
import { factoryMenu, showMenu, getMenuSeparator } from './menu.spec'
import type { VueWrapper } from '@vue/test-utils'

describe('Menu item separator tests', () => {
  let wrapper: VueWrapper<any>
  const template = `
    <puik-menu>
      <template #trigger>
        <puik-button>Show menu</puik-button>
      </template>

      <puik-menu-item>
        <puik-button>First link</puik-button>
      </puik-menu-item>
      <puik-menu-item>
        <puik-button>Second link</puik-button>
      </puik-menu-item>
      <puik-menu-item>
        <puik-button>Third link</puik-button>
      </puik-menu-item>
    </puik-menu>
  `
  it('should be a vue instance', () => {
    wrapper = factoryMenu(template)
    expect(wrapper).toBeTruthy()
  })
  it('should have separator', async () => {
    wrapper = factoryMenu(template)
    await showMenu(wrapper)
    expect(getMenuSeparator(wrapper)).toBeTruthy()
  })
})
