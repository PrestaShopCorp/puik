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
        :aria-label="computedAriaLabel"
      >
        <span
          v-if="srLabel && srLabel.length > 0"
          class="puik-sr-only"
        >
          {{ srLabelComputed }}
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
const emit = defineEmits<{
  'update:modelValue': [value: boolean | string]
}>();
const { t } = useLocale();

const value = computed({
  get() {
    return (props.modelValue === true || props.modelValue === 'true');
  },
  set(value: boolean) {
    emit('update:modelValue', value);
  }
});

const srLabelComputed = computed(
  () =>
    `${value.value ? t('puik.switch.disable') : t('puik.switch.enable')} ${props.srLabel}`
);

const computedAriaLabel = computed(() => {
  if (props.label) {
    return props.label;
  } else if (props.srLabel && props.srLabel.length > 0) {
    return srLabelComputed.value;
  } else {
    return '';
  }
});
</script>
