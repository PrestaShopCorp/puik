import { PuikCheckbox } from "@prestashopcorp/puik-components"
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3'

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

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikCheckbox,
  },
  setup() {
    return { args }
  },
  template:
    '<puik-checkbox v-bind="args"><template v-if="args.default">{{ args.default }}</template></puik-checkbox>',
})

export const Default = {
  render: Template,
  args: {},

  parameters: {
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
  },
}

export const Checked: StoryObj = {
  render: Template,

  args: {
    modelValue: true,
  },

  parameters: {
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
  },
}

export const Unchecked: StoryObj = {
  render: Template,

  parameters: {
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
  },
}

export const Indeterminate: StoryObj = {
  render: Template,

  args: {
    indeterminate: true,
    modelValue: false,
  },

  parameters: {
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
  },
}

export const WithoutLabel: StoryObj = {
  render: Template,

  args: {
    label: undefined,
  },

  parameters: {
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
  },
}

export const CustomLabel: StoryObj = {
  render: (args) => ({
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
  }),

  args: {
    default: 'Custom label',
  },

  parameters: {
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
  },
}

export const DisabledUnchecked: StoryObj = {
  render: Template,

  args: {
    disabled: true,
  },

  parameters: {
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
  },
}

export const DisabledChecked: StoryObj = {
  render: Template,

  args: {
    disabled: true,
    modelValue: true,
  },

  parameters: {
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
  },
}

export const DisabledIndeterminate: StoryObj = {
  render: Template,

  args: {
    disabled: true,
    indeterminate: true,
  },

  parameters: {
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
  },
}
