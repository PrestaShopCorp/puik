import {
  MenuAlignEnum,
  menuAlignValues,
  MenuPositionEnum,
  menuPositionValues,
} from '../src/menu'
import PuikMenu from '../src/menu.vue'
import PuikMenuItem from '../src/menu-item.vue'
import PuikMenuItemGroup from '../src/menu-item-group.vue'
import PuikMenuItemSeparator from '../src/menu-item-separator.vue'
import PuikButton from '../../button/src/button.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Menu/Menu',
  component: PuikMenu,
  argTypes: {
    position: {
      control: 'select',
      options: menuPositionValues,
      table: {
        defaultValue: {
          summary: MenuPositionEnum.bottom,
        },
      },
    },
    align: {
      control: 'select',
      options: menuAlignValues,
      table: {
        defaultValue: {
          summary: MenuAlignEnum.left,
        },
      },
    },
    width: {
      control: 'text',
      description: 'Menu width',
      table: {
        defaultValue: {
          summary: '300px',
        },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Menu max height',
      table: {
        defaultValue: {
          summary: 'none',
        },
      },
    },
    activator: {
      control: 'none',
      description: 'Activator used to show or hide menu',
    },
    default: {
      control: 'none',
      description: 'Menu content',
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  args: {},
  components: {
    PuikButton,
    PuikMenu,
    PuikMenuItem,
    PuikMenuItemGroup,
    PuikMenuItemSeparator,
  },
  setup() {
    return { args }
  },
  template: `<div class="w-full h-[300px] flex flex-row justify-center items-center">
    <puik-menu v-bind="args">
      <template #activator>
        <PuikButton>Show menu</PuikButton>
      </template>
      <puik-menu-item-group title="Group title">
        <puik-menu-item>First item</puik-menu-item>
        <puik-menu-item>Second item</puik-menu-item>
        <puik-menu-item>Third item</puik-menu-item>
      </puik-menu-item-group>

      <puik-menu-item-separator />

      <puik-menu-item>Item without group</puik-menu-item>

      <puik-menu-item-separator />

      <puik-menu-item icon="check">Item with icon</puik-menu-item>

      <puik-menu-item-separator />

      <puik-menu-item icon="delete" destructive>Destructive item</puik-menu-item>
      </puik-menu>
  </div>`,
})

export const Default = Template.bind({})
Default.args = {
  width: '300px',
  maxHeight: 'none',
  position: MenuPositionEnum.bottom,
  align: MenuAlignEnum.left,
}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-menu>
        <template #activator>
          <PuikButton>Show menu</PuikButton>
        </template>
        <puik-menu-item-group title="Group title">
          <puik-menu-item>First item</puik-menu-item>
          <puik-menu-item>Second item</puik-menu-item>
          <puik-menu-item>Third item</puik-menu-item>
        </puik-menu-item-group>

        <puik-menu-item-separator />

        <puik-menu-item>Item without group</puik-menu-item>

        <puik-menu-item-separator />

        <puik-menu-item icon="check">Item with icon</puik-menu-item>

        <puik-menu-item-separator />

        <puik-menu-item icon="delete" destructive>Destructive item</puik-menu-item>
      </puik-menu>

      <!--HTML/CSS Snippet-->
      <div class="puik-menu">
        <button class="puik-button puik-button--primary puik-button--md puik-menu__activator" aria-haspopup="menu" aria-expanded="true" type="button" aria-controls="menu-id">
          Show menu
        </button>
        <div class="puik-menu__content puik-menu__content--visible puik-menu__content__position--bottom puik-menu__content__align--left" style="width: 300px; max-height: none;">
          <div class="puik-menu-item-group">
            <h4 class="puik-menu-item-group__title">First group</h4>
            <div aria-labelledby="menu-id" role="menu" class="puik-menu-item-group__items">
              <!--
                State classes
                Active: "puik-menu-item--active"
              -->
              <div class="puik-menu-item" role="menuitem">
                <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
                  First item
                </button>
              </div>
              <div class="puik-menu-item" role="menuitem">
                <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
                  Second item
                </button>
              </div>
              <div class="puik-menu-item" role="menuitem">
                <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
                  Third item
                </button>
              </div>
            </div>
          </div>
          <hr class="puik-menu-item-separator">
          <div class="puik-menu-item" role="menuitem">
            <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
              Item without group
            </button>
          </div>
          <hr class="puik-menu-item-separator">
          <div class="puik-menu-item" role="menuitem">
            <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
              <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">check</div>
              Item with icon
            </button>
          </div>
          <hr class="puik-menu-item-separator">
          <div class="puik-menu-item" role="menuitem">
            <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button puik-menu-item--destructive">
              <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">delete</div>
              Destructive item
            </button>
          </div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
