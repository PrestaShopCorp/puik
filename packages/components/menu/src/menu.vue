<template>
  <div class="wrapper">
    <!-- This div is needed to prevent flex/block parent behaviour -->
    <Menu v-slot="{ open }" class="puik-menu" as="div">
      <MenuButton class="puik-menu__trigger" as="div">
        <slot name="trigger"></slot>
      </MenuButton>

      <transition
        enter-active-class="puik-menu__transition__enter--active"
        enter-from-class="puik-menu__transition__enter--from"
        enter-to-class="puik-menu__transition__enter--to"
        leave-active-class="puik-menu__transition__leave--active"
        leave-from-class="puik-menu__transition__leave--from"
        leave-to-class="puik-menu__transition__leave--to"
      >
        <MenuItems
          class="puik-menu__content"
          :class="[
            { 'puik-menu__content--visible': open },
            `puik-menu__content__position--${position}`,
            `puik-menu__content__align--${align}`,
          ]"
          :style="{ maxHeight }"
        >
          <slot></slot>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuItems, MenuButton } from '@headlessui/vue'
import { menuProps } from './menu'

defineOptions({
  name: 'PuikMenu',
})
defineProps(menuProps)
</script>
