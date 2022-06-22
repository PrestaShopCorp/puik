<template>
  <div
    class="puik-alert"
    :class="[
      `puik-alert--${variant}`,
      { 'puik-alert--no-borders': disableBorders },
    ]"
    :aria-live="ariaLive"
  >
    <div class="puik-alert__content">
      <span class="puik-alert__icon">{{ icon }}</span>
      <div class="puik-alert__text">
        <p v-if="title" class="puik-alert__title">{{ title }}</p>
        <span
          v-if="$slots.default || description"
          class="puik-alert__description"
          ><slot>{{ description }}</slot></span
        >
      </div>
    </div>
    <button v-if="buttonLabel" class="puik-alert__button" @click="click">
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { alertEmits, alertProps, ICONS } from './alert'
defineOptions({
  name: 'Alert',
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)

const icon = computed(() => ICONS[props.variant])

const click = (event: Event) => emit('click', event)
</script>