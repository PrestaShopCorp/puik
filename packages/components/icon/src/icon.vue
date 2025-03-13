<template>
  <component
    :is="nodeType"
    class="puik-icon"
    :style="style"
    :class="{
      'puik-icon--disabled': isDisabled,
    }"
    :aria-label="computedAriaLabel"
    role="img"
    v-bind="dataTest ? { 'data-test': dataTest } : {}"
  >
    {{ icon }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type IconProps } from './icon';
defineOptions({
  name: 'PuikIcon'
});

const props = withDefaults(defineProps<IconProps>(), {
  nodeType: 'div',
  fontSize: '1rem',
  color: '#00000',
  fill: 1
});

const fontSize = computed(() => {
  if (!Number.isNaN(Number(props.fontSize))) {
    return `${props.fontSize}px`;
  }
  return props.fontSize;
});

const style = computed(() => {
  return {
    fontSize: fontSize.value,
    color: props.color,
    'font-variation-settings': `'FILL' ${props.fill}`
  };
});

const computedAriaLabel = computed(() => {
  return props.ariaLabel || `${props.icon} icon`;
});
</script>
