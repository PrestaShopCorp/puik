import PuikBreadcrumb from './../src/breadcrumb.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'
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
          detail: `
// Import
import { BreadcrumbItem } from '@prestashopcorp/puik/components/breadcrumb/src/breadcrumb'

// Detail
interface BreadBreadcrumbItem {
  label: string,
  to: string | undefined,
  href: string | undefined,
  target: '_blank' | '_self' | '_parent' | '_top' | undefined,
  dataTest: string | undefined,
}`,
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
        target: '_blank',
      },
    ],
    separatorIcon: 'keyboard_arrow_right',
    icon: 'home',
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikBreadcrumb,
  },
  setup() {
    return { args }
  },
  template: `<puik-breadcrumb v-bind="args"></puik-breadcrumb>`,
})

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-breadcrumb
    :items="items"
    :icon="icon"
  ></puik-breadcrumb>

  <!--HTML/CSS Snippet-->
  <nav class="puik-breadcrumb" role="navigation">
    <div class="puik-icon material-icons-round puik-breadcrumb__home-icon" style="font-size: 16px;">home</div>
    <div class="puik-breadcrumb__item">
      <a href="#" target="_self" class="puik-link puik-link--sm puik-breadcrumb__item-link">First link</a>
      <div class="puik-icon material-icons-round puik-breadcrumb__item-icon" style="font-size: 16px;">keyboard_arrow_right</div>
    </div>
    <div class="puik-breadcrumb__item">
      <a href="#" target="_self" class="puik-link puik-link--sm puik-breadcrumb__item-link">Second link</a>
      <div class="puik-icon material-icons-round puik-breadcrumb__item-icon" style="font-size: 16px;">keyboard_arrow_right</div>
    </div>
    <div class="puik-breadcrumb__item--last">Third link</div>
  </nav>
        `,
        language: 'html',
      },
    },
  },
}
