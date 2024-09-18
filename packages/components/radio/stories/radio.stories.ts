import { ref } from 'vue';
import { PuikRadio } from '@prestashopcorp/puik-components';
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/Radio',
  component: PuikRadio,
  argTypes: {
    id: {
      control: 'text',
      description: '"id" attribute of the radio input (it is automatically generated if this prop is not present)'
    },
    name: {
      control: 'text',
      description: '"name" attributeof the radio input'
    },
    label: {
      control: 'text',
      description: 'Label of the radio input'
    },
    ariaLabel: {
      description: 'Set the aria-label attribute for accessibility',
      table: {
        defaultValue: {
          summary: 'ariaLabel || label || "undefined"'
        },
        type: {
          summary: 'string'
        }
      }
    },
    ariaDescribedby: {
      description: 'Set the aria-describedby attribute for accessibility (id of element that describes the input)',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'string'
        }
      }
    },
    srDescriptionOnly: {
      description: 'Set a description for screen readers only (the description is contained in an automatically generated hidden span element)',
      table: {
        defaultValue: {
          summary: 'ariaLabel || label || "undefined"'
        },
        type: {
          summary: 'string'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Set if the radio button is disabled'
    },
    default: {
      control: 'text',
      description: 'Label of the radio button using the slot'
    },
    value: {
      control: 'text',
      description: 'Value of the radio button',
      table: {
        type: {
          summary: 'boolean | string | number'
        }
      }
    },
    modelValue: {
      control: 'none',
      description: 'v-model of the radio button',
      table: {
        type: {
          summary: 'boolean | string | number'
        }
      }
    },
    dataTest: {
      control: 'text',
      description:
        'Set the data-test attribute of the input and the label `label-${dataTest}` `input-${dataTest}`'
    }
  },
  args: {
    label: 'label 1',
    disabled: false,
    name: 'name-attribute',
    value: 'firstValue'
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikRadio
  },
  setup() {
    const selectedValue = ref('');
    return { selectedValue, args };
  },
  template: `
  <div class="flex flex-col space-y-4">
    <puik-radio
      v-model="selectedValue"
      v-bind="args"
    >
      <template v-if="args.default">
      {{ args.default }}
      </template>
    </puik-radio>
      
    <puik-radio
      v-model="selectedValue"
      id="puik-radio-2"
      :name="args.name"
      value="secondValue"
    >
        label 2
    </puik-radio>

    <span>modelValue: {{ selectedValue }}</span>
  </div>
  `
});

export const Default = {
  render: Template,
  args: {
    label: 'label 1',
    disabled: false,
    name: 'name-attribute',
    value: 'firstValue',
    modelValue: 'selectedValue'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  const selectedValue = ref('firstValue');
  
  <div class="flex flex-col space-y-4">
    <puik-radio
    v-model="selectedValue"
    v-bind="args"
    >
      <template v-if="args.default">
      {{ args.default }}
      </template>
    </puik-radio>
      
    <puik-radio
      v-model="selectedValue"
      id="puik-radio-2"
      :name="args.name"
      value="secondValue"
    >
        label 2
    </puik-radio>

    <span>modelValue: {{ selectedValue }}</span>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const LabelWithSlot: StoryObj = {
  args: {
    default: 'Radio Label with default slot'
  },
  render: (args) => ({
    components: {
      PuikRadio
    },
    setup() {
      const selectedValue = ref('firstValue');
      return { selectedValue, args };
    },
    template:
      '<puik-radio v-model="selectedValue" value="firstValue" >{{ args.default }}</puik-radio>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const selectedValue = ref('firstValue');

<puik-radio
  v-model="selectedValue"
  value="firstValue"
>
  Radio Label with default slot
</puik-radio>

<!--HTML/CSS Snippet-->
  `,
        language: 'html'
      }
    }
  }
};

export const Selected: StoryObj = {
  render: () => ({
    components: {
      PuikRadio
    },
    setup() {
      const selectedValue = ref('firstValue');
      return { selectedValue };
    },
    template:
      '<puik-radio v-model="selectedValue" value="firstValue" label="Radio selected"></puik-radio>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const selectedValue = ref('firstValue');
// selected when modelValue === value

<puik-radio
  v-model="selectedValue"
  value="firstValue"
  label="Radio selected">
/>

<!--HTML/CSS Snippet-->
        `,
        language: 'html'
      }
    }
  }
};

export const Unselected: StoryObj = {
  render: () => ({
    components: {
      PuikRadio
    },
    setup() {
      const selectedValue = ref('otherValue');
      return { selectedValue };
    },
    template:
      '<puik-radio v-model="selectedValue" value="firstValue" label="Radio unselected"></puik-radio>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const selectedValue = ref('otherValue');
// unselected when modelValue !== value

<puik-radio
  v-model="selectedValue"
  value="firstValue"
  label="Radio unselected">
/>

<!--HTML/CSS Snippet-->
        `,
        language: 'html'
      }
    }
  }
};

export const Disabled: StoryObj = {
  render: () => ({
    components: {
      PuikRadio
    },
    setup() {
      const selectedValue = ref('firstValue');
      return { selectedValue };
    },
    template:
      '<puik-radio v-model="selectedValue" value="firstValue" label="Radio disabled" disabled></puik-radio>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const selectedValue = ref('firstValue');

<puik-radio
  v-model="selectedValue"
  value="firstValue"
  label="Radio disabled"
  disabled
/>

<!--HTML/CSS Snippet-->
        `,
        language: 'html'
      }
    }
  }
};

export const ariaDescribedby: StoryObj = {
  render: () => ({
    components: {
      PuikRadio
    },
    setup() {
      const selectedValue = ref('firstValue');
      const description = 'description of the radio button';
      return { selectedValue, description };
    },
    template: `
    <div class="flex flex-col">
      <puik-radio
        v-model="selectedValue"
        value="firstValue"
        label="Radio button with description"
        :aria-describedby="descriptionIdElement"
      />
      <span :id="descriptionIdElement" class="puik-body-small pl-7">{{ description }}</span>
    </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const selectedValue = ref('firstValue');
// const description = 'description of the radio button';

<div class="flex flex-col">
  <puik-radio
    v-model="selectedValue"
    value="firstValue"
    label="Radio button with description"
    :aria-describedby="descriptionIdElement"
  />
  <span :id="descriptionIdElement" class="puik-body-small pl-7">{{ description }}</span>
</div>

<!--HTML/CSS Snippet-->
        `,
        language: 'html'
      }
    }
  }
};

export const DescriptionForScreenReadersOnly: StoryObj = {
  render: () => ({
    components: {
      PuikRadio
    },
    setup() {
      const selectedValue = ref('firstValue');
      const srDescription = 'description for screen readers only';
      return { selectedValue, srDescription };
    },
    template: `
    <puik-radio
      v-model="selectedValue"
      value="firstValue"
      label="Radio button with hidden description for screen readers only"
      :sr-description-only="srDescription"
    />
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const selectedValue = ref('firstValue');
// const srDescription = 'description for screen readers only';

<puik-radio
  v-model="selectedValue"
  value="firstValue"
  label="Radio button with hidden description for screen readers only"
  :sr-description-only="srDescription"
/>

<!--HTML/CSS Snippet-->
        `,
        language: 'html'
      }
    }
  }
};
