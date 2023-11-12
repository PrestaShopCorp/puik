import PuikMenuItemTitle from '../src/menu-item-title.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/Menu/MenuItemTitle',
  component: PuikMenuItemTitle,
  argTypes: {
    default: {
      control: 'text',
      description: 'Default slot to set title text',
    },
    dataTest: {
      description: 'Set the data-test attribute for title `title-${dataTest}`',
      control: 'text',
    },
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikMenuItemTitle,
  },
  setup() {
    return { args }
  },
  template: `<puik-menu-item-title v-bind="args">{{ args.default }}</puik-menu-item-title>`,
})

export const Default = {
  render: Template,
  args: {
    default: 'Menu Item Title',
    titleDataTest: '',
  },

  parameters: {
    docs: {
      source: {
        code: `
<puik-menu-item-title>
    Menu Item Title
</puik-menu-item-title>
            `,
        language: 'html',
      },
    },
  },
}
