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
    nodeType: {
      description: 'Set the HTML node type',
      default: 'div',
      control: {
        type: 'select',
        options: ['div', 'span'],
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
  nodeType: 'span',
}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-icon icon="check" font-size="70px" color="green" node-type="span" />

      <!--HTML/CSS Snippet-->
      <span class="puik-icon material-icons-round" style="font-size: 20px;">check</span>
      `,
      language: 'html',
    },
  },
}
