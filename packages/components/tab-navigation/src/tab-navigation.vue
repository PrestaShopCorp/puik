<template>
  <div :id="name" class="puik-tab-navigation" @keyup="handleKeysEvent">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { nextTick, provide, ref } from 'vue'
import { currentTabKey, tabNavigationProps } from './tab-navigation'

defineOptions({
  name: 'PuikTabNavigation',
})

const props = defineProps(tabNavigationProps)

const name = ref<string>(props.name)
const currentPosition = ref<number>(props.defaultPosition)
const handleTabClick = (index: number) => {
  currentPosition.value = index
}

provide(currentTabKey, {
  name: name?.value,
  currentPosition,
  handleTabClick,
})

const selectNextTab = () => {
  const tabNavigationInstance = document.querySelector(`#${name.value}`)
  const numberOfTabs =
    tabNavigationInstance?.querySelectorAll('[role="tab"]').length || 1

  currentPosition.value === numberOfTabs
    ? (currentPosition.value = 1)
    : currentPosition.value++

  nextTick(() => {
    const tabSelected = tabNavigationInstance?.querySelector(
      '.puik-tab-navigation__title--selected'
    ) as HTMLElement
    tabSelected.focus()
  })
}

const selectPreviousTab = () => {
  const tabNavigationInstance = document.querySelector(`#${name.value}`)
  const numberOfTabs =
    tabNavigationInstance?.querySelectorAll('[role="tab"]').length || 1

  currentPosition.value === 1
    ? (currentPosition.value = numberOfTabs)
    : currentPosition.value--

  nextTick(() => {
    const tabSelected = tabNavigationInstance?.querySelector(
      '.puik-tab-navigation__title--selected'
    ) as HTMLElement
    tabSelected.focus()
  })
}

const handleKeysEvent = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight') {
    selectNextTab()
  } else if (event.key === 'ArrowLeft') {
    selectPreviousTab()
  }
}
</script>
