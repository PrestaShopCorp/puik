import { PuikSidebarGroupItem, PuikSidebarItem, PuikSidebarTitle } from '..'
import { PuikButton } from '../..'
import PuikSidebar from './../src/sidebar.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Sidebar',
  component: PuikSidebar,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Set the expansion state',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    name: {
      control: 'text',
      description:
        'Name use by parent to open/close accordion (group-1 for example)',
    },
    temporary: {
      control: 'boolean',
      description:
        'Add a backdrop for dismiss and hide the sidebar when collapsed (mobile usage), expansion is triggered by the v-model',
    },
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
<puik-sidebar :name="args.name" :temporary="args.temporary" v-model="args.modelValue">
  <puik-sidebar-item title="Home" icon="home" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    active
  >
    <puik-sidebar-item title="Title 1" active />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Catalog" icon="store" name="group-2">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Customers" icon="people" name="group-3">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-item title="Settings" icon="settings" />
  <puik-sidebar-item
    title="New modules added customization"
    icon="extension"
  />
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
<puik-sidebar :name="args.name" :temporary="args.temporary" v-model="args.modelValue">
  <puik-sidebar-item title="Home" icon="home" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    active
  >
    <puik-sidebar-item title="Title 1" active />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Catalog" icon="store" name="group-2">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Customers" icon="people" name="group-3">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-item title="Settings" icon="settings" />
  <puik-sidebar-item
    title="New modules added customization"
    icon="extension"
  />
</puik-sidebar> 

<!--HTML/CSS Snippet-->
      `,
      language: 'html',
    },
  },
}

const TemporaryTemplate = (args: Args) => ({
  components: {
    PuikSidebar,
    PuikSidebarGroupItem,
    PuikSidebarItem,
    PuikSidebarTitle,
    PuikButton,
  },
  setup() {
    return { args }
  },
  data() {
    return {
      expanded: false,
    }
  },
  template: `
<puik-sidebar temporary v-model="expanded">
  <puik-sidebar-item title="Home" icon="home" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    active
  >
    <puik-sidebar-item title="Title 1" active />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Catalog" icon="store" name="group-2">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Customers" icon="people" name="group-3">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-item title="Settings" icon="settings" />
  <puik-sidebar-item
    title="New modules added customization"
    icon="extension"
  />
</puik-sidebar>
<puik-button @click="expanded = !expanded">
  Open/Close
</puik-button>
  `,
})

export const Temporary: Story = TemporaryTemplate.bind({})
