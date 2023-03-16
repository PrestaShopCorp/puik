import PuikMenu from '../src/menu.vue'
import PuikMenuItem from '../src/menu-item.vue'
import PuikMenuItemGroup from '../src/menu-item-group.vue'
import PuikButton from '../../button/src/button.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Menu/Menu-item',
  component: PuikMenuItem,
  argTypes: {
    rightIcon: {
      control: 'text',
      description: 'Right icon used in item',
    },
    leftIcon: {
      control: 'text',
      description: 'Left icon used in item',
    },
    to: {
      control: 'text',
      description:
        'Set a vue router link for the button (changes button to router-link)',
    },
    href: {
      control: 'text',
      description: 'Set a link for the button (changes button to "a" html tag)',
    },
    destructive: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
      description: 'Set the item color to destructive',
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
      description: 'Set the item disabled',
    },
    item: {
      control: 'none',
      description: 'Slot used to replace whole item',
    },
    default: {
      control: 'text',
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
  },
  setup() {
    return { args }
  },
  template: `<div class="w-full h-[300px] flex flex-row justify-center items-center">
    <puik-menu>
      <template #activator>
        <PuikButton>Show menu</PuikButton>
      </template>
      <puik-menu-item v-bind="args">{{ args.default }}</puik-menu-item>
    </puik-menu>
  </div>`,
})

export const Default = Template.bind({})
Default.args = {
  rightIcon: '',
  leftIcon: 'check',
  to: '',
  href: '',
  default: 'Item label',
  disabled: false,
  destructive: false,
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
        <puik-menu-item>Item label</puik-menu-item>
      </puik-menu>

      <!--HTML/CSS Snippet-->
      <div class="puik-menu">
        <button class="puik-button puik-button--primary puik-button--md puik-menu__activator" aria-haspopup="menu" aria-expanded="true" type="button">
          Show menu
        </button>
        <div class="puik-menu__content puik-menu__content--visible puik-menu__content__position--bottom puik-menu__content__align--left" style="width: 300px; max-height: none;">
          <!--
            State classes
            Active: "puik-menu-item--active"
          -->
          <div class="puik-menu-item" righicon="check" default="Item label" role="menuitem">
            <button href="" class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
              <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">check</div>
              Item label
            </button>
          </div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
