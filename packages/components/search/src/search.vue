<template>
  <div class="puik-search">
    <div class="puik-search__wrapper" :class="searchClasses">
      <span class="puik-search__prepend__icon puik-h2">{{ 'search' }} </span>
      <input
        :id="id"
        v-model="value"
        class="puik-search__field"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :autocomplete="autocomplete"
        :name="name"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <button
        v-if="!disabled"
        class="puik-search__cancel-icon puik-h2"
        @click="deleteContent"
      >
        {{ 'cancel' }}
      </button>
      <div v-if="autocomplete && !disabled" class="flex">
        <puik-button
          class="puik-search__button__icon"
          size="sm"
          variant="primary"
          >{{ 'east' }}</puik-button
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import { isNumber } from '@vueuse/core'
import PuikButton from '../../button/src/button.vue'
import { searchEmits, searchProps } from './search'
defineOptions({
  name: 'PuikSearch',
})
const props = defineProps(searchProps)
const emit = defineEmits(searchEmits)
const slots = useSlots()
const isFocus = ref(false)
const passwordIsVisible = ref(false)

const searchClasses = computed(() => ({
  'puik-search__wrapper--focus': isFocus.value,
  'puik-search__wrapper--disabled': props.disabled,
  'puik-search__wrapper--rounded-input': props.isMainFeature,
}))

const handleFocus = () => (isFocus.value = true)
const handleBlur = () => (isFocus.value = false)

const deleteContent = () => {
  emit('update:modelValue', null)
}

const value = computed<string | number>({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<style scoped>
.puik-search :deep(.puik-button) {
  @apply p-2 w-12;
}

.puik-search__wrapper--rounded-input :deep(.puik-button) {
  @apply rounded-full;
}
</style>
