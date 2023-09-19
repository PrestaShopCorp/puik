import PuikTag from './../src/tag.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/Tag',
  component: PuikTag,
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTag,
  },
  setup() {
    return { args }
  },
  template: `<puik-tag></puik-tag>`,
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
