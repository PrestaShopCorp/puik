import { SidebarVariantsList } from '../src/sidebar'
import { PuikSidebarGroupItem, PuikSidebarItem, PuikSidebarTitle } from '..'
import { PuikButton } from '../..'
import PuikSidebar from './../src/sidebar.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Sidebar',
  component: PuikSidebar,
  argTypes: {
    variant: {
      control: 'select',
      description: 'Set the sidebar variant',
      options: Object.values(SidebarVariantsList),
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
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
  args: {
    variant: SidebarVariantsList.PRIMARY,
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
  <puik-sidebar :variant="args.variant" :name="args.name" :temporary="args.temporary" v-model="args.modelValue">
    <puik-sidebar-item
      title="Dashboard"
      icon="trending_up"
      href="https://github.com/PrestaShopCorp/puik"
      active
    />
    <puik-sidebar-title>Section Title</puik-sidebar-title>
    <puik-sidebar-group-item title="Catalog" icon="store" name="group-1">
      <puik-sidebar-item title="Products" />
      <puik-sidebar-item title="Section" />
    </puik-sidebar-group-item>
    <puik-sidebar-group-item title="Shopping" icon="shopping_basket" name="group-2">
      <puik-sidebar-item title="Products" />
      <puik-sidebar-item title="Reviews" />
    </puik-sidebar-group-item>
    <puik-sidebar-group-item title="Account" icon="people" name="group-3">
      <puik-sidebar-item title="Settings" />
      <puik-sidebar-item title="Profile" />
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
      <puik-sidebar :variant="args.variant" :name="args.name" :temporary="args.temporary" v-model="args.modelValue">
        <puik-sidebar-item
          title="Dashboard"
          icon="trending_up"
          href="https://github.com/PrestaShopCorp/puik"
          active
        />
        <puik-sidebar-title>Section Title</puik-sidebar-title>
        <puik-sidebar-group-item title="Catalog" icon="store" name="group-1">
          <puik-sidebar-item title="Products" />
          <puik-sidebar-item title="Section" />
        </puik-sidebar-group-item>
        <puik-sidebar-group-item title="Shopping" icon="shopping_basket" name="group-2">
          <puik-sidebar-item title="Products" />
          <puik-sidebar-item title="Reviews" />
        </puik-sidebar-group-item>
        <puik-sidebar-group-item title="Account" icon="people" name="group-3">
          <puik-sidebar-item title="Settings" />
          <puik-sidebar-item title="Profile" />
        </puik-sidebar-group-item>
      </puik-sidebar>

      <!--HTML/CSS Snippet-->
      `,
      language: 'html',
    },
  },
}

export const Primary: Story = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary: Story = Template.bind({})
Secondary.args = {
  variant: 'secondary',
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
    <puik-sidebar-item
      title="Dashboard"
      icon="trending_up"
      href="https://github.com/PrestaShopCorp/puik"
      active
    />
    <puik-sidebar-title>Section Title</puik-sidebar-title>
    <puik-sidebar-group-item title="Catalog" icon="store" name="group-1">
      <puik-sidebar-item title="Products" />
      <puik-sidebar-item title="Section" />
    </puik-sidebar-group-item>
    <puik-sidebar-group-item title="Shopping" icon="shopping_basket" name="group-2">
      <puik-sidebar-item title="Products" />
      <puik-sidebar-item title="Reviews" />
    </puik-sidebar-group-item>
    <puik-sidebar-group-item title="Account" icon="people" name="group-3">
      <puik-sidebar-item title="Settings" />
      <puik-sidebar-item title="Profile" />
    </puik-sidebar-group-item>
  </puik-sidebar>
  <puik-button @click="expanded = !expanded">
    Open/Close
  </puik-button>
  `,
})

export const Temporary: Story = TemporaryTemplate.bind({})
