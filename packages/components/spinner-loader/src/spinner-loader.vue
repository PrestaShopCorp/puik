<template>
  <div
    :class="[
      'puik-spinner-loader',
      `puik-spinner-loader--${size}`,
      `puik-spinner-loader--${variant}`,
      { 'puik-spinner-loader--right': textRight },
    ]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      class="puik-spinner-loader__spinner"
    >
      <defs>
        <linearGradient :id="`spinner-secondHalf--${size}--${variant}`">
          <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
          <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
        </linearGradient>
        <linearGradient :id="`spinner-firstHalf--${size}--${variant}`">
          <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
          <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
        </linearGradient>
      </defs>

      <g stroke-width="8">
        <path
          :stroke="`url(#spinner-secondHalf--${size}--${variant})`"
          d="M 4 100 A 32 32 0 0 1 196 100"
        />
        <path
          :stroke="`url(#spinner-firstHalf--${size}--${variant})`"
          d="M 196 100 A 32 32 0 0 1 4 100"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          d="M 4 100 A 32 32 0 0 1 4 98"
        />
      </g>

      <animateTransform
        from="360 0 0"
        to="0 0 0"
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="2000ms"
      />
    </svg>

    <span v-if="handleText" class="puik-spinner-loader__text">
      {{ handleText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { spinnerLoaderProps } from './spinner-loader'

defineOptions({
  name: 'PuikSpinnerLoader',
})

const props = defineProps(spinnerLoaderProps)

const handleText = computed(() => {
  if (props.textRight) {
    return props.textRight
  }
  return props.text
})
</script>
