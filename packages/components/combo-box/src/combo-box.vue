<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <button
        role="combobox"
        class="puik-combobox__button"
      >
        <span v-if="value">
          {{ isObject(value) ? value[optionAttribute] : value }}
        </span>
        <span v-else>{{ placeholder }}</span>
        <puik-icon
          font-size="1.25rem"
          icon="unfold_more"
          class="puik-combobox__icon"
        />
      </button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="puik-combobox__list">
        <ComboboxRoot
          v-model="value"
          :open="open"
          :filter-function="filterFunction"
        >
          <div class="puik-combobox__search">
            <div class="puik-combobox__search__wrapper">
              <puik-icon
                class="puik-combobox__search__icon"
                font-size="1.25rem"
                icon="search"
              />
              <ComboboxInput
                class="puik-combobox__search__input"
                auto-focus
                :placeholder="searchPlaceholder"
              />
            </div>
          </div>
          <ComboboxEmpty class="puik-combobox__no-results">
            {{ noMatchText ?? t('puik.select.noResults') }}
          </ComboboxEmpty>
          <ComboboxContent>
            <ComboboxGroup>
              <slot
                :options="options"
                :close="close"
              >
                <PuikComboBoxItem
                  v-for="(option, idx) in options"
                  :key="idx"
                  :value="isObject(option) && valueAttribute ? option[valueAttribute] : option"
                  @select="open = false"
                >
                  {{ isObject(option) ? option[optionAttribute] : option }}
                </PuikComboBoxItem>
              </slot>
            </ComboboxGroup>
          </ComboboxContent>
        </ComboboxRoot>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ComboBoxProps } from './combo-box';
import ComboboxRoot from './combo-box-root.vue';
import PuikComboBoxItem from './combo-box-item.vue';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import {
  PopoverRoot,
  PopoverPortal,
  PopoverContent,
  PopoverTrigger,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxGroup,
  ComboboxContent
} from 'radix-vue';
import { useVModel } from '@vueuse/core';
import { isObject } from '@prestashopcorp/puik-utils';
import { useLocale } from '@prestashopcorp/puik-locale';
defineOptions({
  name: 'PuikComboBox'
});
// TODO: ADD LIST VIRTUALIZATION FOR LONG LISTS
const { t } = useLocale();

const props = withDefaults(defineProps<ComboBoxProps>(), {
  optionAttribute: 'label'
});
const emit = defineEmits<{'update:modelValue': [value: string | number | boolean | Record<string, any>]}>();

const open = ref(false);
const value = useVModel(props, 'modelValue', emit);

const close = () => {
  open.value = false;
};

const filterFunction = (options: any[], searchTerm: string) => {
  if (props.filterFunction) {
    return props.filterFunction(options, searchTerm);
  }
  if (isObject(props.options[0])) {
    return options.filter((option: Record<string, any>) => {
      return option[props.optionAttribute].toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
  }
  return options.filter((option: string) => option.toLowerCase().includes(searchTerm.toLowerCase()));
};
</script>
