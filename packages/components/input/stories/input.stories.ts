import Input from './../src/input.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    Input,
  },
  props: Object.keys(args),
  template: '<input></input>',
})

export const Default = Template.bind({})
Default.args = {}
