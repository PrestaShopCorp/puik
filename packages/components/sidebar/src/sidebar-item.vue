<template>
  <MenuItem
    v-if="isMenuItem"
    v-slot="{ active: focused }"
    class="puik-sidebar-item"
    :class="{ 'puik-sidebar-item--active': active }"
    :data-test="dataTest"
  >
    <puik-button
      :aria-label="title"
      :class="{ 'puik-sidebar-item--focus': focused }"
      :to="to"
      :href="href"
      fluid
      variant="text"
      class="puik-sidebar-item__button"
      :data-test="
        dataTest != undefined ? `menubuttonTitle-${dataTest}` : undefined
      "
    >
      {{ title }}
    </puik-button>
  </MenuItem>
  <puik-button
    v-else
    class="puik-sidebar-item puik-sidebar-item__button"
    :class="{ 'puik-sidebar-item--active': active }"
    :aria-label="title"
    :left-icon="icon"
    :to="to"
    :href="href"
    fluid
    variant="text"
    :data-test="dataTest != undefined ? `buttonTitle-${dataTest}` : undefined"
  >
    <span
      v-if="isExpanded"
      :data-test="dataTest != undefined ? `title-${dataTest}` : undefined"
    >{{ title }}</span>
  </puik-button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { MenuItem } from '@headlessui/vue';
import PuikButton from '../../button';
import { sidebarKey, groupItemKey } from './sidebar';
import { type SidebarItemProps } from './sidebar-item';

defineOptions({
  name: 'PuikSidebarItem'
});

defineProps<SidebarItemProps>();
const sidebarValues = inject(sidebarKey, null);
const groupItemValues = inject(groupItemKey, false);

const isExpanded = computed(() => sidebarValues?.extended.value);
const isMenuItem = computed(
  () => !sidebarValues?.extended.value && groupItemValues
);
</script>

<style lang="postcss">
@import '@prestashopcorp/puik-theme/src/base.postcss';
@import '@prestashopcorp/puik-theme/src/puik-sidebar-item.postcss';
@import '@prestashopcorp/puik-theme/src/puik-button.postcss';
</style>
