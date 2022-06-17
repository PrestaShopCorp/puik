import Select from './../src/select.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Select',
  component: Select,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    Select,
  },
  setup() {
    return { args }
  },
  template: '<select></select>',
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
