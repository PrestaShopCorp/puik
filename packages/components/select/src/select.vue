<template>
  <div
    v-on-click-outside="closeOptions"
    class="puik-select"
  >
    <template v-if="props.multiSelect">
      <div
        v-if="selectedOptions.length > 0 "
        class="puik-select__chip-container"
        @click.stop="toggleOptions"
      >
        <puik-chip
          v-for="option in selectedOptions"
          :id="`chip-${option.label}`"
          :key="option.value"
          :content="option.label"
          @close="deselectOption(option)"
        />
      </div>
      <PuikInput
        v-else
        class="puik-select__multiple-input"
        type="text"
        placeholder="Select an option"
        readonly
        @click.stop="toggleOptions"
      />
    </template>
    <PuikInput
      v-else
      v-model="selectedSingleOption"
      type="text"
      placeholder="Select an option"
      readonly
      @click.stop="toggleOptions"
    />
    <div
      v-if="showOptions"
      class="puik-select__options-container"
    >
      <PuikInput
        v-if="searchable"
        v-model="searchQuery"
        class="puik-select__search-input"
        type="text"
        placeholder="Search..."
        @input="searchOptions"
      />
      <PuikCheckbox
        v-if="multiSelect"
        v-model="isAllSelected"
        class="puik-select__select-all"
        :label="isAllSelected ? 'Deselect All' : 'Select All'"
        @change="toggleSelectAll"
      />
      <puik-option
        v-for="option in filteredOptions"
        :key="option.value"
        :selected-options="selectedOptions"
        :option="option"
        :multi-select="props.multiSelect"
        @click="selectOption(option)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import { PuikCheckbox, PuikChip, PuikInput, PuikOption } from '@prestashopcorp/puik-components';
import type { OptionType } from './option';
import type { SelectProps } from './select';

defineOptions({
  name: 'PuikSelect'
});

const props = withDefaults(defineProps<SelectProps>(), {
  multiSelect: false
});

const emit = defineEmits(['update:modelValue', 'search']);

const selectedOptions = ref<any[]>([]);
const showOptions = ref(false);
const searchQuery = ref('');

const selectedSingleOption = computed(() => {
  return selectedOptions.value.length > 0 ? selectedOptions.value[0].label : '';
});
const filteredOptions = computed(() => {
  return props.options.filter(option => option.label.includes(searchQuery.value));
});
const isAllSelected = computed(() => {
  return selectedOptions.value.length === props.options.length;
});

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
  console.log(showOptions.value);
};
const closeOptions = () => {
  showOptions.value = false;
};
const selectOption = (option: any) => {
  if (props.multiSelect) {
    if (selectedOptions.value.includes(option)) {
      selectedOptions.value = selectedOptions.value.filter(opt => opt !== option);
    } else {
      selectedOptions.value.push(option);
    }
  } else {
    selectedOptions.value = [option];
    showOptions.value = false;
  }
  emit('update:modelValue', selectedOptions.value);
};
const toggleSelectAll = () => {
  if (isAllSelected.value) {
    selectedOptions.value = [];
  } else {
    selectedOptions.value = [...props.options];
  }
};
const searchOptions = () => {
  emit('search', searchQuery.value);
};
const deselectOption = (option: OptionType) => {
  selectedOptions.value = selectedOptions.value.filter(opt => opt !== option);
};
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-select.scss';
</style>
