<template>
  <nav v-if="items.length" class="puik-breadcrumb">
    <PuikIcon
      v-if="icon"
      class="puik-breadcrumb__home-icon"
      :icon="icon"
      font-size="16px"
    ></PuikIcon>

    <div
      v-for="(item, index) in items"
      :key="`puik-breadcrumb-item-${index}`"
      class="puik-breadcrumb__item"
    >
      <PuikLink
        class="puik-breadcrumb__item-link"
        :to="item.to"
        :href="item.href"
        :target="item.target"
        variant="text"
      >
        {{ item.label }}
      </PuikLink>

      <PuikIcon
        v-if="index < items.length - 1"
        class="puik-breadcrumb__item-icon"
        :icon="separatorIcon"
        font-size="20px"
      ></PuikIcon>
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
