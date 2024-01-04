import PuikTableSearchInput from './../src/table-search-input.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/TableSearchInput',
  component: PuikTableSearchInput,
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTableSearchInput,
  },
  setup() {
    return { args }
  },
  template: `<puik-table-search-input></puik-table-search-input>`,
})

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
        <!--VueJS Snippet-->

        <!--HTML/CSS Snippet-->
        `,
        language: 'html',
      },
    },
  },
}
