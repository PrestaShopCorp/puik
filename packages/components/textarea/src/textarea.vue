<template>
  <div
    class="puik-textarea"
    :class="{
      'puik-textarea--count-error': maxLength && characterLength > maxLength,
    }"
  >
    <div
      v-if="maxLength"
      class="puik-textarea__character-count"
    >
      <span>{{ characterLength }}/{{ maxLength }}</span>
    </div>
    <div
      class="puik-textarea__wrapper"
      :class="textareaClass"
    >
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
        :aria-invalid="hasError ? 'true' : 'false'"
        :aria-label="ariaLabel ?? 'undefined'"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </div>
    <div
      v-if="$slots.hint || hasError"
      class="puik-textarea__hint"
      role="alert"
      aria-live="assertive"
    >
      <span
        v-show="!hideHint"
        v-if="$slots.hint && !hasError"
        class="puik-textarea__hint__text"
      ><slot name="hint" /></span>
      <div
        v-if="hasError"
        class="puik-textarea__hint__error"
      >
        <puik-icon
          icon="error"
          class="puik-textarea__hint__error__icon"
          font-size="1.25rem"
        />
        <span class="puik-textarea__hint__error__text">
          <slot name="error">{{ error }}</slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, ref, watch, nextTick, onMounted } from 'vue';
import { useVModel } from '@vueuse/core';
import { slotIsEmpty, clamp } from '@prestashopcorp/puik-utils';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { type TextareaProps, TextareaEmits } from './textarea';

defineOptions({
  name: 'PuikTextarea'
});

const slots = useSlots();

const props = withDefaults(defineProps<TextareaProps>(), {
  maxRows: 2,
  rows: 2,
  autoGrow: true
});

const emit = defineEmits<TextareaEmits>();

const internalValue = useVModel(props, 'modelValue', emit);
const textarea = ref<HTMLTextAreaElement>();

const isFocus = ref(false);

const handleFocus = () => (isFocus.value = true);
const handleBlur = (event: FocusEvent) => {
  isFocus.value = false;
  emit('blur', event);
};

const hasError = computed(() => props.error || slotIsEmpty(slots.error));
const characterLength = computed(() => internalValue.value?.length || 0);

const computeHeight = () => {
  if (!props.autoGrow) return;

  nextTick(() => {
    if (!textarea.value) return;
    const style = getComputedStyle(textarea.value);

    const border =
      parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const padding =
      parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const offset = border + padding;
    const lineHeight = parseFloat(style.lineHeight);
    const minHeight = props.rows * lineHeight + offset;
    const maxHeight = props.maxRows * lineHeight + offset || Infinity;

    textarea.value.style.height = `${minHeight}px`;
    textarea.value.style.height = `${clamp(
      textarea.value.scrollHeight,
      minHeight,
      maxHeight
    )}px`;
  });
};

const textareaClass = computed(() => ({
  'puik-textarea__wrapper--focus': isFocus.value,
  'puik-textarea__wrapper--disabled': props.disabled,
  'puik-textarea__wrapper--readonly': props.readonly,
  'puik-textarea__wrapper--error': hasError.value
}));

onMounted(computeHeight);
watch(() => props.modelValue, computeHeight);
watch(() => props.maxRows, computeHeight);
watch(() => props.rows, computeHeight);
</script>
