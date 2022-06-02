import { ref } from 'vue'
import PuikSwitch from './../src/switch.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Switch',
  component: PuikSwitch,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label of the switch toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Set if the switch toggle is disabled',
    },
    default: {
      control: 'text',
      description: 'Label of the switch toggle using the slot',
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
    PuikSwitch,
  },
  setup() {
    const enabled = ref(false)
    return { args, enabled }
  },
  template: '<puik-switch v-model="enabled" v-bind="args"></puik-switch>',
})

export const Default = Template.bind({})
Default.args = {}

export const Label: Story = () => ({
  components: {
    PuikSwitch,
  },
  setup() {
    const enabled = ref(false)
    return { enabled }
  },
  template:
    '<puik-switch v-model="enabled" label="Switch Label"></puik-switch>',
})

export const LabelRight: Story = () => ({
  components: {
    PuikSwitch,
  },
  setup() {
    const enabled = ref(false)
    return { enabled }
  },
  template:
    '<puik-switch v-model="enabled" labelRight="Switch Label Right"></puik-switch>',
})

export const LabelBySlot: Story = () => ({
  components: {
    PuikSwitch,
  },
  setup() {
    const enabled = ref(false)
    return { enabled }
  },
  template: '<puik-switch v-model="enabled">Switch Label Slot</puik-switch>',
})

export const LabelRightBySlot: Story = () => ({
  components: {
    PuikSwitch,
  },
  setup() {
    const enabled = ref(false)
    return { enabled }
  },
  template:
    '<puik-switch v-model="enabled"><template #labelRight>Switch Label Right Slot</template></puik-switch>',
})

export const Disabled: Story = () => ({
  components: {
    PuikSwitch,
  },
  setup() {
    const firstSwitch = ref(true)
    const secondSwitch = ref(false)
    return { firstSwitch, secondSwitch }
  },
  template: `
    <puik-switch v-model="firstSwitch" disabled>Disabled On</puik-switch>
    <puik-switch v-model="secondSwitch" disabled>Disabled Off</puik-switch>
  `,
})

export const Active: Story = () => ({
  components: {
    PuikSwitch,
  },
  setup() {
    const enabled = ref(true)
    return { enabled }
  },
  template: '<puik-switch v-model="enabled">On</puik-switch>',
})

export const AllStates: Story = () => ({
  components: {
    PuikSwitch,
  },
  setup() {
    const firstSwitch = ref(true)
    const secondSwitch = ref(false)
    const thirdSwitch = ref(true)
    const lastSwitch = ref(false)
    return { firstSwitch, secondSwitch, thirdSwitch, lastSwitch }
  },
  template: `
    <puik-switch v-model="firstSwitch" label="On"></puik-switch>
    <puik-switch v-model="secondSwitch">Off</puik-switch>
    <puik-switch v-model="thirdSwitch" disabled>Disabled On</puik-switch>
    <puik-switch v-model="lastSwitch" disabled>Disabled Off</puik-switch>
  `,
})
