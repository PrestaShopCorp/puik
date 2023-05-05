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
    value: {
      control: 'text',
      description: 'Value of the radio button',
      table: {
        type: {
          summary: 'boolean | string | number',
        },
      },
    },
    modelValue: {
      control: 'none',
      description: 'v-model of the radio button',
      table: {
        type: {
          summary: 'boolean | string | number',
        },
      },
    },
  },
  args: {
    label: '',
    disabled: false,
    name: 'Slot by default',
    value: '',
    modelValue: '',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikRadio,
  },
  setup() {
    const firstValue = ref('firstValue')
    return { firstValue, args }
  },
  template:
    '<puik-radio v-model="firstValue" value="firstValue" v-bind="args"><template v-if="args.default">{{ args.default }}</template></puik-radio>',
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-radio
  v-model="value"
  :label="label"
  :name="name"
  :disabled="true|false"
  :value="value"
></puik-radio>

<!--HTML/CSS Snippet-->
<div class="puik-radio__group">
    <input class="puik-radio__input" type="radio" />
</div>
      `,
      language: 'html',
    },
  },
}

export const WithoutLabel: Story = () => ({
  components: {
    PuikRadio,
  },
  setup() {
    const firstValue = ref('firstValue')
    return { firstValue }
  },
  template: '<puik-radio v-model="firstValue" value="firstValue"></puik-radio>',
})

WithoutLabel.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-radio v-model="firstValue"></puik-radio>

<!--HTML/CSS Snippet-->
<div class="puik-radio__group">
    <input class="puik-radio__input" type="radio" />
</div>
      `,
      language: 'html',
    },
  },
}

export const LabelWithSlot: Story = (args) => ({
  components: {
    PuikRadio,
  },
  setup() {
    const firstValue = ref('firstValue')
    return { firstValue, args }
  },
  template:
    '<puik-radio v-model="firstValue" value="firstValue" >{{ args.default }}</puik-radio>',
})
LabelWithSlot.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-radio
  v-model="firstValue"
  value="firstValue"
>
  Radio Label by slot
</puik-radio>

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
    const firstValue = ref('firstValue')
    return { firstValue }
  },
  template:
    '<puik-radio v-model="firstValue" value="firstValue" label="Radio Label"></puik-radio>',
})

Selected.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-radio v-model="firstValue" value="firstValue" label="Radio Label"></puik-radio>

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
    const firstValue = ref('firstValue')
    const secondValue = ref('secondValue')
    return { firstValue, secondValue }
  },
  template:
    '<puik-radio v-model="firstValue" value="secondValue">Radio Label by slot</puik-radio>',
})

Unselected.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-radio v-model="firstValue" value="secondValue" >Radio Label by slot</puik-radio>

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
    const firstValue = ref('firstValue')
    return { firstValue }
  },
  template: `
    <puik-radio v-model="firstValue" disabled label="Disabled On" value="firstValue"></puik-radio>
    <puik-radio v-model="firstValue" label="Disabled Off" value="firstValue"></puik-radio>
  `,
})
DisabledSelected.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-radio v-model="firstValue" disabled label="Disabled On" value="firstValue"></puik-radio>
<puik-radio v-model="firstValue" label="Disabled Off" value="firstValue"></puik-radio>

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
    const firstValue = ref('firstValue')
    const secondValue = ref('secondValue')
    return { firstValue, secondValue }
  },
  template: `
  <puik-radio v-model="firstValue" disabled label="Disabled On" value="secondValue"></puik-radio>
  <puik-radio v-model="firstValue" label="Disabled Off" value="secondValue"></puik-radio>
  `,
})

DisabledUnselected.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-radio v-model="firstValue" disabled label="Disabled On" value="secondValue"></puik-radio>
<puik-radio v-model="firstValue" label="Disabled Off" value="secondValue"></puik-radio>

<!--HTML/CSS Snippet-->
<div class="puik-radio__group puik-radio__group--disabled">
    <input class="puik-radio__input" type="radio" disabled />
</div>
      `,
      language: 'html',
    },
  },
}
