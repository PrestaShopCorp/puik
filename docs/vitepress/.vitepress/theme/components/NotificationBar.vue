<template>
  <div class="flex items-center justify-center">
    <puik-notification-bar
        :variant="variant"
        :closable="closable"
        :messages="messages"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const messages = ref([
  {
    icon: "sentiment_satisfied",
    text: "Promo : profitez de -20% sur tous nos produits !",
    link: {
      url: "#",
      text: "J'en profite",
    },
  },
  {
    text: 'This is another notification message.',
    type: 'success'
  },
]);

const variant = ref('blue');
const closable = ref(true);

</script>

