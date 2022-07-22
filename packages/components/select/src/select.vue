<template>
  <Listbox
    :id="id"
    v-slot="{ open }"
    v-model="selectedValue"
    class="puik-select"
  >
    <div class="puik-select__wrapper">
      <ListboxButton
        :disabled="disabled"
        class="puik-select__button"
        :class="{ 'puik-select__button--error': error || $slots.error }"
      >
        <span class="puik-select__selected">{{
          currentLabel || placeholder
        }}</span>
        <span class="puik-select__icon"> unfold_more </span>
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
        >
          <puik-input
            v-if="options"
            v-model="query"
            class="puik-select__search"
            :placeholder="t('puik.select.searchPlaceholder')"
          >
            <template #prepend
              ><span class="puik-select__search__icon">search</span></template
            >
          </puik-input>
          <p
            v-if="options && !filteredItems?.length"
            class="puik-select__no-results"
          >
            {{ noMatchText || `${t('puik.select.noResults')} ${query}` }}
          </p>
          <div class="puik-select__options-list">
            <slot :options="filteredItems"></slot>
          </div>
        </ListboxOptions>
      </transition>
      <span v-if="error || $slots.error" class="puik-select__error"
        ><span class="puik-select__error__icon">error</span
        ><slot name="error">{{ error }}</slot></span
      >
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/vue'
import { useVModel } from '@vueuse/core'
import { isObject, isFunction } from '@puik/utils'
import { useLocale } from '@puik/hooks'
import { PuikInput } from '../../input'
import { selectProps, selectEmits, selectKey } from './select'

defineOptions({
  name: 'PuikSelect',
})

const props = defineProps(selectProps)

const emit = defineEmits(selectEmits)

const { t } = useLocale()

const query = ref('')
const currentLabel = ref()

const selectedValue = useVModel(props, 'modelValue', emit)

const filteredItems = computed(() => {
  if (props.options) {
    if (query.value) {
      if (isFunction(props.customFilterMethod)) {
        return props.customFilterMethod(query.value)
      }
      return props.options.filter((option) =>
        (isObject(option) ? option[props.displayProperty] : option)
          .toLowerCase()
          .includes(query.value.toLowerCase())
      )
    }
    return props.options
  }
  return null
})

const setCurrentLabel = (label: string | number) => (currentLabel.value = label)

const isOpen = (open: boolean) => {
  if (open && props.options) {
    query.value = ''
  }
  return open
}

provide(selectKey, { setCurrentLabel, selectedValue })
</script>
