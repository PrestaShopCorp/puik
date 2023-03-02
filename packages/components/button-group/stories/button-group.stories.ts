import PuikButtonGroup from './../src/button-group.vue'
import PuikButton from './../../button/src/button.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/ButtonGroup',
  component: PuikButtonGroup,
  argTypes: {
    selectedIndex: {
      description: 'Set the selected button on load',
    },
    size: {
      description: 'Set the button size',
    },
    buttonList: {
      description: 'List of buttons',
    },
  },
  args: {
    buttonList: [
      {
        variant: 'tertiary',
        label: 'txt placeholder',
      },
      {
        variant: 'tertiary',
        label: 'txt placeholder',
      },
      {
        variant: 'tertiary',
        label: 'txt placeholder',
      },
    ],
    size: 'md',
    selectedIndex: 1,
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikButtonGroup,
    PuikButton,
  },
  setup() {
    return { args }
  },
  template: `<puik-button-group :button-list="args.buttonList" :size="args.size" :selected-index="args.selectedIndex"></puik-button-group>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      
      <!--HTML/CSS Snippet-->
      `,
      language: 'html',
    },
  },
}

const ButtonGroupTemplate = (args: Args) => ({
  components: { PuikButtonGroup, PuikButton },
  setup() {
    return {
      args,
      capitalize,
    }
  },
  template: `<puik-button-group :button-list="args.buttonList" :size="args.size" :selected-index="args.selectedIndex"></puik-button-group>`,
})

export const WithIcons: Story = Template.bind({})
WithIcons.args = {
  buttonList: [
    {
      variant: 'tertiary',
      label: '',
      leftIcon: 'shopping_cart',
    },
    {
      variant: 'tertiary',
      label: '',
      leftIcon: 'shopping_cart',
    },
    {
      variant: 'tertiary',
      label: '',
      leftIcon: 'shopping_cart',
    },
  ],
  size: 'md',
  selectedIndex: 0,
}

export const SmallButton: Story = Template.bind({})
SmallButton.args = {
  size: 'sm',
  selectedIndex: 0,
}

export const LargeButtons: Story = Template.bind({})
LargeButtons.args = {
  size: 'lg',
  selectedIndex: 0,
}
