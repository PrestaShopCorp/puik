import PuikModal from './../src/modal.vue'
import type { Args, Meta, Story } from '@storybook/vue3'

export default {
  title: 'Components/Modal',
  component: PuikModal,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikModal,
  },
  setup() {
    return { args }
  },
  template: `<puik-modal></puik-modal>`,
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
