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
          :value="currentLabel"
          class="puik-select__selected"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :disabled="disabled"
          tabindex="-1"
          :readonly="open"
          type="text"
          @input="
            handleAutoComplete(($event.target as HTMLInputElement)?.value)
          "
        />
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
            v-if="isArray(options) || isObject(options)"
            v-model="query"
            class="puik-select__search"
            :placeholder="t('puik.select.searchPlaceholder')"
          >
            <template #prepend
              ><puik-icon
                font-size="1.25rem"
                icon="search"
                class="puik-select__search__icon"
            /></template>
          </puik-input>
          <p
            v-if="
              options &&
              (isObject(filteredItems)
                ? !Object.keys(filteredItems).length
                : !filteredItems?.length)
            "
            class="puik-select__no-results"
          >
            {{ noMatchText || `${t('puik.select.noResults')} ${query}` }}
          </p>
          <ul class="puik-select__options-list">
            <slot :options="filteredItems">
              <template v-if="options">
                <puik-option
                  v-for="option in filteredItems"
                  :key="option"
                  :label="option[labelKey]"
                  :value="isObject(option) ? option[valueKey] : option"
                />
              </template>
            </slot>
          </ul>
        </ListboxOptions>
      </transition>
      <div v-if="hasError" class="puik-select__error">
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
import { computed, provide, ref, useSlots } from 'vue'
import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/vue'
import { isObject, isFunction, isArray, slotIsEmpty } from '@puik/utils'
import { useLocale } from '@puik/hooks'
import { PuikInput } from '@puik/components/input'
import { PuikIcon } from '@puik/components/icon'
import { selectProps, selectEmits, selectKey } from './select'
import PuikOption from './option.vue'
import type { DefaultOption } from './option'

defineOptions({
  name: 'PuikSelect',
})

const optionsList = ref<DefaultOption[]>([])
const labelInput = ref<HTMLInputElement>()

const props = defineProps(selectProps)

const slots = useSlots()

const emit = defineEmits(selectEmits)

const { t } = useLocale()

const query = ref('')
const currentLabel = ref()

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(option: any) {
    currentLabel.value = props.customLabel || option.label
    return emit('update:modelValue', option.value)
  },
})
const filteredItems = computed(() => {
  if (props.options) {
    if (query.value) {
      if (isFunction(props.customFilterMethod)) {
        return props.customFilterMethod(query.value)
      }
      return props.options.filter((option) =>
        (isObject(option) ? option[props.labelKey] : option)
          .toString()
          .toLowerCase()
          .includes(query.value.toLowerCase())
      )
    }
    return props.options
  }
  return null
})

const hasError = computed(() => props.error || slotIsEmpty(slots.error))

const handleAutoComplete = (label: string | number) => {
  if (label === currentLabel.value) return
  if (labelInput.value) {
    labelInput.value.value = ''
  }
  optionsList.value.filter((option) => {
    if (
      String(option.label).toLowerCase() === label.toString().toLowerCase() ||
      String(option.value).toLowerCase() === label.toString().toLowerCase()
    ) {
      selectedValue.value = option
    }
  })
}

const isOpen = (open: boolean) => {
  if (open && props.options) {
    query.value = ''
  }
  return open
}

provide(selectKey, {
  selectedValue,
  optionsList,
  handleAutoComplete,
  labelKey: props.labelKey,
})
</script>
