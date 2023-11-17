import { PuikSidebar, PuikSidebarItem, PuikSidebarTitle } from "@prestashopcorp/puik-components"
import type { Meta, StoryObj, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/Sidebar/SidebarTitle',
  component: PuikSidebarTitle,
  argTypes: {
    tag: {
      control: 'text',
      description: 'Set the node type',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'h3',
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
    tag: 'h3',
    default: 'Title',
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSidebar,
    PuikSidebarItem,
    PuikSidebarTitle,
  },
  setup() {
    return { args }
  },
  template: `
<puik-sidebar>
  <puik-sidebar-title :tag="args.tag">{{ args.default }}</puik-sidebar-title>
  <puik-sidebar-item title="Home" icon="home" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
</puik-sidebar>
  `,
})

export const Default: StoryObj = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-sidebar-title :tag="tag">Title</puik-sidebar-title>
`,
        language: 'html',
      },
    },
  },
}
