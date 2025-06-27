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
