import { ref } from 'vue'
import PuikSelect from './../src/select.vue'
import PuikOption from './../src/option.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Select',
  components: PuikSelect,
  argTypes: {
    displayProperty: {
      control: 'text',
      description:
        'In the case of using objects as a options prop you can set which property of the object is used for display',
      table: {
        defaultValue: { summary: 'label' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
      table: {
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Sets a placeholder for the select',
    },
    error: {
      control: 'text',
      description:
        'Display an error message under the field and sets the select in a error state (also available as a slot named error)',
    },
  },
  args: {
    displayProperty: '',
    disabled: false,
    placeholder: 'Select a value',
    error: '',
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
          <span class="puik-select__icon"> unfold_more </span>
        </button>
        <!--
          Select list, show/hide base on select state

          Leaving: "puik-select__transition__leave--active"
          From: "puik-select__transition__leave--from"
          To: "puik-select__transition__leave--to"
        -->
        <ul
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
          <li class="puik-option" role="option">
            <span class="puik-option__label">Test 1</span>
            <!-- Checkmark, only display for selected option. -->
            <span class="puik-option__selected-icon"> checked </span>
          </li>
          <!-- More items... -->
        </ul>
        <!-- Error message, only displayed when there is an error. -->
        <span class="puik-select__error"
          ><span class="puik-select__error__icon">error</span>My error</span
        >
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
  template:
    '<puik-select disabled placeholder="Disabled select"></puik-select>',
})

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
    <puik-select v-slot="{ options }" :options="myOptions" v-model="myValue" placeholder="Select a value">
      <puik-option v-for="option in options" :value="option.value" :label="option.label"/>
    </puik-select>`,
})
Searchable.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-select v-slot="{ options }" :options="myOptions" v-model="myValue" placeholder="Select a value">
        <puik-option v-for="option in options" option="option.value">{{ option.label }}</puik-option>
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
          <span class="puik-select__icon"> unfold_more </span>
        </button>
        <!--
          Select list, show/hide base on select state

          Leaving: "puik-select__transition__leave--active"
          From: "puik-select__transition__leave--from"
          To: "puik-select__transition__leave--to"
        -->
        <ul
          class="puik-select__options"
          tabindex="-1"
          role="listbox"
        >
        <div class="puik-input">
          <div class="puik-input__wrapper>
            <div class="puik-input__prepend">
              <span class="puik-select__search__icon">search</span>
            </div>
            <input class="puik-input__field" type="text" />
          </div>
        </div>
          <!-- 
              State classes
              Active: "puik-option--active"
              Selected: "puik-option--selected"
              Disabled: "puik-option--disabled"
            -->
          <li class="puik-option" role="option">
            <span class="puik-option__label">Test 1</span>
            <!-- Checkmark, only display for selected option. -->
            <span class="puik-option__selected-icon"> checked </span>
          </li>
          <!-- More items... -->
        </ul>
        <!-- Error message, only displayed when there is an error. -->
        <span class="puik-select__error"
          ><span class="puik-select__error__icon">error</span>My error</span
        >
      </div>
    </div>
      `,
      language: 'html',
    },
  },
}
