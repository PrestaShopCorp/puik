import { OptionType, PuikGroupOptions, PuikOption, PuikSelect } from '@prestashopcorp/puik-components';
import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

export default {
  title: 'Components/Select/GroupOptions',
  component: PuikGroupOptions,
  argTypes: {
    zIndex: {
      control: 'number',
      description: 'Sets the Z-index attribute',
      table: {
        defaultValue: {
          summary: 100
        },
        type: {
          summary: 'string'
        }
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
        }
      }
    }
  },
  args: {
    open: false,
    zIndex: 100,
    dataTest: 'data-test'
  }
} as Meta;

export const DefaultExample: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikGroupOptions,
      PuikOption
    },
    setup() {
      const openRef = ref(false);
      const options = ref([
        { label: 'label 1', value: '1', category: 'catégorie A' },
        { label: 'label 2', value: '2', category: 'catégorie A' },
        { label: 'label 3', value: '3', category: 'catégorie A', disabled: true },
        { label: 'label 4', value: '4', category: 'catégorie B' },
        { label: 'label 5', value: '5', category: 'catégorie B' }
      ]);
      const selectedOption = ref();
      const handleSelect = (payload: OptionType) => {
        selectedOption.value === payload ? selectedOption.value = undefined : selectedOption.value = payload;
      };
      return { options, openRef, selectedOption, handleSelect };
    },
    template: `
  <div class="min-h-[250px] flex flex-col space-y-2">
    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-default-id"
      name="select-default-name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options
        :z-index="100"
        data-test="group-options-test"
      >
        <puik-option
          v-for="option in options"
          :key="option.value"
          :option="option"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(option, payload)"
          @open="(state) => openRef = state"
        >
          {{ option.label }}
        </puik-option>
      </puik-group-options>
    </puik-select>
    <div class="puik-body-default">
      Selected option: <pre><code>{{ selectedOption }}</code></pre>
    </div>
  </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
    <!--VueJS Snippet-->
    
    // const options = ref([
    //   { label: 'label 1', value: '1', category: 'catégorie A' },
    //   { label: 'label 2', value: '2', category: 'catégorie A' },
    //   { label: 'label 3', value: '3', category: 'catégorie A', disabled: true },
    //   { label: 'label 4', value: '4', category: 'catégorie B' },
    //   { label: 'label 5', value: '5', category: 'catégorie B' }
    // ]);
    // 
    // const openRef = ref(false);
    // const selectedOption = ref();
    // 
    // const handleSelect = (payload: OptionType) => {
    //   selectedOption.value === payload ? selectedOption.value = undefined : selectedOption.value = payload;
    // };

    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-default-id"
      name="select-default-name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options
        :z-index="100"
        data-test="group-options-test"
      >
        <puik-option
          v-for="option in options"
          :key="option.value"
          :option="option"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(option, payload)"
          @open="(state) => openRef = state"
        >
          {{ option.label }}
        </puik-option>
      </puik-group-options>
    </puik-select>
        `,
        language: 'html'
      }
    }
  }
};
