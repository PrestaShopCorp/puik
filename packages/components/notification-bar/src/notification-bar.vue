<template>
  <teleport
    :disabled="teleport === undefined"
    :to="teleport ? teleport.to : 'body'"
  >
    <div
      v-if="messages && messages.length"
      ref="domNotificationBar"
      class="notification-bar"
    >
      <aside
        class="notification-bar__container"
        :class="[
          `notification-bar__container--${variant}`,
          { 'notification-bar__container--closable': closable },
        ]"
      >
        <div
          v-for="(message, index) in messages"
          :key="index"
          ref="domMessages"
          class="notification-bar__item"
          :class="{
            'notification-bar__item--invisible': index !== 0,
            'notification-bar__item--enter': index !== 0,
          }"
        >
          <puik-icon
            v-if="message.icon"
            :icon="message.icon"
            class="notification-bar-item__icon"
            font-size="1.5rem"
          />
          <div class="notification-bar-item__content">
            <p class="notification-bar-item__text">
              {{ message.text }}
            </p>
            <puik-button
              v-if="message.link"
              size="sm"
              class="notification-bar-item__link"
              variant="primary"
              right-icon="arrow_forward"
              :href="message.link.url"
            >
              {{ message.link.text }}
            </puik-button>
          </div>
        </div>
        <div
          :class="[
            'notification-bar-close__container',
            `notification-bar-close__container--${variant}`,
          ]"
        >
          <puik-button
            v-if="closable"
            class="notification-bar__close-button"
            variant="text"
            @click="close"
          >
            <puik-icon
              class="notification-bar-close-button__icon"
              icon="close"
              font-size="1.5rem"
            />
          </puik-button>
        </div>
      </aside>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue';

import { PuikButton } from '@prestashopcorp/puik-components/button';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';

import { type NotificationBarProps, PuikNotificationBarVariants } from './notification-bar';

defineOptions({
  name: 'PuikNotificationBar'
});

const props = withDefaults(defineProps<NotificationBarProps>(), {
  variant: PuikNotificationBarVariants.Blue,
  closable: true
});

const emit = defineEmits(['close']);

const domMessages = ref<HTMLElement[]>([]);
const domNotificationBar = ref<HTMLElement>();
const animationInterval = ref<null | ReturnType<typeof setInterval>>(null);

const timeToDisplay = 5000;
const timeTransition = 800;
const notificationBarItemClass = 'notification-bar__item';

const close = () => {
  emit('close');
};

const clearAnimationInterval = () => {
  if (animationInterval.value) {
    clearInterval(animationInterval.value);
    animationInterval.value = null;
  }
};

const enterElement = (element: HTMLElement): void => {
  if (element?.classList) {
    element.classList.remove(`${notificationBarItemClass}--invisible`);
    element.classList.remove(`${notificationBarItemClass}--enter`);
  }
};

const leaveElement = (element: HTMLElement): void => {
  element.classList.add(`${notificationBarItemClass}--leave`);
  setTimeout(() => {
    element.classList.add(`${notificationBarItemClass}--invisible`);
    element.classList.add(`${notificationBarItemClass}--enter`);
    element.classList.remove(`${notificationBarItemClass}--leave`);
  }, timeTransition);
};

const switchElements = () => {
  clearAnimationInterval();

  const elements = [...domMessages.value];
  const elementsNumber = elements.length;

  if (elementsNumber === 1) return;

  let currentElementDisplayed = 0;

  animationInterval.value = setInterval(() => {
    const nextElementNumber =
      elementsNumber - 1 >= currentElementDisplayed + 1
        ? currentElementDisplayed + 1
        : 0;
    leaveElement(elements[currentElementDisplayed]);
    enterElement(elements[nextElementNumber]);
    currentElementDisplayed = nextElementNumber;
  }, timeToDisplay);
};

watchEffect(() => {
  if (props.messages?.length > 1) {
    switchElements();
  } else if (props.messages?.length <= 1 && domMessages.value[0]) {
    clearAnimationInterval();
    enterElement(domMessages.value[0]);
  }
});

onMounted(() => {
  if (props.teleport && props.teleport.prepend === true) {
    if (domNotificationBar.value) {
      const parent = domNotificationBar.value.parentNode;
      if (parent) {
        parent.prepend(domNotificationBar.value);
      }
    }
  }
});

onBeforeUnmount(() => {
  clearAnimationInterval();
});
</script>
