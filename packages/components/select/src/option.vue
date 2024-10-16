<template>
  <div
    :class="[
      'puik-option',
      { 'puik-option-single--selected' : isSelected && !props.multiSelect},
      { 'puik-option--disabled' : props.disabled },
    ]"
  >
    <template v-if="props.multiSelect">
      <PuikCheckbox
        v-model="isSelected"
        :disabled="disabled"
        :sr-label="option[props.labelKey]"
        @change="selectOption"
      />
      <label>{{ option[props.labelKey] }}</label>
    </template>
    <label v-else>
      {{ option[props.labelKey] }}
    </label>
    <PuikIcon
      v-if="isSelected && !props.multiSelect"
      class="puik-option__selected-icon"
      icon="check"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PuikCheckbox } from '../../checkbox';
import { PuikIcon } from '../../icon';
import type { OptionProps, OptionEmits } from './option';

defineOptions({
  name: 'PuikOption'
});

const props = withDefaults(defineProps<OptionProps>(), {
  labelKey: 'label',
  valueKey: 'value',
  disabledKey: 'disabled',
  disabled: false,
  multiSelect: false,
  selectedOptions: () => { return []; }
});

const emit = defineEmits<OptionEmits>();

const isSelected = computed(() => {
  return props.selectedOptions.includes(props.option);
});

const selectOption = () => {
  if (props.disabled) {
    emit('select', props.option);
  }
};
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
@use '@prestashopcorp/puik-theme/src/puik-checkbox.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
