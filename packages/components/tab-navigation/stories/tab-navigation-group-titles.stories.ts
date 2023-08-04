import PuikTabNavigationGroupTitles from './../src/tab-navigation-group-titles.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/TabNavigationGroupTitles',
  component: PuikTabNavigationGroupTitles,
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTabNavigationGroupTitles,
  },
  setup() {
    return { args }
  },
  template: `<puik-tab-navigation-group-titles></puik-tab-navigation-group-titles>`,
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
