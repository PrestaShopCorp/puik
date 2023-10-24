import PuikDivider from './../src/divider.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/Divider',
  component: PuikDivider,
  args: {},
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikDivider,
  },
  setup() {
    return { args }
  },
  template: `<puik-divider />`,
})

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-divider />

<!--HTML/CSS Snippet-->
<hr class="puik-divider">
`,
        language: 'html',
      },
    },
  },
}
