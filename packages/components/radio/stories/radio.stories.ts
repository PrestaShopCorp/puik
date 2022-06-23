import { ref } from 'vue'
import PuikRadio from './../src/radio.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Radio',
  component: PuikRadio,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label of the radio button',
    },
    disabled: {
      control: 'boolean',
      description: 'Set if the radio button is disabled',
    },
    default: {
      control: 'text',
      description: 'Label of the radio button using the slot',
    },
  },
  args: {
    label: '',
    disabled: false,
    default: null,
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikRadio,
  },
  setup() {
    return { args }
  },
  template: '<radio></radio>',
})

export const Default = Template.bind({})
Default.args = {}

export const WithoutLabel: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const enabled = ref(false)
    return { enabled }
  },
  template:
    '<puik-radio v-model="enabled" :checked="false" label=""></puik-radio>',
})

export const Selected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const enabled = ref(false)
    return { enabled }
  },
  template:
    '<puik-radio v-model="enabled" :checked="enabled">Radio Label Slot</puik-radio>',
})

export const Unselected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const enabled = ref(false)
    const checked = ref(false)
    return { enabled, checked }
  },
  template:
    '<puik-radio v-model="enabled" :checked="enabled">Radio Label Slot</puik-radio>',
})
export const FocusSelected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const enabled = ref(true)
    return { enabled }
  },
  template:
    '<puik-radio v-model="enabled" :checked="enabled">Radio Label Slot</puik-radio>',
})

export const FocusUnselected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const enabled = ref(false)
    return { enabled }
  },
  template:
    '<puik-radio v-model="enabled" :checked="enabled">Radio Label Slot</puik-radio>',
})

export const DisabledSelected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const firstRadio = ref(true)
    const secondRadio = ref(false)
    return { firstRadio, secondRadio }
  },
  template: `
    <puik-radio v-model="enabled" :checked="firstRadio" disabled>Disabled On</puik-radio>
    <puik-radio v-model="enabled" :checked="secondRadio" disabled>Disabled Off</puik-radio>
  `,
})

export const DisabledUnselected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const firstRadio = ref(true)
    const secondRadio = ref(false)
    return { firstRadio, secondRadio }
  },
  template: `
    <puik-radio v-model="enabled" :checked="firstRadio" disabled>Disabled On</puik-radio>
    <puik-radio v-model="enabled" :checked="secondRadio" disabled>Disabled Off</puik-radio>
  `,
})

export const Active: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const enabled = ref(true)
    return { enabled }
  },
  template: '<puik-radio v-model="enabled" checked="enabled">On</puik-radio>',
})

export const AllStates: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const firstRadio = ref(true)
    const secondRadio = ref(false)
    const thirdRadio = ref(true)
    const lastRadio = ref(false)
    return { firstRadio, secondRadio, thirdRadio, lastRadio }
  },
  template: `
    <puik-radio v-model="enabled" :checked="firstRadio" label="On"></puik-radio>
    <puik-radio v-model="enabled" :checked="secondRadio">Off</puik-radio>
    <puik-radio v-model="enabled" :checked="thirdRadio" disabled>Disabled On</puik-radio>
    <puik-radio v-model="enabled" :checked="lastRadio" disabled>Disabled Off</puik-radio>
  `,
})
