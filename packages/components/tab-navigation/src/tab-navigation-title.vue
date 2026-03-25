<template>
  <button
    :id="`${currentTab?.name.value}-position-${position}`"
    role="tab"
    :aria-selected="isCurrentTab"
    :aria-controls="`${currentTab?.name.value}-panel-${position}`"
    :tabindex="isCurrentTab ? 0 : -1"
    :class="[
      'puik-tab-navigation__title',
      {
        'puik-tab-navigation__title--selected': isCurrentTab,
        'puik-tab-navigation__title--disabled': disabled,
      },
    ]"
    @click="handleclick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, watch } from 'vue';
import { routerKey, routeLocationKey } from 'vue-router';
import { currentTabKey } from './tab-navigation';
import { type TabNavigationTitleProps } from './tab-navigation-title';
defineOptions({
  name: 'PuikTabNavigationTitle'
});

const props = defineProps<TabNavigationTitleProps>();

const currentTab = inject(currentTabKey, null);
const router = inject(routerKey, null);
const route = inject(routeLocationKey, null);

const handleclick = () => {
  if (props.disabled) return;
  currentTab?.handleTabClick(props.position);
  if (props.to && router) router.push(props.to);
};

const isCurrentTab = computed(() => {
  if (props.to && route && router) {
    const resolved = router.resolve(props.to);
    return route.path.startsWith(resolved.path);
  }
  return props.position === currentTab?.currentPosition.value;
});

watch(
  () => isCurrentTab.value,
  () => {
    if (isCurrentTab.value && props.disabled) {
      if (currentTab?.keyEventDirection.value === 'right') {
        currentTab?.currentPosition.value === currentTab?.numberOfTabs.value
          ? currentTab?.handleTabClick(1)
          : currentTab?.handleTabClick(props.position + 1);
      }
      if (currentTab?.keyEventDirection.value === 'left') {
        currentTab?.currentPosition.value === 1
          ? currentTab?.handleTabClick(currentTab?.numberOfTabs.value)
          : currentTab?.handleTabClick(props.position - 1);
      }
    }
  }
);
</script>
