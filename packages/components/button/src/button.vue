<template>
  <component
    :is="componentType"
    v-bind="pathProp"
    class="puik-button"
    :class="[
      `puik-button--${variant}`,
      `puik-button--${size}`,
      { 'puik-button--disabled': disabled },
      { 'puik-button--fluid': fluid },
      { 'puik-button--no-wrap': !wrapLabel },
    ]"
    :disabled="disabled"
    :data-test="dataTest"
    @click="setSelected"
  >
    <puik-icon
      v-if="leftIcon"
      :icon="leftIcon"
      :font-size="size !== 'sm' ? '1.25rem' : '1rem'"
      class="puik-button__left-icon"
      :data-test="dataTest != undefined ? `leftIcon-${dataTest}` : undefined"
    />
    <slot />
    <puik-icon
      v-if="rightIcon"
      :icon="rightIcon"
      :font-size="size !== 'sm' ? '1.25rem' : '1rem'"
      class="puik-button__right-icon"
      :data-test="dataTest != undefined ? `rightIcon-${dataTest}` : undefined"
    />
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { ButtonGroupKey } from '../../button-group';
import { PuikButtonVariants, type ButtonProps, PuikButtonSizes } from './button';
defineOptions({
  name: 'PuikButton'
});

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: PuikButtonVariants.Primary,
  size: PuikButtonSizes.Medium
});
const buttonGroup = inject(ButtonGroupKey, undefined);

const componentType = computed(() => {
  if (props.to) {
    return 'router-link';
  } else if (props.href) {
    return 'a';
  }
  return 'button';
});

const pathProp = computed(() =>
  props.to ? { to: props.to } : { href: props.href }
);

const setSelected = () => {
  if (buttonGroup && props.value) {
    buttonGroup.selected.value = props.value;
  }
};
</script>
