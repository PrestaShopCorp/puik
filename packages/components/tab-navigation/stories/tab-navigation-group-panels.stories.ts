import PuikTabNavigationGroupPanels from './../src/tab-navigation-group-panels.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/TabNavigationGroupPanels',
  component: PuikTabNavigationGroupPanels,
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTabNavigationGroupPanels,
  },
  setup() {
    return { args }
  },
  template: `<puik-tab-navigation-group-panels></puik-tab-navigation-group-panels>`,
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
