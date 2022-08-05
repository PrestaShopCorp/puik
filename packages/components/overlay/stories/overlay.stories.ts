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
  template: `<puik-overlay background-color="rgba(0, 0, 0, 0.2)" />`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-overlay background-color="rgba(0, 0, 0, 0.2)" />
      `,
      language: 'html',
    },
  },
}
