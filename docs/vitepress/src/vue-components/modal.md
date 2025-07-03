---
description :  A Modal is a dialog component that overlays content on top of the main page. It is used to capture user attention for critical information, confirmations, or actions that require user interaction before returning to the main interface.
name: modal
aria: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
outline: deep
---
<script setup>
  import Modal from '@vitepress/components/Modal.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'title',
      type: 'string',
      default: 'undefined',
      description: 'Sets the modal title'
    },
    {
      prop: 'titleIcon',
      type: 'string',
      default: 'undefined',
      description: 'Sets the icon name of the modal on the top left corner (from Material Symbols: https://fonts.google.com/icons)'
    },
    {
      prop: 'mainButtonText',
      type: 'string',
      default: 'undefined',
      description: 'Sets the text of the main button'
    },
    {
      prop: 'secondButtonText',
      type: 'string',
      default: 'undefined',
      description: 'Sets the text of the secondary button'
    },
    {
      prop: 'sideButtonText',
      type: 'string',
      default: 'undefined',
      description: 'Sets the text of the side button'
    },
    {
      prop: 'isOpen',
      type: 'boolean',
      default: false,
      description: 'Tells if the modal is open or not'
    },
    {
      prop: 'isMainButtonDisabled',
      type: 'boolean',
      default: false,
      description: 'Sets the main button as disabled'
    },
    {
      prop: 'variant',
      type: 'PuikModalVariants',
      default: 'feedback',
      details: `
enum PuikModalVariants {
  Destructive = 'destructive',
  Feedback = 'feedback',
  Dialog = 'dialog',
}
      `,
      description: 'Sets the style of the modal (use the PuikModalVariants enum)'
    },
    {
      prop: 'size',
      type: 'PuikModalSizes',
      default: 'small',
      details: `
enum PuikModalSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
      `,
      description: 'Sets the size of the modal (use the PuikModalSizes enum)'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      description: 'Sets the data-test attribute for modal `title-${dataTest}` `mainButton-${dataTest}` `secondButton-${dataTest}` `sideButton-${dataTest}` `closeButton-${dataTest}`'
    }
  ];
</script>

# Modal

 A `Modal` is a dialog component that overlays content on top of the main page. It is used to capture user attention for critical information, confirmations, or actions that require user interaction before returning to the main interface.

## Overview

::: raw
<ComponentOverview>
  <Modal />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <puik-button @click="openModal">
    open modal
  </puik-button>

  <puik-modal
    :title="title"
    :title-icon="titleIcon"
    :main-button-text="mainButtonText"
    :second-button-text="secondButtonText"
    :side-button-text="sideButtonText"
    :is-open="isOpen"
    :isMainButtonDisabled="isMainButtonDisabled"
    :variant="variant"
    :size="size"
    :data-test="dataTest"
    @close="closeModal"
    @button-main="logAction('main action')"
    @button-second="logAction('second action')"
    @button-side="logAction('side action')"
  >
    <section class="flex flex-col gap-4">
      <h3 class="puik-h3">El Famoso Lorem Ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        aspernatur modi totam explicabo, veniam tempore praesentium
        laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
        reprehenderit repudiandae facere maiores non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        aspernatur modi totam explicabo, veniam tempore praesentium
        laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
        reprehenderit repudiandae facere maiores non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        aspernatur modi totam explicabo, veniam tempore praesentium
        laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
        reprehenderit repudiandae facere maiores non.
      </p>
    </section>
  </puik-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const mainButtonText = ref('Confirm');
const secondButtonText = ref('Cancel');
const sideButtonText = ref('Help');
const title = ref('Modal Title');
const titleIcon = ref('');
const variant = ref('default');
const size = ref('medium');
const dataTest = ref('modal-test');
const isMainButtonDisabled = ref(false);

const openModal = () => {
  isOpen.value = true;
};
const closeModal = () => {
  isOpen.value = false;
};
const logAction = (actionName: string) => {
  console.log(actionName);
  closeModal();
}

</script>


```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
