<template>
  <nav v-if="items.length" class="puik-breadcrumb" role="navigation">
    <PuikIcon
      v-if="icon"
      class="puik-breadcrumb__home-icon"
      :icon="icon"
      :font-size="16"
    ></PuikIcon>

    <div
      v-for="(item, index) in items.slice(0, items.length - 1)"
      :key="`puik-breadcrumb-item-${index}`"
      class="puik-breadcrumb__item"
    >
      <PuikLink
        class="puik-breadcrumb__item-link"
        :to="item.to"
        :href="item.href"
        :target="item.target"
        size="sm"
      >
        {{ item.label }}
      </PuikLink>

      <PuikIcon
        class="puik-breadcrumb__item-icon"
        :icon="separatorIcon"
        :font-size="16"
      ></PuikIcon>
    </div>

    <div class="puik-breadcrumb__item--last">
      {{ items[items.length - 1].label }}
    </div>
  </nav>
</template>

<script setup lang="ts">
import PuikLink from '../../link/src/link.vue'
import PuikIcon from '../../icon/src/icon.vue'
import { breadcrumbProps } from './breadcrumb'
defineOptions({
  name: 'PuikBreadcrumb',
})

defineProps(breadcrumbProps)
</script>
