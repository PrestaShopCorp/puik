<template>
  <MenuItem v-slot="{ active }" :disabled="disabled" as="template">
    <div
      class="puik-menu-item"
      :class="{
        'puik-menu-item--active': active,
        'puik-menu-item--disabled': disabled,
        'puik-menu-item--destructive': destructive,
        'puik-menu-item--right-icon': rightIcon,
      }"
      :disabled="disabled"
    >
      <slot name="item" :active="active">
        <PuikButton
          class="puik-menu-item__button"
          :disabled="disabled"
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
    </div>
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
