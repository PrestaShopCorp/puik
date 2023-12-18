<template>
  <SwitchGroup>
    <div class="puik-switch__group">
      <SwitchLabel
        v-if="$slots.default || label"
        class="puik-switch__label puik-switch__label--left"
      >
        <slot>{{ label }}</slot>
      </SwitchLabel>
      <Switch
        v-model="value"
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
        <span
          :class="{ 'puik-switch__toggle--enabled': value }"
          class="puik-switch__toggle"
        />
      </Switch>
      <SwitchLabel
        v-if="$slots.labelRight || labelRight"
        class="puik-switch__label puik-switch__label--right"
      >
        <slot name="labelRight">
          {{ labelRight }}
        </slot>
      </SwitchLabel>
    </div>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import { useLocale } from '@prestashopcorp/puik-locale';
import { type SwitchProps } from './switch';
defineOptions({
  name: 'PuikSwitch'
});

const props = defineProps<SwitchProps>();
const emit: any = defineEmits<{
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
