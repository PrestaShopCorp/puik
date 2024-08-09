import { PuikCheckbox } from '@prestashopcorp/puik-components';
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/Checkbox',
  component: PuikCheckbox,
  argTypes: {
    default: {
      control: 'text',
      description: 'Set the label via default slot'
    },
    label: {
      control: 'text',
      description: 'Set the checkbox label'
    },
    ariaLabel: {
      description: 'If you are planning to set the label via default slot instead of using label prop then in that case you should set the aria-label for better accessibility',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    srLabel: {
      description: 'In case the checkbox has no label (neither via the label prop nor via the default slot) then you should consider setting this prop for a better experience when using screen readers (although the label is not visible)',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    indeterminate: {
      description: 'Set the indeterminate checkbox  state',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    modelValue: {
      description: 'v-model of the checkbox',
      control: 'none'
    },
    disabled: {
      description: 'Set the checkbox as disabled',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    dataTest: {
      description:
        'Set the data-test attribute for the label and the input `label-${dataTest}` `input-${dataTest}`}`',
      control: 'text'
    }
  },
  args: {
    indeterminate: false,
    disabled: false,
    modelValue: false
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikCheckbox
  },
  setup() {
    return { args };
  },
  template:
    '<puik-checkbox v-bind="args"><template v-if="args.default">{{ args.default }}</template></puik-checkbox>'
});

export const Default = {
  render: Template,
  args: {
    label: 'Label'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-checkbox v-model="value" label="Label" />

  <!--HTML/CSS Snippet-->
  <div class="puik-checkbox">
    <input id="puik-checkbox-{random-id-nb}" class="puik-checkbox__input" type="checkbox" aria-checked="false" aria-disabled="false" aria-label="Label" aria-labelledby="label-puik-checkbox-{random-id-nb}">
    <label id="label-puik-checkbox-{random-id-nb}" for="puik-checkbox-{random-id-nb}" class="puik-checkbox__label">Label</label>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Checked: StoryObj = {
  render: Template,

  args: {
    modelValue: true,
    label: 'Label'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-checkbox v-model="value" label="Label" />

  <!--HTML/CSS Snippet-->
  <div class="puik-checkbox">
    <input id="puik-checkbox-{random-id-nb}" class="puik-checkbox__input" type="checkbox" aria-checked="true" aria-disabled="false" aria-label="Label" aria-labelledby="label-puik-checkbox-{random-id-nb}">
    <label id="label-puik-checkbox-{random-id-nb}" for="puik-checkbox-{random-id-nb}" class="puik-checkbox__label">Label</label>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Unchecked: StoryObj = {
  render: Template,

  args: {
    modelValue: false,
    label: 'Label'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-checkbox v-model="value" label="Label" />

  <!--HTML/CSS Snippet-->
  <div class="puik-checkbox">
    <input id="puik-checkbox-7612" class="puik-checkbox__input" type="checkbox" aria-checked="false" aria-disabled="false" aria-label="Label" aria-labelledby="label-puik-checkbox-7612">
    <label id="label-puik-checkbox-7612" for="puik-checkbox-7612" class="puik-checkbox__label">Label</label>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Indeterminate: StoryObj = {
  render: Template,

  args: {
    modelValue: false,
    label: 'Label',
    indeterminate: true
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-checkbox v-model="value" label="Label" indeterminate />

  <!--HTML/CSS Snippet-->
  <div class="puik-checkbox">
    <input id="puik-checkbox-5372" class="puik-checkbox__input" type="checkbox" aria-checked="mixed" aria-disabled="false" aria-label="Label" aria-labelledby="label-puik-checkbox-5372">
    <label id="label-puik-checkbox-5372" for="puik-checkbox-5372" class="puik-checkbox__label">Label</label>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const LabelForScreenReaderOnly: StoryObj = {
  render: Template,

  args: {
    srLabel: 'Label for screen readers only'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-checkbox v-model="value" sr-label="Label for screen readers only" />

  <!--HTML/CSS Snippet-->
  <div class="puik-checkbox">
    <input id="puik-checkbox-6432" class="puik-checkbox__input" type="checkbox" aria-checked="false" aria-disabled="false" aria-label="Label for screen readers only" aria-labelledby="label-sr-puik-checkbox-6432">
    <label id="label-sr-puik-checkbox-6432" for="puik-checkbox-6432" class="puik-sr-only">Label for screen readers</label>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const CustomLabel: StoryObj = {
  render: (args) => ({
    components: {
      PuikCheckbox
    },
    setup() {
      return { args };
    },
    template: `
      <puik-checkbox :model-value="false" aria-label="custom aria label">
        <span style="background: blue; color: white; padding: 5px">{{ args.default }}</span>
      </puik-checkbox>
    `
  }),

  args: {
    default: 'Custom label'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-checkbox v-model="value" aria-label="custom aria label">
    <span style="background: blue; color: white; padding: 5px">Custom label</span>
  </puik-checkbox>

  <!--HTML/CSS Snippet-->
  <div class="puik-checkbox">
    <input id="puik-checkbox-8332" class="puik-checkbox__input" type="checkbox" aria-checked="false" aria-disabled="false" aria-label="custom aria label" aria-labelledby="label-puik-checkbox-8332">
    <label id="label-puik-checkbox-8332" for="puik-checkbox-8332" class="puik-checkbox__label">
      <span style="background: blue; color: white; padding: 5px;">Custom label</span>
    </label>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const DisabledUnchecked: StoryObj = {
  render: Template,

  args: {
    label: 'Label',
    disabled: true
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-checkbox :model-value="false" label="Label" disabled />

  <!--HTML/CSS Snippet-->
  <div class="puik-checkbox">
    <input id="puik-checkbox-4261" class="puik-checkbox__input" type="checkbox" disabled="" aria-checked="false" aria-disabled="true" aria-label="Label" aria-labelledby="label-puik-checkbox-4261">
    <label id="label-puik-checkbox-4261" for="puik-checkbox-4261" class="puik-checkbox__label">Label</label>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const DisabledChecked: StoryObj = {
  render: Template,

  args: {
    label: 'Label',
    disabled: true,
    modelValue: true
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-checkbox :model-value="true" label="Label" disabled />

  <!--HTML/CSS Snippet-->
  <div class="puik-checkbox">
    <input id="puik-checkbox-9528" class="puik-checkbox__input" type="checkbox" disabled="" aria-checked="true" aria-disabled="true" aria-label="Label" aria-labelledby="label-puik-checkbox-9528">
    <label id="label-puik-checkbox-9528" for="puik-checkbox-9528" class="puik-checkbox__label">Label</label>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const DisabledIndeterminate: StoryObj = {
  render: Template,

  args: {
    label: 'Label',
    disabled: true,
    indeterminate: true
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-checkbox label="Label" disabled indeterminate />

  <!--HTML/CSS Snippet-->
  <div class="puik-checkbox">
    <input id="puik-checkbox-6876" class="puik-checkbox__input" type="checkbox" disabled="" aria-checked="mixed" aria-disabled="true" aria-label="Label" aria-labelledby="label-puik-checkbox-6876">
    <label id="label-puik-checkbox-6876" for="puik-checkbox-6876" class="puik-checkbox__label">Label</label>
  </div>
        `,
        language: 'html'
      }
    }
  }
};
