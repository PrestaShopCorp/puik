import PuikNotificationBar from './../src/notification-bar.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/NotificationBar',
  component: PuikNotificationBar,
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikNotificationBar,
  },
  setup() {
    return { args }
  },
  template: `<puik-notification-bar></puik-notification-bar>`,
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
