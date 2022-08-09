import PuikIcon from './../src/icon.vue'
import type { Args, Meta, Story } from '@storybook/vue3'

export default {
  title: 'Components/Icon',
  component: PuikIcon,
  argTypes: {
    icon: {
      description: 'Set the icon name',
    },
    fontSize: {
      description: 'Set the icon font size',
      control: {
        type: 'range',
        min: 1,
        max: 100,
        step: 1,
      },
    },
    color: {
      description: 'Set the icon color',
      control: {
        type: 'color',
      },
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikIcon,
  },
  setup() {
    return { args }
  },
  template: `<puik-icon v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  icon: 'check',
  color: 'green',
  fontSize: 20,
}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-icon icon="check" font-size="70px" color="green" />

      <!--HTML/CSS Snippet-->
      <div class="puik-icon material-icons-round" style="font-size: 20px;">check</div>
      `,
      language: 'html',
    },
  },
}
