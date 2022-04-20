import Switch from './../src/switch.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    Switch,
  },
  props: Object.keys(args),
  template: '<switch></switch>',
})

export const Default = Template.bind({})
Default.args = {}
