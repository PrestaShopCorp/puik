<template>
  <div
    class="puik-accordion"
    :data-test="dataTest"
    :class="{
      'puik-accordion--expanded': isExpanded,
      'puik-accordion--disabled': disabled,
      'puik-accordion--border-none': borderNone,
    }"
    role="region"
    :aria-labelledby="`header-${id}`"
  >
    <button
      :id="`header-${id}`"
      ref="accordionHeader"
      :aria-expanded="isExpanded"
      :aria-controls="id"
      class="puik-accordion__header"
      :disabled="disabled"
      :data-test="dataTest != undefined ? `button-${dataTest}` : undefined"
      role="button"
      :aria-label="title"
      @click="onClick"
      @keydown="onKeydown"
    >
      <puik-icon
        v-if="icon"
        class="puik-accordion__header__icon"
        :icon="icon"
        :font-size="24"
        :data-test="dataTest != undefined ? `icon-${dataTest}` : undefined"
      />
      <div class="puik-accordion__header__content">
        <div
          class="puik-accordion__header__content__title"
          :data-test="dataTest != undefined ? `title-${dataTest}` : undefined"
        >
          {{ title }}
        </div>
        <div
          v-if="subTitle"
          class="puik-accordion__header__content__sub-title"
          :data-test="
            dataTest != undefined ? `subTitle-${dataTest}` : undefined
          "
        >
          {{ subTitle }}
        </div>
      </div>
      <puik-icon
        class="puik-accordion__header__expand__icon"
        icon="keyboard_arrow_down"
        :font-size="24"
      />
    </button>

    <div
      v-show="isExpanded"
      :id="id"
      ref="accordionContent"
      class="puik-accordion__content"
      tabindex="-1"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, ref } from 'vue';
import { generateId } from '@prestashopcorp/puik-utils';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { accordionGroupKey } from './accordion-group';
import type { AccordionProps } from './accordion';
defineOptions({
  name: 'PuikAccordion'
});
const emit = defineEmits<{ click: [name: string] }>();

const id = `puik-accordion-${generateId()}`;

const props = defineProps<AccordionProps>();
const { accordionsList, handleChange, expandedAccordions } =
  inject(accordionGroupKey)!;

const isExpanded = computed(() => {
  if (Array.isArray(expandedAccordions.value)) {
    return expandedAccordions.value.some((name) => props.name === name);
  }

  return props.name === expandedAccordions.value;
});

accordionsList.value.push({ name: props.name, expanded: isExpanded.value });

const accordionContent = ref<HTMLDivElement | null>(null);
const accordionHeader = ref<HTMLButtonElement | null>(null);

function onClick() {
  handleChange(props.name);
  emit('click', props.name);
  nextTick(() => {
    if (isExpanded.value && accordionContent.value) {
      accordionContent.value.focus();
    }
  });
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    onClick();
  }
}
</script>

<style lang="css">
@import '../style/index.css';
</style>
