<template>
  <div class="puik-table__head__row__item__container">
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
          <puik-button left-icon="search" @click="$emit('searchSubmitEvent')">
            {{ t('puik.table.search') }}
          </puik-button>
          <div
            v-if="props.searchReset"
            class="puik-table-search-input--reset"
            @click="$emit('searchResetEvent')"
          >
            <puik-button left-icon="close" variant="text" size="sm">
              {{ t('puik.table.reset') }}
            </puik-button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '@puik/hooks'
import { PuikButton } from '@puik/components/button'
import { PuikInput, PuikInputTypes } from '@puik/components/input'
import {
  tableSearchInputProps,
  PuikTableSearchInputTypes,
} from './table-search-input'
import type { searchOption, inputRange } from './table-search-input'
defineOptions({
  name: 'PuikTableSearchInput',
})

const props = defineProps(tableSearchInputProps)

const emit = defineEmits<{
  (e: 'searchTextValue', column: searchOption): void
  (e: 'searchRangeValue', column: searchOption): void
  (e: 'searchSubmitEvent'): void
  (e: 'searchResetEvent'): void
}>()

const { t } = useLocale()

const inputTextValue = ref<string>()
const inputMinValue = ref<number>()
const inputMaxValue = ref<number>()

const sendTextValue = (column: string, textValue?: string) => {
  const searchOption: searchOption = {
    searchBy: column,
    inputText: textValue,
  }
  emit('searchTextValue', searchOption)
}

const sendRangeValue = (
  column: string,
  minValue?: number,
  maxValue?: number
) => {
  const searchOption: searchOption = {
    searchBy: column,
    inputRange: {
      min: minValue || Number.NEGATIVE_INFINITY,
      max: maxValue || Number.POSITIVE_INFINITY,
    } as inputRange,
  }
  emit('searchRangeValue', searchOption)
}
</script>
