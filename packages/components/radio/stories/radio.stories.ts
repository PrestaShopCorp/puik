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
    const enabled = ref(true)
    return { args, enabled }
  },
  template: '<puik-radio v-model="enabled" v-bind="args"></puik-radio>',
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
  template: '<puik-radio :model-value="enabled"></puik-radio>',
})

WithoutLabel.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-radio :model-value="enabled"></puik-radio>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-radio__group">
          <input class="puik-radio__input" type="radio" />
      </div>
      `,
      language: 'html',
    },
  },
}

export const LabelWithSlot: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const enabled = ref(true)
    return { enabled }
  },
  template: '<puik-radio :model-value="enabled">Label Slot</puik-radio>',
})
LabelWithSlot.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-radio :model-value="enabled">Radio Label by slot</puik-radio>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-radio__group">
          <input class="puik-radio__input" type="radio" />
      </div>
      `,
      language: 'html',
    },
  },
}

export const Selected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const enabled = ref(true)
    return { enabled }
  },
  template:
    '<puik-radio :model-value="enabled" v-bind="args" label="Radio Label"></puik-radio>',
})

Selected.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-radio :model-value="enabled">Radio Label by slot</puik-radio>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-radio__group">
          <input class="puik-radio__input" type="radio" />
      </div>
      `,
      language: 'html',
    },
  },
}

export const Unselected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const enabled = ref(false)
    return { enabled }
  },
  template:
    '<puik-radio :model-value="enabled">Radio Label by slot</puik-radio>',
})

Unselected.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-radio :model-value="enabled">Radio Label by slot</puik-radio>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-radio__group">
          <input class="puik-radio__input" type="radio" />
      </div>
      `,
      language: 'html',
    },
  },
}

export const DisabledSelected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const firstRadio = ref(true)
    const secondRadio = ref(true)
    return { firstRadio, secondRadio }
  },
  template: `
    <puik-radio :model-value="firstRadio" disabled label="Disabled On"></puik-radio>
    <puik-radio :model-value="secondRadio" label="Disabled Off"></puik-radio>
  `,
})
DisabledSelected.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-radio :model-value="firstRadio" disabled label="Disabled On"></puik-radio>
      <puik-radio :model-value="secondRadio" label="Disabled Off"></puik-radio>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-radio__group puik-radio__group--disabled">
          <input class="puik-radio__input" type="radio" disabled />
      </div>
      `,
      language: 'html',
    },
  },
}

export const DisabledUnselected: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const firstRadio = ref(false)
    const secondRadio = ref(false)
    return { firstRadio, secondRadio }
  },
  template: `
  <puik-radio :model-value="firstRadio" disabled label="Disabled On"></puik-radio>
  <puik-radio :model-value="secondRadio" label="Disabled Off"></puik-radio>
  `,
})

DisabledUnselected.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-radio :model-value="firstRadio" disabled label="Disabled On"></puik-radio>
      <puik-radio :model-value="secondRadio" label="Disabled Off"></puik-radio>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-radio__group puik-radio__group--disabled">
          <input class="puik-radio__input" type="radio" disabled />
      </div>
      `,
      language: 'html',
    },
  },
}
