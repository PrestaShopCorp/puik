<template>
  <nav
    v-if="internalItems && internalItems.length"
    class="puik-breadcrumb"
    role="navigation"
  >
    <PuikIcon
      v-if="icon"
      class="puik-breadcrumb__home-icon"
      :icon="icon"
      :font-size="16"
    />

    <div
      v-for="(item, index) in internalItems.slice(0, internalItems.length - 1)"
      :key="`puik-breadcrumb-item-${index}`"
      class="puik-breadcrumb__item"
    >
      <PuikLink
        class="puik-breadcrumb__item-link"
        :to="item.to"
        :href="item.href"
        :target="item.target"
        :data-test="item.dataTest ? item.dataTest : undefined"
        size="sm"
      >
        {{ item.label }}
      </PuikLink>

      <PuikIcon
        class="puik-breadcrumb__item-icon"
        :icon="separatorIcon"
        :font-size="16"
      />
    </div>

    <div
      v-if="internalItems.length"
      class="puik-breadcrumb__item--last"
      :data-test="
        internalItems[internalItems.length - 1].dataTest
          ? internalItems[internalItems.length - 1].dataTest
          : undefined
      "
    >
      {{ internalItems[internalItems.length - 1].label }}
    </div>
  </nav>
</template>

<script setup lang="ts">
import PuikLink from '../../link/src/link.vue';
import PuikIcon from '../../icon/src/icon.vue';
import { computed, ref, watch } from 'vue';
import type { BreadcrumbProps, BreadcrumbItem } from './breadcrumb';
defineOptions({
  name: 'PuikBreadcrumb'
});

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separatorIcon: 'keyboard_arrow_right'
});

const internalItems = ref<BreadcrumbItem[]>([]);

const itemsToWatch = computed(() => {
  return props.itemsJson ? JSON.parse(props.itemsJson) : props.items;
});

watch(itemsToWatch, (newValue) => {
  internalItems.value = newValue;
}, { immediate: true });
</script>
