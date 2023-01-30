import PuikPagination from './../src/pagination.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikPagination,
  },
  setup() {
    return { args }
  },
  template: `<puik-pagination></puik-pagination>`,
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
