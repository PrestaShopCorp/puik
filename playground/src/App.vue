<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { PuikButtonGroup } from '@puik/components'
import type { ButtonGroupType } from '@puik/components'

const buttonsList: Array<ButtonGroupType> = [
  {
    variant: 'primary',
    label: 'Button 1',
    size: 'lg',
  },
  {
    variant: 'tertiary',
    label: 'Button 2',
    size: 'md',
  },
  {
    variant: 'tertiary',
    label: 'Button 3',
    size: 'sm',
  },
  {
    variant: 'primary',
    label: 'Damian',
  },
]

const test = () => {
  console.log('bob')
}
</script>

<template>
  <div class="app-container">
    <puik-button-group
      :selected-index="0"
      :button-list="buttonsList"
      @puikButtonGroupClicked="test"
    />
  </div>
</template>

<style lang="scss">
html,
body {
  @apply w-screen h-screen m-0;
  #app {
    @apply w-full h-full;
    .app-container {
      @apply w-full h-full;
    }
  }
}
</style>
