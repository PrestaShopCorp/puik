import PuikProgressBar from './../src/progress-bar.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/ProgressBar',
  component: PuikProgressBar,
  argTypes: {
    percentage: String,
  },
  args: {
    percentage: '50',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikProgressBar,
  },
  setup() {
    return { args }
  },
  template: `<puik-progress-bar v-bind="args"/>`,
})

export const Default = Template.bind({})
Default.args = {}

export const Max = Template.bind({})
Max.args = {
  percentage: 100,
}

export const Min = Template.bind({})
Min.args = {
  percentage: 0,
}
