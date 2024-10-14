<template>
  <div class="puik-option">
    <PuikCheckbox
      v-if="props.multiSelect"
      v-model="isSelected"
      :label="option.label"
      @change="selectOption"
    />
    <div v-else>
      {{ option.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PuikCheckbox } from '../../checkbox';
import type { OptionProps, OptionEmits } from './option';

defineOptions({
  name: 'PuikOption'
});

const props = withDefaults(defineProps<OptionProps>(), {
  multiSelect: false,
  selectedOptions: () => { return []; }
});

const emit = defineEmits<OptionEmits>();

const isSelected = computed(() => {
  return props.selectedOptions.includes(props.option);
});

const selectOption = () => {
  emit('select', props.option);
};
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-option.scss';
</style>
