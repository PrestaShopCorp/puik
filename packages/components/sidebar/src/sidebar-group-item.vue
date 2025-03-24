<template>
  <div
    class="puik-sidebar-group-item"
    :class="{
      'puik-sidebar-group-item--active': active,
    }"
    :data-test="dataTest"
  >
    <puik-accordion
      v-if="isExpanded"
      :title="title"
      :name="accordionName"
      :icon="icon"
      class="puik-sidebar-group-item__accordion"
      :data-test="
        dataTest != undefined ? `sidebarAccordion-${dataTest}` : undefined
      "
    >
      <slot />
    </puik-accordion>
    <Menu v-else>
      <MenuButton
        as="template"
        class="puik-sidebar-group-item__menu-button"
      >
        <puik-button
          variant="text"
          fluid
          class="puik-sidebar-group-item__collapsed-button"
          :data-test="
            dataTest != undefined ? `sidebarMenuButton-${dataTest}` : undefined
          "
        >
          <puik-icon
            :icon="icon"
            font-size="1.25rem"
          />
        </puik-button>
      </MenuButton>
      <MenuItems class="puik-sidebar-group-item__menu-content">
        <slot />
      </MenuItems>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { provide, inject, computed } from 'vue';
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
import { generateId } from '@prestashopcorp/puik-utils';
import PuikAccordion from '../../accordion';
import PuikButton from '../../button';
import PuikIcon from '../../icon';
import { groupItemKey, sidebarKey } from './sidebar';
import { type SidebarGroupItemsProps } from './sidebar-group-item';

defineOptions({
  name: 'PuikSidebarGroupItem'
});
const props = defineProps<SidebarGroupItemsProps>();

const accordionName = props.name ?? `sidebar-item-${generateId()}`;
const sidebarValues = inject(sidebarKey, null);
provide(groupItemKey, true);

const isExpanded = computed(() => sidebarValues?.extended.value);
</script>
