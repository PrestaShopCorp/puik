<script setup lang="ts">
import { onMounted } from 'vue';
import { PuikAlertCe, initWeb } from '@prestashopcorp/puik-web-components';

onMounted(() => {
  const alertWebComponent = document.querySelector('puik-alert-ce') as HTMLElement;
  if (alertWebComponent) {
    alertWebComponent.addEventListener('click', () => {
      console.log('alert btn clicked');
    });
  }
});

// Use the initWeb function to register the web-component.
// Nb: Here, to avoid warnings when compiling the playground Vue3 app, vite is set to correctly compile the web-components if the tag ends with "-ce".
// On an agnostic application, you can name your web-component whatever you want.
initWeb('puik-alert-ce', PuikAlertCe);
</script>

<template>
  <section class="web-components-view">
    <h2 class="puik-h2 pb-4">
      Web Components
    </h2>

    <puik-alert-ce
      title="Alert Web component"
      variant="success"
      button-label="button label"
      description="This is the description of the success alert Web component"
    />
  </section>
</template>

<style  scoped lang="scss">
.web-components-view{
  @apply flex flex-col space-y-3;
}
</style>
