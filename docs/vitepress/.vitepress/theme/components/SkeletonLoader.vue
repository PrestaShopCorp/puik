<template>
  <puik-skeleton-loader-group>
    <template v-for="variant in skeletonLoaderVariants" :key="variant">
      <puik-skeleton-loader
        :variant="variant"
        class="mb-4"
      />
    </template>
  </puik-skeleton-loader-group>
</template>

<script setup lang="ts">
import { PuikSkeletonLoaderVariants } from '@prestashopcorp/puik-components';

const skeletonLoaderVariants = Object.values(PuikSkeletonLoaderVariants);
</script>
