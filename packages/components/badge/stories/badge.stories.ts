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
        type: {
          summary: Object.values(badgeVariants).join('|'),
        },
        defaultValue: {
          summary: 'success',
        },
      },
    },
  },
  args: {
    default: 'Status',
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
      <div class="puik-badge" class="puik-badge--{success|warning|danger|info|neutral}">
        The text of the badge
      </div>
      `,
      language: 'html',
    },
  },
}

export const success: Story = (args: Args) => ({
  components: {
    PuikBadge,
  },
  setup() {
    return {
      args,
    }
  },
  template: `<puik-badge variant="success" v-bind="args">{{ args.default }}</puik-badge>`,
})

success.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="success">
        Status
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--success">
        Status
      </div>
      `,
      language: 'html',
    },
  },
}

export const warning: Story = (args: Args) => ({
  components: {
    PuikBadge,
  },
  setup() {
    return {
      args,
    }
  },
  template: `<puik-badge variant="warning" v-bind="args">{{ args.default }}</puik-badge>`,
})

warning.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="warning">
        Status
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--warning">
        Status
      </div>
      `,
      language: 'html',
    },
  },
}

export const danger: Story = (args: Args) => ({
  components: {
    PuikBadge,
  },
  setup() {
    return {
      args,
    }
  },
  template: `<puik-badge variant="danger" v-bind="args">{{ args.default }}</puik-badge>`,
})

danger.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="danger">
        Status
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--danger">
        Status
      </div>
      `,
      language: 'html',
    },
  },
}

export const info: Story = (args: Args) => ({
  components: {
    PuikBadge,
  },
  setup() {
    return {
      args,
    }
  },
  template: `<puik-badge variant="info" v-bind="args">{{ args.default }}</puik-badge>`,
})

info.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="info">
        Status
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--info">
        Status
      </div>
      `,
      language: 'html',
    },
  },
}

export const neutral: Story = (args: Args) => ({
  components: {
    PuikBadge,
  },
  setup() {
    return {
      args,
    }
  },
  template: `<puik-badge variant="neutral" v-bind="args">{{ args.default }}</puik-badge>`,
})

neutral.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-badge variant="neutral">
        Status
      </puik-badge>

      <!--HTML/CSS Snippet-->
      <div class="puik-badge" class="puik-badge--neutral">
        Status
      </div>
      `,
      language: 'html',
    },
  },
}
