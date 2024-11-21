<template>
  <div
    v-on-click-outside="closeOptions"
    class="puik-select"
    @keydown.esc="closeOptions"
    @keydown.up.prevent.stop="handleKeyDown"
    @keydown.down.prevent.stop="handleKeyDown"
  >
    <div
      :class="[
        'puik-select__container',
        { 'puik-select__container--error': hasError }
      ]"
    >
      <puik-label
        v-if="props.id && props.label"
        class="puik-select__label"
        :for="props.id"
        :required="props.required"
        :optional="props.optional"
        :readonly="props.disabled"
        @click="resetSearchQuery"
      >
        {{ props.label }}
      </puik-label>
      <template v-if="props.multiSelect">
        <button
          v-if="selectedMultipleOptions.length > 0"
          :id="props.id"
          :class="['puik-multi-select__options-tags']"
          tabindex="0"
          :autocomplete="props.autocomplete"
          role="combobox"
          :aria-expanded="openRef"
          :aria-controls="`dropdown-${props.id}`"
          aria-haspopup="listbox"
          :value="JSON.stringify(selectedMultipleOptions)"
          @click.stop="toggleOptions"
          @keydown.space.prevent.stop="toggleOptions"
          @keydown.enter.prevent.stop="toggleOptions"
        >
          <PuikIcon
            class="puik-multi-select__dropdown-icon"
            icon="unfold_more"
          />
          <puik-chip
            v-for="option in selectedMultipleOptions"
            :id="`chip-${option[props.optionLabelKey]}`"
            :key="option[props.optionValueKey]"
            :content="option[props.optionLabelKey]"
            :disabled="option[props.optionDisabledKey]"
            size="small"
            role="option"
            :aria-selected="true"
            @close="deselectOption(option)"
            @click.stop="openOptions"
            @keydown.space.stop="openRef = true"
            @keydown.enter.stop="openRef = true;"
          />
        </button>
        <template v-else>
          <puik-input
            :id="props.id"
            :class="[
              'puik-multi-select__input',
              { 'puik-multi-select__input--error': hasError }
            ]"
            type="text"
            :placeholder="
              props.placeholder ?? `${t('puik.select.placeholder')}`
            "
            readonly
            :autocomplete="props.autocomplete"
            :disabled="props.disabled"
            role="combobox"
            :aria-expanded="openRef"
            :aria-controls="`dropdown-${props.id}`"
            aria-haspopup="listbox"
            @click.stop="toggleOptions"
            @keydown.space.prevent.stop="toggleOptions"
            @keydown.enter.prevent.stop="toggleOptions"
          >
            <template #append>
              <PuikIcon icon="unfold_more" />
            </template>
          </puik-input>
          <input
            :id="props.id"
            type="hidden"
            :name="props.id"
            :value="JSON.stringify(selectedMultipleOptions)"
          >
        </template>
      </template>

      <puik-input
        v-else
        :id="props.id"
        v-model="selectedSingleOption[props.optionLabelKey]"
        :class="[
          'puik-single-select__input',
          { 'puik-single-select__input--error': hasError }
        ]"
        type="text"
        :placeholder="props.placeholder ?? `${t('puik.select.placeholder')}`"
        readonly
        :disabled="props.disabled"
        role="combobox"
        :aria-expanded="openRef"
        :aria-controls="`dropdown-${props.id}`"
        aria-haspopup="listbox"
        @click.stop="toggleOptions"
        @keydown.space.prevent.stop="toggleOptions"
        @keydown.enter.prevent.stop="toggleOptions"
      >
        <template #append>
          <PuikIcon icon="unfold_more" />
        </template>
      </puik-input>

      <div
        v-show="openRef"
        :id="`dropdown-${props.id}`"
        class="puik-select-dropdown"
        role="listbox"
        :aria-multiselectable="props.multiSelect"
      >
        <puik-input
          v-if="searchable"
          v-model="searchQuery"
          class="puik-select-dropdown__search-input"
          type="text"
          :placeholder="
            props.searchPlaceholder ?? `${t('puik.select.searchPlaceholder')}`
          "
          role="searchbox"
          @input="searchOptions"
        >
          <template #prepend>
            <PuikIcon icon="search" />
          </template>
        </puik-input>
        <PuikCheckbox
          v-if="props.multiSelect && typeof IsAllSelectedRef === 'boolean'"
          v-model="IsAllSelectedRef"
          class="puik-option puik-select-dropdown__select-all"
          :label="
            IsAllSelectedRef
              ? `${t('puik.select.deselectAll')}`
              : `${t('puik.select.selectAll')}`
          "
          :indeterminate="selectAllIndeterminate"
          role="checkbox"
          :aria-checked="IsAllSelectedRef"
          tabindex="0"
          @change="handleSelectAllClick"
          @keydown.enter.prevent="toggleSelectAll"
          @keydown.space.prevent="toggleSelectAll"
        />
        <slot>
          <puik-group-options
            :open="openRef"
          >
            <puik-option
              v-for="option in filteredOptions"
              :key="option[props.optionValueKey]"
              :label-key="props.optionLabelKey"
              :value-key="props.optionValueKey"
              :is-selected="
                props.multiSelect
                  ? selectedMultipleOptions.includes(option)
                  : selectedSingleOption === option
              "
              :option="option"
              :disabled="option[props.optionDisabledKey]"
              :multi-select="props.multiSelect"
              @select="selectOption(option)"
              @close="closeOptions"
            />
          </puik-group-options>
        </slot>
      </div>
    </div>
    <div
      v-if="hasError"
      class="puik-select__error"
    >
      <puik-icon
        icon="error"
        font-size="1.25rem"
        class="puik-select__error__icon"
      />
      <span class="puik-select__error__text">
        <slot name="error">{{ error }}</slot>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, useSlots } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import { useLocale } from '@prestashopcorp/puik-locale';
import {
  PuikCheckbox,
  PuikChip,
  PuikIcon,
  PuikInput,
  PuikGroupOptions,
  PuikOption,
  PuikLabel
} from '@prestashopcorp/puik-components';
import type { OptionType } from './option';
import type { SelectProps, SelectEmits } from './select';
import { slotIsEmpty } from '@prestashopcorp/puik-utils/types';

defineOptions({
  name: 'PuikSelect'
});

const slots = useSlots();
const { t } = useLocale();

const props = withDefaults(defineProps<SelectProps>(), {
  required: false,
  optional: false,
  readonly: false,
  optionLabelKey: 'label',
  optionValueKey: 'value',
  optionDisabledKey: 'disabled',
  multiSelect: false,
  open: false
});

const emit = defineEmits<SelectEmits>();

const hasError = computed(() => props.error || slotIsEmpty(slots.error));

const selectedMultipleOptions = ref(
  Array.isArray(props.modelValue) ? [...props.modelValue] : []
);
const selectedSingleOption = ref(props.modelValue ?? {});
const openRef = ref(props.open);
const searchQuery = ref('');
const selectAllIndeterminate = ref(false);

const filteredOptions = computed(() => {
  if (props.customFilterMethod) {
    return props.customFilterMethod(searchQuery.value);
  } else if (props.options) {
    return props.options.filter((option) =>
      option?.[props.optionLabelKey].trim().includes(searchQuery.value)
    );
  } else {
    return null;
  }
});

const searchOptions = () => {
  emit('search', searchQuery.value, filteredOptions.value);
};
const resetSearchQuery = () => {
  searchQuery.value = '';
  emit('search', '', props.options);
};

const isAllSelected = computed(() => {
  if (props.options) {
    return (
      props.options.length ===
      props.options.filter(
        (option: OptionType) => !option[props.optionDisabledKey]
      ).length
    );
  } else {
    return null;
  }
});

const IsAllSelectedRef = ref(isAllSelected.value);

const updateSelectAllIndeterminate = () => {
  if (props.options) {
    const enabledOptionsCount = props.options.filter(
      (option: OptionType) => !option[props.optionDisabledKey]
    ).length;
    const selectedEnabledOptionsCount = selectedMultipleOptions.value.filter(
      (option) => !option[props.optionDisabledKey]
    ).length;
    selectAllIndeterminate.value =
      selectedEnabledOptionsCount > 0 &&
      selectedEnabledOptionsCount < enabledOptionsCount;
    IsAllSelectedRef.value =
      selectedEnabledOptionsCount === enabledOptionsCount;
  }
};

// const toggleSelectAll = () => {
//   if (props.options) {
//     if (!IsAllSelectedRef.value) {
//       selectedMultipleOptions.value = selectedMultipleOptions.value.filter(
//         (option) => option[props.optionDisabledKey]
//       );
//     } else {
//       const disabledSelected = selectedMultipleOptions.value.filter(
//         (option) => option[props.optionDisabledKey]
//       );
//       const enabledOptions = props.options.filter(
//         (option: OptionType) => !option[props.optionDisabledKey]
//       );
//       selectedMultipleOptions.value = [...disabledSelected, ...enabledOptions];
//     }
//     updateSelectAllIndeterminate();
//     emit('update:modelValue', selectedMultipleOptions.value);
//   }
// };

const toggleSelectAll = () => {
  if (!IsAllSelectedRef.value) {
    selectedMultipleOptions.value = props.options.filter(
      (option: OptionType) => !option[props.optionDisabledKey]
    );
  } else {
    selectedMultipleOptions.value = selectedMultipleOptions.value.filter(
      (option) => option[props.optionDisabledKey]
    );
  }
  updateSelectAllIndeterminate();
  emit('update:modelValue', selectedMultipleOptions.value);
};

const handleSelectAllClick = () => {
  IsAllSelectedRef.value = !IsAllSelectedRef.value;
  toggleSelectAll();
};

const toggleOptions = () => {
  emit('open', !props.open);
  openRef.value = !openRef.value;
  resetSearchQuery();
};
const openOptions = () => {
  emit('open', true);
  openRef.value = true;
  resetSearchQuery();
};
const closeOptions = () => {
  emit('open', false);
  openRef.value = false;
  resetSearchQuery();
};

const selectOption = (option: OptionType) => {
  if (!option[props.optionDisabledKey]) {
    if (props.multiSelect) {
      if (selectedMultipleOptions.value.includes(option)) {
        selectedMultipleOptions.value = selectedMultipleOptions.value.filter(
          (opt) => opt !== option
        );
      } else {
        selectedMultipleOptions.value.push(option);
      }
      updateSelectAllIndeterminate();
      emit('update:modelValue', selectedMultipleOptions.value);
    } else {
      selectedSingleOption.value !== option
        ? (selectedSingleOption.value = option)
        : (selectedSingleOption.value = {});
      emit('update:modelValue', selectedSingleOption.value);
    }
  }
};

const deselectOption = (option: OptionType) => {
  selectedMultipleOptions.value = selectedMultipleOptions.value.filter(
    (opt) => opt !== option
  );
  updateSelectAllIndeterminate();
  emit('update:modelValue', selectedMultipleOptions.value);
};

const activeIndex = ref(-1);

const handleKeyDown = (event: KeyboardEvent) => {
  const options = document.querySelectorAll(`#dropdown-${props.id} .puik-option:not(.puik-option--disabled)`);
  const activeElement = document.activeElement as HTMLElement;
  activeIndex.value = Array.from(options).indexOf(activeElement);

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    activeIndex.value = (activeIndex.value + 1) % options.length;
    (options[activeIndex.value] as HTMLElement).focus();
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    activeIndex.value = (activeIndex.value - 1 + options.length) % options.length;
    (options[activeIndex.value] as HTMLElement).focus();
  }
};

watch(isAllSelected, (newValue) => {
  IsAllSelectedRef.value = newValue;
});
watch(
  () => props.modelValue,
  (newValue) => {
    selectedSingleOption.value = newValue;
  }
);
watch(
  () => props.open,
  (newValue) => {
    openRef.value = newValue;
  }
);

updateSelectAllIndeterminate();
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-select.scss';
@use '@prestashopcorp/puik-theme/src/puik-group-options.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
@use '@prestashopcorp/puik-theme/src/puik-checkbox.scss';
@use '@prestashopcorp/puik-theme/src/puik-chip.scss';
@use '@prestashopcorp/puik-theme/src/puik-input.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
@use '@prestashopcorp/puik-theme/src/puik-label.scss';
</style>
