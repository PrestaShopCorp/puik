import Alert from './../src/alert.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    Alert,
  },
  props: Object.keys(args),
  template: '<alert></alert>',
})

export const Default = Template.bind({})
Default.args = {}
