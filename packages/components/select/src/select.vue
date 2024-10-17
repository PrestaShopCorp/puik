<template>
  <div
    v-on-click-outside="closeOptions"
    class="puik-select"
  >
    <div class="puik-select__container">
      <template v-if="props.multiSelect">
        <div
          v-if="selectedOptions.length > 0 "
          class="puik-select__chip-container"
          tabindex="0"
          @click.stop="toggleOptions"
        >
          <PuikIcon
            class="puik-select__drop-icon"
            icon="unfold_more"
          />
          <puik-chip
            v-for="option in selectedOptions"
            :id="`chip-${option[props.optionLabelKey]}`"
            :key="option[props.optionValueKey]"
            :content="option[props.optionLabelKey]"
            :disabled="option[props.optionDisabledKey]"
            size="small"
            @close="deselectOption(option)"
            @click.stop="openOptions"
          />
        </div>
        <puik-input
          v-else
          class="puik-select__multiple-input"
          type="text"
          :placeholder="props.placeholder ?? defaultPlaceholder"
          readonly
          @click.stop="toggleOptions"
        >
          <template #append>
            <PuikIcon icon="unfold_more" />
          </template>
        </puik-input>
      </template>
      <puikInput
        v-else
        v-model="selectedSingleOption"
        type="text"
        :placeholder="props.placeholder ?? defaultPlaceholder"
        readonly
        @click.stop="toggleOptions"
      />
      <div
        v-if="showOptions"
        class="puik-select__options-container"
      >
        <puik-input
          v-if="searchable"
          v-model="searchQuery"
          class="puik-select__search-input"
          type="text"
          :placeholder="props.searchPlaceholder ?? defaultSearchPlaceholder"
          @input="searchOptions"
        >
          <template #prepend>
            <PuikIcon icon="search" />
          </template>
        </puik-input>
        <PuikCheckbox
          v-if="multiSelect"
          v-model="IsAllSelectedRef"
          class="puik-select__select-all"
          :label="IsAllSelectedRef ? `${t('puik.select.deselectAll')}` : `${t('puik.select.selectAll')}`"
          :indeterminate="selectAllIndeterminate"
          @change="toggleSelectAll"
        />
        <puik-option
          v-for="option in filteredOptions"
          :key="option[props.optionValueKey]"
          :label-key="props.optionLabelKey"
          :value-key="props.optionValueKey"
          :is-selected="selectedOptions.includes(option)"
          :option="option"
          :disabled="option[props.optionDisabledKey]"
          :multi-select="props.multiSelect"
          @select="selectOption(option)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import { useLocale } from '@prestashopcorp/puik-locale';
import { PuikCheckbox, PuikChip, PuikIcon, PuikInput, PuikOption } from '@prestashopcorp/puik-components';
import type { OptionType } from './option';
import type { SelectProps } from './select';

defineOptions({
  name: 'PuikSelect'
});

const { t } = useLocale();
const defaultPlaceholder = t('puik.select.placeholder');
const defaultSearchPlaceholder = t('puik.select.searchPlaceholder');

const props = withDefaults(defineProps<SelectProps>(), {
  optionLabelKey: 'label',
  optionValueKey: 'value',
  optionDisabledKey: 'disabled',
  multiSelect: false
});

const emit = defineEmits(['update:modelValue', 'search']);
const selectedOptions = ref(props.modelValue ? [...props.modelValue] : []);
const showOptions = ref(false);
const searchQuery = ref('');
const selectAllIndeterminate = ref(false);

const selectedSingleOption = computed(() => {
  return selectedOptions.value.length > 0 ? selectedOptions.value[0].label : '';
});
const filteredOptions = computed(() => {
  if (props.options) {
    return props.options.filter((option: { label: string | string[]; }) => option.label.includes(searchQuery.value));
  } else {
    return [];
  }
});

const isAllSelected = computed(() => {
  return props.options.length === props.options.filter((option: { [x: string]: any; }) => !option[props.optionDisabledKey]).length;
});
const IsAllSelectedRef = ref(isAllSelected.value);

const updateSelectAllIndeterminate = () => {
  const enabledOptionsCount = props.options.filter((option: { [x: string]: any; }) => !option[props.optionDisabledKey]).length;
  const selectedEnabledOptionsCount = selectedOptions.value.filter(option => !option[props.optionDisabledKey]).length;

  selectAllIndeterminate.value = selectedEnabledOptionsCount > 0 && selectedEnabledOptionsCount < enabledOptionsCount;
  IsAllSelectedRef.value = selectedEnabledOptionsCount === enabledOptionsCount;
};
const toggleSelectAll = () => {
  if (!IsAllSelectedRef.value) {
    selectedOptions.value = selectedOptions.value.filter(option => option[props.optionDisabledKey]);
  } else {
    const disabledSelected = selectedOptions.value.filter(option => option[props.optionDisabledKey]);
    const enabledOptions = props.options.filter((option: { [x: string]: any; }) => !option[props.optionDisabledKey]);
    selectedOptions.value = [...disabledSelected, ...enabledOptions];
  }
  updateSelectAllIndeterminate();
  emit('update:modelValue', selectedOptions.value);
};

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};
const openOptions = () => {
  showOptions.value = true;
};
const closeOptions = () => {
  showOptions.value = false;
};

const selectOption = (option: any) => {
  if (!option[props.optionDisabledKey]) {
    if (props.multiSelect) {
      if (selectedOptions.value.includes(option)) {
        selectedOptions.value = selectedOptions.value.filter(opt => opt !== option);
      } else {
        selectedOptions.value.push(option);
      }
      updateSelectAllIndeterminate();
    } else {
      selectedOptions.value = [option];
      showOptions.value = false;
    }
    emit('update:modelValue', selectedOptions.value);
  }
};
const deselectOption = (option: OptionType) => {
  selectedOptions.value = selectedOptions.value.filter(opt => opt !== option);
  updateSelectAllIndeterminate();
  emit('update:modelValue', selectedOptions.value);
};

const searchOptions = () => {
  emit('search', searchQuery.value);
};

watch(isAllSelected, (newValue) => {
  IsAllSelectedRef.value = newValue;
});

updateSelectAllIndeterminate();
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-select.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
@use '@prestashopcorp/puik-theme/src/puik-checkbox.scss';
@use '@prestashopcorp/puik-theme/src/puik-chip.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
@use '@prestashopcorp/puik-theme/src/puik-input.scss';
</style>
