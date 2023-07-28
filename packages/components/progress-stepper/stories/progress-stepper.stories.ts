import PuikProgressStepper from './../src/progress-stepper.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/ProgressStepper',
  component: ProgressStepper,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikProgressStepper,
  },
  setup() {
    return { args }
  },
  template: `<puik-progress-stepper></puik-progress-stepper>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      
      <!--HTML/CSS Snippet-->
      `,
      language: 'html',
    },
  },
}
