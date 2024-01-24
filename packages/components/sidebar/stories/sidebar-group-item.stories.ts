import { PuikSidebarGroupItem, PuikSidebar, PuikSidebarItem, PuikSidebarTitle } from '@prestashopcorp/puik-components';
import type { Meta, StoryObj, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/Sidebar/SidebarGroupItem',
  component: PuikSidebarGroupItem,
  argTypes: {
    title: {
      control: 'text',
      description: 'Set the item title',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    name: {
      control: 'text',
      description: 'Set the name',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: undefined
        }
      }
    },
    icon: {
      control: 'text',
      description: 'Set the icon',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    active: {
      control: 'boolean',
      description: 'Set an active state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    default: {
      control: 'none',
      description: 'Set the defaut content slot'
    },
    dataTest: {
      control: 'text',
      description:
        'Set the data-test attribute on the sidebar group item `sidebarAccordion-${dataTest}` `sidebarMenuButton-${dataTest}` '
    }
  },
  args: {
    title: 'title',
    active: false,
    name: undefined,
    icon: 'home'
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500
      }
    }
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSidebar,
    PuikSidebarGroupItem,
    PuikSidebarItem,
    PuikSidebarTitle
  },
  setup() {
    return { args };
  },
  template: `
<puik-sidebar>
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    v-bind="args"
  >
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
  </puik-sidebar-group-item>
</puik-sidebar>
  `
});

export const Default: StoryObj = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-sidebar>
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    :title="title"
    :icon="icon"
    :active="active"
    :name="name"
  >
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
  </puik-sidebar-group-item>
</puik-sidebar>
`,
        language: 'html'
      }
    }
  }
};
