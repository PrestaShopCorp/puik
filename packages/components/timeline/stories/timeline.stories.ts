import PuikTimeline from './../src/timeline.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Timeline',
  component: PuikTimeline,
  argTypes: {
    items: Array,
  },
  args: {
    items: [
      { width: 10, percentage: 10 },
      { width: 40, percentage: 0 },
      { width: 50, percentage: 0 },
    ],
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikTimeline,
  },
  setup() {
    return { args }
  },
  template: `<puik-timeline v-bind="args"/>`,
})

export const Default = Template.bind({})
Default.args = {}
