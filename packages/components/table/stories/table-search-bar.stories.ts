import PuikTableSearchBar from './../src/table-search-bar.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/TableSearchBar',
  component: PuikTableSearchBar,
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTableSearchBar,
  },
  setup() {
    return { args }
  },
  template: `<puik-table-search-bar></puik-table-search-bar>`,
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
