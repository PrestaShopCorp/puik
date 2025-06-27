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
