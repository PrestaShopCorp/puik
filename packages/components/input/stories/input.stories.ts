import { ref } from 'vue';
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';
import { PuikInput, PuikInputTypes } from '@prestashopcorp/puik-components';
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3';

const inputTypes = Object.values(PuikInputTypes);
const inputTypesSummary = inputTypes.join('|');

const inputAriaLive = Object.values(PuikAriaLive);
const inputAriaLiveSummary = inputAriaLive.join('|');

export default {
  title: 'Components/Input',
  component: PuikInput,
  argTypes: {
    type: {
      control: 'select',
      options: inputTypes,
      description: 'Sets the type of the input',
      table: {
        type: {
          summary: inputTypesSummary
        },
        defaultValue: {
          summary: PuikInputTypes.Text
        }
      }
    },
    id: {
      description: 'Sets the id of the input'
    },
    srLabel: {
      description: 'Sets the input label for screen readers',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    placeholder: {
      description: 'Sets the placeholder of the input'
    },
    disabled: {
      control: 'boolean',
      description: 'Sets the input as disabled',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    name: {
      description: 'Sets the name of the input'
    },
    autocomplete: {
      description: 'Sets the autocomplete mode of the input'
    },
    required: {
      description: 'Sets the input as required',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    error: {
      description: 'Sets an error for the input'
    },
    success: {
      description: 'Sets the input in a success state',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    hideHint: {
      description: 'Hides the input hint',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    step: {
      control: 'number',
      description: 'Sets the incremental step (for number input only)',
      table: {
        defaultValue: {
          summary: '1'
        }
      }
    },
    precision: {
      control: 'number',
      description:
        'Sets the precision of the input value (for number input only)'
    },
    min: {
      control: 'number',
      description: 'Sets the min value of the input (for number input only)'
    },
    max: {
      control: 'number',
      description: 'Sets the max value of the input (for number input only)'
    },
    minLength: {
      control: 'number',
      description: 'Sets the min number of characters',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    maxLength: {
      control: 'number',
      description: 'Sets the max number of characters',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    prepend: {
      description: 'Prepend an icon or text to the input (see Material Symbols: https://fonts.google.com/icons)'
    },
    append: {
      control: 'none',
      description: 'Append an icon or text to the input (see Material Symbols: https://fonts.google.com/icons)'
    },
    dataTest: {
      description:
        'Sets the data-test attribute on the input and error text elements `input-${dataTest}` `error-${dataTest}`',
      control: 'text'
    },
    ariaLabel: {
      description: 'Sets the aria-label attribute for accessibility',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    ariaLive: {
      description: 'Option for "aria-live" attribute',
      control: 'select',
      options: inputAriaLive,
      table: {
        defaultValue: {
          summary: 'polite'
        },
        type: {
          summary: inputAriaLiveSummary
        }
      }
    }
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikInput
  },
  setup() {
    const myValue = ref('');
    return { myValue, args };
  },
  template: '<puik-input v-model="myValue" v-bind="args" :disabled="args.disabled"/>'
});

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
    disabled: false
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
          <input
            class="puik-input__field" placeholder=""
            type="text" autocomplete=""
            name=""
            aria-label="undefined"
            aria-live="polite"
          >
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Disabled: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref('');
      return { myValue };
    },
    template: '<puik-input v-model="myValue" disabled></puik-input>'
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
          <input
          class="puik-input__field"
          disabled="" type="text"
          aria-label="undefined"
          aria-live="polite"
        >
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Placeholder: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref('');
      return { myValue };
    },
    template: '<puik-input v-model="myValue" placeholder=\'Input placeholder\'></puik-input>'
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
          <input
            class="puik-input__field"
            placeholder="Input placeholder"
            type="text" aria-label="undefined"
            aria-live="polite"
          >
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Password: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref('');
      return { myValue };
    },
    template: '<puik-input v-model="myValue" type="password"></puik-input>'
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
          <input
            class="puik-input__field"
            type="password"
            aria-label="undefined"
            aria-live="polite"
          >
          <span
            class="puik-input__reveal-password"
            role="button" aria-pressed="false"
            tabindex="0"
          >
            visibility_off
          </span>
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Number: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref(0);
      return { myValue };
    },
    template: '<puik-input v-model="myValue" type="number"></puik-input>'
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
          <input
            class="puik-input__field"
            type="number" min="-Infinity"
            max="Infinity"
            step="1"
            aria-label="undefined"
            aria-live="polite"
          >
          <div class="puik-input__controls">
              <button
                type="button"
                class="puik-input__controls__increment"
                aria-label="Increase"
              >
                <span class="puik-input__controls__increment__icon">
                  arrow_drop_up
                </span>
              </button>
              <button
                type="button"
                class="puik-input__controls__decrement"
                aria-label="Decrease"
              >
                <span class="puik-input__controls__decrement__icon">
                  arrow_drop_down
                </span>
              </button>
          </div>
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const MinMax: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref(0);
      return { myValue };
    },
    template: '<puik-input v-model="myValue" type="number" :min="0" :max="5"></puik-input>'
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
          <input
            class="puik-input__field"
            type="number"
            min="0"
            max="5"
            step="1"
            aria-label="undefined"
            aria-live="polite"
          >
          <div class="puik-input__controls">
              <button
                type="button"
                class="puik-input__controls__increment"
                aria-label="Increase"
              >
                <span class="puik-input__controls__increment__icon">
                  arrow_drop_up
                </span>
              </button>
              <button
                type="button"
                class="puik-input__controls__decrement"
                aria-label="Decrease"
              >
                <span class="puik-input__controls__decrement__icon">
                  arrow_drop_down
                </span>
              </button>
          </div>
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const MinMaxCharacters: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref('');
      return { myValue };
    },
    template: `
      <puik-input
        v-model="myValue"
        :min-length="0"
        :max-length="12"
      />
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input
    v-model="myValue"
    :min-length="0"
    :max-length="12"
  />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
      <div class="puik-input__wrapper">
          <input
            class="puik-input__field"
            type="text"
            minlength="0"
            maxlength="12"
            aria-label="undefined"
            aria-live="polite"
          >
      </div>
      <div class="puik-input__character-count">
        <span>0/12</span>
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Step: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref(0);
      return { myValue };
    },
    template: '<puik-input v-model="myValue" type="number" :step="5"></puik-input>'
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
          <input
            class="puik-input__field"
            type="number" min="-Infinity"
            max="Infinity"
            step="5"
            aria-label="undefined"
            aria-live="polite"
          >
          <div class="puik-input__controls">
              <button
                type="button"
                class="puik-input__controls__increment" aria-label="Increase"
              >
                <span class="puik-input__controls__increment__icon">
                  arrow_drop_up
                </span>
              </button>
              <button
                type="button"
                class="puik-input__controls__decrement"
                aria-label="Decrease"
              >
                <span class="puik-input__controls__decrement__icon">
                  arrow_drop_down
                </span>
              </button>
          </div>
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Success: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref('');
      return { myValue };
    },
    template: '<puik-input v-model="myValue" success></puik-input>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-input v-model="myValue" success />

  <!--HTML/CSS Snippet-->
  <div class="puik-input">
      <div class="puik-input__wrapper puik-input__wrapper--success">
          <input
            class="puik-input__field"
            type="text"
            aria-label="undefined"
            aria-live="polite"
          >
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Error: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref('');
      return { myValue };
    },
    template: `
      <puik-input v-model="myValue">
        <template #error>This is an error</template>
      </puik-input>
    `
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
  <div class="puik-input">
      <div class="puik-input__wrapper puik-input__wrapper--error">
          <input
            class="puik-input__field"
            type="text"
            aria-label="undefined"
            aria-live="polite"
          >
      </div>
      <div class="puik-input__hint">
          <div class="puik-input__hint__error" role="alert">
              <div
                class="puik-icon puik-input__hint__error__icon" aria-label="error icon"
                role="img"
                style="font-size: 1.25rem; font-variation-settings: &quot;FILL&quot; 1;"
              >
                error
              </div>
              <span class="puik-input__hint__error__text">
                This is an error
              </span>
            </div>
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Hint: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref('');
      return { myValue };
    },
    template: `
      <puik-input v-model="myValue">
        <template #hint>This is an hint</template>
      </puik-input>
    `
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
          <input
            class="puik-input__field" type="text"
            aria-label="undefined"
            aria-live="polite"
          >
      </div>
      <div class="puik-input__hint">
        <span class="puik-input__hint__text">
          This is an hint
        </span>
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const PrependAppend: StoryObj = {
  render: () => ({
    components: {
      PuikInput
    },
    setup() {
      const myValue = ref('');
      return { myValue };
    },
    template: `
      <puik-input v-model="myValue">
        <template #prepend>$</template>
        <template #append>kg</template>
      </puik-input>
    `
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
      <div class="puik-input__wrapper">
          <div class="puik-input__prepend">$</div>
          <input
            class="puik-input__field"
            type="text"
            aria-label="undefined"
            aria-live="polite"
          >
          <div class="puik-input__append">
            kg
          </div>
      </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};
