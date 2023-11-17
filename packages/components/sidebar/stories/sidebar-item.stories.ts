import { PuikSidebarGroupItem, PuikSidebar, PuikSidebarItem, PuikSidebarTitle } from '@prestashopcorp/puik-components';
import type { Meta, StoryObj, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/Sidebar/SidebarItem',
  component: PuikSidebarItem,
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
    href: {
      control: 'text',
      description: 'Set the href of the item',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: undefined
        }
      }
    },
    to: {
      control: 'text',
      description: 'Set the to destination of the item (router-link)',
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
        },
        defaultValue: {
          summary: undefined
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
    }
  },
  args: {
    title: 'title',
    active: false,
    href: undefined,
    to: undefined,
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
  <puik-sidebar-item v-bind="args" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    :active="args.active"
  >
    <puik-sidebar-item v-bind="args" />
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
        language: 'html'
      }
    }
  }
};
