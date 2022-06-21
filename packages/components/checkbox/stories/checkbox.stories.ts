import PuikCheckbox from './../src/checkbox.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Checkbox',
  component: PuikCheckbox,
  argTypes: {
    label: {
      control: 'text',
      description: 'Set the checkbox label',
    },
    default: {
      control: 'text',
      description: 'Set the custom label',
    },
    indeterminate: {
      description: 'Set the indeterminate checkbox  state',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      description: 'Set the button as disabled',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  args: {
    label: 'Label',
    default: undefined,
    indeterminate: false,
    disabled: false,
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikCheckbox,
  },
  setup() {
    return { args }
  },
  template:
    '<puik-checkbox v-bind="args"><template v-if="args.default">{{ args.default }}</template></puik-checkbox>',
})

export const Default = Template.bind({})
Default.args = {}

export const Checked: Story = () => ({
  components: {
    PuikCheckbox,
  },
  template: `
    <div class="space-x-4">
      <puik-checkbox model-value label="Label"/>
    </div>
  `,
})

export const Unchecked: Story = () => ({
  components: {
    PuikCheckbox,
  },
  template: `
    <div class="space-x-4">
      <puik-checkbox :model-value="false" label="Label"  />
    </div>
  `,
})

export const Indeterminate: Story = () => ({
  components: {
    PuikCheckbox,
  },
  template: `
    <div class="space-x-4">
      <puik-checkbox :model-value="false" label="Label" indeterminate  />
    </div>
  `,
})

export const WithoutLabel: Story = () => ({
  components: {
    PuikCheckbox,
  },
  template: `
    <div class="space-x-4">
      <puik-checkbox :model-value="false"  />
    </div>
  `,
})

export const CustomLabel: Story = (args) => ({
  components: {
    PuikCheckbox,
  },
  setup() {
    return { args }
  },
  template: `
    <div class="space-x-4">
      <puik-checkbox :model-value="false">
        <span style="background: blue; color: white; padding: 5px">{{ args.default }}</span>
      </puik-checkbox>
    </div>
  `,
})
CustomLabel.args = {
  default: 'Custom label',
}

export const DisabledUnchecked: Story = () => ({
  components: {
    PuikCheckbox,
  },
  template: `
    <div class="space-x-4">
      <puik-checkbox :model-value="false" label="Label" disabled  />
    </div>
  `,
})

export const DisabledChecked: Story = () => ({
  components: {
    PuikCheckbox,
  },
  template: `
    <div class="space-x-4">
      <puik-checkbox model-value label="Label" disabled  />
    </div>
  `,
})

export const DisabledIndeterminate: Story = () => ({
  components: {
    PuikCheckbox,
  },
  template: `
    <div class="space-x-4">
      <puik-checkbox model-value label="Label" disabled indeterminate />
    </div>
  `,
})
