<template>
  <div role="list">
    <Sortable
      v-model:sortable="sortable"
      :list="localList"
      :item-key="props.itemKey"
      :tag="props.tag"
      :options="props.options"
      @change="handleEvents"
      @choose="handleEvents"
      @unchoose="handleEvents"
      @start="handleEvents"
      @end="handleEvents"
      @add="handleEvents"
      @update="handleEvents"
      @sort="handleEvents"
      @remove="handleEvents"
      @filter="handleEvents"
      @move="handleEvents"
      @clone="handleEvents"
    >
      <template #item="{element, index}">
        <div
          :key="element"
          :data-item="JSON.stringify(element)"
          class="draggable"
          tabindex="0"
          :aria-label="`Item ${index + 1}`"
          :data-sortable-id="index + 1"
          @keydown="handleKeyDown(index, $event)"
        >
          <div class="puik-sortable-list_item">
            <span
              v-if="displayPositionNumbers"
              class="puik-sortable-list_item-index"
            >
              {{ $attrs.dataSortableId || index + 1 }}
            </span>
            <div class="puik-sortable-list_item-container">
              <PuikIcon
                v-if="iconPosition == PuikSortableListIconPosition.Left"
                icon="drag_indicator"
                color="#1D1D1B"
                tabindex="-1"
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
              <PuikIcon
                v-if="iconPosition == PuikSortableListIconPosition.Right"
                icon="drag_indicator"
                color="#1D1D1B"
                tabindex="-1"
              />
            </div>
          </div>
        </div>
      </template>
    </Sortable>
  </div>
</template>

<script setup lang="ts">
import { SortableListProps, SortableListEmits, SortableEvent, PuikSortableListIconPosition } from './sortable-list';
import { PuikIcon } from '@prestashopcorp/puik-components';
import { Sortable } from 'sortablejs-vue3';
import { nextTick, ref, watch } from 'vue';

defineOptions({
  name: 'PuikSortableList'
});

const props = withDefaults(defineProps<SortableListProps>(), {
  tag: 'div',
  iconPosition: PuikSortableListIconPosition.Right,
  displayPositionNumbers: true
});

const emit = defineEmits<SortableListEmits>();

const sortable = ref(null);

defineExpose({
  sortable
});

const localList = ref([...props.list]);

watch(props.list, (newList) => {
  localList.value = [...newList];
});

const handleEvents = (event: SortableEvent) => {
  let items: HTMLCollection;
  if (event.type === 'remove') {
    items = event.from.children;
  } else {
    items = event.to.children;
  }

  if (['add', 'remove'].includes(event.type) ||
      (event.type === 'end' && event.from.children === event.to.children)) {
    console.log(event.type);
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('data-sortable-id', i.toString());
      const positionSpan = items[i].querySelector('.puik-sortable-list_item-index');
      if (positionSpan) {
        positionSpan.textContent = (i + 1).toString();
      }
    }

    const newList = Array.from(items).map((item) => {
      if (item.hasAttribute('data-item')) {
        const attributeValue = item.getAttribute('data-item');
        return attributeValue ? JSON.parse(attributeValue) : null;
      }
      return null;
    });

    emit('list-changed', newList);
  }
};

const moveElement = (index: number, direction: string) => {
  if (['up', 'down'].includes(direction) === false) {
    return false;
  }

  const order = localList.value.map((_item, i) => i.toString());
  const sortableId = index.toString();

  order.splice(index, 1);
  if (direction === 'down' && index < localList.value.length - 1) {
    order.splice(index + 1, 0, sortableId);
  } else if (direction === 'up' && index > 0) {
    order.splice(index - 1, 0, sortableId);
  }

  localList.value = order.map(i => localList.value[parseInt(i)]);
  emit('list-changed', localList.value);
};

const handleKeyDown = (index: number, event: KeyboardEvent) => {
  if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.preventDefault();
  }

  switch (event.key) {
    case 'ArrowUp':
      if (event.shiftKey && index > 0) {
        moveElement(index, 'up');
        nextTick(() => {
          (document.querySelector(`[data-sortable-id="${index - 1}"]`) as HTMLElement).focus();
        });
      } else if (!event.shiftKey && index > 0) {
        nextTick(() => {
          (document.querySelector(`[data-sortable-id="${index - 1}"]`) as HTMLElement).focus();
        });
      }
      break;
    case 'ArrowDown':
      if (event.shiftKey && index < localList.value.length - 1) {
        moveElement(index, 'down');
        nextTick(() => {
          const nextElement = document.querySelector(`[data-sortable-id="${index + 1}"]`) as HTMLElement;
          if (nextElement) {
            nextElement.focus();
          }
        });
      } else if (!event.shiftKey && index < localList.value.length - 1) {
        nextTick(() => {
          const nextElement = document.querySelector(`[data-sortable-id="${index + 1}"]`) as HTMLElement;
          if (nextElement) {
            nextElement.focus();
          }
        });
      }
      break;
  }
};

</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-sortable-list.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
