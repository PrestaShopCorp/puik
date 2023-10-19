import PuikDivider from './../src/divider.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/Divider',
  component: PuikDivider,
  argTypes: {
    id: {
      description:
        "Prop which will correspond to the component's html id attribute. NB: must not start with a number",
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
  args: {
    id: 'puik-chip-id',
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikDivider,
  },
  setup() {
    return { args }
  },
  template: `<puik-divider v-bind="args"/>`,
})

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-divider id="puik-divider-id"/>

<!--HTML/CSS Snippet-->
<hr id="puik-divider-id" class="puik-divider">
`,
        language: 'html',
      },
    },
  },
}
