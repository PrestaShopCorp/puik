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
      <puik-menu-item-group title="Section title">
        <puik-menu-item href="/">href link</puik-menu-item>
        <puik-menu-item to="home">to link</puik-menu-item>
        <puik-menu-item href="/" disabled>Disabled item</puik-menu-item>
      </puik-menu-item-group>
      <puik-menu-item-separator />
      <puik-menu-item-group title="Icon section">
        <puik-menu-item href="/" left-icon="check">Item with left icon</puik-menu-item>
        <puik-menu-item href="/" right-icon="check">Item with right icon</puik-menu-item>
      </puik-menu-item-group>
      <puik-menu-item-separator />
      <puik-menu-item href="/">Item without group</puik-menu-item>
      <puik-menu-item-separator />
      <puik-menu-item href="/" left-icon="delete" destructive>Destructive item</puik-menu-item>
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
        <puik-menu-item-group title="Section title">
          <puik-menu-item href="/">href link</puik-menu-item>
          <puik-menu-item to="home">to link</puik-menu-item>
          <puik-menu-item href="/" disabled>Disabled item</puik-menu-item>
        </puik-menu-item-group>
        <puik-menu-item-separator />
        <puik-menu-item-group title="Icon section">
          <puik-menu-item href="/" left-icon="check">Item with left icon</puik-menu-item>
          <puik-menu-item href="/" right-icon="check">Item with right icon</puik-menu-item>
        </puik-menu-item-group>
        <puik-menu-item-separator />
        <puik-menu-item href="/">Item without group</puik-menu-item>
        <puik-menu-item-separator />
        <puik-menu-item left-icon="delete" destructive>Destructive item</puik-menu-item>
      </puik-menu>

      <!--HTML/CSS Snippet-->
      <!--
        State classes
          Align left: puik-menu__align--left"
          Align right: puik-menu__align--right"
          Position top: puik-menu__position--top"
          Position bottom: puik-menu__position--bottom"
      -->
      <div class="puik-menu">
      <button class="puik-button puik-button--primary puik-button--md puik-menu__activator" id="button-id" aria-haspopup="menu" aria-expanded="true" type="button" aria-controls="menu-id">
        Show menu
      </button>
      <!--
        State classes
        Visible: puik-menu__content--visible"
      -->
      <div aria-labelledby="button-id" role="menu" class="puik-menu__content puik-menu__content--visible puik-menu__content__position--bottom puik-menu__content__align--left" style="width: 300px; max-height: none;">
        <section class="puik-menu-item-group">
          <h4 class="puik-menu-item-group__title">Section title</h4>
            <div class="puik-menu-item-group__items">
              <!--
                State classes
                  Disabled: puik-menu-item--disabled"
                  Active: puik-menu-item--active"
                  Destructive: puik-menu-item--destructive"
                  Right-icon: puik-menu-item--right-icon"
              -->
              <div class="puik-menu-item" role="menuitem">
                <a href="/" class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button" disabled="false">
                  href link
                </a>
              </div>
              <div class="puik-menu-item" role="menuitem">
                <router-link to="home" class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button" disabled="false">
                  to link
                </router-link>
              </div>
              <div class="puik-menu-item puik-menu-item--disabled" role="menuitem" aria-disabled="true">
                <a href="/" class="puik-button puik-button--text puik-button--md puik-button--disabled puik-button--fluid puik-menu-item__button" disabled="true">
                  Disabled item
                </a>
              </div>
            </div>
          </section>
          <hr class="puik-menu-item-separator">
          <section class="puik-menu-item-group">
            <h4 class="puik-menu-item-group__title">Icon section</h4>
            <div class="puik-menu-item-group__items">
              <div class="puik-menu-item" role="menuitem">
                <a href="/" class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button" disabled="false">
                  <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">check</div>Item with left icon
                </a>
              </div>
              <div class="puik-menu-item puik-menu-item--right-icon" role="menuitem">
                <a href="/" class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button" disabled="false">
                  Item with right icon <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">check</div>
                </a>
              </div>
            </div>
          </section>
          <hr class="puik-menu-item-separator">
          <div class="puik-menu-item" role="menuitem">
            <a href="/" class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button" disabled="false">
              Item without group
            </a>
          </div>
          <hr class="puik-menu-item-separator">
          <div class="puik-menu-item puik-menu-item--destructive" role="menuitem">
            <a href="/" class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button" disabled="false">
              <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">delete</div>Destructive item
            </a>
          </div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
