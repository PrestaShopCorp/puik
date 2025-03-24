<template>
  <div
    role="tablist"
    :aria-label="props.ariaLabel"
    class="puik-tab-navigation__group-titles"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { type TabNavigationGroupTitlesProps } from './tab-navigation-group-titles';

defineOptions({
  name: 'PuikTabNavigationGroupTitles'
});

const props = defineProps<TabNavigationGroupTitlesProps>();
</script>
