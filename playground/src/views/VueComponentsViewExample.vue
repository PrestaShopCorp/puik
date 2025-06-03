<!--
This file is for example purposes and should not be used for testing as it is tracked by git on the repo.
You must copy this file and rename the copy to VueComponentsView.vue (to match the Vue Router config of the playground).
This is the copied file that can be used locally for testing
-->
<script setup lang="ts">
import { PuikAlert } from '@prestashopcorp/puik-components';

const Alertclick = (event: Event) => {
  console.log('alert btn clicked', event);
};
</script>

<template>
  <section class="vue-components-view">
    <h2 class="puik-h2 pb-4">
      Vue Components
    </h2>

    <puik-alert
      title="Alert Vue component"
      variant="success"
      :disable-borders="false"
      button-label="button label"
      @click="Alertclick"
    >
      This is the description of the success alert Vue component
    </puik-alert>
  </section>
</template>

