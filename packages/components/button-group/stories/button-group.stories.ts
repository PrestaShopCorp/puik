import PuikButtonGroup from './../src/button-group.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/ButtonGroup',
  component: PuikButtonGroup,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikButtonGroup,
  },
  setup() {
    return { args }
  },
  template: `<puik-button-group></puik-button-group>`,
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
