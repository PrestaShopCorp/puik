<template>
  <div
    class="puik-alert"
    :class="[
      `puik-alert--${variant}`,
      {
        'puik-alert--no-borders': disableBorders,
        'puik-alert--no-background': disableBackground,
      },
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
    <div class="puik-alert__icon-wrapper">
      <PuikIcon
        :icon="icon"
        font-size="1.5rem"
        class="puik-alert__icon"
      />
    </div>

    <div class="puik-alert__container">
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
        <div
          v-if="inlineLinkLabel"
          class="puik-alert__inline-link"
        >
          <PuikLink
            v-bind="{
              ...(internalInlineLink ? { 'to': internalInlineLink } : {}),
              ...(externalInlineLink ? { 'href': externalInlineLink } : {}),
              ...(ariaLabelInlineLink ? { 'aria-label': ariaLabelInlineLink } : {}),
            }"
            class="puik-alert__inline-link-label"
            :target="inlineLinkTarget"
            :data-test="
              dataTest != undefined ? `inline-link-${dataTest}` : undefined
            "
            @click="clickInlineLink"
          >
            {{ inlineLinkLabel }}
          </PuikLink>
        </div>
      </div>

      <div
        v-if="linkLabel || buttonLabel"
        class="puik-alert__actions"
      >
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
          force-legacy-text-variant
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

      <button
        v-if="isClosable"
        type="button"
        class="puik-alert__close"
        :aria-label="ariaLabelClose"
        :data-test="dataTest != undefined ? `close-${dataTest}` : undefined"
        @click="close"
      >
        <PuikIcon
          icon="close"
          font-size="1.5rem"
          class="puik-alert__close-icon"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { PuikLink, PuikLinkTargetVariants } from '@prestashopcorp/puik-components/link';
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';
import { PuikAlertVariants, ICONS, DEFAULT_CLOSE_ARIA_LABEL } from './alert';
import type { AlertProps, AlertEmits } from './alert';
defineOptions({
  name: 'PuikAlert'
});

const props = withDefaults(defineProps<AlertProps>(), {
  variant: PuikAlertVariants.Success,
  ariaLive: PuikAriaLive.Polite,
  inlineLinkTarget: PuikLinkTargetVariants.Self,
  ariaLabelClose: DEFAULT_CLOSE_ARIA_LABEL
});

const emit = defineEmits<AlertEmits>();

const ariaId = useId();

const icon = computed(() => ICONS[props.variant]);

const click = (event: Event) => emit('click', event);
const close = (event: Event) => emit('close', event);
const clickLink = (event: Event) => emit('clickLink', event);
const clickInlineLink = (event: Event) => emit('clickInlineLink', event);
</script>
