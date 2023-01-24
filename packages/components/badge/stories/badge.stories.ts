import { badgeVariants } from '../src/badge'
import PuikBadge from './../src/badge.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Badge',
  component: PuikBadge,
  argTypes: {
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
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikBadge,
  },
  setup() {
    return { args }
  },
  template: `<puik-badge>Lorem ipsum</puik-badge>`,
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
