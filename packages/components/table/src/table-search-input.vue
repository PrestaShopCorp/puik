<template>
  <div
    class="puik-table__head__row__item__content puik-table-search-input__content"
  >
    <PuikInput
      v-if="
        !props.searchSubmit &&
          props.searchType === PuikTableSearchInputTypes.Text
      "
      v-model="inputTextValue"
      :type="PuikInputTypes.Text"
      :placeholder="t('puik.table.search')"
      @update:model-value="sendTextValue(props.column, inputTextValue)"
    />
    <div
      v-if="
        !props.searchSubmit &&
          props.searchType === PuikTableSearchInputTypes.Range
      "
      class="puik-table-search-input--range"
    >
      <PuikInput
        v-model="inputMinValue"
        :type="PuikInputTypes.Number"
        :placeholder="t('puik.table.min')"
        @update:model-value="
          sendRangeValue(props.column, inputMinValue, inputMaxValue)
        "
      />
      <PuikInput
        v-model="inputMaxValue"
        :type="PuikInputTypes.Number"
        :placeholder="t('puik.table.max')"
        @update:model-value="
          sendRangeValue(props.column, inputMinValue, inputMaxValue)
        "
      />
    </div>
    <template v-if="props.searchSubmit">
      <div class="puik-table-search-input--submit">
        <puik-button
          left-icon="search"
          @click="$emit('searchSubmitEvent')"
        >
          {{ t('puik.table.search') }}
        </puik-button>
        <div
          v-if="props.searchReset"
          class="puik-table-search-input--reset"
          @click="$emit('searchResetEvent')"
        >
          <puik-button
            left-icon="close"
            variant="text"
            size="sm"
          >
            {{ t('puik.table.reset') }}
          </puik-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLocale } from '@prestashopcorp/puik-locale';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { PuikInput, PuikInputTypes } from '@prestashopcorp/puik-components/input';
import {
  TableSearchInputProps,
  PuikTableSearchInputTypes
} from './table-search-input';
import type { searchOption, inputRange } from './table-search-input';

defineOptions({
  name: 'PuikTableSearchInput'
});

const props = withDefaults(defineProps<TableSearchInputProps>(), {
  column: '',
  searchType: PuikTableSearchInputTypes.Text
});

const emit = defineEmits<{
  searchTextValue: [column: searchOption]
  searchRangeValue: [column: searchOption]
  searchSubmitEvent: []
  searchResetEvent: []
}>();

const { t } = useLocale();

const inputTextValue = ref<string>();
const inputMinValue = ref<number>();
const inputMaxValue = ref<number>();

const sendTextValue = (column: string, textValue?: string) => {
  const searchOption: searchOption = {
    searchBy: column,
    inputText: textValue
  };
  emit('searchTextValue', searchOption);
};

const sendRangeValue = (
  column: string,
  minValue?: number,
  maxValue?: number
) => {
  const searchOption: searchOption = {
    searchBy: column,
    inputRange: {
      min: minValue || Number.NEGATIVE_INFINITY,
      max: maxValue || Number.POSITIVE_INFINITY
    } as inputRange
  };
  emit('searchRangeValue', searchOption);
};
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/puik-input.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
