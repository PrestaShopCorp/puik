import { describe, it, expect } from 'vitest';
import { factoryMenu, showMenu } from './menu.spec';
import type { VueWrapper } from '@vue/test-utils';

describe('Menu item separator tests', () => {
  let wrapper: VueWrapper<any>;

  const getMenuSeparator = () => wrapper.find('.puik-menu-item-separator');

  const template = `
    <puik-menu>
      <template #trigger>
        <puik-button>Show menu</puik-button>
      </template>

      <puik-menu-item>
        <puik-button>First link</puik-button>
      </puik-menu-item>
      <puik-menu-item-separator />
      <puik-menu-item>
        <puik-button>Third link</puik-button>
      </puik-menu-item>
    </puik-menu>
  `;
  it('should be a vue instance', () => {
    wrapper = factoryMenu(template);
    expect(wrapper).toBeTruthy();
  });
  it('should have separator', async () => {
    wrapper = factoryMenu(template);
    await showMenu(wrapper);
    expect(getMenuSeparator().exists()).toBeTruthy();
  });
});
