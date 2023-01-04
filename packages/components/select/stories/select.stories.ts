import { ref } from 'vue'
import PuikSelect from './../src/select.vue'
import PuikOption from './../src/option.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Select',
  components: PuikSelect,
  argTypes: {
    labelKey: {
      control: 'text',
      description:
        'In the case of using objects as a options prop you can set which property of the object is the label',
      table: {
        defaultValue: { summary: 'label' },
        category: 'Searchable',
      },
    },
    valueKey: {
      control: 'text',
      description:
        'In the case of using objects as a options prop you can set which property of the object is the value',
      table: {
        defaultValue: { summary: 'value' },
        category: 'Searchable',
      },
    },
    id: {
      control: 'text',
      description: 'Sets the id attribute of the select',
      table: {
        category: 'Common',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
      table: {
        defaultValue: { summary: false },
        category: 'Common',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Sets a placeholder for the select',
      table: {
        category: 'Common',
      },
    },
    name: {
      control: 'text',
      description: 'Defines a name for the select',
      table: {
        category: 'Common',
      },
    },
    autocomplete: {
      control: 'text',
      description: 'Enables browser autocompletion for the select',
      table: {
        category: 'Common',
      },
    },
    error: {
      control: 'text',
      description:
        'Display an error message under the field and sets the select in a error state (also available as a slot named error)',
      table: {
        category: 'Common',
      },
    },
    zindex: {
      control: 'number',
      description: 'Sets the z-index of the select list',
      table: {
        category: 'Common',
        defaultValue: { summary: 1000 },
      },
    },
    options: {
      control: 'none',
      description:
        'Pass options to the component to enable the option filtering (⚠️ Default filtering only works for arrays of string, number, object. Use `customFilterMethod` for specific needs) (Returns also an `options` value through the v-slot directive',
      table: {
        category: 'Searchable',
      },
    },
    searchable: {
      control: 'boolean',
      description: 'Enables the search',
      table: {
        defaultValue: { summary: false },
        category: 'Searchable',
      },
    },
    noMatchText: {
      control: 'text',
      description: 'Message to display when there is no results found',
      table: {
        category: 'Searchable',
      },
    },
  },
  args: {
    labelKey: '',
    valueKey: '',
    id: '',
    disabled: false,
    placeholder: 'Select a value',
    error: '',
    options: undefined,
    searchable: false,
    noMatchText: '',
    zindex: 1000,
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikSelect,
    PuikOption,
  },
  setup() {
    const myValue = ref('')
    return { args, myValue }
  },
  template: `
  <puik-select v-model="myValue" v-bind="args">
    <puik-option value="test">Test</puik-option>
    <puik-option value="test2">Test2</puik-option>
    <puik-option value="test3">Test3</puik-option>
  </puik-select>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-select v-model="myValue" v-bind="args">
        <puik-option value="test">Test</puik-option>
        <puik-option value="test2">Test2</puik-option>
        <puik-option value="test3">Test3</puik-option>
      </puik-select>
      <!--HTML/CSS Snippet-->
      <div class="puik-select">
      <div class="puik-select__wrapper">
        <!-- 
          State classes
          Error: "puik-select__button--error"
         -->
        <button
          class="puik-select__button"
          aria-haspopup="listbox"
          aria-expanded="false"
        >
          <span class="puik-select__selected">
            <!-- Placeholder or selected value -->
            Select a value
          </span>
          <span class="puik-icon puik-select__icon"> unfold_more </span>
        </button>
        <!--
          Select list, show/hide base on select state

          Leaving: "puik-select__transition__leave--active"
          From: "puik-select__transition__leave--from"
          To: "puik-select__transition__leave--to"
        -->
        <div
          class="puik-select__options"
          tabindex="-1"
          role="listbox"
        >
          <!-- 
              State classes
              Active: "puik-option--active"
              Selected: "puik-option--selected"
              Disabled: "puik-option--disabled"
            -->
          <ul class="puik-select__options-list">
            <li class="puik-option" role="option">
              <span class="puik-option__label">Test 1</span>
              <!-- Checkmark, only display for selected option. -->
              <span class="puik-icon puik-option__selected-icon"> checked </span>
            </li>
            <!-- More items... -->
          </ul>
        </div>
        <!-- Error message, only displayed when there is an error. -->
        <div class="puik-select__error"
          >
          <span class="puik-icon puik-select__error__icon">error</span>
          <span class="puik-select__error__text">My error</span>
        </div>
      </div>
    </div>
      `,
      language: 'html',
    },
  },
}

export const Disabled: Story = () => ({
  components: {
    PuikSelect,
    PuikOption,
  },
  template: `<puik-select disabled placeholder="Disabled select"></puik-select>`,
})

Disabled.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-select v-model="myValue" v-bind="args" disabled>
        <puik-option value="test">Test</puik-option>
        <puik-option value="test2">Test2</puik-option>
        <puik-option value="test3">Test3</puik-option>
      </puik-select>
      <!--HTML/CSS Snippet-->
      <div class="puik-select">
      <div class="puik-select__wrapper">
        <button
          class="puik-select__button"
          aria-haspopup="listbox"
          aria-expanded="false"
          disabled
        >
          <span class="puik-select__selected">
            <!-- Placeholder or selected value -->
            Select a value
          </span>
          <span class="puik-icon puik-select__icon"> unfold_more </span>
        </button>
        <!--
          Select list, show/hide base on select state

          Leaving: "puik-select__transition__leave--active"
          From: "puik-select__transition__leave--from"
          To: "puik-select__transition__leave--to"
        -->
        <div
          class="puik-select__options"
          tabindex="-1"
          role="listbox"
        >
          <ul class="puik-select__options-list">
            <li class="puik-option" role="option">
              <span class="puik-option__label">Test 1</span>
              <!-- Checkmark, only display for selected option. -->
              <span class="puik-icon puik-option__selected-icon"> checked </span>
            </li>
            <!-- More items... -->
          </ul>
        </div>
      </div>
    </div>
      `,
      language: 'html',
    },
  },
}

export const DisabledOption: Story = () => ({
  components: {
    PuikSelect,
    PuikOption,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-select v-model="myValue" placeholder="Select a value">
      <puik-option value="test" label="Test" disabled/>
      <puik-option value="test2" label="Test2"/>
      <puik-option value="test3" label="Test3"/>
    </puik-select>`,
})

DisabledOption.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-select v-model="myValue" v-bind="args">
        <puik-option value="test">Test</puik-option>
        <puik-option value="test2">Test2</puik-option>
        <puik-option value="test3">Test3</puik-option>
      </puik-select>
      <!--HTML/CSS Snippet-->
      <div class="puik-select">
      <div class="puik-select__wrapper">
        <button
          class="puik-select__button"
          aria-haspopup="listbox"
          aria-expanded="false"
        >
          <span class="puik-select__selected">
            <!-- Placeholder or selected value -->
            Select a value
          </span>
          <span class="puik-icon puik-select__icon"> unfold_more </span>
        </button>
        <!--
          Select list, show/hide base on select state

          Leaving: "puik-select__transition__leave--active"
          From: "puik-select__transition__leave--from"
          To: "puik-select__transition__leave--to"
        -->
        <div
          class="puik-select__options"
          tabindex="-1"
          role="listbox"
        >
          <ul class="puik-select__options-list">
            <li class="puik-option puik-option--disabled" role="option">
              <span class="puik-option__label">Test 1</span>
              <!-- Checkmark, only display for selected option. -->
              <span class="puik-icon puik-option__selected-icon"> checked </span>
            </li>
            <!-- More items... -->
          </ul>
        </div>
      </div>
    </div>
      `,
      language: 'html',
    },
  },
}

export const Error: Story = () => ({
  components: {
    PuikSelect,
    PuikOption,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-select error="This is an error message" v-model="myValue" placeholder="Select a value">
      <puik-option value="test" label="Test"/>
      <puik-option value="test2" label="Test2"/>
      <puik-option value="test3" label="Test3"/>
    </puik-select>`,
})

Error.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-select v-model="myValue">
        <puik-option value="test">Test</puik-option>
        <puik-option value="test2">Test2</puik-option>
        <puik-option value="test3">Test3</puik-option>
        <template #error>
        <!-- Also available through the error prop -->
          This is an error message
        </template>
      </puik-select>
      <!--HTML/CSS Snippet-->
      <div class="puik-select">
      <div class="puik-select__wrapper">
        <button
          class="puik-select__button puik-select__button--error"
          aria-haspopup="listbox"
          aria-expanded="false"
        >
          <span class="puik-select__selected">
            <!-- Placeholder or selected value -->
            Select a value
          </span>
          <span class="puik-icon puik-select__icon"> unfold_more </span>
        </button>
        <!--
          Select list, show/hide base on select state

          Leaving: "puik-select__transition__leave--active"
          From: "puik-select__transition__leave--from"
          To: "puik-select__transition__leave--to"
        -->
        <div
          class="puik-select__options"
          tabindex="-1"
          role="listbox"
        >
          <ul class="puik-select__options-list">
            <li class="puik-option" role="option">
              <span class="puik-option__label">Test 1</span>
              <!-- Checkmark, only display for selected option. -->
              <span class="puik-icon puik-option__selected-icon"> checked </span>
            </li>
            <!-- More items... -->
          </ul>
        </div>
        <span class="puik-select__error"
          ><span class="puik-icon puik-select__error__icon">error</span>My error</span
        >
      </div>
    </div>
      `,
      language: 'html',
    },
  },
}

export const Searchable: Story = () => ({
  components: {
    PuikSelect,
    PuikOption,
  },
  setup() {
    const myValue = ref('')
    const myOptions = ref([
      { value: 'test', label: 'Test' },
      { value: 'test2', label: 'Test2' },
      { value: 'test3', label: 'Test3' },
    ])
    return { myValue, myOptions }
  },
  template: `
    <puik-select v-model="myValue" placeholder="Select a value" searchable>
      <puik-option v-for="option in myOptions" :value="option.value" :label="option.label"/>
    </puik-select>`,
})
Searchable.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-select v-model="myValue" placeholder="Select a value" searchable>
        <puik-option v-for="option in options" option="option.value">{{ option.label }}</puik-option>
      </puik-select>
      <!--HTML/CSS Snippet-->
      <div class="puik-select">
      <div class="puik-select__wrapper">
        <button
          class="puik-select__button"
          aria-haspopup="listbox"
          aria-expanded="false"
        >
          <span class="puik-select__selected">
            <!-- Placeholder or selected value -->
            Select a value
          </span>
          <span class="puik-icon puik-select__icon"> unfold_more </span>
        </button>
        <!--
          Select list, show/hide base on select state

          Leaving: "puik-select__transition__leave--active"
          From: "puik-select__transition__leave--from"
          To: "puik-select__transition__leave--to"
        -->
        <div
          class="puik-select__options"
          tabindex="-1"
          role="listbox"
        >
          <div class="puik-input">
            <div class="puik-input__wrapper>
              <div class="puik-input__prepend">
                <span class="puik-icon puik-select__search__icon">search</span>
              </div>
              <input class="puik-input__field" type="text" />
            </div>
          </div>
          <!--
            To display only if there are no results
            query: search query value
          -->
          <p
            class="puik-select__no-results"
          >
            No results found for {query}
          </p>
          <ul class="puik-select__options-list">
            <li class="puik-option" role="option">
              <span class="puik-option__label">Test 1</span>
              <!-- Checkmark, only display for selected option. -->
              <span class="puik-icon puik-option__selected-icon"> checked </span>
            </li>
            <!-- More items... -->
          </ul>
        </div>
      </div>
    </div>
      `,
      language: 'html',
    },
  },
}

export const NoMatchCustomText: Story = (args: Args) => ({
  components: {
    PuikSelect,
    PuikOption,
  },
  setup() {
    const myValue = ref('')
    const myOptions = ref([
      { value: 'test', label: 'Test' },
      { value: 'test2', label: 'Test2' },
      { value: 'test3', label: 'Test3' },
    ])
    return { myValue, myOptions, args }
  },
  template: `
    <puik-select v-model="myValue" placeholder="Select a value" :no-match-text="args.noMatchText" searchable>
      <puik-option v-for="option in myOptions" :value="option.value" :label="option.label"/>
    </puik-select>`,
})

NoMatchCustomText.args = {
  noMatchText: 'No results found custom text',
}

NoMatchCustomText.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-select v-model="myValue" placeholder="Select a value" no-match-text="No results found custom text" searchable>
        <puik-option v-for="option in options" option="option.value">{{ option.label }}</puik-option>
      </puik-select>
      <!--HTML/CSS Snippet-->
      <div class="puik-select">
      <div class="puik-select__wrapper">
        <button
          class="puik-select__button"
          aria-haspopup="listbox"
          aria-expanded="false"
        >
          <span class="puik-select__selected">
            <!-- Placeholder or selected value -->
            Select a value
          </span>
          <span class="puik-icon puik-select__icon"> unfold_more </span>
        </button>
        <!--
          Select list, show/hide base on select state

          Leaving: "puik-select__transition__leave--active"
          From: "puik-select__transition__leave--from"
          To: "puik-select__transition__leave--to"
        -->
        <div
          class="puik-select__options"
          tabindex="-1"
          role="listbox"
        >
          <div class="puik-input">
            <div class="puik-input__wrapper>
              <div class="puik-input__prepend">
                <span class="puik-icon puik-select__search__icon">search</span>
              </div>
              <input class="puik-input__field" type="text" />
            </div>
          </div>
          <!--
            To display only if there are no results
            query: search query value
          -->
          <p
            class="puik-select__no-results"
          >
            No results found custom text
          </p>
          <ul class="puik-select__options-list">
            <li class="puik-option" role="option">
              <span class="puik-option__label">Test 1</span>
              <!-- Checkmark, only display for selected option. -->
              <span class="puik-icon puik-option__selected-icon"> checked </span>
            </li>
            <!-- More items... -->
          </ul>
        </div>
      </div>
    </div>
      `,
      language: 'html',
    },
  },
}
