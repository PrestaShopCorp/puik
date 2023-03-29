import PuikBreadcrumb from './../src/breadcrumb.vue'
import type { Meta, Story, Args } from '@storybook/vue3'
export default {
  title: 'Components/Breadcrumb',
  component: PuikBreadcrumb,
  argTypes: {
    items: {
      control: 'none',
      description: 'Link displayed in breadcrumb',
      table: {
        defaultValue: {
          summary: `[]`,
        },
        type: {
          summary: 'BreadcrumbItem[]',
          detail: `{
  label: string,
  to: string | undefined,
  href: string | undefined,
  target: string | undefined,
}[]`,
        },
      },
    },
    separatorIcon: {
      control: 'text',
      description: 'Set icon between icon',
      type: 'string',
      table: {
        defaultValue: {
          summary: 'keyboard_arrow_right',
        },
      },
    },
    icon: {
      control: 'text',
      description: 'Set icon used before first link ',
      type: 'string',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
  args: {
    items: [
      {
        label: 'First link',
        href: '#',
      },
      {
        label: 'Second link',
        href: '#',
      },
      {
        label: 'Third link',
        to: 'name',
      },
    ],
    separatorIcon: 'keyboard_arrow_right',
    icon: 'home',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikBreadcrumb,
  },
  setup() {
    return { args }
  },
  template: `<puik-breadcrumb v-bind="args"></puik-breadcrumb>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <!--
      Item type
        {
          label: string,
          to?: string,
          href?: string,
          target: string,
        }[]
      -->
      <puik-breadcrumb :items="items" icon="home"></puik-breadcrumb>

      <!--HTML/CSS Snippet-->
      <nav class="puik-breadcrumb">
        <div class="puik-icon material-icons-round puik-breadcrumb__home-icon" style="font-size: 16px;">home</div>
        <div class="puik-breadcrumb__item">
          <a href="#" target="_self" class="puik-link puik-link--md puik-breadcrumb__item-link" variant="text">First link</a>
          <div class="puik-icon material-icons-round puik-breadcrumb__item-icon" style="font-size: 24px;">keyboard_arrow_right</div>
        </div>
        <div class="puik-breadcrumb__item">
          <a href="#" target="_self" class="puik-link puik-link--md puik-breadcrumb__item-link" variant="text">Second link</a>
          <div class="puik-icon material-icons-round puik-breadcrumb__item-icon" style="font-size: 24px;">keyboard_arrow_right</div>
        </div>
      </nav>
      `,
      language: 'html',
    },
  },
}
