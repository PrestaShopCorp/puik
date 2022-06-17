import Option from './../src/option.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Option',
  component: Option,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    Option,
  },
  setup() {
    return { args }
  },
  template: '<option></option>',
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
