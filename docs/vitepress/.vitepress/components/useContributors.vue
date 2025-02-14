<template>
  <div>
    <puik-alert
      v-if="showAlert"
      title="Alert Vue component"
      variant="danger"
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
        This is the description of the success alert Vue component.This is the description of the success alert Vue component.This is the description of the success alert Vue component.This is the description of the success alert Vue component.This is the description of the success alert Vue component.This is the description of the success alert Vue component.This is the description of the success alert Vue component. This is the description of the success alert Vue component.This is the description of the success alert Vue component. This is the description of the success alert Vue component. This is the description of the success alert Vue component.
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
import { PuikAlert, PuikLink, PuikButton } from '@prestashopcorp/puik-components';
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
