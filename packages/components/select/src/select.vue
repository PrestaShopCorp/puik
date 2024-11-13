<template>
  <div
    v-on-click-outside="closeOptions"
    class="puik-select"
  >
    <div class="puik-select__container">
      <template v-if="props.multiSelect">
        <div
          v-if="selectedMultipleOptions.length > 0 "
          class="puik-multi-select__options-tags"
          tabindex="0"
          @click.stop="toggleOptions"
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
            @close="deselectOption(option)"
            @click.stop="openOptions"
          />
        </div>
        <puik-input
          v-else
          class="puik-multi-select__input"
          type="text"
          :placeholder="props.placeholder ?? `${t('puik.select.placeholder')}`"
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
        v-model="selectedSingleOption[props.optionLabelKey]"
        class="puik-single-select__input"
        type="text"
        :placeholder="props.placeholder ?? `${t('puik.select.placeholder')}`"
        readonly
        @click.stop="toggleOptions"
      >
        <template #append>
          <PuikIcon icon="unfold_more" />
        </template>
      </puikInput>

      <div
        v-show="openRef"
        class="puik-select-dropdown"
      >
        <puik-input
          v-if="searchable"
          v-model="searchQuery"
          class="puik-select-dropdown__search-input"
          type="text"
          :placeholder="props.searchPlaceholder ?? `${t('puik.select.searchPlaceholder')}`"
          @input="searchOptions"
        >
          <template #prepend>
            <PuikIcon icon="search" />
          </template>
        </puik-input>
        <PuikCheckbox
          v-if="multiSelect && typeof IsAllSelectedRef === 'boolean' "
          v-model="IsAllSelectedRef"
          class="puik-select-dropdown__select-all"
          :label="IsAllSelectedRef ? `${t('puik.select.deselectAll')}` : `${t('puik.select.selectAll')}`"
          :indeterminate="selectAllIndeterminate"
          @change="toggleSelectAll"
        />
        <slot>
          <puik-group-options>
            <puik-option
              v-for="option in filteredOptions"
              :key="option[props.optionValueKey]"
              :label-key="props.optionLabelKey"
              :value-key="props.optionValueKey"
              :is-selected="props.multiSelect ? selectedMultipleOptions.includes(option) : selectedSingleOption === option ? true : false"
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import { useLocale } from '@prestashopcorp/puik-locale';
import { PuikCheckbox, PuikChip, PuikIcon, PuikInput, PuikGroupOptions, PuikOption } from '@prestashopcorp/puik-components';
import type { OptionType } from './option';
import type { SelectProps, SelectEmits } from './select';

defineOptions({
  name: 'PuikSelect'
});

const { t } = useLocale();

const props = withDefaults(defineProps<SelectProps>(), {
  optionLabelKey: 'label',
  optionValueKey: 'value',
  optionDisabledKey: 'disabled',
  multiSelect: false,
  open: false
});

const emit = defineEmits<SelectEmits>();

const selectedMultipleOptions = ref(Array.isArray(props.modelValue) ? [...props.modelValue] : []);
const selectedSingleOption = ref(props.modelValue ?? {});
const openRef = ref(props.open);
const searchQuery = ref('');
const selectAllIndeterminate = ref(false);

const filteredOptions = computed(() => {
  if (props.options) {
    return props.options.filter((option) => option.label.includes(searchQuery.value));
  } else {
    return null;
  }
});

const isAllSelected = computed(() => {
  if (props.options) {
    return props.options.length === props.options.filter((option: OptionType) => !option[props.optionDisabledKey]).length;
  } else {
    return null;
  }
});
const IsAllSelectedRef = ref(isAllSelected.value);

const updateSelectAllIndeterminate = () => {
  if (props.options) {
    const enabledOptionsCount = props.options.filter((option: OptionType) => !option[props.optionDisabledKey]).length;
    const selectedEnabledOptionsCount = selectedMultipleOptions.value.filter(option => !option[props.optionDisabledKey]).length;
    selectAllIndeterminate.value = selectedEnabledOptionsCount > 0 && selectedEnabledOptionsCount < enabledOptionsCount;
    IsAllSelectedRef.value = selectedEnabledOptionsCount === enabledOptionsCount;
  }
};
const toggleSelectAll = () => {
  if (props.options) {
    if (!IsAllSelectedRef.value) {
      selectedMultipleOptions.value = selectedMultipleOptions.value.filter(option => option[props.optionDisabledKey]);
    } else {
      const disabledSelected = selectedMultipleOptions.value.filter(option => option[props.optionDisabledKey]);
      const enabledOptions = props.options.filter((option: OptionType) => !option[props.optionDisabledKey]);
      selectedMultipleOptions.value = [...disabledSelected, ...enabledOptions];
    }
    updateSelectAllIndeterminate();
    emit('update:modelValue', selectedMultipleOptions.value);
  }
};

const toggleOptions = () => {
  emit('open', !props.open);
  openRef.value = !openRef.value;
};
const openOptions = () => {
  emit('open', true);
  openRef.value = true;
};
const closeOptions = () => {
  emit('open', false);
  openRef.value = false;
};

const selectOption = (option: OptionType) => {
  if (!option[props.optionDisabledKey]) {
    if (props.multiSelect) {
      if (selectedMultipleOptions.value.includes(option)) {
        selectedMultipleOptions.value = selectedMultipleOptions.value.filter(opt => opt !== option);
      } else {
        selectedMultipleOptions.value.push(option);
      }
      updateSelectAllIndeterminate();
      emit('update:modelValue', selectedMultipleOptions.value);
    } else {
      selectedSingleOption.value = option;
      emit('update:modelValue', selectedSingleOption.value);
    }
  }
};
const deselectOption = (option: OptionType) => {
  selectedMultipleOptions.value = selectedMultipleOptions.value.filter(opt => opt !== option);
  updateSelectAllIndeterminate();
  emit('update:modelValue', selectedMultipleOptions.value);
};

const searchOptions = () => {
  emit('search', searchQuery.value);
};

watch(isAllSelected, (newValue) => {
  IsAllSelectedRef.value = newValue;
});

watch(() => props.modelValue, (newValue) => {
  selectedSingleOption.value = newValue;
});

watch(() => props.open, (newValue) => {
  openRef.value = newValue;
});

updateSelectAllIndeterminate();
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-select.scss';
@use '@prestashopcorp/puik-theme/src/puik-group-options.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
@use '@prestashopcorp/puik-theme/src/puik-checkbox.scss';
@use '@prestashopcorp/puik-theme/src/puik-chip.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
@use '@prestashopcorp/puik-theme/src/puik-input.scss';
</style>
