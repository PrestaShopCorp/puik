import { action } from '@storybook/addon-actions'
import { alertVariants } from '../src/alert'
import PuikAlert from './../src/alert.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Alert',
  component: PuikAlert,
  argTypes: {
    title: {
      description: 'Set the button variant',
    },
    description: {
      description: 'Set the button size',
    },
    variant: {
      control: 'select',
      description: 'Set the alert variant',
      options: alertVariants,
    },
    closable: {
      description: 'Set the button as fluid',
    },
    buttonLabel: {
      description: 'Set the button as disabled',
    },
  },
  args: {
    title: 'Title',
    description: 'This is the description of the success alert.',
    variant: 'success',
    closable: false,
    buttonLabel: '',
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
    close: action('close'),
  },
  template: `
    <puik-alert
      v-bind="args"
      @click="click"
      @close="close"
    ></puik-alert>`,
})

export const Default = Template.bind({})
Default.args = {}

export const Success: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="grid md:grid-cols-3 gap-4 items-start">
     <puik-alert title="Title">This a success alert with a title and a description.</puik-alert>
     <puik-alert title="Title" closable>This a success alert with a title and a description that can be closed.</puik-alert>
     <puik-alert title="Title" buttonLabel="Button">This a success alert with a title and a description and a button.</puik-alert>
     <puik-alert>This a success alert with only a description.</puik-alert>
     <puik-alert closable>This a success alert with a description that can be closed.</puik-alert>
     <puik-alert buttonLabel="Button">This a success alert with a description and a button.</puik-alert>
     <puik-alert title="Title">
       This is an alert with a description that contains more than 100 characters.
       This is an alert with a description that contains more than 100 characters.
       This is an alert with a description that contains more than 100 characters.
       This is an alert with a description that contains more than 100 characters.
       This is an alert with a description that contains more than 100 characters.
     </puik-alert>
     <puik-alert>
       This is an alert with a description that contains more than 100 characters.
       This is an alert with a description that contains more than 100 characters.
       This is an alert with a description that contains more than 100 characters.
       This is an alert with a description that contains more than 100 characters.
       This is an alert with a description that contains more than 100 characters.
     </puik-alert>
     <puik-alert title="Title" buttonLabel="Button">
       This is a success alert with a description that contains more than 100 characters.
       This is a success alert with a description that contains more than 100 characters.
       This is a success alert with a description that contains more than 100 characters.
       This is a success alert with a description that contains more than 100 characters.
       This is a success alert with a description that contains more than 100 characters.
     </puik-alert>
    </div>
  `,
})

export const Warning: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="grid md:grid-cols-3 gap-4 items-start">
      <puik-alert variant="warning" title="Title">This a warning alert with a title and a description.</puik-alert>
      <puik-alert variant="warning" title="Title" closable>This a warning alert with a title and a description that can be closed.</puik-alert>
      <puik-alert variant="warning" title="Title" buttonLabel="Button">This a warning alert with a title and a description and a button.</puik-alert>
      <puik-alert variant="warning">This a warning alert with only a description.</puik-alert>
      <puik-alert variant="warning" closable>This a warning alert with a description that can be closed.</puik-alert>
      <puik-alert variant="warning" buttonLabel="Button">This a warning alert with a description and a button.</puik-alert>
      <puik-alert variant="warning" title="Title">
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
      </puik-alert>
      <puik-alert variant="warning">
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
      </puik-alert>
      <puik-alert variant="warning" title="Title" buttonLabel="Button">
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
       This is a warning alert with a description that contains more than 100 characters.
      </puik-alert>
    </div>
  `,
})

export const Info: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="grid md:grid-cols-3 gap-4 items-start">
     <puik-alert variant="info" title="Title">This a info alert with a title and a description.</puik-alert>
     <puik-alert variant="info" title="Title" closable>This a info alert with a title and a description that can be closed.</puik-alert>
     <puik-alert variant="info" title="Title" buttonLabel="Button">This a info alert with a title and a description and a button.</puik-alert>
     <puik-alert variant="info">This a info alert with only a description.</puik-alert>
     <puik-alert variant="info" closable>This a info alert with a description that can be closed.</puik-alert>
     <puik-alert variant="info" buttonLabel="Button">This a info alert with a description and a button.</puik-alert>
     <puik-alert variant="info" title="Title">
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
     </puik-alert>
     <puik-alert variant="info">
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
     </puik-alert>
     <puik-alert variant="info" title="Title" buttonLabel="Button">
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
       This is a info alert with a description that contains more than 100 characters.
     </puik-alert>
    </div>
  `,
})

export const Danger: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="grid md:grid-cols-3 gap-4 items-start">
     <puik-alert variant="danger" title="Title">This a danger alert with a title and a description.</puik-alert>
     <puik-alert variant="danger" title="Title" closable>This a danger alert with a title and a description that can be closed.</puik-alert>
     <puik-alert variant="danger" title="Title" buttonLabel="Button">This a danger alert with a title and a description and a button.</puik-alert>
     <puik-alert variant="danger">This a danger alert with only a description.</puik-alert>
     <puik-alert variant="danger" closable>This a danger alert with a description that can be closed.</puik-alert>
     <puik-alert variant="danger" buttonLabel="Button">This a danger alert with a description and a button.</puik-alert>
     <puik-alert variant="danger" title="Title">
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
     </puik-alert>
     <puik-alert variant="danger">
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
     </puik-alert>
     <puik-alert variant="danger" title="Title" buttonLabel="Button">
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
       This is a danger alert with a description that contains more than 100 characters.
     </puik-alert>
    </div>
  `,
})
