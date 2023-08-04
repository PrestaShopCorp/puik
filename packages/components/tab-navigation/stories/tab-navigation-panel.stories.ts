import { PuikTabNavigationPanel } from '..'
import PuikTabNavigation from './../src/tab-navigation.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/TabNavigation/TabNavigationPanel',
  component: PuikTabNavigationPanel,
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTabNavigation,
  },
  setup() {
    return { args }
  },
  template: `<puik-tab-navigation></puik-tab-navigation>`,
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
