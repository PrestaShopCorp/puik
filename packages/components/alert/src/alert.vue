<template>
  <div
    class="puik-alert"
    :class="[
      `puik-alert--${variant}`,
      { 'puik-alert--no-borders': disableBorders },
    ]"
    role="alert"
    v-bind="{
      ...(title && title.trim() && { 'aria-labelledby': `title-${ariaId}` }),
      ...(($slots.default || (description && description.trim())) && { 'aria-describedby': `description-${ariaId}` })
    }"
    :aria-live="ariaLive"
    :data-test="dataTest"
    tabindex="0"
  >
    <div class="puik-alert__container">
      <div class="puik-alert__content">
        <PuikIcon
          :icon="icon"
          font-size="1.25rem"
          class="puik-alert__icon"
        />
        <div class="puik-alert__text">
          <h4
            v-if="title"
            :id="`title-${ariaId}`"
            class="puik-alert__title"
            :data-test="dataTest != undefined ? `title-${dataTest}` : undefined"
          >
            {{ title }}
          </h4>
          <p
            v-if="$slots.default || description"
            :id="`description-${ariaId}`"
            class="puik-alert__description"
            :data-test="
              dataTest != undefined ? `description-${dataTest}` : undefined
            "
          >
            <slot>{{ description }}</slot>
          </p>
        </div>
      </div>
      <PuikButton
        v-if="linkLabel"
        v-bind="{
          ...(leftIconLink ? { 'left-icon': leftIconLink } : {}),
          ...(rightIconLink ? { 'right-icon': rightIconLink } : {}),
          ...(internalLink ? { 'to': internalLink } : {}),
          ...(externalLink ? { 'href': externalLink } : {}),
          ...(ariaLabelLink ? { 'aria-label': ariaLabelLink } : {}),
        }"
        class="puik-alert__link"
        :data-test="dataTest != undefined ? `link-${dataTest}` : undefined"
        tabindex="0"
        variant="text"
        :wrap-label="buttonWrapLabel"
        @click="clickLink"
      >
        {{ linkLabel }}
      </PuikButton>
      <PuikButton
        v-if="buttonLabel"
        v-bind="{
          ...(leftIconBtn ? { 'left-icon': leftIconBtn } : {}),
          ...(rightIconBtn ? { 'right-icon': rightIconBtn } : {}),
          ...(ariaLabelBtn ? { 'aria-label': ariaLabelBtn } : {}),
        }"
        :variant="variant"
        :wrap-label="buttonWrapLabel"
        class="puik-alert__button"
        :data-test="dataTest != undefined ? `button-${dataTest}` : undefined"
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
      :data-test="dataTest != undefined ? `close-${dataTest}` : undefined"
      @click="close"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { generateId } from '@prestashopcorp/puik-utils';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';
import { PuikAlertVariants, ICONS } from './alert';
import type { AlertProps, AlertEmits } from './alert';
defineOptions({
  name: 'PuikAlert'
});

const props = withDefaults(defineProps<AlertProps>(), {
  variant: PuikAlertVariants.Success,
  ariaLive: PuikAriaLive.Polite
});

const emit = defineEmits<AlertEmits>();

const ariaId = `${generateId()}`;

const icon = computed(() => ICONS[props.variant]);

const click = (event: Event) => emit('click', event);
const close = (event: Event) => emit('close', event);
const clickLink = (event: Event) => emit('clickLink', event);
</script>

<style lang="postcss">
@import '@prestashopcorp/puik-theme/src/base.postcss';
@import '@prestashopcorp/puik-theme/src/puik-icon.postcss';
@import '@prestashopcorp/puik-theme/src/puik-button.postcss';
@import '@prestashopcorp/puik-theme/src/puik-alert.postcss';
</style>
