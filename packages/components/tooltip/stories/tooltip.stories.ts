import Tooltip from './../src/tooltip.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    Tooltip,
  },
  props: Object.keys(args),
  template: '<tooltip></tooltip>',
})

export const Default = Template.bind({})
Default.args = {}
