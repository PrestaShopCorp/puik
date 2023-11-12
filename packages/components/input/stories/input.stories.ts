import { ref } from 'vue'
import PuikInput from './../src/input.vue'
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/Input',
  component: PuikInput,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'url', 'tel'],
      description: 'Set the type of the input',
      table: {
        defaultValue: {
          summary: 'text',
        },
      },
    },
    id: {
      description: 'Set the id of the input',
    },
    placeholder: {
      description: 'Set the placeholder of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Set the input as disabled',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    name: {
      description: 'Set the name of the input',
    },
    autocomplete: {
      description: 'Set the autocomplete mode of the input',
    },
    required: {
      description: 'Set the input as required',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    error: {
      description: 'Set an error for the input',
    },
    success: {
      description: 'Set the input in a success state',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    hideHint: {
      description: 'Hide the input hint',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    step: {
      control: 'number',
      description: 'Set the incremental step (for number input only)',
      table: {
        defaultValue: {
          summary: '1',
        },
      },
    },
    precision: {
      control: 'number',
      description:
        'Set the precision of the input value (for number input only)',
    },
    min: {
      control: 'number',
      description: 'Set the min value of the input (for number input only)',
    },
    max: {
      control: 'number',
      description: 'Set the max value of the input (for number input only)',
    },
    prepend: {
      description: 'Prepend an icon or text to the input',
    },
    append: {
      control: 'none',
      description: 'Append an icon or text to the input',
    },
    dataTest: {
      description:
        'Set the data-test attribute on the input and error text elements `input-${dataTest}` `error-${dataTest}`',
      control: 'text',
    },
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikInput,
  },
  setup() {
    const myValue = ref('')
    return { myValue, args }
  },
  template: `<puik-input v-model="myValue" v-bind="args" :disabled="args.disabled"/>`,
})

export const Default = {
  render: Template,

  args: {
    type: undefined,
    id: '',
    placeholder: '',
    name: '',
    autocomplete: '',
    required: false,
    success: false,
    hideHint: false,
    step: undefined,
    precision: undefined,
    min: undefined,
    max: undefined,
    disabled: false,
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input v-model="myValue" />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper">
      <input class="puik-input__field" type="text" />
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Disabled: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref('')
      return { myValue }
    },
    template: `<puik-input v-model="myValue" disabled></puik-input>`,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input v-model="myValue" disabled />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper puik-input__wrapper--disabled">
      <input class="puik-input__field" type="text" disabled />
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Placeholder: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref('')
      return { myValue }
    },
    template: `<puik-input v-model="myValue" placeholder='Input placeholder'></puik-input>`,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input v-model="myValue" placeholder='Input placeholder' />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper">
      <input class="puik-input__field" type="text" placeholder='Input placeholder' />
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Password: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref('')
      return { myValue }
    },
    template: `<puik-input v-model="myValue" type="password"></puik-input>`,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input v-model="myValue" type="password" />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper">
      <input class="puik-input__field" type="text" placeholder='Input placeholder' />
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Number: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref(0)
      return { myValue }
    },
    template: `<puik-input v-model="myValue" type="number"></puik-input>`,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input v-model="myValue" type="number" />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper">
      <input class="puik-input__field" type="number" />
      <div class="puik-input__controls">
        <button
          type="button"
          class="puik-input__controls__increment"
          aria-label="Increase"
        >
          <span class="puik-input__controls__increment__icon">arrow_drop_up</span>
        </button>
        <button
          type="button"
          class="puik-input__controls__decrement"
          aria-label="Decrease"
        >
          <span class="puik-input__controls__decrement__icon">arrow_drop_down</span>
        </button>
      </div>
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const MinMax: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref(0)
      return { myValue }
    },
    template: `<puik-input v-model="myValue" type="number" :min="0" :max="5"></puik-input>`,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input v-model="myValue" type="number" :min="0" :max="5" />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper">
      <input class="puik-input__field" type="number" min="0" max="5" />
      <div class="puik-input__controls">
        <button
          type="button"
          class="puik-input__controls__increment"
          aria-label="Increase"
        >
          <span class="puik-input__controls__increment__icon">arrow_drop_up</span>
        </button>
        <button
          type="button"
          class="puik-input__controls__decrement"
          aria-label="Decrease"
        >
          <span class="puik-input__controls__decrement__icon">arrow_drop_down</span>
        </button>
      </div>
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Step: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref(0)
      return { myValue }
    },
    template: `<puik-input v-model="myValue" type="number" :step="5"></puik-input>`,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input v-model="myValue" type="number" :step="5" />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper">
      <input class="puik-input__field" type="number" step="5" />
      <div class="puik-input__controls">
        <button
          type="button"
          class="puik-input__controls__increment"
          aria-label="Increase"
        >
          <span class="puik-input__controls__increment__icon">arrow_drop_up</span>
        </button>
        <button
          type="button"
          class="puik-input__controls__decrement"
          aria-label="Decrease"
        >
          <span class="puik-input__controls__decrement__icon">arrow_drop_down</span>
        </button>
      </div>
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Success: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref('')
      return { myValue }
    },
    template: `<puik-input v-model="myValue" success></puik-input>`,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input v-model="myValue" success />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper puik-input__wrapper--">
      <input class="puik-input__field" type="text" />
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Error: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref('')
      return { myValue }
    },
    template: `
      <puik-input v-model="myValue">
        <template #error>This is an error</template>
      </puik-input>
    `,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet using slot -->
  <puik-input v-model="myValue">
    <template #error>This is an error</template>
  </puik-input>

  <!--VueJS Snippet using prop -->
  <puik-input v-model="myValue" error="This is an error" />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper puik-input__wrapper--error">
      <input class="puik-input__field" type="text" />
    </div>
    <div class="puik-input__hint">
      <div class="puik-input__hint__error">
        <span class="puik-icon puik-input__hint__error__icon">error</span>
        <span class="puik-input__hint__error__text">
          This is an error
        </span>
      </div>
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Hint: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref('')
      return { myValue }
    },
    template: `
      <puik-input v-model="myValue">
        <template #hint>This is an hint</template>
      </puik-input>
    `,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet using slot -->
  <puik-input v-model="myValue">
    <template #hint>This is an hint</template>
  </puik-input>

  <!--VueJS Snippet using prop -->
  <puik-input v-model="myValue" hint="This is an hint" />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper">
      <input class="puik-input__field" type="text" />
    </div>
    <div class="puik-input__hint">
      <span class="puik-input__hint__text">
        This is an hint
      </span>
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const PrependAppend: StoryObj = {
  render: () => ({
    components: {
      PuikInput,
    },
    setup() {
      const myValue = ref('')
      return { myValue }
    },
    template: `
      <puik-input v-model="myValue">
        <template #prepend>$</template>
        <template #append>kg</template>
      </puik-input>
    `,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet using slot -->
  <puik-input v-model="myValue">
    <template #prepend>$</template>
    <template #append>kg</template>
  </puik-input>

  <!--VueJS Snippet using prop -->
  <puik-input v-model="myValue" hint="This is an hint" />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
    <div class="puik-input__wrapper>
      <div class="puik-input__prepend">
        $
      </div>
      <input class="puik-input__field" type="text" />
      <div class="puik-input__append">
        kg
      </div>
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}
