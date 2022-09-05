import PuikDragDrop from './../src/drag-drop.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/DragDrop',
  component: DragDrop,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikDragDrop,
  },
  setup() {
    return { args }
  },
  template: `<puik-drag-drop></puik-drag-drop>`,
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
