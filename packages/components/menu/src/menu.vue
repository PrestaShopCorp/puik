<template>
  <Popover v-slot="{ open, close }" class="puik-menu">
    <PopoverButton v-bind="attrs" :as="as" class="puik-menu__activator">
      <slot name="activator">{{ activatorLabel }}</slot>
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
        :class="[
          'puik-menu__content',
          `puik-menu__content__position--${position}`,
          `puik-menu__content__align--${align}`,
        ]"
        :style="{ width }"
      >
        <slot :open="open" :close="close"></slot>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { menuProps } from './menu'
defineOptions({
  name: 'PuikMenu',
})

const props = defineProps(menuProps)
const attrs = useAttrs()
</script>
