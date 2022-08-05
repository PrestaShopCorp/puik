import PuikOverlay from './../src/overlay.vue'
import type { Args, Meta, Story } from '@storybook/vue3'

export default {
  title: 'Components/Overlay',
  component: PuikOverlay,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikOverlay,
  },
  setup() {
    return { args }
  },
  template: `<puik-overlay></puik-overlay>`,
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
