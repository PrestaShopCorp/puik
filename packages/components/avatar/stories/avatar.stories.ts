import PuikAvatar from './../src/avatar.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/Avatar',
  component: PuikAvatar,
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikAvatar,
  },
  setup() {
    return { args }
  },
  template: `<puik-avatar></puik-avatar>`,
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
