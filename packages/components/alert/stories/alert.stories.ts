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
    },
    disableBorders: {
      description:
        'Disable alert borders (only for info, warning, error variants)',
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

export const Success: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert title="Title">This a success alert with a title and a description.</puik-alert>
     <puik-alert>This a success alert with only a description.</puik-alert>
     <puik-alert title="Title" buttonLabel="Button">This a success alert with a title and a description and a button.</puik-alert>
     <puik-alert buttonLabel="Button">This a success alert with a description and a button.</puik-alert>
    </div>
  `,
})

export const Warning: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
      <puik-alert variant="warning" title="Title">This a warning alert with a title and a description.</puik-alert>
      <puik-alert variant="warning">This a warning alert with only a description.</puik-alert>
      <puik-alert variant="warning" title="Title" buttonLabel="Button">This a warning alert with a title and a description and a button.</puik-alert>
      <puik-alert variant="warning" buttonLabel="Button">This a warning alert with a description and a button.</puik-alert>
    </div>
  `,
})

export const Info: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert variant="info" title="Title">This a info alert with a title and a description.</puik-alert>
     <puik-alert variant="info">This a info alert with only a description.</puik-alert>
     <puik-alert variant="info" title="Title" buttonLabel="Button">This a info alert with a title and a description and a button.</puik-alert>
     <puik-alert variant="info" buttonLabel="Button">This a info alert with a description and a button.</puik-alert>
    </div>
  `,
})

export const Danger: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert variant="danger" title="Title">This a danger alert with a title and a description.</puik-alert>
     <puik-alert variant="danger">This a danger alert with only a description.</puik-alert>
     <puik-alert variant="danger" title="Title" buttonLabel="Button">This a danger alert with a title and a description and a button.</puik-alert>
     <puik-alert variant="danger" buttonLabel="Button">This a danger alert with a description and a button.</puik-alert>
    </div>
  `,
})
