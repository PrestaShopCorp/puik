import PuikLink from './../src/link.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikLink,
  },
  setup() {
    return { args }
  },
  template: `<puik-link></puik-link>`,
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
