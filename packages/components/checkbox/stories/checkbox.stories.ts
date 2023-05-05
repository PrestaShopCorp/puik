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
      table: {
        type: {
          summary: 'true|false',
        },
      },
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

const defaultCode = `
<!--VueJS Snippet-->
<puik-checkbox v-model="value" label="Label" />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox">
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
`

function generateStory(args = {}, code = defaultCode) {
  const story: Story = Template.bind({})
  story.args = args
  story.parameters = {
    docs: {
      source: {
        code,
        language: 'html',
      },
    },
  }
  return story
}

export const Unchecked = generateStory({})

export const Indeterminate = generateStory({
  indeterminate: true,
  modelValue: false,
})

export const WithoutLabel = generateStory({
  label: undefined,
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

export const DisabledUnchecked = generateStory(
  {
    disabled: true,
  },
  `
<!--VueJS Snippet-->
<puik-checkbox :model-value="false" label="Label" disabled />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox" disabled>
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
  `
)

export const DisabledChecked = generateStory(
  {
    disabled: true,
    modelValue: true,
  },
  `
<!--VueJS Snippet-->
<puik-checkbox :model-value="true" label="Label" disabled />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox" disabled>
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
  `
)

export const DisabledIndeterminate = generateStory(
  {
    disabled: true,
    indeterminate: true,
  },
  `
<!--VueJS Snippet-->
<puik-checkbox :model-value="true" label="Label" disabled />

<!--HTML/CSS Snippet-->
<div class="puik-checkbox">
  <input id="puik-checkbox-id" class="puik-checkbox__input" type="checkbox" disabled>
  <label for="puik-checkbox-id" class="puik-checkbox__label">Label</label>
</div>
  `
)
