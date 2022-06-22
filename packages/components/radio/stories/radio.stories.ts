import Radio from './../src/radio.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    Radio,
  },
  setup() {
    return { args }
  },
  template: '<radio></radio>',
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
