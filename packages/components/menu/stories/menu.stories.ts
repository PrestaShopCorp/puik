import {
  MenuAlignEnum,
  menuAlignValues,
  MenuPositionEnum,
  menuPositionValues,
} from '../src/menu'
import PuikMenu from '../src/menu.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Menu',
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
          summary: MenuAlignEnum.right,
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
    PuikMenu,
  },
  setup() {
    return { args }
  },
  template: `<div class="w-full h-[300px] flex flex-row justify-center items-center">
    <puik-menu v-bind="args">
      <template #activator="{ open }">
        <puik-button>
        {{ open ? 'Hide menu' : 'Show menu' }}
        </puik-button>
      </template>

      <template #default="{ close }">
        <div>
          This is an example of menu content !
        </div>
        <puik-button class="mt-4" @click="close">Close menu</puik-button>
      </template>
    </puik-menu>
  </div>`,
})

export const Default = Template.bind({})
Default.args = {
  activatorLabel: 'Show menu',
  width: '300px',
}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-menu v-bind="args">
        <template #activator="{ open }">
          <puik-button>
            Show menu
          </puik-button>
        </template>
        <template #default="{ close, open }">
          <div>
            This is an example of menu content !
          </div>
          <puik-button class="mt-4" @click="close">Close menu</puik-button>
        </template>
      </puik-menu>

      <!--HTML/CSS Snippet-->
      <div class="puik-menu">
        <button
          class="puik-button puik-button--primary puik-button--md puik-menu__activator"
          aria-expanded="true"
          type="button"
          aria-controls="menu-id"
        >
          Show menu
        </button>
        <!--
          State classes
          Visible: "puik-menu__content--visible"
         -->
        <div
          class="puik-menu__content puik-menu__content__position--bottom puik-menu__content__align--left puik-menu__content--visible"
          id="menu-id"
          tabindex="-1"
          data-headlessui-state="open"
          style="width: 300px;"
        >
          Menu content
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
