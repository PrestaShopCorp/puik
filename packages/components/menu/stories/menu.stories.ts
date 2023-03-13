import PuikButton from '../../button/src/button.vue'
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
    as: {
      control: 'none',
      description: 'Component or tag used for menu activator',
      table: {
        defaultValue: {
          summary: 'PuikButton',
        },
      },
    },
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
    activatorLabel: {
      control: 'text',
      description: 'Activator label',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    activator: {
      control: 'none',
      description: 'Activator content',
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
    '... other props': {
      control: 'none',
      description: 'Other props will be user on activator',
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
      <template #default="{ close, open }">
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
        <template #activator> Show menu </template>
        <template #default="{ close }">
          <div>
            This is an example of menu content !
          </div>
          <puik-button class="mt-4" @click="close">Close menu</puik-button>
        </template>

      </puik-menu>
      <!--HTML/CSS Snippet-->
      <div data-headlessui-state="open" class="puik-menu" style="width:300px;">
        <button class="puik-button puik-button--primary puik-button--md" id="headlessui-popover-button-1" aria-expanded="true" data-headlessui-state="open" aria-controls="headlessui-popover-panel-3">
          Show menu
        </button>
        <div class="puik-menu__content puik-menu__content--left" id="headlessui-popover-panel-3" tabindex="-1" data-headlessui-state="open">
          <div> This is an example of menu content ! </div>
          <button class="puik-button puik-button--primary puik-button--md mt-4">
            Close menu
          </button>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
