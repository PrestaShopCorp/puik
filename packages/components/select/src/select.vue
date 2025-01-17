<template>
  <div
    v-on-click-outside="closeOptions"
    :class="[
      'puik-select',
      { 'puik-select--disabled': props.disabled }
    ]"
    :data-test="dataTest != undefined ? `select-${dataTest}` : undefined"
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
        :data-test="dataTest != undefined ? `select-label-${dataTest}` : undefined"
        @click="resetSearchQuery"
      >
        {{ props.label }}
      </puik-label>
      <template v-if="props.multiSelect && props.options">
        <button
          v-if="selectedMultipleOptions.length > 0"
          :id="props.id"
          :class="['puik-multi-select__options-tags']"
          :autocomplete="props.autocomplete"
          role="combobox"
          :aria-expanded="openRef"
          v-bind="openRef ? { 'aria-controls': `dropdown-${props.id}` } : {}"
          aria-haspopup="listbox"
          :value="JSON.stringify(selectedMultipleOptions)"
          :data-test="dataTest != undefined ? `select-multiple-options-tags-${dataTest}` : undefined"
          @click.stop="toggleOptions"
          @keydown.space.prevent.stop="toggleOptions"
          @keydown.enter.prevent.stop="toggleOptions"
        >
          <PuikIcon
            v-if="props.prependInputIcon"
            :is-disabled="props.disabled"
            :icon="props.prependInputIcon"
          />
          <PuikIcon
            class="puik-multi-select__dropdown-icon"
            :is-disabled="props.disabled"
            icon="unfold_more"
          />
          <puik-chip
            v-for="(option, index) in selectedMultipleOptions"
            :id="`chip-${option[props.optionLabelKey]}`"
            :key="option[props.optionValueKey]"
            :content="option[props.optionLabelKey]"
            :disabled="option[props.optionDisabledKey] || props.disabled"
            size="small"
            role="option"
            :aria-selected="true"
            :data-test="dataTest != undefined ? `select-tag-${index + 1}-${dataTest}` : undefined"
            @close="deselectOption(option)"
            @click.stop="openOptions"
            @keydown.space.stop="openOptions"
            @keydown.enter.stop="openOptions"
          />
        </button>
        <template v-else>
          <puik-input
            :id="props.id"
            :name="props.name ?? props.id"
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
            v-bind="openRef ? { 'aria-controls': `dropdown-${props.id}` } : {}"
            aria-haspopup="listbox"
            :data-test="dataTest != undefined ? `select-multiple-input-${dataTest}` : undefined"
            @click.stop="toggleOptions"
            @keydown.space.prevent.stop="toggleOptions"
            @keydown.enter.prevent.stop="toggleOptions"
          >
            <template
              v-if="props.prependInputIcon"
              #prepend
            >
              <PuikIcon
                :is-disabled="props.disabled"
                :icon="props.prependInputIcon"
              />
            </template>
            <template #append>
              <PuikIcon
                :is-disabled="props.disabled"
                icon="unfold_more"
              />
            </template>
          </puik-input>
          <input
            :id="`hidden-${props.id}`"
            type="hidden"
            :name="props.name ?? props.id"
            :value="JSON.stringify(selectedMultipleOptions)"
          >
        </template>
      </template>

      <puik-input
        v-else-if="props.options && typeof selectedSingleOption === 'object'"
        :id="props.id"
        v-model="selectedSingleOption[optionLabelKey]"
        :name="props.name ?? props.id"
        :class="[
          'puik-single-select__input',
          { 'puik-single-select__input--error': hasError }
        ]"
        type="text"
        :placeholder="props.placeholder ?? `${t('puik.select.placeholder')}`"
        readonly
        :autocomplete="props.autocomplete"
        :disabled="props.disabled"
        role="combobox"
        :aria-expanded="openRef"
        v-bind="openRef ? { 'aria-controls': `dropdown-${props.id}` } : {}"
        aria-haspopup="listbox"
        :data-test="dataTest != undefined ? `select-single-${dataTest}` : undefined"
        @click.stop="toggleOptions"
        @keydown.space.prevent.stop="toggleOptions"
        @keydown.enter.prevent.stop="toggleOptions"
      >
        <template
          v-if="props.prependInputIcon"
          #prepend
        >
          <PuikIcon
            :is-disabled="props.disabled"
            :icon="props.prependInputIcon"
          />
        </template>
        <template #append>
          <PuikIcon
            :is-disabled="props.disabled"
            icon="unfold_more"
          />
        </template>
      </puik-input>

      <puik-input
        v-else
        :id="props.id"
        v-model="selectedSingleOption"
        :name="props.name ?? props.id"
        :class="[
          'puik-single-select__input',
          { 'puik-single-select__input--error': hasError }
        ]"
        type="text"
        :placeholder="props.placeholder ?? `${t('puik.select.placeholder')}`"
        readonly
        :autocomplete="props.autocomplete"
        :disabled="props.disabled"
        role="combobox"
        :aria-expanded="openRef"
        v-bind="openRef ? { 'aria-controls': `dropdown-${props.id}` } : {}"
        :data-test="dataTest != undefined ? `select-single-${dataTest}` : undefined"
        aria-haspopup="listbox"
        @click.stop="toggleOptions"
        @keydown.space.prevent.stop="toggleOptions"
        @keydown.enter.prevent.stop="toggleOptions"
      >
        <template
          v-if="props.prependInputIcon"
          #prepend
        >
          <PuikIcon
            :is-disabled="props.disabled"
            :icon="props.prependInputIcon"
          />
        </template>
        <template #append>
          <PuikIcon
            :is-disabled="props.disabled"
            icon="unfold_more"
          />
        </template>
      </puik-input>

      <div
        v-show="openRef"
        :id="`dropdown-${props.id}`"
        :style="{ 'z-index': props.zIndex }"
        :class="[
          'puik-select-dropdown',
          { 'puik-select-dropdown--up': positionDropdownUp }
        ]"
        role="listbox"
        :aria-multiselectable="props.multiSelect"
        :data-test="dataTest != undefined ? `select-dropdown-${dataTest}` : undefined"
        @keydown.tab="closeOptions"
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
          :disabled="props.disabled"
          :data-test="dataTest != undefined ? `select-search-input-${dataTest}` : undefined"
          @input="searchOptions"
        >
          <template #prepend>
            <PuikIcon
              :is-disabled="props.disabled"
              icon="search"
            />
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
          :disabled="props.disabled"
          role="checkbox"
          :aria-checked="IsAllSelectedRef"
          tabindex="0"
          @change="handleSelectAllClick"
          @keydown.enter.prevent="toggleSelectAll"
          @keydown.space.prevent="toggleSelectAll"
        />

        <slot>
          <puik-option
            v-for="(option, index) in filteredOptions"
            :key="option[props.optionValueKey]"
            :label="option[props.optionLabelKey]"
            :value="option[props.optionValueKey]"
            :is-selected="
              props.multiSelect
                ? selectedMultipleOptions.includes(option)
                : selectedSingleOption === option
            "
            :option="option"
            :disabled="option[props.optionDisabledKey] || props.disabled"
            :multi-select="props.multiSelect"
            :data-test="dataTest != undefined ? `select-option-${index + 1}-${dataTest}` : undefined"
            @select="selectOption(option)"
            @close="closeOptions"
          />
          <div
            v-if="!filteredOptions?.length"
            class="puik-select__no-results"
          >
            {{ props.noMatchText ?? `${t('puik.select.noResults')}` }}
          </div>
        </slot>
      </div>
    </div>
    <div
      v-if="hasError"
      class="puik-select__error"
      :data-test="dataTest != undefined ? `select-error-${dataTest}` : undefined"
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
import { ref, computed, watch, useSlots, nextTick } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import { useLocale } from '@prestashopcorp/puik-locale';
import {
  PuikCheckbox,
  PuikChip,
  PuikIcon,
  PuikInput,
  PuikOption,
  PuikLabel
} from '@prestashopcorp/puik-components';
import type { OptionType } from './option';
import type { SelectProps, SelectEmits } from './select';
import { slotIsEmpty } from '@prestashopcorp/puik-utils/types';
import { isDropdownBelowViewport } from '@prestashopcorp/puik-utils';

defineOptions({
  name: 'PuikSelect'
});

const slots = useSlots();
const { t } = useLocale();

const props = withDefaults(defineProps<SelectProps>(), {
  required: false,
  optional: false,
  optionLabelKey: 'label',
  optionValueKey: 'value',
  optionDisabledKey: 'disabled',
  multiSelect: false,
  open: false,
  autocomplete: 'off',
  zIndex: 10
});

const emit = defineEmits<SelectEmits>();

const hasError = computed(() => props.error || slotIsEmpty(slots.error));

const selectedMultipleOptions = ref(
  Array.isArray(props.modelValue) ? [...props.modelValue] : []
);
const selectedSingleOption = ref(props.modelValue);
const openRef = ref(props.open);
const searchQuery = ref('');
const selectAllIndeterminate = ref(false);
const positionDropdownUp = ref(false);

const handleDropdownPosition = () => {
  nextTick(() => {
    const selectElement = document.querySelector(`#${props.id}`);
    const dropdownElement = document.querySelector(`#dropdown-${props.id}`);
    if (dropdownElement && selectElement && openRef.value) {
      isDropdownBelowViewport(selectElement, dropdownElement) ? positionDropdownUp.value = true : positionDropdownUp.value = false;
    }
  });
};

const filteredOptions = computed(() => {
  if (props.customFilterMethod) {
    return props.customFilterMethod(searchQuery.value);
  } else if (props.options) {
    const query = searchQuery.value.toLowerCase();
    return props.options.filter((option) => {
      const label = option?.[props.optionLabelKey]?.toLowerCase();
      return label && query.split('').every(char => label.includes(char));
    });
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

const updateSelectAllIndeterminate = (optionsState: any) => {
  if (props.options && Array.isArray(optionsState)) {
    const enabledOptionsCount = props.options.filter(
      (option: any) => !option[props.optionDisabledKey]
    ).length;
    const selectedEnabledOptionsCount = optionsState.filter(
      (option: any) => !option[props.optionDisabledKey]
    ).length;
    selectAllIndeterminate.value =
      selectedEnabledOptionsCount > 0 &&
      selectedEnabledOptionsCount < enabledOptionsCount;
    IsAllSelectedRef.value =
      selectedEnabledOptionsCount === enabledOptionsCount;
  }
};

const toggleSelectAll = () => {
  if (props.options) {
    const disabledOptions = selectedMultipleOptions.value?.filter(
      (option: OptionType) => {
        return option[props.optionDisabledKey];
      }
    );
    const enabledOptions = props.options.filter(
      (option: OptionType) => !option[props.optionDisabledKey]
    );
    if (!IsAllSelectedRef.value) {
      selectedMultipleOptions.value = [...enabledOptions, ...disabledOptions];
    } else {
      selectedMultipleOptions.value = [...disabledOptions];
    }
    updateSelectAllIndeterminate(selectedMultipleOptions.value);
    emit('update:modelValue', selectedMultipleOptions.value);
  }
};

const handleSelectAllClick = () => {
  IsAllSelectedRef.value = !IsAllSelectedRef.value;
  toggleSelectAll();
};

const toggleOptions = () => {
  if (props.disabled) return;
  openRef.value = !openRef.value;
  emit('open', openRef.value);
  resetSearchQuery();
  handleDropdownPosition();
};
const openOptions = () => {
  if (props.disabled) return;
  openRef.value = true;
  emit('open', true);
  resetSearchQuery();
  handleDropdownPosition();
};
const closeOptions = () => {
  if (props.disabled) return;
  openRef.value = false;
  emit('open', false);
  resetSearchQuery();
  handleDropdownPosition();
};

const selectOption = (option: OptionType) => {
  if (!option[props.optionDisabledKey] || !props.disabled) {
    if (props.multiSelect) {
      if (selectedMultipleOptions.value.includes(option)) {
        selectedMultipleOptions.value = selectedMultipleOptions.value.filter(
          (opt) => opt !== option
        );
      } else {
        selectedMultipleOptions.value.push(option);
      }
      updateSelectAllIndeterminate(selectedMultipleOptions.value);
      emit('update:modelValue', selectedMultipleOptions.value);
    } else {
      toggleOptions();
      selectedSingleOption.value !== option
        ? (selectedSingleOption.value = option)
        : (selectedSingleOption.value = {});
      emit('update:modelValue', selectedSingleOption.value);
    }
  }
};

const deselectOption = (option: OptionType) => {
  if (props.disabled) return;
  selectedMultipleOptions.value = selectedMultipleOptions.value.filter(
    (opt) => opt !== option
  );
  updateSelectAllIndeterminate(selectedMultipleOptions.value);
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
    updateSelectAllIndeterminate(newValue);
  }
);
watch(
  () => props.open,
  (newValue) => {
    console.log('watch open prop');
    openRef.value = newValue;
  }
);

updateSelectAllIndeterminate(selectedMultipleOptions.value);
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-select.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
@use '@prestashopcorp/puik-theme/src/puik-checkbox.scss';
@use '@prestashopcorp/puik-theme/src/puik-chip.scss';
@use '@prestashopcorp/puik-theme/src/puik-input.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
@use '@prestashopcorp/puik-theme/src/puik-label.scss';
</style>
