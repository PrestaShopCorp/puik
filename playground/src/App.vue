<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { PuikButtonGroup } from '@puik/components'
import type { ButtonGroupType } from '@puik/components'

const buttonsList: Array<ButtonGroupType> = [
  {
    variant: 'tertiary',
    label: 'Button 1',
  },
  {
    variant: 'tertiary',
    label: 'Button 2',
  },
  {
    variant: 'tertiary',
    label: 'Button 3',
  },
  {
    variant: 'tertiary',
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
      :button-list="buttonsList"
      :size="'md'"
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
