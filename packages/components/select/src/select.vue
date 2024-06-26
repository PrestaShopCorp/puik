<template>
  <Listbox
    :id="id"
    v-slot="{ open }"
    v-model="selectedValue"
    :name="name"
    class="puik-select"
  >
    <div class="puik-select__wrapper">
      <ListboxButton
        :disabled="disabled"
        class="puik-select__button"
        :class="{ 'puik-select__button--error': hasError }"
      >
        <input
          ref="labelInput"
          :value="customLabel || currentLabel"
          class="puik-select__selected"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :disabled="disabled"
          tabindex="-1"
          :readonly="open"
          type="text"
          :data-test="dataTest != undefined ? `select-${dataTest}` : undefined"
          @input="
            handleAutoComplete(($event.target as HTMLInputElement)?.value)
          "
        >
        <puik-icon
          font-size="1.25rem"
          icon="unfold_more"
          class="puik-select__icon"
        />
      </ListboxButton>
      <transition
        enter-active-class="puik-select__transition__enter--active"
        enter-from-class="puik-select__transition__enter--from"
        enter-to-class="puik-select__transition__enter--to"
        leave-active-class="puik-select__transition__leave--active"
        leave-from-class="puik-select__transition__leave--from"
        leave-to-class="puik-select__transition__leave--to"
      >
        <ListboxOptions
          v-show="isOpen(open)"
          static
          class="puik-select__options"
          :class="{ 'puik-select__options--full-width': fullWidth }"
          as="div"
          :style="{ 'z-index': zindex }"
        >
          <puik-input
            v-if="Array.isArray(options) || isObject(options)"
            v-model="query"
            class="puik-select__search"
            :placeholder="t('puik.select.searchPlaceholder')"
            :data-test="
              dataTest != undefined ? `searchInput-${dataTest}` : undefined
            "
          >
            <template #prepend>
              <puik-icon
                font-size="1.25rem"
                icon="search"
                class="puik-select__search__icon"
              />
            </template>
          </puik-input>
          <p
            v-if="
              options &&
                (isObject(filteredItems)
                  ? !Object.keys(filteredItems).length
                  : !filteredItems?.length)
            "
            class="puik-select__no-results"
            :data-test="
              dataTest != undefined ? `noResults-${dataTest}` : undefined
            "
          >
            {{ noMatchText || `${t('puik.select.noResults')} ${query}` }}
          </p>
          <ul class="puik-select__options-list">
            <slot :options="filteredItems">
              <template v-if="options">
                <puik-option
                  v-for="(option, index) in filteredItems"
                  :key="option"
                  :label="option[labelKey]"
                  :value="isObject(option) ? option[valueKey] : option"
                  :data-test="
                    dataTest != undefined
                      ? `option-${dataTest}-${index + 1}`
                      : undefined
                  "
                />
              </template>
            </slot>
          </ul>
        </ListboxOptions>
      </transition>
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
  </Listbox>
</template>

<script setup lang="ts">
import { computed, provide, ref, useSlots } from 'vue';
import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/vue';
import { isObject, isFunction, slotIsEmpty } from '@prestashopcorp/puik-utils';
import { useLocale } from '@prestashopcorp/puik-locale';
import { PuikInput } from '@prestashopcorp/puik-components/input';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { type SelectProps, selectKey } from './select';
import PuikOption from './option.vue';
import type { DefaultOption } from './option';

defineOptions({
  name: 'PuikSelect'
});

const optionsList = ref<DefaultOption[]>([]);
const labelInput = ref<HTMLInputElement>();

const props = withDefaults(defineProps<SelectProps>(), {
  labelKey: 'label',
  valueKey: 'value',
  zindex: 1000,
  fullWidth: true
});

const slots = useSlots();

const emit = defineEmits<{ 'update:modelValue': [option: any] }>();

const { t } = useLocale();

const query = ref('');
const currentLabel = ref();

const selectedValue = computed({
  get: () => props.modelValue,
  set: (option: any) => {
    currentLabel.value = option.label;
    return emit('update:modelValue', option.value);
  }
});

const filteredItems = computed(() => {
  if (props.options) {
    if (query.value) {
      if (isFunction(props.customFilterMethod)) {
        return props.customFilterMethod(query.value);
      }
      return props.options.filter((option: any) =>
        (isObject(option) ? option[props.labelKey] : option)
          .toString()
          .toLowerCase()
          .includes(query.value.toLowerCase())
      );
    }
    return props.options;
  }
  return null;
});

const hasError = computed(() => props.error || slotIsEmpty(slots.error));

const handleAutoComplete = (label: string | number) => {
  if (label === props.customLabel || currentLabel.value) return;
  if (labelInput.value) {
    labelInput.value.value = '';
  }
  optionsList.value.filter((option) => {
    if (
      String(option.label).toLowerCase() === label.toString().toLowerCase() ||
      String(option.value).toLowerCase() === label.toString().toLowerCase()
    ) {
      selectedValue.value = option;
    }
    return null;
  });
};

const isOpen = (open: boolean) => {
  if (open && props.options) {
    query.value = '';
  }
  return open;
};

provide(selectKey, {
  selectedValue,
  optionsList,
  handleAutoComplete,
  labelKey: props.labelKey
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-select.scss';
</style>
