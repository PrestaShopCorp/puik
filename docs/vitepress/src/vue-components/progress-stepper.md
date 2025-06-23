---
description :   A ProgressStepper defines a multi-step progress indicator, allowing users to visualize and navigate through sequential steps in a process.
outline: deep
---
<script setup>
  import ProgressStepper from '@vitepress/components/ProgressStepper.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const stepper_attributes = [
    {
      prop: 'modelValue',
      type: 'string | number',
      default: 1,
      description: 'v-model of the current step'
    },
    {
      prop: 'default',
      type: 'VNode',
      control: 'none',
      description: 'Content of progress stepper (should be progress stepper steps)'
    },
    {
      prop: 'update:modelValue',
      type: 'event',
      description: 'Event emitted on current step change'
    }
  ];

  const step_attributes = [
    {
      prop: 'step',
      type: 'string | number',
      default: '1',
      description: 'Value of the step'
    },
    {
      prop: 'text',
      type: 'string',
      default: 'Text',
      description: 'Text of the step (slot #text)'
    },
    {
      prop: 'additional-text',
      type: 'string',
      default: 'Additional text',
      description: 'Additional text of the step (slot #additional-text)'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      description: 'Sets the data-test of the progress stepper step `stepButton-${dataTest}` `text-${dataTest}` `additionalText-${dataTest}`'
    },
    {
      prop: 'click',
      type: 'event',
      description: 'Event emitted on click step'
    }
  ]

</script>

# Progress-stepper

 A `ProgressStepper` defines a multi-step progress indicator, allowing users to visualize and navigate through sequential steps in a process.

## Overview

::: raw
<ComponentOverview>
  <Progress-stepper />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
    <div class="flex flex-col items-center justify-center">
      <puik-progress-stepper v-model="currentStep" @update:model-value="stepChange">
        <puik-progress-stepper-step :step="1">
          <template #text>Text step 1</template>
          <template #additional-text>Additional-text step 1</template>
        </puik-progress-stepper-step>
        <puik-progress-stepper-step :step="2">
          <template #text>Text step 1</template>
          <template #additional-text>Additional-text step 1</template>
        </puik-progress-stepper-step>
        <puik-progress-stepper-step :step="3">
          <template #text>Text step 1</template>
          <template #additional-text>Additional-text step 1</template>
        </puik-progress-stepper-step>
      </puik-progress-stepper>
      <div class="mt-16 flex gap-x-4">
        <puik-button :disabled="currentStep === 1" @click="prevStep">Previous step</puik-button>
        <puik-button :disabled="currentStep === 3" @click="nextStep">Next step</puik-button>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentStep = ref(1);

const nextStep = () =>
currentStep.value < 3
  ? currentStep.value++
  : currentStep.value;

const prevStep = () =>
  currentStep.value > 1
  ? currentStep.value--
  : currentStep.value;

const stepChange = () => {
  console.log('Step changed to:', currentStep.value);
};

</script>

```

:::

## API Reference (Stepper)

### Props

::: raw
<DataAttributes :attributes="stepper_attributes" />
:::

## ProgressStepperStep

A `ProgressStepperStep` component represents an individual step within the `ProgressStepper`. Each step displays its own label and optional additional text, and is defined as a child of the `ProgressStepper` component.

**Usage Example:**

```vue
<puik-progress-stepper-step :step="1">
  <template #text>Step 1 Label</template>
  <template #additional-text>Optional additional info</template>
</puik-progress-stepper-step>
```

- Use the `:step` prop to specify the step number.
- Use the `#text` slot for the main label.
- Use the `#additional-text` slot for supplementary information.

### API Reference (Step)

#### Props

::: raw
<DataAttributes :attributes="step_attributes" />
:::
