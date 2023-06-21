import PuikTextarea from './../src/textarea.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikTextarea,
  },
  setup() {
    return { args }
  },
  template: `<puik-textarea></puik-textarea>`,
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
