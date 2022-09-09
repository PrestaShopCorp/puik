import PuikDragDropFile from './../src/drag-drop-file.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/DragDropFile',
  component: DragDropFile,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikDragDropFile,
  },
  setup() {
    return { args }
  },
  template: `<puik-drag-drop-file></puik-drag-drop-file>`,
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
