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

export const Success: Story = () => ({
  components: {
    PuikBadge,
  },
  template: `
    <puik-badge>Lorem ipsum</puik-badge>
  `,
})

Success.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="success">
        The text of the badge
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--success">
        The text of the badge
      </div>
      `,
      language: 'html',
    },
  },
}

export const Warning: Story = () => ({
  components: {
    PuikBadge,
  },
  template: `
    <puik-badge variant="warning">Lorem ipsum</puik-badge>
  `,
})

Warning.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="warning">
        The text of the badge
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--warning">
        The text of the badge
      </div>
      `,
      language: 'html',
    },
  },
}

export const Info: Story = () => ({
  components: {
    PuikBadge,
  },
  template: `
    <puik-badge variant="info">Lorem ipsum</puik-badge>
  `,
})

Info.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="info">
        The text of the badge
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--info">
        The text of the badge
      </div>
      `,
      language: 'html',
    },
  },
}

export const Danger: Story = () => ({
  components: {
    PuikBadge,
  },
  template: `
    <puik-badge variant="danger">Lorem ipsum</puik-badge>
  `,
})

Danger.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="danger">
        The text of the badge
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--danger">
        The text of the badge
      </div>
      `,
      language: 'html',
    },
  },
}
