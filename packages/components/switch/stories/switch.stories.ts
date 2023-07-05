import { ref } from 'vue'
import { useArgs } from '@storybook/client-api'
import PuikSwitch from './../src/switch.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Switch',
  component: PuikSwitch,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label of the switch toggle',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    labelRight: {
      control: 'text',
      description: 'Right label of the switch toggle (props or slot)',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Set if the switch toggle is disabled',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    screenReaderText: {
      control: 'text',
      description: 'Add text visible by screen reader only',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    modelValue: {
      control: 'boolean',
      description: 'v-model of the switch',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    default: {
      control: 'text',
      description: 'Label of the switch toggle using the slot',
    },
  },
  args: {
    label: '',
    labelRight: '',
    disabled: false,
    default: null,
    screenReaderText: '',
    modelValue: false,
  },
} as Meta

const Template: Story = (args: Args) => {
  const [_, updateArgs] = useArgs()
  return {
    components: {
      PuikSwitch,
    },
    setup() {
      const onClick = () => updateArgs({ modelValue: !args.modelValue })
      return { args, onClick }
    },
    template: '<puik-switch v-bind="args" @click="onClick"></puik-switch>',
  }
}

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-switch
  v-model="value"
  :label="label"
  :label-right="labelRight"
  :disable="true|false"
  :screen-reader-text="screenReaderText"
></puik-switch>

<!--HTML/CSS Snippet-->
<div class="puik-switch__group">
  <label for="switch-id" class="puik-switch__label puik-switch__label--left">Switch label</label>
  <button class="puik-switch" id="switch-id" role="switch" type="button" aria-checked="false">
    <span class="puik-switch__screen-readers">Screen reader text</span>
    <span class="puik-switch__toggle"></span>
  </button>
</div>
      `,
    },
  },
}

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
    '<puik-switch v-model="enabled" label-right="Switch Label Right"></puik-switch>',
})
LabelRight.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-switch v-model="enabled" label-right="Switch Label Right"></puik-switch>

<!--HTML/CSS Snippet-->
<div class="puik-switch__group">
  <button class="puik-switch" id="switch-id" role="switch" type="button" aria-checked="false">
    <span class="puik-switch__toggle"></span>
  </button>
  <label for="switch-id" class="puik-switch__label puik-switch__label--right">Switch Label Right</label>
</div>
      `,
    },
  },
}

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
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-switch v-model="enabled">Switch Label Slot</puik-switch>

<!--HTML/CSS Snippet-->
<div class="puik-switch__group">
  <label for="switch-id" class="puik-switch__label puik-switch__label--left">Switch label</label>
  <button class="puik-switch" id="switch-id" role="switch" type="button" aria-checked="false>
    <span class="puik-switch__toggle"></span>
  </button>
</div>
      `,
    },
  },
}

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
LabelRightBySlot.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-switch v-model="enabled">
  <template #labelRight>Switch Label Right Slot</template>
</puik-switch>

<!--HTML/CSS Snippet-->
<div class="puik-switch__group">
  <button class="puik-switch" id="switch-id" role="switch" type="button" aria-checked="false">
    <span class="puik-switch__toggle"></span>
  </button>
  <label for="switch-id" class="puik-switch__label puik-switch__label--right">Switch Label Right</label>
</div>
      `,
    },
  },
}
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
Disabled.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-switch v-model="enabled" disabled>Disabled</puik-switch>

<!--HTML/CSS Snippet-->
<div class="puik-switch__group">
  <label for="switch-id" class="puik-switch__label puik-switch__label--left">Disabled</label>
  <button class="puik-switch" disabled id="switch-id" role="switch" type="button" aria-checked="false">
    <span class="puik-switch__toggle"></span>
  </button>
</div>
      `,
    },
  },
}

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
Active.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-switch v-model="enabled">Switch label</puik-switch>

<!--HTML/CSS Snippet-->
<div class="puik-switch__group">
  <label for="switch-id" class="puik-switch__label puik-switch__label--left">Switch label</label>
  <button class="puik-switch" id="switch-id" role="switch" type="button" aria-checked="false">
    <span class="puik-switch__toggle"></span>
  </button>
</div>
      `,
    },
  },
}

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
AllStates.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-switch v-model="enabled">Switch label</puik-switch>

<!--HTML/CSS Snippet-->
<div class="puik-switch__group">
  <label for="switch-id" class="puik-switch__label puik-switch__label--left">Switch label</label>
  <button class="puik-switch" id="switch-id" role="switch" type="button" aria-checked="false">
    <span class="puik-switch__toggle"></span>
  </button>
</div>
      `,
    },
  },
}
