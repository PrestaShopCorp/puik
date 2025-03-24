<template>
  <component
    :is="componentType"
    v-bind="{
      ...pathProp,
      ...(ariaLabel ? { 'aria-label': ariaLabel } : {})
    }"
    class="puik-button"
    :class="[
      `puik-button--${variant}`,
      `puik-button--${size}`,
      { 'puik-button--disabled': disabled },
      { 'puik-button--fluid': fluid },
      { 'puik-button--no-wrap': !wrapLabel },
    ]"
    role="button"
    :disabled="disabled"
    :aria-disabled="disabled ? 'true' : undefined"
    :aria-describedby="disabled ? disabledId : undefined"
    :data-test="dataTest"
    @click="setSelected"
  >
    <puik-spinner-loader
      v-if="props.loading && props.loaderPosition === PuikButtonLoaderPositions.Left"
      :size="props.size"
      :color="loaderColor"
      class="puik-button__loader puik-button__loader--left"
      :data-test="dataTest != undefined ? `leftLoader-${dataTest}` : undefined"
    />
    <puik-icon
      v-if="leftIcon"
      :icon="leftIcon"
      :font-size="size !== 'sm' ? '1.25rem' : '1rem'"
      class="puik-button__left-icon"
      :aria-hidden="true"
      :data-test="dataTest != undefined ? `leftIcon-${dataTest}` : undefined"
    />
    <slot />
    <puik-icon
      v-if="rightIcon"
      :icon="rightIcon"
      :font-size="size !== 'sm' ? '1.25rem' : '1rem'"
      class="puik-button__right-icon"
      :aria-hidden="true"
      :data-test="dataTest != undefined ? `rightIcon-${dataTest}` : undefined"
    />
    <puik-spinner-loader
      v-if="props.loading && props.loaderPosition === PuikButtonLoaderPositions.Right"
      :size="props.size"
      :color="loaderColor"
      class="puik-button__loader puik-button__loader--right"
      :data-test="dataTest != undefined ? `rightLoader-${dataTest}` : undefined"
    />
    <span
      v-if="disabled"
      :id="disabledId"
      class="puik-sr-only"
    >
      {{ disabledReason ?? disabledReasonDefault }}.
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { useLocale } from '@prestashopcorp/puik-locale';
import { generateId } from '@prestashopcorp/puik-utils';
import { PuikIcon, PuikSpinnerLoader } from '@prestashopcorp/puik-components';
import { ButtonGroupKey } from '../../button-group';
import { PuikButtonVariants, PuikButtonLoaderPositions, type ButtonProps, PuikButtonSizes } from './button';
defineOptions({
  name: 'PuikButton'
});

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: PuikButtonVariants.Primary,
  size: PuikButtonSizes.Medium,
  loading: false,
  loaderPosition: PuikButtonLoaderPositions.Right
});

const { t } = useLocale();
const disabledReasonDefault = t('puik.common.ariaDisabledDescription');
const disabledId = `puik-button-disabled-${generateId()}`;
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

const loaderColor = computed(() => {
  if (props.variant === 'primary' || props.variant === 'secondary-reverse' || props.variant === 'text-reverse' || props.variant === 'destructive' || props.disabled) {
    return 'reverse';
  }
  return 'primary';
});
</script>
