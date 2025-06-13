---
title: Alert
description: An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound. It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes.
aria: https://www.w3.org/WAI/ARIA/apg/patterns/alert/
---
<script setup>
  import Alert from '@vitepress/components/Alert.vue';
  import DataAttributes from '@vitepress/components/DataAttributes.vue';
  import ComponentOverview from '@vitepress/components/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'title',
      default: 'undefined',
      type: 'string',
      description: 'Sets the alert title',
      required: false
    },
    {
      prop: 'description',
      default: 'undefined',
      type: 'string',
      description: 'Sets the alert description (also exists as a default slot)',
      required: false
    },
    {
      prop: 'variant',
      default: 'success',
      type: 'PuikAlertVariants',
      details: `
export enum PuikAlertVariants {
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info'
}
      `,
      description: 'Sets the alert variant',
      required: false
    },
    {
      prop: 'isClosable',
      default: 'false',
      type: 'boolean',
      description: 'Displays a close button which emits a `close event` on click',
      required: false
    },
    {
      prop: 'disableBorders',
      default: 'false',
      type: 'boolean',
      description: 'Disables alert borders',
      required: false
    },
    {
      prop: 'buttonLabel',
      default: 'undefined',
      type: 'string',
      description: 'Label of the Action button',
      required: false
    },
    {
      prop: 'linkLabel',
      default: 'undefined',
      type: 'string',
      description: 'Label of the Link button',
      required: false
    },
    {
      prop: 'buttonWrapLabel',
      default: 'false',
      type: 'boolean',
      description: 'Sets the carriage return for label of Action and Link buttons',
      required: false
    },
    {
      prop: 'leftIconBtn',
      default: 'undefined',
      type: 'string',
      description: 'Sets icon on the left side of the Action button (from Material Symbols: https://fonts.google.com/icons)',
      required: false
    },
    {
      prop: 'rightIconBtn',
      default: 'undefined',
      type: 'string',
      description: 'Sets icon on the right side of the Action button (from Material Symbols: https://fonts.google.com/icons)',
      required: false
    },
    {
      prop: 'leftIconLink',
      default: 'undefined',
      type: 'string',
      description: 'Sets icon on the left side of the Link button (from Material Symbols: https://fonts.google.com/icons)',
      required: false
    },
    {
      prop: 'rightIconLink',
      default: 'undefined',
      type: 'string',
      description: 'Sets icon on the right side of the Link button (from Material Symbols: https://fonts.google.com/icons)',
      required: false
    },
    {
      prop: 'internalLink',
      default: 'undefined',
      type: 'string',
      description: 'Internal link for the Link button (use vue `router-link` under the hood)',
      required: false
    },
    {
      prop: 'externalLink',
      default: 'undefined',
      type: 'string',
      description: 'External link for the Link button (use a native `a` tag link under the hood)',
      required: false
    },
    {
      prop: 'ariaLive',
      default: 'polite',
      type: 'polite | assertive | off',
      description: 'Option for "aria-live" attribute',
      required: false
    },
    {
      prop: 'ariaLabelBtn',
      default: 'undefined',
      type: 'string',
      description: 'ARIA label for the Action button',
      required: false
    },
    {
      prop: 'ariaLabelLink',
      default: 'undefined',
      type: 'string',
      description: 'ARIA label for the Link button',
      required: false
    },
    {
      prop: 'dataTest',
      default: 'undefined',
      type: 'string',
      description: 'Sets the data-test attribute for the alert components `title-${dataTest}` `description-${dataTest}` `button-${dataTest}',
      required: false
    }
  ];
</script>

## Alert

An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound. It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes.

::: raw
<ComponentOverview>
  <Alert />
</ComponentOverview>
:::

::: details Show Code

```vue
<template>
  <div>
    <puik-alert
      v-if="showAlert"
      title="Alert Vue component"
      variant="success"
      :is-closable="true"
      :disable-borders="false"
      button-label="buttonLabel buttonLabel buttonLabel"
      link-label="see more"
      right-icon-link="open_in_new"
      left-icon-link="open_in_new"
      external-link="https://example.com"
      :button-wrap-label="false"
      @click="alertclick"
      @click-link="alertLink"
      @close="handleClose"
    >
      <div>
        This is the description of the success alert Vue component.
      </div>
      <puik-link
        target="_blank"
        href="https://example.com"
      >
        test link
      </puik-link>
    </puik-alert>

    <puik-button
      v-if="!showAlert"
      @click="showAlert = !showAlert"
    >
      refresh alert
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showAlert = ref(true);

const alertclick = (_event: Event) => {
  console.log('alert btn clicked');
};
const alertLink = (_event: Event) => {
  console.log('alert link clicked');
};
const handleClose = (event: Event) => {
  console.log(event);
  showAlert.value = false;
};
</script>
```

:::

### API Reference

::: raw
<DataAttributes :attributes="attributes" />
:::
