---
description : A Snackbar
name: snackbar
outline: deep
---
<script setup>
  import SnackbarDeclarative from '@vitepress/components/SnackbarDeclarative.vue';
  import SnackbarProgrammatic from '@vitepress/components/SnackbarProgrammatic.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const snackbar_attributes = [
  {
    prop: 'id',
    type: 'string',
    default: 'puik-snackbar-{randomNumber}',
    description: 'Sets the snackbar id. If this prop is not configured, an id will be automatically generated using this pattern: puik-snackbar-{randomNumber}'
  },
  {
    prop: 'open',
    type: 'boolean',
    default: false,
    description: 'The controlled open state of the snackbar. Can be bind as v-model:open.'
  },
  {
    prop: 'title',
    type: 'string',
    default: 'undefined',
    description: 'Sets the snackbar title'
  },
  {
    prop: 'description',
    type: 'string',
    default: 'undefined',
    description: 'Sets the snackbar description'
  },
  {
    prop: 'duration',
    type: 'number',
    default: 5000,
    description: 'Time in milliseconds that snackbar should remain visible for. Overrides value given to PuikSnackbarProvider component.'
  },
  {
    prop: 'variant',
    type: 'PuikSnackbarVariants',
    details: `
enum PuikSnackbarVariants {
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
}
    `,
    default: 'default',
    description: 'Sets the color variant of the snackbar'
  },
  {
    prop: 'swipeAnimation',
    type: 'PuikSnackbarSwipeAnimations',
        details: `
enum PuikSnackbarSwipeAnimations {
  Right = 'slide-right',
  Left = 'slide-left',
  Up = 'slide-up',
  Down = 'slide-down',
}
    `,
    default: 'slide-right',
    description: 'Sets the swipe animation (to close the snackbar dialog)'
  },
  {
    prop: 'hasCloseButton',
    type: 'boolean',
    default: false,
    description: 'Add a close button'
  },
  {
    prop: 'action',
    type: 'Component',
    description: 'Sets the action button of the snackbar (useful in case of programmatic snackbar - see useSnackbar function)'
  },
  {
    prop: 'onOpenChange',
    type: 'function',
    description: 'Emits when the open state of the snackbar changes. The open state is passed as an argument.'
  }
]

  const snackbar_provider_attributes = [
  {
    prop: 'label',
    type: 'string',
    default: 'Notification',
    description: 'A label located on each toast. Used to help screen reader users associate the interruption with a toast.'
  },
  {
    prop: 'duration',
    type: 'number',
    default: 5000,
    description: 'Time in milliseconds that snackbars should remain visible for.'
  },
  {
    prop: 'swipeDirection',
    type: 'PuikSnackbarSwipeDirections',
    details: `
enum PuikSnackbarSwipeDirections {
  Right = 'right',
  Left = 'left',
  Up = 'up',
  Down = 'down',
}
    `,
    default: 'right',
    description: 'Sets the swipe direction on mobile (to close the snackbar dialog)'
  },
  {
    prop: 'swipeThreshold',
    type: 'number',
    default: 50,
    description: 'Distance in pixels that the swipe must pass before a close is triggered.'
  },
  {
    prop: 'positionX',
    type: 'PuikSnackbarPositionsX',
    details: `
enum PuikSnackbarPositionsX {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}
    `,
    default: 'center',
    description: 'Set horizontal axis position of the snackbars viewport'
  },
  {
    prop: 'positionY',
    type: 'PuikSnackbarPositionsY',
    details: `
enum PuikSnackbarPositionsY {
  Up = 'up',
  Down = 'down',
}
    `,
    default: 'down',
    description: 'Set vertical axis position of the snackbars viewport'
  }
]
</script>

# Snackbar

A `Snackbar` is a UI component that displays brief messages overlaying the interface, typically near the edge of the screen. It is commonly used to provide feedback about an operation, such as confirming an action or showing an error message. Snackbars can be triggered declaratively within templates or programmatically using the `useSnackbar` function. Their position can be customized.

## Declarative use of the snackbar

### Declarative Overview

::: raw
<ComponentOverview>
  <SnackbarDeclarative />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <div>
    <puik-button @click="openRef = true">
      Display snackbar
    </puik-button>
    <puik-snackbar-provider
      label="Notification"
      :duration="5000"
      swipe-direction="right"
      :swipe-threshold="50"
      position-x="right"
      position-y="up"
    >
      <puik-snackbar
        id="test-toast"
        :open="openRef"
        title="Snackbar Title"
        description="Snackbar Description"
        variant="default"
        :duration="5000"
        swipe-animation="slide-right"
        :has-close-button="true"
        @update:open="openRef = false"
      >
        <template #action>
          <puik-button
            @click="console.log('action btn triggered')"
          >
            action
          </puik-button>
        </template>
      </puik-snackbar>
    </puik-snackbar-provider>
  </div>
</template>

<script setup lang="ts">
import { ref} from 'vue';

const openRef = ref(false);
</script>

```

:::

## Programmatic use of the snackbar

## useSnackbar function

The `useSnackbar` function provides a programmatic way to manage snackbars, including adding, dismissing, and removing them from the UI.

### Parameters

- **props** (`UseSnackbarProps`): The properties for the new snackbar. This type is `Omit<SnackbarProps, 'id' | 'duration'>`, meaning you don't need to provide `id` (auto-generated) or `duration` (set by `removeDelay`).
- **state** (`SnackbarsState`): The current array of snackbars (`SnackbarProps[]`).
- **snackbarsLimit** (`number`): Maximum number of snackbars allowed at once. Default is `0` (no limit).
- **removeDelay** (`number`): Duration in milliseconds before a snackbar is automatically dismissed. Default is `5000`.

### Return Value

An object with the following properties:

- **sackbarsState**: The updated array of snackbars.
- **id**: The ID of the newly added snackbar.
- **dismissSnackbar(id: string)**: Function to dismiss a snackbar by its ID.
- **removeSnackbar(state: SnackbarsState)**: Function to remove closed snackbars from the state.

> **Note:**
> See the code snippet below for a practical example of how to use these functions.

### Programmatic Overview

::: raw
<ComponentOverview>
  <SnackbarProgrammatic />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <div>
    <div class="flex flex-col gap-y-4 max-w-fit">
      <puik-label for="snackbar-duration">
        duration
      </puik-label>
      <puik-input
        id="snackbar-duration"
        v-model="snackbarRemoveDelay"
        type="number"
      />
      <puik-label for="snackbars-limit">
        snackbars limit
      </puik-label>
      <puik-input
        id="snackbars-limit"
        v-model="snackbarsLimit"
        type="number"
      />
      <puik-button
        @click="handleClick1"
      >
        Display snackbar programatically 1
      </puik-button>

      <puik-button
        @click="handleClick2"
      >
        Display snackbar programatically 2
      </puik-button>
      <puik-button
        @click="handleClick3"
      >
        Display snackbar programatically 3
      </puik-button>
    </div>

    <puik-snackbar-provider
      label="Notification"
      :duration="5000"
      swipe-direction="right"
      :swipe-threshold="50"
      position-x="right"
      position-y="up"
    >
      <puik-snackbar
        v-for="snackbar in state"
        :key="snackbar.id"
        v-bind="snackbar"
      >
        <template
          v-if="isVNode(snackbar.action)"
          #action
        >
          <component :is="snackbar.action" />
        </template>
      </puik-snackbar>
    </puik-snackbar-provider>
  </div>
</template>

<script setup lang="ts">
import { PuikLabel, PuikInput, PuikSnackbarProvider, PuikSnackbar, type SnackbarsState, PuikButton, useSnackbar } from '@prestashopcorp/puik-components';
import { ref, isVNode, h } from 'vue';

const snackbarsLimit = ref(0);
const snackbarRemoveDelay = ref(4000);

const state = ref<SnackbarsState>([]);

const handleClick1 = () => {
  const { sackbarsState, removeSnackbar } = useSnackbar(
    {
      title: 'Snackbar 1',
      description: 'description of snackbar 1',
      hasCloseButton: true,
      variant: 'success',
      onOpenChange: (open) => {
        if (!open) {
          state.value = removeSnackbar(state.value);
          console.log('state after remove', state.value);
        }
      },
      action: h(PuikButton, { onClick: () => console.log('action 1 triggered') }, () => 'action 1')
    },
    state.value,
    snackbarsLimit.value,
    snackbarRemoveDelay.value
  );
  state.value = sackbarsState;
  console.log('state before remove', state.value);
};

const handleClick2 = () => {
  const { sackbarsState, removeSnackbar } = useSnackbar(
    {
      title: 'Snackbar 2',
      description: 'description of snackbar 2',
      hasCloseButton: true,
      variant: 'default',
      onOpenChange: (open) => {
        if (!open) {
          state.value = removeSnackbar(state.value);
          console.log('state after remove', state.value);
        }
      },
      action: h(PuikButton, { onClick: () => console.log('action 2 triggered') }, () => 'action 2')
    },
    state.value,
    snackbarsLimit.value,
    snackbarRemoveDelay.value
  );
  state.value = sackbarsState;
  console.log('state before remove', state.value);
};

const handleClick3 = () => {
  const { sackbarsState, removeSnackbar } = useSnackbar(
    {
      title: 'Snackbar 3',
      description: 'description of snackbar 3',
      hasCloseButton: true,
      variant: 'danger',
      onOpenChange: (open) => {
        if (!open) {
          state.value = removeSnackbar(state.value);
          console.log('state after remove', state.value);
        }
      },
      action: h(PuikButton, { onClick: () => console.log('action 3 triggered') }, () => 'action 3')
    },
    state.value,
    snackbarsLimit.value,
    snackbarRemoveDelay.value
  );
  state.value = sackbarsState;
  console.log('state before remove', state.value);
};

</script>

```

:::

## API Reference

### Snackbar Props

::: raw
<DataAttributes :attributes="snackbar_attributes" />
:::

### Snackbar provider Props

### Snackbar Provider

The `SnackbarProvider` component is used to wrap your application or a section of it, enabling the display and management of snackbars. It provides context and configuration for all snackbars rendered within its scope.

::: raw
<DataAttributes :attributes="snackbar_provider_attributes" />
:::
