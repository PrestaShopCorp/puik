import PuikSpinnerLoader from './../src/spinner-loader.vue'
import { spinnerSizes } from './../src/spinner-loader'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/SpinnerLoader',
  component: PuikSpinnerLoader,
  argTypes: {
    size: {
      control: 'select',
      description: 'Set the spinner size',
      options: spinnerSizes,
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
  },
  args: {
    size: 'md',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikSpinnerLoader,
  },
  setup() {
    return { args }
  },
  template: `<puik-spinner-loader v-bind="args"></puik-spinner-loader>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet -->
      <!--
      $sizes: sm|md|lg
      -->
      <puik-spinner-loader size="$sizes"></puik-spinner-loader>

      <!--HTML/CSS Snippet-->
      <!--
      $sizes: sm|md|lg (defaults to md)
      `,
      language: 'html',
    },
  },
}
