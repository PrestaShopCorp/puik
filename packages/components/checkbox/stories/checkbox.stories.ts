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
    modelValue: {
      description: 'v-model of the checkbox',
      control: 'none',
    },
    disabled: {
      description: 'Set the checkbox as disabled',
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
    modelValue: false,
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
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-checkbox v-model="value" label="Label" />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox">
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
      `,
      language: 'html',
    },
  },
}

export const Checked: Story = Template.bind({})
Checked.args = {
  modelValue: true,
}
Checked.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-checkbox v-model="value" label="Label" />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox">
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
      `,
      language: 'html',
    },
  },
}

export const Unchecked: Story = Template.bind({})
Unchecked.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-checkbox v-model="value" label="Label" />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox">
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
      `,
      language: 'html',
    },
  },
}

export const Indeterminate: Story = Template.bind({})
Indeterminate.args = {
  indeterminate: true,
  modelValue: false,
}
Indeterminate.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-checkbox v-model="value" label="Label" indeterminate />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox" indeterminate>
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
      `,
      language: 'html',
    },
  },
}

export const WithoutLabel: Story = Template.bind({})
WithoutLabel.args = {
  label: undefined,
}
WithoutLabel.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-checkbox v-model="value" />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox">
</div>
      `,
      language: 'html',
    },
  },
}

export const CustomLabel: Story = (args) => ({
  components: {
    PuikCheckbox,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-checkbox :model-value="false">
      <span style="background: blue; color: white; padding: 5px">{{ args.default }}</span>
    </puik-checkbox>
  `,
})
CustomLabel.args = {
  default: 'Custom label',
}
CustomLabel.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-checkbox v-model="value">
  <span style="background: blue; color: white; padding: 5px">Custome label</span>
</puik-checkbox>

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox">
  <label for="puik-checkbox-id" class="puik-checkbox__label">
    <span style="background: blue; color: white; padding: 5px;">Custom label</span>
  </label>
</div>
      `,
      language: 'html',
    },
  },
}

export const DisabledUnchecked: Story = Template.bind({})
DisabledUnchecked.args = {
  disabled: true,
}
DisabledUnchecked.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-checkbox :model-value="false" label="Label" disabled />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox" disabled>
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
      `,
      language: 'html',
    },
  },
}

export const DisabledChecked: Story = Template.bind({})
DisabledChecked.args = {
  disabled: true,
  modelValue: true,
}
DisabledChecked.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-checkbox :model-value="true" label="Label" disabled />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox" checked disabled>
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
      `,
      language: 'html',
    },
  },
}

export const DisabledIndeterminate: Story = Template.bind({})
DisabledIndeterminate.args = {
  disabled: true,
  indeterminate: true,
}
DisabledIndeterminate.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-checkbox label="Label" disabled indeterminate />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox" disabled indeterminate>
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
      `,
      language: 'html',
    },
  },
}
