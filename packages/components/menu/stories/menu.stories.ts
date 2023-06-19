import { menuAlign, menuPosition } from '../src/menu'
import PuikMenu from '../src/menu.vue'
import PuikMenuItem from '../src/menu-item.vue'
import PuikMenuItemSeparator from '../src/menu-item-separator.vue'
import PuikMenuItemTitle from '../src/menu-item-title.vue'
import PuikButton from '../../button/src/button.vue'
import PuikLink from '../../link/src/link.vue'
import type { Meta, Args, Story } from '@storybook/vue3'

const menuAlignsJoined = menuAlign.join('|')
const menuPositionsJoined = menuPosition.join('|')

export default {
  title: 'Components/Menu',
  component: PuikMenu,
  argTypes: {
    position: {
      description: 'Menu position',
      control: 'select',
      options: menuPosition,
      table: {
        defaultValue: {
          summary: 'bottom',
        },
        type: {
          summary: menuPositionsJoined,
        },
      },
    },
    align: {
      description: 'Menu alignment',
      control: 'select',
      options: menuAlign,
      table: {
        defaultValue: {
          summary: 'left',
        },
        type: {
          summary: menuAlignsJoined,
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
    width: {
      control: 'text',
      description: 'Menu width',
      table: {
        defaultValue: {
          summary: '200px',
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
  args: {
    width: '200px',
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  args: {},
  components: {
    PuikButton,
    PuikLink,
    PuikMenu,
    PuikMenuItem,
    PuikMenuItemSeparator,
    PuikMenuItemTitle,
  },
  setup() {
    return { args }
  },
  template: `
  <puik-menu v-bind="args">
    <template #trigger>
      <puik-button>Show menu</puik-button>
    </template>

    <template #default="{ close }">
      <puik-menu-item-title>
        First section title
      </puik-menu-item-title>
      <puik-menu-item>
        <puik-button variant="text">
          Item
        </puik-button>
      </puik-menu-item>
      <puik-menu-item>
        <puik-button variant="text" left-icon="home">
          Item with icon
        </puik-button>
      </puik-menu-item>
      <puik-menu-item>
        <puik-button variant="text" right-icon="home">
          Item with icon
        </puik-button>
      </puik-menu-item>

      <puik-menu-item-separator />

      <puik-menu-item-title class="puik-body-default-bold uppercase">
        Second section title
      </puik-menu-item-title>
      <p class="p-2">
        Information text
      </p>
      <puik-menu-item>
        <puik-button variant="destructive" left-icon="delete" @click="close">
          Destructive item
        </puik-button>
      </puik-menu-item>

      <puik-menu-item-separator />

      <puik-menu-item-title>
        Third section title
      </puik-menu-item-title>
      <puik-menu-item>
        <puik-button variant="text" disabled>
          Disabled item
        </puik-button>
      </puik-menu-item>
      <div class="flex justify-end">
        <puik-link class="flex items-center">
          View all result
        </puik-link>
      </div>
    </template>
  </puik-menu>
    `,
})

export const Default = Template.bind({})
Default.args = {
  maxHeight: 'none',
  position: 'bottom',
  align: 'left',
}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<!--
  $aligns: ${menuAlignsJoined}
  $positions: ${menuPositionsJoined}
-->
<puik-menu
  :align="$aligns"
  :position="$position"
  :width="width"
  :max-height="maxHeight"
>
  <template #trigger>
    <puik-button>Show menu</puik-button>
  </template>

  <template #default="{ close }">
    <puik-menu-item-title>
      First section title
    </puik-menu-item-title>
    <puik-menu-item>
      <puik-button variant="text">
        Item
      </puik-button>
    </puik-menu-item>
    <puik-menu-item>
      <puik-button variant="text" left-icon="home">
        Item with icon
      </puik-button>
    </puik-menu-item>

    <puik-menu-item-separator />

    <puik-menu-item-title>
      Second section title
    </puik-menu-item-title>
    <p>
      Information text
    </p>
    <puik-menu-item>
      <puik-button variant="destructive" left-icon="delete" @click="close">
        Destructive item
      </puik-button>
    </puik-menu-item>
  </template>
</puik-menu>

<!--HTML/CSS Snippet-->
<!--
  State classes
  Hide menu: "puik-menu--invisible"
-->
<!--
  $aligns: ${menuAlignsJoined}
  $positions: ${menuPositionsJoined}
-->
<div class="puik-menu puik-menu--position-bottom puik-menu--align-left">
  <button class="puik-button puik-button--primary puik-button--md puik-menu__trigger" aria-expanded="true" type="button" aria-controls="menu-id">
    Show menu
  </button>
  <!--
    Menu content transition

    Enter active: "puik-menu__transition__enter--active"
    Enter from: "puik-menu__transition__enter--from"
    Enter to: "puik-menu__transition__enter--to"

    Leaving enter: puik-menu__transition__leave--active"
    Leaving from: "puik-menu__transition__leave--from"
    Leaving to: "puik-menu__transition__leave--to"
  -->
  <div class="puik-menu__content" id="menu-id" tabindex="-1" style="max-height: none; width: 200px;">
    <h4 class="puik-menu-item-title"> First section title </h4>
    <div class="puik-menu-item">
      <button class="puik-button puik-button--text puik-button--md">
        Item
      </button>
    </div>
    <div class="puik-menu-item">
      <button class="puik-button puik-button--text puik-button--md">
        <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">home</div> Item with icon
      </button>
    </div>
    <div class="puik-menu-item">
      <hr class="puik-menu-item-separator">
    </div>
    <h4 class="puik-menu-item-title"> Second section title </h4>
    <p> Information text </p>
    <div class="puik-menu-item">
      <button class="puik-button puik-button--destructive puik-button--md">
        <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">delete</div> Destructive item
      </button>
    </div>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}
