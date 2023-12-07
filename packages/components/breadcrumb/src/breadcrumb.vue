<template>
  <nav
    v-if="items.length"
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
      v-for="(item, index) in items.slice(0, items.length - 1)"
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
      class="puik-breadcrumb__item--last"
      :data-test="
        items[items.length - 1].dataTest
          ? items[items.length - 1].dataTest
          : undefined
      "
    >
      {{ items[items.length - 1].label }}
    </div>
  </nav>
</template>

<script setup lang="ts">
import PuikLink from '../../link/src/link.vue';
import PuikIcon from '../../icon/src/icon.vue';
import type { BreadcrumbProps } from './breadcrumb';
defineOptions({
  name: 'PuikBreadcrumb'
});

withDefaults(defineProps<BreadcrumbProps>(), {
  separatorIcon: 'keyboard_arrow_right'
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-breadcrumb.scss';
</style>
