import {
  MenuAlignEnum,
  menuAlignValues,
  MenuPositionEnum,
  menuPositionValues,
} from '../src/menu'
import PuikMenu from '../src/menu.vue'
import PuikMenuItem from '../src/menu-item.vue'
import PuikMenuItemSeparator from '../src/menu-item-separator.vue'
import PuikButton from '../../button/src/button.vue'
import type { Meta, Args, Story } from '@storybook/vue3'

export default {
  title: 'Components/Menu',
  component: PuikMenu,
  argTypes: {
    position: {
      control: 'select',
      options: menuPositionValues,
      table: {
        defaultValue: {
          summary: MenuPositionEnum.BOTTOM,
        },
      },
    },
    align: {
      control: 'select',
      options: menuAlignValues,
      table: {
        defaultValue: {
          summary: MenuAlignEnum.LEFT,
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
    trigger: {
      control: 'none',
      description: 'Trigger used to show or hide menu',
    },
    default: {
      control: 'none',
      description: 'Menu content',
    },
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
      description: {
        component: 'This is an EXPERIMENTAL version!',
      },
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  args: {},
  components: {
    PuikButton,
    PuikMenu,
    PuikMenuItem,
    PuikMenuItemSeparator,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-menu>
      <template #trigger>
        <puik-button>Show menu</puik-button>
      </template>

      <puik-menu-item v-slot="slotProps">
        <p :class="{'outline outline-blue': slotProps.active}">
          href link {{ slotProps }}
        </p>
      </puik-menu-item>
      <puik-menu-item v-slot="slotProps">
        to link  {{ slotProps }}
      </puik-menu-item>

      <puik-menu-item-separator />

      <puik-menu-item v-slot="menuProps">
        <puik-button :variant="menuProps.active ? 'danger' : 'text'" fluid @click="test(menuProps.close)">A button (danger)</puik-button>
      </puik-menu-item>

      <puik-menu-item v-slot="menuProps" disabled>
        <puik-button :variant="menuProps.active ? 'danger' : 'text'" fluid @click="test">A disabled button</puik-button>
      </puik-menu-item>

      <puik-menu-item v-slot="menuProps" disabled>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius expedita assumenda sed. Laudantium voluptatibus natus, necessitatibus, in sit cumque et veniam repudiandae ab, hic quam magni iste deleniti. Asperiores?</p>
      </puik-menu-item>
    </puik-menu>`,
})

export const Default = Template.bind({})
Default.args = {
  maxHeight: 'none',
  position: MenuPositionEnum.BOTTOM,
  align: MenuAlignEnum.LEFT,
}
Default.parameters = {
  docs: {
    description: {
      story: 'Fuck',
    },
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-menu>
        <template #trigger>
          <puik-button>Show menu</puik-button>
        </template>

        <puik-menu-item v-slot="slotProps">
          <p :class="{'outline outline-blue': slotProps.active}">
            href link {{ slotProps }}
          </p>
        </puik-menu-item>
        <puik-menu-item v-slot="slotProps">
          to link  {{ slotProps }}
        </puik-menu-item>

        <puik-menu-item-separator />

        <puik-menu-item v-slot="menuProps">
          <puik-button :variant="menuProps.active ? 'danger' : 'text'" fluid @click="test(menuProps.close)">A button (danger)</puik-button>
        </puik-menu-item>

        <puik-menu-item v-slot="menuProps" disabled>
          <puik-button :variant="menuProps.active ? 'danger' : 'text'" fluid @click="test">A disabled button</puik-button>
        </puik-menu-item>

        <puik-menu-item v-slot="menuProps" disabled>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius expedita assumenda sed. Laudantium voluptatibus natus, necessitatibus, in sit cumque et veniam repudiandae ab, hic quam magni iste deleniti. Asperiores?</p>
        </puik-menu-item>
      </puik-menu>
      `,
      language: 'html',
    },
  },
}
