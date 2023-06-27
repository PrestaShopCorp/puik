import { PuikSidebarGroupItem, PuikSidebarItem, PuikSidebarTitle } from '..'
import PuikSidebar from './../src/sidebar.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Sidebar/SidebarItem',
  component: PuikSidebarItem,
  argTypes: {
    title: {
      control: 'text',
      description: 'Set the item title',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'title',
        },
      },
    },
    href: {
      control: 'text',
      description: 'Set the href of the item',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: undefined,
        },
      },
    },
    to: {
      control: 'text',
      description: 'Set the to destination of the item (router-link)',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: undefined,
        },
      },
    },
    icon: {
      control: 'text',
      description: 'Set the icon',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: undefined,
        },
      },
    },
    active: {
      control: 'boolean',
      description: 'Set an active state',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    default: {
      control: 'text',
      description: 'Set the defaut content slot',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: undefined,
        },
      },
    },
  },
  args: {
    title: 'title',
    active: false,
    href: undefined,
    to: undefined,
    icon: 'home',
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikSidebar,
    PuikSidebarGroupItem,
    PuikSidebarItem,
    PuikSidebarTitle,
  },
  setup() {
    return { args }
  },
  template: `
<puik-sidebar>
  <puik-sidebar-item :title="args.title" :icon="args.icon" :active="args.active" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    :active="args.active"
  >
  <puik-sidebar-item :title="args.title" :icon="args.icon" :active="args.active" />
    <puik-sidebar-item title="Title 2" />
  </puik-sidebar-group-item>
</puik-sidebar>
  `,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-sidebar>
  <puik-sidebar-item :title="title" :icon="icon" :active="active" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    :active="active"
  >
  <puik-sidebar-item :title="title" :icon="icon" :active="active" />
    <puik-sidebar-item title="Title 2" />
  </puik-sidebar-group-item>
</puik-sidebar>
`,
      language: 'html',
    },
  },
}
