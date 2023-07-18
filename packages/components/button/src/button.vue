<template>
  <component
    :is="componentType"
    v-bind="pathProp"
    class="puik-button"
    :class="[
      `puik-button--${variant}`,
      `puik-button--${size}`,
      { 'puik-button--disabled': disabled || loading },
      { 'puik-button--fluid': fluid },
    ]"
    :disabled="disabled || loading"
    @click="setSelected"
  >
    <puik-icon
      v-if="leftIcon && !loading"
      :icon="leftIcon"
      :font-size="size !== 'sm' ? '1.25rem' : '1rem'"
      class="puik-button__left-icon"
    />

    <puik-spinner-loader
      v-if="loading"
      :size="size"
      color="reverse"
      class="puik-button__loading"
    />

    <slot></slot>
    <puik-icon
      v-if="rightIcon"
      :icon="rightIcon"
      :font-size="size !== 'sm' ? '1.25rem' : '1rem'"
      class="puik-button__right-icon"
    />
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { PuikIcon } from '@puik/components/icon'
import { PuikSpinnerLoader } from '@puik/components/spinner-loader'
import { ButtonGroupKey } from '../../button-group'
import { buttonProps } from './button'
defineOptions({
  name: 'PuikButton',
})

const props = defineProps(buttonProps)
const buttonGroup = inject(ButtonGroupKey, undefined)

const componentType = computed(() => {
  if (props.to) {
    return 'router-link'
  } else if (props.href) {
    return 'a'
  }
  return 'button'
})

const pathProp = computed(() =>
  props.to ? { to: props.to } : { href: props.href }
)

const setSelected = () => {
  if (buttonGroup && props.value) {
    buttonGroup.selected.value = props.value
  }
}
</script>
