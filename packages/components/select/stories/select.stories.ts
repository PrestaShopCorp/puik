import { PuikSelect, PuikGroupOptions, PuikOption, PuikBadge } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

export default {
  title: 'Components/Select',
  components: { PuikSelect, PuikGroupOptions, PuikOption },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Corresponds to the selected option (or selected options in the case of multi-select)',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'any'
        },
        category: 'Common'
      }
    },
    id: {
      control: 'text',
      description: 'Sets the id attribute of the select input',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'string'
        },
        category: 'Common'
      }
    },
    name: {
      control: 'text',
      description: 'Sets the name attribute of the select input',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'string'
        },
        category: 'Common'
      }
    },
    label: {
      control: 'text',
      description: 'Sets the label of the select input',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'string'
        },
        category: 'Common'
      }
    },
    required: {
      control: 'boolean',
      description: 'Indicates whether select is required or not',
      table: {
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        },
        category: 'Common'
      }
    },
    optional: {
      control: 'boolean',
      description: 'Indicates whether select is optional or not',
      table: {
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        },
        category: 'Common'
      }
    },
    options: {
      control: 'none',
      description: 'Array of options passed to the component',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'Record<string, any>[]'
        },
        category: 'Common'
      }
    },
    optionLabelKey: {
      control: 'text',
      description: 'In the case of using objects as a options prop you can set which property of the object is the label',
      table: {
        defaultValue: {
          summary: 'label'
        },
        type: {
          summary: 'string'
        },
        category: 'Searchable'
      }
    },
    optionValueKey: {
      control: 'text',
      description: 'In the case of using objects as a options prop you can set which property of the object is the value',
      table: {
        defaultValue: {
          summary: 'value'
        },
        type: {
          summary: 'string'
        },
        category: 'Searchable'
      }
    },
    optionDisabledKey: {
      control: 'text',
      description: 'In case of using objects as option props, you can define which property of the object makes the option disabled',
      table: {
        defaultValue: {
          summary: 'disabled'
        },
        type: {
          summary: 'string'
        },
        category: 'Searchable'
      }
    },
    multiSelect: {
      control: 'boolean',
      description: 'Indicates whether the select allows multiple choice',
      table: {
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        },
        category: 'Common'
      }
    },
    searchable: {
      control: 'boolean',
      description: 'Enables the search feature',
      table: {
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        },
        category: 'Searchable'
      }
    },
    customFilterMethod: {
      control: 'none',
      description: 'Use your own method to filter the options when using the search',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'function'
        },
        category: 'Searchable'
      }
    },
    placeholder: {
      control: 'text',
      description: 'Sets a placeholder for the select',
      table: {
        defaultValue: {
          summary: 'Select an option'
        },
        type: {
          summary: 'string'
        },
        category: 'Common'
      }
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Sets a placeholder for the search input',
      table: {
        defaultValue: {
          summary: 'Search...'
        },
        type: {
          summary: 'string'
        },
        category: 'Searchable'
      }
    },
    noMatchText: {
      control: 'text',
      description: 'Message to display when there are no results found',
      table: {
        defaultValue: {
          summary: 'No results matched'
        },
        type: {
          summary: 'string'
        },
        category: 'Searchable'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
      table: {
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        },
        category: 'Common'
      }
    },
    error: {
      control: 'text',
      description: 'Displays an error message under the field and sets the select in an error state (also available as a slot named error)',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'string'
        },
        category: 'Common'
      }
    },
    autocomplete: {
      control: 'text',
      description: 'Enables browser autocompletion for the select',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'string'
        },
        category: 'Common'
      }
    },
    prependInputIcon: {
      control: 'text',
      description: 'Prepends a Material Symbols to the input (cf https://fonts.google.com/icons)',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'string'
        },
        category: 'Common'
      }
    },
    open: {
      control: 'boolean',
      description: 'Controls the opening of the select dropdown',
      table: {
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        },
        category: 'Common'
      }
    },
    dataTest: {
      control: 'text',
      description: 'Sets the data-test attribute',
      table: {
        defaultValue: {
          summary: 'none'
        },
        type: {
          summary: 'string'
        },
        category: 'Common'
      }
    },
    '@open': {
      description: 'Event triggered when the select is opened or closed',
      table: {
        defaultValue: {
          summary: '@open'
        },
        type: {
          summary: 'Event',
          detail: `
          'open': [state: boolean]
          `
        },
        category: 'Events'
      }
    },
    '@update:modelValue': {
      description: 'Event triggered when the selected option(s) is/are updated',
      table: {
        defaultValue: {
          summary: '@update:model-value'
        },
        type: {
          summary: 'Event',
          detail: `
            'update:modelValue': [selectedOptions: any]
          `
        },
        category: 'Events'
      }
    },
    '@search': {
      description: 'Event triggered when typing in the searchbar. Returns the text query as well as the list of filtered options',
      table: {
        defaultValue: {
          summary: '@search'
        },
        type: {
          summary: 'Event',
          detail: `
            'search': [searchQuery: string, filteredOptions: any ]
          `
        },
        category: 'Events'
      }
    }
  },
  args: {
    id: 'select-id',
    name: 'select-name',
    label: 'Select an option',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ],
    required: false,
    optional: false,
    searchable: false,
    optionLabelKey: 'label',
    optionValueKey: 'value',
    optionDisabledKey: 'disabled',
    multiSelect: false,
    disabled: false,
    error: '',
    autocomplete: 'off',
    prependInputIcon: '',
    open: false,
    dataTest: 'data-test'
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSelect,
    PuikGroupOptions,
    PuikOption
  },
  setup() {
    const selectedOptions = ref();
    return { selectedOptions, args };
  },
  template: `
  <div class="min-h-[200px]">
    <puik-select
      :key="args.open"
      @keydown.space.prevent="args.open = !args.open"
      @keydown.enter.prevent="args.open = !args.open"
      v-model="selectedOptions"
      v-bind="args"
    />
  </div>
  `
});

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
If the options are not objects of type Record<string, any> but numbers or simple strings, we cannot use PuikSelect without going through the default slot.

We will then have to customize the select via the PuikGroupOptions and PuikOptions sub-components (see subsection GroupOptions and Option)
          `
      },
      source: {
        code: `
<!--VueJS Snippet-->
// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2' },
//   { label: 'Option 3', value: '3' }
// ];
// const selectedOptions = ref();

<PuikSelect
  v-model="selectedOptions"
  id="select-id"
  name="select-name"
  label="Select an option"
  :options="options"
  :required="false"
  :optional="false"
  :searchable="false"
  :optionLabelKey="label",
  :optionValueKey="value",
  :optionDisabledKey="disabled",
  optionLabelKey="label",
  multiSelect="false",
  disabled="false",
  error="",
  autocomplete="off",
  prependInputIcon="",
  open="false",
  dataTest="data-test"
/>
        `,
        language: 'html'
      }
    }
  }
};

export const Required = {
  render: Template,
  args: {
    id: 'required-select-id',
    name: 'required-select-name',
    required: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2' },
//   { label: 'Option 3', value: '3' }
// ];
// const selectedOptions = ref();

<PuikSelect
  v-model="selectedOptions"
  id="required-select-id"
  name="required-select-name"
  label="Select an option"
  :options="options"
  required
/>
        `,
        language: 'html'
      }
    }
  }
};

export const Optional = {
  render: Template,
  args: {
    id: 'optional-select-id',
    name: 'optional-select-name',
    optional: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2' },
//   { label: 'Option 3', value: '3' }
// ];
// const selectedOptions = ref();

<PuikSelect
  v-model="selectedOptions"
  id="optional-select-id"
  name="optional-select-name"
  label="Select an option"
  :options="options"
  optional
/>
        `,
        language: 'html'
      }
    }
  }
};

export const prependInputIcon = {
  render: Template,
  args: {
    id: 'prepend-select-id',
    name: 'prepend-select-name',
    prependInputIcon: 'label'
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2' },
//   { label: 'Option 3', value: '3' }
// ];
// const selectedOptions = ref();

<PuikSelect
  v-model="selectedOptions"
  id="prepend-select-id"
  name="prepend-select-name"
  label="Select an option"
  :options="options"
  prepend-input-icon="label"
/>
        `,
        language: 'html'
      }
    }
  }
};

export const Multiple = {
  render: Template,
  args: {
    id: 'multi-select-id',
    name: 'multi-select-name',
    label: 'Select option(s)',
    placeholder: 'Select option(s)',
    multiSelect: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2' },
//   { label: 'Option 3', value: '3' }
// ];
// const selectedOptions = ref();

<PuikSelect
  v-model="selectedOptions"
  id="multi-select-id"
  name="multi-select-name"
  label="Select option(s)"
  placeholder="Select option(s)"
  :options="options"
  multi-select
/>
        `,
        language: 'html'
      }
    }
  }
};

export const DisabledSelect = {
  render: Template,
  args: {
    id: 'disabled-select-id',
    name: 'disabled-select-name',
    label: 'Select disabled',
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2' },
//   { label: 'Option 3', value: '3' }
// ];
// const selectedOptions = ref();

<PuikSelect
  v-model="selectedOptions"
  id="disabled-select-id"
  name="disabled-select-name"
  label="Select disabled"
  :options="options"
  disabled
/>
        `,
        language: 'html'
      }
    }
  }
};

export const DisabledOption = {
  render: Template,
  args: {
    id: 'select-with-option-diasabled-id',
    name: 'select-with-option-diasabled-name',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' }
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2', disabled: true },
//   { label: 'Option 3', value: '3' }
// ];
// const selectedOptions = ref();

<PuikSelect
  v-model="selectedOptions"
  id="select-with-option-diasabled-id"
  name="select-with-option-diasabled-name"
  label="Select an option"
  :options="options"
/>
        `,
        language: 'html'
      }
    }
  }
};

export const Error = {
  render: Template,
  args: {
    id: 'error-select-id',
    name: 'error-select-name',
    error: 'something is wrong'
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2' },
//   { label: 'Option 3', value: '3' }
// ];
// const selectedOptions = ref();

<PuikSelect
  v-model="selectedOptions"
  id="error-select-id"
  name="error-select-name"
  label="Select an option"
  :options="options"
  error="something is wrong"
/>
        `,
        language: 'html'
      }
    }
  }
};

export const Searchable = {
  render: Template,
  args: {
    id: 'searchable-select-id',
    name: 'searchable-select-name',
    searchable: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const options = [
//   { label: 'Option 1', value: '1' },
//   { label: 'Option 2', value: '2' },
//   { label: 'Option 3', value: '3' }
// ];
// const selectedOptions = ref();

<PuikSelect
  v-model="selectedOptions"
  id="searchable-select-id"
  name="searchable-select-name"
  label="Select an option"
  :options="options"
  searchable
/>
        `,
        language: 'html'
      }
    }
  }
};

export const openEvent: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikBadge
    },
    setup() {
      const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
      ];
      const selectedOption = ref();
      const openState = ref(false);
      return { options, selectedOption, openState };
    },
    template: `
  <div class="min-h-[250px] flex flex-col space-y-2">
    <div>
      <puik-badge :variant="openState ? 'success' : 'warning'">
        open state : {{ openState }}
      </puik-badge>
    </div>
    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-open-event-id"
      name="select-open-event-name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @open="(state) => openState = state"
    />
  </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
    <!--VueJS Snippet-->
    // const options = [
    //   { label: 'Option 1', value: '1' },
    //   { label: 'Option 2', value: '2' },
    //   { label: 'Option 3', value: '3' }
    // ];
    // const selectedOption = ref();
    // const openState = ref(false);
    
    <puik-badge :variant="openState ? 'success' : 'warning'">
      open state : {{ openState }}
    </puik-badge>

    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-open-event-id"
      name="select-open-event-name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @open="(state) => openState = state"
    />
        `,
        language: 'html'
      }
    }
  }
};

export const updateModelValueEvent: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikBadge
    },
    setup() {
      const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
      ];
      const selectedOption = ref();
      const newValue = ref();
      return { options, selectedOption, newValue };
    },
    template: `
  <div class="min-h-[250px] flex flex-col space-y-2">
    <div>
      <puik-badge :variant="info">
        value : {{ newValue }}
      </puik-badge>
    </div>
    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-update-model-value-id"
      name="select-update-model-value--name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @update:model-value="(payload) => newValue = payload"
    />
  </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
    <!--VueJS Snippet-->
    // const options = [
    //   { label: 'Option 1', value: '1' },
    //   { label: 'Option 2', value: '2' },
    //   { label: 'Option 3', value: '3' }
    // ];
    // const selectedOption = ref();
    // const newValue = ref();

    <puik-badge :variant="info">
      value : {{ newValue }}
    </puik-badge>

    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-update-model-value-id"
      name="select-update-model-value--name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @update:model-value="(payload) => newValue = payload"
    />
        `,
        language: 'html'
      }
    }
  }
};
