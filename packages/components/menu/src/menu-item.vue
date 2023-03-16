<template>
  <MenuItem
    v-slot="{ active }"
    class="puik-menu-item"
    :class="{
      'puik-menu-item--disabled': disabled,
      'puik-menu-item--destructive': destructive,
    }"
    :disabled="disabled"
    as="div"
  >
    <slot name="item" :active="active">
      <PuikButton
        class="puik-menu-item__button"
        :disabled="disabled"
        :class="{
          'puik-menu-item__button--active': active,
        }"
        :left-icon="leftIcon"
        :right-icon="rightIcon"
        :href="href"
        :to="to"
        variant="text"
        fluid
      >
        <slot></slot>
      </PuikButton>
    </slot>
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
import PuikButton from '../../button/src/button.vue'
import { menuItemProps } from './menu-item'
defineOptions({
  name: 'PuikMenuItem',
})
defineProps(menuItemProps)
</script>
