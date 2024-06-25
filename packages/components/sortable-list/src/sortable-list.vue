<template>
  <div role="list">
    <Sortable
      :list="props.list"
      :item-key="props.itemKey"
      :tag="props.tag"
      :options="props.options"
      role="list"
    >
      <template #item="{element, index}">
        <div
          :key="element"
          class="draggable"
          tabindex="0"
        >
          <div class="puik-sortable-list_item">
            <span class="puik-sortable-list_item-index">{{ index }}</span>
            <div class="puik-sortable-list_item-container">
              <PuikIcon
                icon="drag_indicator"
                color="#1D1D1B"
              />
              <img
                class="puik-sortable-list_item-img"
                src="https://picsum.photos/200/300"
                alt="img alt"
              >
              <div class="puik-sortable-list_item-content">
                <p class="puik-sortable-list_item-content_title">
                  {{ `${element?.name}` }}
                </p>
                <p class="puik-sortable-list_item-content_subtitle">
                  {{ `${element?.name}` }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Sortable>
  </div>
</template>

<script setup lang="ts">
import { SortableListProps } from './sortable-list';
import { PuikIcon } from '@prestashopcorp/puik-components';
import { Sortable } from 'sortablejs-vue3';

defineOptions({
  name: 'PuikSortableList'
});

const props = withDefaults(defineProps<SortableListProps>(), {
  tag: 'div'
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-sortable-list.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
