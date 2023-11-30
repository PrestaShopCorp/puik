<template>
  <div class="puik-switch__group">
    <label
      v-if="$slots.default || label"
      class="puik-switch__label puik-switch__label--left"
    >
      <slot>{{ label }}</slot>
    </label>
    <SwitchRoot
      v-model:checked="value"
      :class="{
        'puik-switch--enabled': value,
      }"
      class="puik-switch"
      :disabled="disabled"
    >
      <span
        v-if="screenReaderText"
        class="puik-switch__screen-readers"
      >
        {{ screenReader }}
      </span>
      <SwitchThumb
        :class="{ 'puik-switch__toggle--enabled': value }"
        class="puik-switch__toggle"
      />
    </SwitchRoot>
    <label
      v-if="$slots.labelRight || labelRight"
      class="puik-switch__label puik-switch__label--right"
    >
      <slot name="labelRight">
        {{ labelRight }}
      </slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SwitchRoot, SwitchThumb } from 'radix-vue';
import { useLocale } from '@prestashopcorp/puik-locale';
import { type SwitchProps } from './switch';
defineOptions({
  name: 'PuikSwitch'
});

const props = defineProps<SwitchProps>();
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>();
const { t } = useLocale();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emit('update:modelValue', value);
  }
});

const screenReader = computed(
  () =>
    `${value.value ? t('puik.switch.disable') : t('puik.switch.enable')} ${
      props.screenReaderText
    }`
);
</script>
