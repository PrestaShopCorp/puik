<template>
  <div
    :id="name"
    class="puik-tab-navigation"
    @keyup="handleKeysEvent"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { nextTick, provide, ref } from 'vue';
import { currentTabKey, type TabNavigationProps, TabNavigationEmits } from './tab-navigation';

defineOptions({
  name: 'PuikTabNavigation'
});

const props = withDefaults(defineProps<TabNavigationProps>(), {
  defaultPosition: 1
});
const emit = defineEmits<TabNavigationEmits>();

const name = ref<string>(props.name);
const numberOfTabs = ref<number>(1);
const currentPosition = ref<number>(props.defaultPosition);
const keyEventDirection = ref<string | null>();
const handleTabClick = (index: number) => {
  currentPosition.value = index;
  emit('change-active-tab', currentPosition.value);
};

provide(currentTabKey, {
  name,
  numberOfTabs,
  currentPosition,
  keyEventDirection,
  handleTabClick
});

const selectNextTab = () => {
  const tabNavigationInstance = document.querySelector(`#${name.value}`);
  numberOfTabs.value =
    tabNavigationInstance?.querySelectorAll('[role="tab"]').length || 1;

  currentPosition.value === numberOfTabs.value
    ? (currentPosition.value = 1)
    : currentPosition.value++;

  nextTick(() => {
    const tabSelected = tabNavigationInstance?.querySelector(
      '.puik-tab-navigation__title--selected'
    ) as HTMLElement;
    tabSelected.focus();
    emit('change-active-tab', currentPosition.value);
  });
};

const selectPreviousTab = () => {
  const tabNavigationInstance = document.querySelector(`#${name.value}`);
  numberOfTabs.value =
    tabNavigationInstance?.querySelectorAll('[role="tab"]').length || 1;

  currentPosition.value <= 1
    ? (currentPosition.value = numberOfTabs.value)
    : currentPosition.value--;

  nextTick(() => {
    const tabSelected = tabNavigationInstance?.querySelector(
      '.puik-tab-navigation__title--selected'
    ) as HTMLElement;
    tabSelected.focus();
    emit('change-active-tab', currentPosition.value);
  });
};

const handleKeysEvent = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight') {
    keyEventDirection.value = 'right';
    selectNextTab();
  } else if (event.key === 'ArrowLeft') {
    keyEventDirection.value = 'left';
    selectPreviousTab();
  }
};
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-tab-navigation.scss';
</style>
