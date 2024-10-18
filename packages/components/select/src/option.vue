<template>
  <div
    :class="[
      'puik-option',
      { 'puik-option-single--selected' : isSelected && !props.multiSelect},
      { 'puik-option--disabled' : props.disabled },
    ]"
    @click="selectOption"
  >
    <template v-if="props.multiSelect">
      <PuikCheckbox
        v-model="isSelectedRef"
        :disabled="props.disabled"
        :sr-label="label ?? option?.[props.labelKey]"
      />
      <slot>
        <label>{{ label ?? option?.[props.labelKey] }}</label>
      </slot>
    </template>
    <label v-else>
      {{ label ?? option?.[props.labelKey] }}
    </label>
    <PuikIcon
      v-if="isSelectedRef && !props.multiSelect"
      class="puik-option__selected-icon"
      icon="check"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
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
  isSelected: false
});

const emit = defineEmits<OptionEmits>();

const isSelectedRef = ref(props.isSelected);

const selectOption = () => {
  if (!props.disabled) {
    if (props.option) {
      isSelectedRef.value = !isSelectedRef.value;
      emit('select', props.option);
    } else {
      isSelectedRef.value = !isSelectedRef.value;
      emit('select', { label: props.label, value: props.value });
    }
  }
};

watch(() => props.isSelected, (newValue) => {
  isSelectedRef.value = newValue;
});

</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
@use '@prestashopcorp/puik-theme/src/puik-checkbox.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
