<template>
  <div
    :id="listId"
    role="list"
    :data-test="dataTest"
  >
    <Sortable
      :ref="props.listId"
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
      @move="handleMoveEvents"
      @clone="handleEvents"
      @keydown="handleKeyDown($event)"
    >
      <template #item="{element, index}">
        <div
          :key="element"
          :data-item="JSON.stringify(element)"
          :class="['draggable', `draggable-${listId}`]"
          tabindex="0"
          :aria-label="`Item ${index + 1}`"
          :data-sortable-id="index"
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
                v-if="element.imgSrc"
                class="puik-sortable-list_item-img"
                :src="element.imgSrc"
                alt="img alt"
              >
              <div class="puik-sortable-list_item-content">
                <p
                  v-if="element.title"
                  class="puik-sortable-list_item-content_title"
                >
                  {{ `${element?.title}` }}
                </p>
                <p
                  v-if="element.description"
                  class="puik-sortable-list_item-content_subtitle"
                >
                  {{ `${element?.description}` }}
                </p>
                <slot
                  name="custom-content"
                  :element="element"
                  :index="index"
                />
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
import { SortableListProps, SortableListEmits, SortableEvent, SortableMoveEvent, PuikSortableListIconPosition } from './sortable-list';
import { PuikIcon } from '@prestashopcorp/puik-components';
import { Sortable } from 'sortablejs-vue3';
import { nextTick, ref } from 'vue';

defineOptions({
  name: 'PuikSortableList'
});

const props = withDefaults(defineProps<SortableListProps>(), {
  tag: 'div',
  iconPosition: PuikSortableListIconPosition.Right,
  displayPositionNumbers: true,
  options: { animation: 150 }
});

const emit = defineEmits<SortableListEmits>();

const sortable = ref<InstanceType<typeof Sortable> | null>(null);

defineExpose({
  sortable
});

const localList = ref([...props.list]);

const handleMoveEvents = (evt: SortableMoveEvent, originalEvent: Event) => {
  emit('move', evt, originalEvent);
};

const handleEvents = (event: SortableEvent) => {
  let items: HTMLCollection;
  if (event.type === 'remove') {
    items = event.from.children;
  } else {
    items = event.to.children;
  }

  if (['add', 'remove'].includes(event.type) ||
      (event.type === 'end' && event.from.children === event.to.children)) {
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('data-sortable-id', i.toString());
      const positionSpan = items[i].querySelector('.puik-sortable-list_item-index');
      if (positionSpan) {
        positionSpan.textContent = (i + 1).toString();
      }
    }

    const newList = Array.from(items).map((item: { [key: string]: any }) => {
      if (item.hasAttribute('data-item')) {
        const dataItem = item.getAttribute('data-item');
        return dataItem ? JSON.parse(dataItem) : null;
      }
      return null;
    });

    emit('list-changed', newList);
  }

  emit(event.type as keyof SortableListEmits, event);
};

let isProcessing = false;

const handleKeyDown = (event: KeyboardEvent) => {
  event.preventDefault();
  isProcessing = isProcessing ?? true;
  if (props.options?.group === 'shared' || isProcessing) return;

  const items = document.querySelectorAll(`.draggable-${props.listId}`);
  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('data-sortable-id', i.toString());
    const positionSpan = items[i].querySelector('.puik-sortable-list_item-index');
    if (positionSpan) {
      positionSpan.textContent = (i + 1).toString();
    }
  }

  const target = event.target as HTMLElement;
  const key = event.key;

  if (target.classList.contains(`draggable-${props.listId}`)) {
    let newIndex: number | null = null;
    const index = Number(target.getAttribute('data-sortable-id'));

    if (event.shiftKey && (key === 'ArrowUp' || key === 'ArrowDown')) {
      event.preventDefault();
      if (key === 'ArrowUp' && index > 0) {
        newIndex = index - 1;
      } else if (key === 'ArrowDown' && index < localList.value.length - 1) {
        newIndex = index + 1;
      } else {
        newIndex = index;
      }

      if (newIndex !== null) {
        const itemToMove = localList.value[index];
        localList.value.splice(index, 1);
        localList.value.splice(newIndex, 0, itemToMove);
        emit('list-changed', localList.value);
        nextTick(() => {
          const newTarget = document.querySelector(`.draggable-${props.listId}[data-sortable-id="${newIndex}"]`) as HTMLElement;
          newTarget?.focus();
        });
      }
    } else if (key === 'ArrowUp' || key === 'ArrowDown') {
      event.preventDefault();
      if (key === 'ArrowUp' && index > 0) {
        newIndex = index - 1;
      } else if (key === 'ArrowDown' && index < localList.value.length - 1) {
        newIndex = index + 1;
      } else {
        newIndex = index;
      }

      if (newIndex !== null) {
        const newTarget = document.querySelector(`.draggable-${props.listId}[data-sortable-id="${newIndex}"]`) as HTMLElement;
        newTarget?.focus();
      }
    }
  }
  isProcessing = false;
};
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-sortable-list.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
