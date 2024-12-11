import { PuikSelect, PuikGroupOptions, PuikOption, OptionType } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

export default {
  title: 'Components/Select/Option',
  component: PuikOption
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSelect,
    PuikGroupOptions,
    PuikOption
  },
  setup() {
    const optionSelected = ref();
    const openRef = ref();
    const options = ref([
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ]);
    const handleSelect = (payload: any, option: any) => {
      optionSelected.value !== payload ? optionSelected.value = payload : optionSelected.value = null;
      console.log(payload);
      console.log(option);
    };
    return { options, openRef, optionSelected, handleSelect, args };
  },
  template: `
    <div class="min-h-[200px]">
    <div>option selected: {{ optionSelected }}</div>
      <puik-select
        id="select-with-options-props-id"
        v-model="optionSelected"
        :options="options"
        label="Select uses default slot"
      >
        <puik-group-options>
          <puik-option
            v-for="(option, index) in options"
            :key="option.label"
            :label="option.label"
            :value="option.value"
            :is-selected="optionSelected === option"
            @select="(payload) => handleSelect(payload, option)"
            @open="(state) => openRef = state"
          >
            {{ option.label }}
          </puik-option>
        </puik-group-options>
      </puik-select>
    </div>
  `
});

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
        <!--VueJS Snippet-->

        <!--HTML/CSS Snippet-->
        `,
        language: 'html'
      }
    }
  }
};

export const withSelectOptionsProp: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikGroupOptions,
      PuikOption
    },
    setup() {
      const openRef = ref(false);

      const OptionsWithSlot = ref([
        { label: 'label 1', customLabel: 'custom-option-label-key 1', value: '1', category: 'catégorie A' },
        { label: 'label 2', customLabel: 'custom-option-label-key 2', value: '2', category: 'catégorie A' },
        { label: 'label 3', customLabel: 'custom-option-label-key 3', value: '3', category: 'catégorie A', disabled: true },
        { label: 'labelbis 4', customLabel: 'custom-option-label-key 4', value: '4', category: 'catégorie B' },
        { label: 'labelbis 5', customLabel: 'custom-option-label-key 5', value: '5', category: 'catégorie B' }
      ]);

      const filteredOptions = ref(OptionsWithSlot.value);

      const selectedOptionWithSlot = ref();
      const handleSelect = (payload: OptionType, option: any) => {
        console.log('payload', payload);
        // console.log(option);
        selectedOptionWithSlot.value === payload ? selectedOptionWithSlot.value = undefined : selectedOptionWithSlot.value = payload;
      };
      return { OptionsWithSlot, filteredOptions, openRef, selectedOptionWithSlot, handleSelect };
    },
    template: `
  <div class="min-h-[250px] flex flex-col space-y-2">
    <h4 class="puik-h4">
      Test select single-choice with slot and option-label-key
    </h4>
    <div class="puik-body-default">
      Selected option: {{ selectedOptionWithSlot }}
    </div>
    <puik-select
      id="single-with-slot"
      :key="selectedOptionWithSlot"
      v-model="selectedOptionWithSlot"
      label="Single-choice with slot"
      prepend-input-icon="label"
      :options="OptionsWithSlot"
      searchable
      option-label-key="customLabel"
      :open="openRef"
      @open="(state) => openRef = state"
      @search="(_, payload) => filteredOptions = payload"
    >
      <puik-group-options :open="openRef">
        <puik-option
          v-for="option in filteredOptions"
          :key="option.value"
          class="flex items-center space-x-1"
          :option="option"
          :label="option.customLabel"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOptionWithSlot === option"
          @select="(payload) => handleSelect(option, payload)"
          @open="(state) => openRef = state"
        >
          <PuikIcon icon="label" />
          <span>
            {{ option.customLabel }}
          </span>
        </puik-option>
      </puik-group-options>
    </puik-select>
  </div>
    `
  })
};
