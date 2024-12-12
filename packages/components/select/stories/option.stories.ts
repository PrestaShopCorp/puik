import { PuikSelect, PuikGroupOptions, PuikOption, OptionType, PuikIcon, PuikDivider } from '@prestashopcorp/puik-components';
import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

export default {
  title: 'Components/Select/Option',
  component: PuikOption
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
      <puik-group-options>
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
      <puik-group-options>
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

export const PrependExample: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikGroupOptions,
      PuikOption,
      PuikIcon
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
      id="select-prepend-id"
      name="select-prepend-name"
      label="Select an option"
      prepend-input-icon="label"
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options>
        <puik-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(option, payload)"
          @open="(state) => openRef = state"
          class="flex items-center space-x-1"
        >
          <PuikIcon icon="label" />
          <span>
            {{ option.label }}
          </span>
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
    // const openRef = ref(false);
    // const options = ref([
    //   { label: 'label 1', value: '1', category: 'catégorie A' },
    //   { label: 'label 2', value: '2', category: 'catégorie A' },
    //   { label: 'label 3', value: '3', category: 'catégorie A', disabled: true },
    //   { label: 'label 4', value: '4', category: 'catégorie B' },
    //   { label: 'label 5', value: '5', category: 'catégorie B' }
    // ]);
    // const selectedOption = ref();
    // const handleSelect = (payload: OptionType) => {
    //   selectedOption.value === payload ? selectedOption.value = undefined : selectedOption.value = payload;
    // };

    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-prepend-id"
      name="select-prepend-name"
      label="Select an option"
      prepend-input-icon="label"
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options>
        <puik-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(option, payload)"
          @open="(state) => openRef = state"
          class="flex items-center space-x-1"
        >
          <PuikIcon icon="label" />
          <span>
            {{ option.label }}
          </span>
        </puik-option>
      </puik-group-options>
    </puik-select>
        `,
        language: 'html'
      }
    }
  }
};

export const GroupByExample: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikGroupOptions,
      PuikOption,
      PuikIcon,
      PuikDivider
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
      id="select-prepend-id"
      name="select-prepend-name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options>
        <PuikDivider />
        <div class="px-2 py-1 puik-body-default-bold">Category A</div>
        <PuikDivider />        
        <template v-for="option in options">
          <puik-option
            v-if="option.category === 'catégorie A'"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :disabled="option.disabled"
            :is-selected="selectedOption === option"
            @select="(payload) => handleSelect(option, payload)"
            @open="(state) => openRef = state"
          >
           {{ option.label }}
          </puik-option>
        </template>
        <PuikDivider />
        <div class="px-2 py-1 puik-body-default-bold">Category B</div>
        <PuikDivider />
        <template v-for="option in options">
          <puik-option
            v-if="option.category === 'catégorie B'"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :disabled="option.disabled"
            :is-selected="selectedOption === option"
            @select="(payload) => handleSelect(option, payload)"
            @open="(state) => openRef = state"
          >
            {{ option.label }}
          </puik-option>
        </template>
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
    // const openRef = ref(false);
    // const options = ref([
    //   { label: 'label 1', value: '1', category: 'catégorie A' },
    //   { label: 'label 2', value: '2', category: 'catégorie A' },
    //   { label: 'label 3', value: '3', category: 'catégorie A', disabled: true },
    //   { label: 'label 4', value: '4', category: 'catégorie B' },
    //   { label: 'label 5', value: '5', category: 'catégorie B' }
    // ]);
    // const selectedOption = ref();
    // const handleSelect = (payload: OptionType) => {
    //   selectedOption.value === payload ? selectedOption.value = undefined : selectedOption.value = payload;
    // };

    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-prepend-id"
      name="select-prepend-name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options>
        <PuikDivider />
        <div class="px-2 py-1 puik-body-default-bold">Category A</div>
        <PuikDivider />        
        <template v-for="option in options">
          <puik-option
            v-if="option.category === 'catégorie A'"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :disabled="option.disabled"
            :is-selected="selectedOption === option"
            @select="(payload) => handleSelect(option, payload)"
            @open="(state) => openRef = state"
          >
           {{ option.label }}
          </puik-option>
        </template>
        <PuikDivider />
        <div class="px-2 py-1 puik-body-default-bold">Category B</div>
        <PuikDivider />
        <template v-for="option in options">
          <puik-option
            v-if="option.category === 'catégorie B'"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :disabled="option.disabled"
            :is-selected="selectedOption === option"
            @select="(payload) => handleSelect(option, payload)"
            @open="(state) => openRef = state"
          >
            {{ option.label }}
          </puik-option>
        </template>
      </puik-group-options>
    </puik-select>
        `,
        language: 'html'
      }
    }
  }
};

export const DefaultWithSearchExampleWithSearch: StoryObj = {
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
      const filteredOptions = ref(options.value);
      const selectedOption = ref();
      const handleSelect = (payload: OptionType) => {
        selectedOption.value === payload ? selectedOption.value = undefined : selectedOption.value = payload;
      };
      return { options, filteredOptions, openRef, selectedOption, handleSelect };
    },
    template: `
  <div class="min-h-[250px] flex flex-col space-y-2">
    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-default-with-search-id"
      name="select-default-with-search-name"
      label="Select an option"
      searchable
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
      @search="(_, payload) => filteredOptions = payload"
    >
      <puik-group-options>
        <puik-option
          v-for="option in filteredOptions"
          :key="option.value"
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
    // const openRef = ref(false);
    // const options = ref([
    //   { label: 'label 1', value: '1', category: 'catégorie A' },
    //   { label: 'label 2', value: '2', category: 'catégorie A' },
    //   { label: 'label 3', value: '3', category: 'catégorie A', disabled: true },
    //   { label: 'label 4', value: '4', category: 'catégorie B' },
    //   { label: 'label 5', value: '5', category: 'catégorie B' }
    // ]);
    // const filteredOptions = ref(options.value);
    // const selectedOption = ref();
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
      <puik-group-options>
        <puik-option
          v-for="option in options"
          :key="option.value"
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

export const CustomKeysExample: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikGroupOptions,
      PuikOption
    },
    setup() {
      const openRef = ref(false);
      const options = ref([
        { label: 'label 1', customLabelKey: 'custom-option-label-key 1', value: '1', customValueKey: 'custom-option-value-key 1', category: 'catégorie A' },
        { label: 'label 2', customLabelKey: 'custom-option-label-key 2', value: '2', customValueKey: 'custom-option-value-key 2', category: 'catégorie A' },
        { label: 'label 3', customLabelKey: 'custom-option-label-key 3', value: '3', customValueKey: 'custom-option-value-key 3', category: 'catégorie A', disabled: true, customDisabledKey: true },
        { label: 'label 4', customLabelKey: 'custom-option-label-key 4', value: '4', customValueKey: 'custom-option-value-key 4', category: 'catégorie B' },
        { label: 'label 5', customLabelKey: 'custom-option-label-key 5', value: '5', customValueKey: 'custom-option-value-key 5', category: 'catégorie B' }
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
      id="selected-with-custom-option-keys-id"
      name="selected-with-custom-option-keys-name"
      label="Select an option"
      :options="options"
      option-label-key="customLabelKey"
      option-value-key="customValueKey"
      option-disabled-key="customDisabledKey"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options>
        <puik-option
          v-for="option in options"
          :key="option.customValueKey"
          :label="option.customLabelKey"
          :value="option.customValueKey"
          :disabled="option.customDisabledKey"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(option, payload)"
          @open="(state) => openRef = state"
        >
          {{ option.customLabelKey }}
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
    // const options = ref([
    //   { label: 'label 1', customLabelKey: 'custom-option-label-key 1', value: '1', customValueKey: 'custom-option-value-key 1', category: 'catégorie A' },
    //   { label: 'label 2', customLabelKey: 'custom-option-label-key 2', value: '2', customValueKey: 'custom-option-value-key 2', category: 'catégorie A' },
    //   { label: 'label 3', customLabelKey: 'custom-option-label-key 3', value: '3', customValueKey: 'custom-option-value-key 3', category: 'catégorie A', disabled: true, customDisabledKey: true},
    //   { label: 'label 4', customLabelKey: 'custom-option-label-key 4', value: '4', customValueKey: 'custom-option-value-key 4', category: 'catégorie B' },
    //   { label: 'label 5', customLabelKey: 'custom-option-label-key 5', value: '5', customValueKey: 'custom-option-value-key 5', category: 'catégorie B' }
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
      id="selected-whit-slot-id"
      name="selected-whit-slot-name"
      label="Select with slot"
      :options="options"
      option-label-key="customLabelKey"
      option-value-key="customValueKey"
      option-disabled-key="customDisabledKey"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options>
        <puik-option
          v-for="option in options"
          :key="option.value"
          :label="option.customLabelKey"
          :value="option.customValueKey"
          :disabled="option.customDisabledKey"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(option, payload)"
          @open="(state) => openRef = state"
        >
          {{ option.customLabelKey }}
        </puik-option>
      </puik-group-options>
    </puik-select>
        `,
        language: 'html'
      }
    }
  }
};

export const CustomKeysWithSearchExample: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikGroupOptions,
      PuikOption
    },
    setup() {
      const openRef = ref(false);
      const options = ref([
        { label: 'label 1', customLabelKey: 'custom-option-label-key 1', value: '1', customValueKey: 'custom-option-value-key 1', category: 'catégorie A' },
        { label: 'label 2', customLabelKey: 'custom-option-label-key 2', value: '2', customValueKey: 'custom-option-value-key 2', category: 'catégorie A' },
        { label: 'label 3', customLabelKey: 'custom-option-label-key 3', value: '3', customValueKey: 'custom-option-value-key 3', category: 'catégorie A', disabled: true, customDisabledKey: true },
        { label: 'label 4', customLabelKey: 'custom-option-label-key 4', value: '4', customValueKey: 'custom-option-value-key 4', category: 'catégorie B' },
        { label: 'label 5', customLabelKey: 'custom-option-label-key 5', value: '5', customValueKey: 'custom-option-value-key 5', category: 'catégorie B' }
      ]);
      const filteredOptions = ref(options.value);
      const selectedOption = ref();
      const handleSelect = (payload: OptionType) => {
        selectedOption.value === payload ? selectedOption.value = undefined : selectedOption.value = payload;
      };
      return { options, filteredOptions, openRef, selectedOption, handleSelect };
    },
    template: `
  <div class="min-h-[250px] flex flex-col space-y-2">
    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="selected-with-custom-option-keys-id"
      name="selected-with-custom-option-keys-name"
      label="Select an option"
      searchable
      :options="options"
      option-label-key="customLabelKey"
      option-value-key="customValueKey"
      option-disabled-key="customDisabledKey"
      :open="openRef"
      @open="(state) => openRef = state"
      @search="(_, payload) => filteredOptions = payload"
    >
      <puik-group-options>
        <puik-option
          v-for="option in filteredOptions"
          :key="option.customValueKey"
          :label="option.customLabelKey"
          :value="option.customValueKey"
          :disabled="option.customDisabledKey"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(option, payload)"
          @open="(state) => openRef = state"
        >
          {{ option.customLabelKey }}
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
    // const openRef = ref(false);
    // const options = ref([
    //   { label: 'label 1', customLabelKey: 'custom-option-label-key 1', value: '1', customValueKey: 'custom-option-value-key 1', category: 'catégorie A' },
    //   { label: 'label 2', customLabelKey: 'custom-option-label-key 2', value: '2', customValueKey: 'custom-option-value-key 2', category: 'catégorie A' },
    //   { label: 'label 3', customLabelKey: 'custom-option-label-key 3', value: '3', customValueKey: 'custom-option-value-key 3', category: 'catégorie A', disabled: true, customDisabledKey: true },
    //   { label: 'label 4', customLabelKey: 'custom-option-label-key 4', value: '4', customValueKey: 'custom-option-value-key 4', category: 'catégorie B' },
    //   { label: 'label 5', customLabelKey: 'custom-option-label-key 5', value: '5', customValueKey: 'custom-option-value-key 5', category: 'catégorie B' }
    // ]);
    // const filteredOptions = ref(options.value);
    // const selectedOption = ref();
    // const handleSelect = (payload: OptionType) => {
    //   selectedOption.value === payload ? selectedOption.value = undefined : selectedOption.value = payload;
    // };

    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="selected-with-custom-option-keys-id"
      name="selected-with-custom-option-keys-name"
      label="Select an option"
      searchable
      :options="options"
      option-label-key="customLabelKey"
      option-value-key="customValueKey"
      option-disabled-key="customDisabledKey"
      :open="openRef"
      @open="(state) => openRef = state"
      @search="(_, payload) => filteredOptions = payload"
    >
      <puik-group-options>
        <puik-option
          v-for="option in filteredOptions"
          :key="option.customValueKey"
          :label="option.customLabelKey"
          :value="option.customValueKey"
          :disabled="option.customDisabledKey"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(option, payload)"
          @open="(state) => openRef = state"
        >
          {{ option.customLabelKey }}
        </puik-option>
      </puik-group-options>
    </puik-select>
        `,
        language: 'html'
      }
    }
  }
};

export const NumbersExample: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikGroupOptions,
      PuikOption
    },
    setup() {
      const openRef = ref(false);
      const options = ref(5);
      const selectedOption = ref();
      const handleSelect = (payload: OptionType) => {
        selectedOption.value !== payload.value
          ? selectedOption.value = payload.value
          : selectedOption.value = null;
      };
      return { options, openRef, selectedOption, handleSelect };
    },
    template: `
    <div class="min-h-[250px] flex flex-col space-y-2">
      <puik-select
        v-model="selectedOption"
        :key="selectedOption"
        id="selecte-numbers-id"
        name="selecte-numbers-name"
        label="Select an option"
        :open="openRef"
        @open="(state) => openRef = state"
      >
        <puik-group-options>
          <puik-option
            v-for="option in options"
            :key="option"
            :label="option"
            :value="option"
            :is-selected="selectedOption === option"
            @select="(payload) => handleSelect(payload)"
            @open="(state) => openRef = state"
          >
            {{ option }}
          </puik-option>
        </puik-group-options>
      </puik-select>
      <div class="puik-body-default">
        Selected option: {{ selectedOption }}
      </div>
    </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
    <!--VueJS Snippet-->
    // const openRef = ref(false);
    // const options = ref(5);
    // const selectedOption = ref();
    // const handleSelect = (payload: OptionType) => {
    //   selectedOption.value !== payload.value
    //     ? selectedOption.value = payload.value
    //     : selectedOption.value = null;
    // };

    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="selecte-numbers-id"
      name="selecte-numbers-name"
      label="Select an option"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options>
        <puik-option
          v-for="option in options"
          :key="option"
          :label="option"
          :value="option"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(payload)"
          @open="(state) => openRef = state"
        >
          {{ option }}
        </puik-option>
      </puik-group-options>
    </puik-select>
        `,
        language: 'html'
      }
    }
  }
};

export const StringsExample: StoryObj = {
  render: () => ({
    components: {
      PuikSelect,
      PuikGroupOptions,
      PuikOption
    },
    setup() {
      const openRef = ref(false);
      const options = ref([
        'option 1',
        'option 2',
        'option 3',
        'option 4',
        'option 5'
      ]);
      const selectedOption = ref();
      const handleSelect = (payload: OptionType) => {
        selectedOption.value !== payload.value
          ? selectedOption.value = payload.value
          : selectedOption.value = null;
      };
      return { options, openRef, selectedOption, handleSelect };
    },
    template: `
    <div class="min-h-[250px] flex flex-col space-y-2">
      <puik-select
        v-model="selectedOption"
        :key="selectedOption"
        id="select-strings-id"
        name="select-strings-name"
        label="Select an option"
        :open="openRef"
        @open="(state) => openRef = state"
      >
        <puik-group-options>
          <puik-option
            v-for="option in options"
            :key="option"
            :label="option"
            :value="option"
            :is-selected="selectedOption === option"
            @select="(payload) => handleSelect(payload)"
            @open="(state) => openRef = state"
          >
            {{ option }}
          </puik-option>
        </puik-group-options>
      </puik-select>
      <div class="puik-body-default">
        Selected option: {{ selectedOption }}
      </div>
    </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
    <!--VueJS Snippet-->
    // const openRef = ref(false);
    // const options = ref([
    //   'option 1',
    //   'option 2',
    //   'option 3',
    //   'option 4',
    //   'option 5'
    // ]);
    // const selectedOption = ref();
    // const handleSelect = (payload: OptionType) => {
    //   selectedOption.value !== payload.value
    //     ? selectedOption.value = payload.value
    //     : selectedOption.value = null;
    // };

    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-strings-id"
      name="select-strings-name"
      label="Select an option"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options>
        <puik-option
          v-for="option in options"
          :key="option"
          :label="option"
          :value="option"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(payload)"
          @open="(state) => openRef = state"
        >
          {{ option }}
        </puik-option>
      </puik-group-options>
    </puik-select>
        `,
        language: 'html'
      }
    }
  }
};

export const MultiSelectExample: StoryObj = {
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
      const selectedOptions = ref<OptionType[] | null>([]);
      const handleSelect = (option: OptionType) => {
        if (selectedOptions.value) {
          const index = selectedOptions.value.findIndex(
            (selectedOption: OptionType) => selectedOption.value === option.value
          );
          console.log(index);
          index !== -1 ? selectedOptions.value.splice(index, 1) : selectedOptions.value.push(option);
        }
      };
      return { options, openRef, selectedOptions, handleSelect };
    },
    template: `
  <div class="min-h-[300px] flex flex-col space-y-2">
    <puik-select
      v-model="selectedOptions"
      id="select-multi-id"
      name="select-multi-name"
      label="Select option(s)"
      multi-select
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <puik-group-options>
        <puik-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOptions?.includes(option)"
          multi-select
          @select="handleSelect(option)"
          @open="(state) => openRef = state"
        />
      </puik-group-options>
    </puik-select>
    <div class="puik-body-default">
      Selected option(s): <pre><code>{{ selectedOptions }}</code></pre>
    </div>
  </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
    <!--VueJS Snippet-->

        `,
        language: 'html'
      }
    }
  }
};
