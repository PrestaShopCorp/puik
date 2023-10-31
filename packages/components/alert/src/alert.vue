<template>
  <div
    class="puik-alert"
    :class="[
      `puik-alert--${variant}`,
      { 'puik-alert--no-borders': disableBorders },
    ]"
    :aria-live="ariaLive"
  >
    <div class="puik-alert__container">
      <div class="puik-alert__content">
        <PuikIcon :icon="icon" font-size="1.25rem" class="puik-alert__icon" />
        <div class="puik-alert__text">
          <p
            v-if="title"
            class="puik-alert__title"
            :data-test="`title-${dataTest}`"
          >
            {{ title }}
          </p>
          <span
            v-if="$slots.default || description"
            class="puik-alert__description"
            :data-test="`description-${dataTest}`"
            ><slot>{{ description }}</slot></span
          >
        </div>
      </div>
      <PuikButton
        v-if="buttonLabel"
        :variant="variant"
        class="puik-alert__button"
        :data-test="`button-${dataTest}`"
        @click="click"
      >
        {{ buttonLabel }}
      </PuikButton>
    </div>

    <PuikIcon
      v-if="isClosable"
      icon="close"
      font-size="1.5rem"
      class="puik-alert__close"
      :data-test="`close-${dataTest}`"
      @click="close"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PuikButton } from '@puik/components/button'
import { PuikIcon } from '@puik/components/icon'
import { alertEmits, alertProps, ICONS } from './alert'
defineOptions({
  name: 'PuikAlert',
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)

const icon = computed(() => ICONS[props.variant])

const click = (event: Event) => emit('click', event)
const close = (event: Event) => emit('close', event)
</script>
