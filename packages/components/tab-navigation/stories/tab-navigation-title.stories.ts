import PuikTabNavigationTitle from './../src/tab-navigation-title.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/TabNavigationTitle',
  component: PuikTabNavigationTitle,
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTabNavigationTitle,
  },
  setup() {
    return { args }
  },
  template: `<puik-tab-navigation-title></puik-tab-navigation-title>`,
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
