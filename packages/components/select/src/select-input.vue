<template>
  <div>
    <template v-if="props.multiSelect">
      <button
        v-if="selectedMultipleOptions.length > 0"
        :id="props.id"
        :class="['puik-multi-select__options-tags']"
        tabindex="0"
        :autocomplete="props.autocomplete"
        role="combobox"
        :aria-expanded="props.open"
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
          @keydown.space.stop="emit('open', true)"
          @keydown.enter.stop="emit('open', true)"
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
          :aria-expanded="props.open"
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
      :aria-expanded="props.open"
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
  </div>
</template>

<script setup lang="ts">
import { SelectInputProps, SelectInputEmits } from './select-input';
import { computed, ref, useSlots } from 'vue';
import { slotIsEmpty } from '@prestashopcorp/puik-utils/types';
import { useLocale } from '@prestashopcorp/puik-locale';
import {
  OptionType,
  PuikChip,
  PuikIcon,
  PuikInput
} from '@prestashopcorp/puik-components';
defineOptions({
  name: 'PuikSelectInput'
});

const slots = useSlots();
const { t } = useLocale();

const props = withDefaults(defineProps<SelectInputProps>(), {
  required: false,
  optional: false,
  readonly: false,
  optionLabelKey: 'label',
  optionValueKey: 'value',
  optionDisabledKey: 'disabled',
  multiSelect: false,
  open: false
});

const emit = defineEmits<SelectInputEmits>();

const selectedMultipleOptions = ref(
  Array.isArray(props.modelValue) ? [...props.modelValue] : []
);
const selectedSingleOption = ref(props.modelValue ?? {});

const toggleOptions = () => {
  // emit('open', !props.open);
  // props.open.value = !props.open.value;
  // resetSearchQuery();
};
const openOptions = () => {
  // emit('open', true);
  // props.open.value = true;
  // resetSearchQuery();
};

const deselectOption = (option: OptionType) => {
  // selectedMultipleOptions.value = selectedMultipleOptions.value.filter(
  //   (opt) => opt !== option
  // );
  // updateSelectAllIndeterminate();
  // emit('update:modelValue', selectedMultipleOptions.value);
};

const hasError = computed(() => props.error || slotIsEmpty(slots.error));

</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-select-input.scss';
</style>
