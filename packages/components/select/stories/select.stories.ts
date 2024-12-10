import { PuikSelect, PuikOption, PuikGroupOptions } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';
import { ref } from 'vue';

export default {
  title: 'Components/Select',
  components: PuikSelect,
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Corresponds to the selected option (or selected options in the case of multi-select)',
      table: {
        category: 'Common'
      }
    },
    id: {
      control: 'text',
      description: 'Sets the id attribute of the select input',
      table: {
        category: 'Common'
      }
    },
    name: {
      control: 'text',
      description: 'Sets the name attribute of the select input',
      table: {
        category: 'Common'
      }
    },
    label: {
      control: 'text',
      description: 'Sets the label of the select input',
      table: {
        category: 'Common'
      }
    },
    required: {
      control: 'boolean',
      description: 'Indicates whether select is required or not',
      table: {
        category: 'Common'
      }
    },
    optional: {
      control: 'boolean',
      description: 'Indicates whether select is optional or not',
      table: {
        category: 'Common'
      }
    },
    options: {
      control: 'none',
      description: 'Array of options passed to the component',
      table: {
        category: 'Searchable'
      }
    },
    optionLabelKey: {
      control: 'text',
      description: 'In the case of using objects as a options prop you can set which property of the object is the label',
      table: {
        defaultValue: { summary: 'label' },
        category: 'Searchable'
      }
    },
    optionValueKey: {
      control: 'text',
      description: 'In the case of using objects as a options prop you can set which property of the object is the value',
      table: {
        defaultValue: { summary: 'value' },
        category: 'Searchable'
      }
    },
    optionDisabledKey: {
      control: 'text',
      description: 'In case of using objects as option props, you can define which property of the object makes the option disabled',
      table: {
        defaultValue: { summary: 'value' },
        category: 'Searchable'
      }
    },
    multiSelect: {
      control: 'boolean',
      description: 'Indicates whether the select allows multiple choice',
      table: {
        category: 'Common'
      }
    },
    searchable: {
      control: 'boolean',
      description: 'Enables the search feature',
      table: {
        category: 'Searchable'
      }
    },
    customFilterMethod: {
      control: 'none',
      description: 'Use your own method to filter the options when using the search',
      table: {
        category: 'Searchable'
      }
    },
    placeholder: {
      control: 'text',
      description: 'Sets a placeholder for the select',
      table: {
        category: 'Common'
      }
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Sets a placeholder for the search input',
      table: {
        category: 'Searchable'
      }
    },
    noMatchText: {
      control: 'text',
      description: 'Message to display when there are no results found',
      table: {
        category: 'Searchable'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
      table: {
        defaultValue: { summary: false },
        category: 'Common'
      }
    },
    error: {
      control: 'text',
      description: 'Display an error message under the field and sets the select in an error state (also available as a slot named error)',
      table: {
        category: 'Common'
      }
    },
    autocomplete: {
      control: 'text',
      description: 'Enables browser autocompletion for the select',
      table: {
        category: 'Common'
      }
    },
    prependInputIcon: {
      control: 'text',
      description: 'Prepends an icon or text to the input',
      table: {
        category: 'Common'
      }
    },
    open: {
      control: 'boolean',
      description: 'Controls the opening of the select dropdown',
      table: {
        defaultValue: { summary: false },
        category: 'Common'
      }
    },
    dataTest: {
      control: 'text',
      description: 'Sets the data-test attribute',
      table: {
        category: 'Common'
      }
    }
  },
  args: {
    id: 'select-id',
    name: 'select-name',
    label: 'Select Option',
    required: false,
    optional: false,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ],
    optionLabelKey: 'label',
    optionValueKey: 'value',
    optionDisabledKey: 'disabled',
    multiSelect: false,
    searchable: false,
    placeholder: 'Choose an option',
    searchPlaceholder: 'Search options',
    noMatchText: 'No match found',
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
  <div class="min-h-60">
    <PuikSelect
      v-model="selectedOptions"
      v-bind="args"
    />
  </div>
  `
});

export const Default = {
  render: Template,
  args: {
    id: 'default-select'
  },
  parameters: {
    docs: {
      source: {
        code: `
<PuikSelect
  v-model="selectedOptions"
  v-bind="args"
  id="select-id"
  label="Select Option"
  placeholder="Choose an option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]"
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
    id: 'required-select',
    label: 'Select one option',
    required: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<PuikSelect
  v-model="selectedOptions"
  v-bind="args"
  id="select-single-id"
  label="Select one option"
  placeholder="Choose an option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]"
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
    id: 'optional-select',
    label: 'Select one option',
    optional: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<PuikSelect
  v-model="selectedOptions"
  v-bind="args"
  id="select-single-id"
  label="Select one option"
  placeholder="Choose an option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]"
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
    id: 'prepend-input-select',
    label: 'Select one option',
    prependInputIcon: 'label'
  },
  parameters: {
    docs: {
      source: {
        code: `
<PuikSelect
  v-model="selectedOptions"
  v-bind="args"
  id="select-single-id"
  label="Select one option"
  placeholder="Choose an option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]"
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
    id: 'multi-select',
    label: 'Select options',
    placeholder: 'multiple options',
    multiSelect: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<PuikSelect
  v-model="selectedOptions"
  v-bind="args"
  label="Select one option"
  placeholder="Choose an option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]"
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
    id: 'disabled-select',
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<PuikSelect
  v-model="selectedOptions"
  v-bind="args"
  id="select-single-id"
  label="Select one option"
  placeholder="Choose an option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]"
/>
        `,
        language: 'html'
      }
    }
  }
};

export const DisabledOptions = {
  render: Template,
  args: {
    id: 'disabled-options-select',
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
<PuikSelect
  v-model="selectedOptions"
  v-bind="args"
  id="select-single-id"
  label="Select one option"
  placeholder="Choose an option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2', disabled: true },
    { label: 'Option 3', value: '3' },
  ]"
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
    id: 'error-select',
    error: 'something is wrong'
  },
  parameters: {
    docs: {
      source: {
        code: `
<PuikSelect
  v-model="selectedOptions"
  v-bind="args"
  id="select-single-id"
  label="Select one option"
  placeholder="Choose an option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2', disabled: true },
    { label: 'Option 3', value: '3' },
  ]"
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
    id: 'searchable-select',
    searchable: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<PuikSelect
  v-model="selectedOptions"
  v-bind="args"
  id="select-single-id"
  label="Select one option"
  placeholder="Choose an option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2', disabled: true },
    { label: 'Option 3', value: '3' },
  ]"
/>
        `,
        language: 'html'
      }
    }
  }
};
