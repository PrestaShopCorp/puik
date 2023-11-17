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
      <puik-icon
        :icon="icon"
        font-size="1.25rem"
        class="puik-alert__icon"
      />
      <div class="puik-alert__text">
        <p
          v-if="title"
          class="puik-alert__title"
        >
          {{ title }}
        </p>
        <span
          v-if="$slots.default || description"
          class="puik-alert__description"
        ><slot>{{ description }}</slot></span>
      </div>
    </div>
    <puik-button
      v-if="buttonLabel"
      :variant="variant"
      class="puik-alert__button"
      @click="click"
    >
      {{ buttonLabel }}
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { PuikAlertVariants, ICONS } from './alert';
import type { AlertProps, AlertEmits } from './alert';
defineOptions({
  name: 'PuikAlert'
});

const props = withDefaults(defineProps<AlertProps>(), {
  variant: PuikAlertVariants.Success,
  ariaLive: 'polite'
});
const emit = defineEmits<AlertEmits>();

const icon = computed(() => ICONS[props.variant]);

const click = (event: Event) => emit('click', event);
</script>
