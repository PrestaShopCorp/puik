<template>
  <div
    :class="[
      'puik-option',
      { 'puik-option-single--selected' : isSelectedRef && !props.multiSelect},
      { 'puik-option--disabled' : props.disabled },
    ]"
    role="option"
    :aria-selected="isSelectedRef"
    :aria-disabled="props.disabled"
    tabindex="-1"
    :data-test="props.dataTest"
    @click="selectOption"
    @keydown.space.prevent.stop="selectOption"
    @keydown.enter.prevent.stop="selectOption"
  >
    <template v-if="props.multiSelect">
      <PuikCheckbox
        v-model="isSelectedRef"
        :disabled="props.disabled"
        :sr-label="`${label}`"
      />
      <slot>
        <label>{{ label }}</label>
      </slot>
    </template>

    <template v-else>
      <slot>
        <label>{{ label }}</label>
      </slot>
    </template>
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
  disabled: false,
  multiSelect: false,
  isSelected: false
});

const emit = defineEmits<OptionEmits>();

const isSelectedRef = ref(props.isSelected);
const labelRef = ref(props.label);
const valueRef = ref(props.value);

const selectOption = () => {
  if (!props.disabled) {
    emit('select', { label: labelRef.value, value: valueRef.value });
    if (!props.multiSelect) {
      emit('open', false);
    }
  }
};

watch(() => props.isSelected, (newValue) => {
  isSelectedRef.value = newValue;
});
watch(() => props.label, (newValue) => {
  labelRef.value = newValue;
});
watch(() => props.value, (newValue) => {
  valueRef.value = newValue;
});

</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
@use '@prestashopcorp/puik-theme/src/puik-checkbox.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
