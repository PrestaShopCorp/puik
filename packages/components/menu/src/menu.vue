<template>
  <Popover v-slot="{ open, close }" class="puik-menu">
    <PopoverButton ref="button" class="puik-menu__activator" as="template">
      <slot name="activator" :open="open" :close="close"></slot>
    </PopoverButton>

    <transition
      enter-active-class="puik-menu__transition__enter--active"
      enter-from-class="puik-menu__transition__enter--from"
      enter-to-class="puik-menu__transition__enter--to"
      leave-active-class="puik-menu__transition__leave--active"
      leave-from-class="puik-menu__transition__leave--from"
      leave-to-class="puik-menu__transition__leave--to"
    >
      <PopoverPanel
        :class="{
          'puik-menu__content': true,
          'puik-menu__content--visible': open,
          [`puik-menu__content__position--${position}`]: true,
          [`puik-menu__content__align--${align}`]: true,
        }"
        :style="{ width }"
      >
        <slot :open="open" :close="close"></slot>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { menuProps } from './menu'
defineOptions({
  name: 'PuikMenu',
})
defineProps(menuProps)
</script>
