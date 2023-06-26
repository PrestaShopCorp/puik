import PuikLabel from '../src/label.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Label',
  component: PuikLabel,
  argTypes: {
    optional: {
      description: 'Set label in optional mode',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      description: 'Set label in required mode',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    readonly: {
      description: 'Set label in readonly mode',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    for: {
      description: 'Id of the form related element',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    default: {
      control: 'text',
      description: 'Default slot to set label text',
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikLabel,
  },
  setup() {
    return { args }
  },
  template: `<puik-label v-bind="args">{{ args.default }}</puik-label>`,
})

export const Default = Template.bind({})
Default.args = {
  optional: false,
  required: false,
  readonly: false,
  for: 'input',
  default: 'My Label',
}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-label for="input">My Label</puik-label>

<!--HTML/CSS Snippet-->
<label class="puik-label" for="input">My Label</label>
      `,
      language: 'html',
    },
  },
}

export const Optional: Story = (args: Args) => ({
  components: {
    PuikLabel,
  },
  setup() {
    return { args }
  },
  template: `<puik-label for="input" optional>My Label</puik-label>`,
})

Optional.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-label for="input" optional>My Label</puik-label>

<!--HTML/CSS Snippet-->
<label class="puik-label" for="input">
  My Label
  <span class="puik-label--optional">(Optional)</span>
</label>
      `,
      language: 'html',
    },
  },
}

export const Required: Story = (args: Args) => ({
  components: {
    PuikLabel,
  },
  setup() {
    return { args }
  },
  template: `<puik-label for="input" required>My Label</puik-label>`,
})

Required.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-label for="input" required>My Label</puik-label>

<!--HTML/CSS Snippet-->
<label class="puik-label" for="input">
  My Label
  <span class="puik-label--required">*</span>
</label>
      `,
      language: 'html',
    },
  },
}

export const Readonly: Story = (args: Args) => ({
  components: {
    PuikLabel,
  },
  setup() {
    return { args }
  },
  template: `<puik-label for="input" readonly>My Label</puik-label>`,
})

Readonly.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-label for="input" readonly>My Label</puik-label>

<!--HTML/CSS Snippet-->
<label class="puik-label" for="input">
  My Label
  <span class="puik-label--readonly">(Read only)</span>
</label>
`,
      language: 'html',
    },
  },
}
