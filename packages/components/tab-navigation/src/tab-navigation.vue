<template>
  <div class="puik-tab-navigation">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { currentTabKey, tabNavigationProps } from './tab-navigation'

defineOptions({
  name: 'PuikTabNavigation',
})

const props = defineProps(tabNavigationProps)

const name = ref(props.name)
const currentPosition = ref<number>(props.defaultPosition)
const handleTabClick = (index: number) => {
  currentPosition.value = index
}

provide(currentTabKey, {
  name: name?.value,
  currentPosition,
  handleTabClick,
})
</script>
