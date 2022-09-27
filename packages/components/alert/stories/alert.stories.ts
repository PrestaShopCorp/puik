import { action } from '@storybook/addon-actions'
import { alertVariants } from '../src/alert'
import PuikAlert from './../src/alert.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Alert',
  component: PuikAlert,
  argTypes: {
    title: {
      description: 'Set the alert title',
    },
    description: {
      description: 'Set the alert description (also exists as a default slot)',
    },
    variant: {
      control: 'select',
      description: 'Set the alert variant',
      options: alertVariants,
      table: {
        defaultValue: {
          summary: 'success',
        },
      },
    },
    disableBorders: {
      description:
        'Disable alert borders (only for info, warning, error variants)',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    buttonLabel: {
      description: 'Label of the button',
    },
    default: {
      control: 'none',
      description: 'Set the alert description',
    },
  },
  args: {
    title: 'Title',
    description: 'This is the description of the success alert.',
    variant: 'success',
    disableBorders: false,
    buttonLabel: 'Button',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikAlert,
  },
  setup() {
    return { args }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <puik-alert
      v-bind="args"
      @click="click"
    ></puik-alert>`,
})

export const Default = Template.bind({})
Default.args = {}

export const Variants: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert>This a success alert</puik-alert>
     <puik-alert variant="warning">This a warning alert</puik-alert>
     <puik-alert variant="info">This a info alert</puik-alert>
     <puik-alert variant="danger">This a danger alert</puik-alert>
    </div>
  `,
})

export const WithoutBorders: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert variant="warning" disableBorders>This is a warning alert without borders</puik-alert>
     <puik-alert variant="info" disableBorders>This is a info alert without borders</puik-alert>
     <puik-alert variant="danger" disableBorders>This is a danger alert without borders</puik-alert>
    </div>
  `,
})
export const WithATitle: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert title="Alert title">This is a success alert with a title</puik-alert>
    </div>
  `,
})

export const WithAButton: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert variant="warning" title="Alert title" buttonLabel="Update">This is a warning alert with a button</puik-alert>
    </div>
  `,
})
