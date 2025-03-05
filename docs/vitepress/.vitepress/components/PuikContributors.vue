<template>
  <div class="contributors-container">
    <puik-tooltip
      v-for="contributor in contributors"
      :key="contributor.id"
      :heading="contributor.login"
      :disappear-delay="0"
      position="top"
    >
      <PuikAvatar
        type="photo"
        :src="contributor.avatar_url"
        size="large"
      />
    </puik-tooltip>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { PuikAvatar, PuikTooltip } from '@prestashopcorp/puik-components';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
}

const contributors = ref<Contributor[]>([]);

onMounted(async () => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/PrestaShopCorp/puik/contributors'
    );
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
    }
    contributors.value = await response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des contributeurs :', error);
  }
});
</script>
<style lang="scss">
.contributors-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
