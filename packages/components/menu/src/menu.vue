<template>
  <Popover
    v-slot="{ open }"
    class="puik-menu"
    :class="[`puik-menu--position-${position}`, `puik-menu--align-${align}`]"
    as="div"
  >
    <PopoverButton class="puik-menu__trigger" as="template">
      <slot name="trigger" :open="open"></slot>
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
        v-slot="{ close }"
        class="puik-menu__content"
        :style="{ maxHeight, width }"
      >
        <slot :close="close" :open="open"></slot>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverPanel, PopoverButton } from '@headlessui/vue'
import { PuikMenuAligns, type MenuProps, PuikMenuPositions } from './menu'

defineOptions({
  name: 'PuikMenu',
})

withDefaults(defineProps<MenuProps>(), {
  maxHeight: 'none',
  width: '200px',
  align: PuikMenuAligns.Left,
  position: PuikMenuPositions.Bottom,
})
</script>
