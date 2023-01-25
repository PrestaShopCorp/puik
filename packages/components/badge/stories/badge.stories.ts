import { badgeVariants } from '../src/badge'
import PuikBadge from './../src/badge.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Badge',
  component: PuikBadge,
  argTypes: {
    default: {
      control: 'text',
      description: 'Badge content',
    },
    variant: {
      control: 'select',
      description: 'Set the badge variant',
      options: badgeVariants,
      table: {
        defaultValue: {
          summary: 'success',
        },
      },
    },
  },
  args: {
    default: 'Lorem ipsum',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikBadge,
  },
  setup() {
    return { args }
  },
  template: `<puik-badge v-bind="args">{{ args.default }}</puik-badge>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge :variant="variant">
        The text of the badge
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--{success|warning|danger|info}">
        The text of the badge
      </div>
      `,
      language: 'html',
    },
  },
}

export const BadgeVariants: Story = () => ({
  components: {
    PuikBadge,
  },
  template: `
    <puik-badge variant="info">Status</puik-badge>
    <puik-badge>Status</puik-badge>
    <puik-badge variant="danger">Status</puik-badge>
    <puik-badge variant="warning">Status</puik-badge>
  `,
})

BadgeVariants.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="info">
        Status
      </puik-badge>
      <puik-badge variant="success">
        Status
      </puik-badge>
      <puik-badge variant="danger">
        Status
      </puik-badge>
      <puik-badge variant="warning">
        Status
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--info">
        Status
      </div>
      <div class="puik-badge" class="puik-badge--success">
        Status
      </div>
      <div class="puik-badge" class="puik-badge--danger">
        Status
      </div>
      <div class="puik-badge" class="puik-badge--warning">
        Status
      </div>
      `,
      language: 'html',
    },
  },
}
