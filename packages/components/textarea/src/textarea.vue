<template>
  <div class="puik-textarea">
    <div
      v-if="characterCount"
      class="puik-textarea__character-count"
      :class="{
        'puik-textarea__character-count--negative': internalCharacterCount < 0,
      }"
    >
      <p>{{ internalCharacterCount }}</p>
    </div>
    <div class="puik-textarea__wrapper" :class="textareaClass">
      <textarea
        :id="id"
        ref="textarea"
        v-model="internalValue"
        class="puik-textarea__field"
        :name="name"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </div>
    <div v-if="$slots.hint || hasError" class="puik-textarea__hint">
      <span
        v-show="!hideHint"
        v-if="$slots.hint && !hasError"
        class="puik-textarea__hint__text"
        ><slot name="hint"></slot
      ></span>
      <div v-if="hasError" class="puik-textarea__hint__error">
        <puik-icon
          icon="error"
          class="puik-textarea__hint__error__icon"
          font-size="1.25rem"
        ></puik-icon>
        <span class="puik-textarea__hint__error__text">
          <slot name="error">{{ error }}</slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, ref, watch, nextTick, onMounted } from 'vue'
import { useVModel } from '@vueuse/core'
import { slotIsEmpty, clamp } from '@puik/utils'
import { PuikIcon } from '@puik/components/icon'
import { textareaProps } from './textarea'
defineOptions({
  name: 'PuikTextarea',
})

const slots = useSlots()
const props = defineProps(textareaProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const internalValue = useVModel(props, 'modelValue', emit)
const textarea = ref<HTMLTextAreaElement>()

const isFocus = ref(false)
const textareaClass = computed(() => ({
  'puik-textarea__wrapper--focus': isFocus.value,
  'puik-textarea__wrapper--disabled': props.disabled,
  'puik-textarea__wrapper--readonly': props.readonly,
  'puik-textarea__wrapper--success': props.success,
  'puik-textarea__wrapper--error': hasError.value,
}))

const handleFocus = () => (isFocus.value = true)
const handleBlur = () => (isFocus.value = false)

const hasError = computed(() => props.error || slotIsEmpty(slots.error))
const internalCharacterCount = computed(() => {
  if (!props.maxlength) return internalValue.value?.length || 0
  return props.maxlength - (internalValue.value?.length || 0) || 0
})

const computeHeight = () => {
  if (!props.autoGrow) return

  nextTick(() => {
    if (!textarea.value) return
    const style = getComputedStyle(textarea.value)

    const border =
      parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)
    const padding =
      parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
    const offset = border + padding
    const lineHeight = parseFloat(style.lineHeight)
    const minHeight = props.rows * lineHeight + offset
    const maxHeight = props.maxRows * lineHeight + offset || Infinity

    textarea.value.style.height = `${minHeight}px`
    textarea.value.style.height = `${clamp(
      textarea.value.scrollHeight,
      minHeight,
      maxHeight
    )}px`
  })
}

onMounted(computeHeight)
watch(() => props.modelValue, computeHeight)
watch(() => props.maxRows, computeHeight)
watch(() => props.rows, computeHeight)
</script>
