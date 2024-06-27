<template>
  <component
    :is="$props.tag"
    ref="containerRef"
    :class="$props.class"
    role="list"
    aria-label="Sortable list"
  >
    <div
      v-for="(item, index) of list"
      :key="getKey(item)"
      :element="item"
      :index="index"
      name="item"
      class="puik-sortable-list_item"
      tabindex="0"
      role="listitem"
      aria-label="Draggable list item"
      @keydown="handleKeyboard($event, index)"
    >
      <span class="puik-sortable-list_item-index">{{ `${item?.position}` }}</span>
      <div
        class="puik-sortable-list_item-container"
        role="listitem"
        aria-label="Draggable list item"
      >
        <PuikIcon
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
            {{ `${item?.name}` }}
          </p>
          <p class="puik-sortable-list_item-content_subtitle">
            {{ `${item?.name}` }}
          </p>
        </div>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  onUnmounted,
  computed,
  nextTick,
  useAttrs,
  Ref
} from 'vue';
import Sortable from 'sortablejs';
import { SortableListProps, SortableOptionsProp, SortableListEmits, SortableEvent, SortableMoveEvent } from './sortable-list';
import { PuikIcon } from '@prestashopcorp/puik-components';

defineOptions({
  name: 'PuikSortableList'
});

const props = withDefaults(defineProps<SortableListProps>(), {
  tag: 'div'
});

const emit = defineEmits<SortableListEmits>();

type ExposedProps = {
  containerRef: Ref<HTMLDivElement | null>;
  sortable: Ref<Sortable | null>;
  isDragging: Ref<boolean>;
};

const attrs = useAttrs();

const isDragging = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const sortable = ref<Sortable | null>(null);
const getKey = computed(() => {
  if (typeof props.itemKey === 'string') { return (item: any) => item[props.itemKey as string]; }
  return props.itemKey;
});

// Créer une copie réactive de la liste de props
const list = ref([...props.list]);

const moveItem = (fromIndex: number, toIndex: number) => {
  const itemToMove = list.value.splice(fromIndex, 1)[0];
  list.value.splice(toIndex, 0, itemToMove);

  // Mettre à jour la position de chaque élément après le déplacement
  list.value.forEach((item, index) => {
    item.position = index + 1;
  });

  emit('end', { oldIndex: fromIndex, newIndex: toIndex });
  emit('list-changed', list.value); // Émettre l'événement 'list-changed' avec la nouvelle liste comme payload
};

const handleKeyboard = (event: KeyboardEvent, index: number) => {
  if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.preventDefault();
  }
  switch (event.key) {
    case 'ArrowUp':
      if (index === 0) return; // Ajout de la condition pour l'index 0
      if (event.shiftKey) {
        event.preventDefault();
        event.stopPropagation();
        moveItem(index, index - 1);
        nextTick(() => {
          const prevItem = containerRef.value?.children[index - 1] as HTMLElement;
          prevItem?.focus();
        });
      } else {
        nextTick(() => {
          const prevItem = containerRef.value?.children[index - 1] as HTMLElement;
          prevItem?.focus();
        });
      }
      break;
    case 'ArrowDown':
      if (index === list.value.length - 1) return; // Ajout de la condition pour le dernier index
      if (event.shiftKey) {
        event.preventDefault();
        event.stopPropagation();
        moveItem(index, index + 1);
        nextTick(() => {
          const nextItem = containerRef.value?.children[index + 1] as HTMLElement;
          nextItem?.focus();
        });
      } else {
        nextTick(() => {
          const nextItem = containerRef.value?.children[index + 1] as HTMLElement;
          nextItem?.focus();
        });
      }
      break;
  }
};

defineExpose({
  containerRef,
  sortable,
  isDragging
} as ExposedProps);

watch(containerRef, (newDraggable) => {
  if (newDraggable) {
    sortable.value = new Sortable(newDraggable, {
      ...props.options,
      onChoose: (event: SortableEvent) => emit('choose', event),
      onUnchoose: (event: SortableEvent) => emit('unchoose', event),
      onStart: (event: SortableEvent) => {
        isDragging.value = true;
        emit('start', event);
      },
      onEnd: (event: SortableEvent) => {
        setTimeout(() => {
          isDragging.value = false;
          // Créer une nouvelle liste avec les positions mises à jour
          const newList = list.value.map((item, index) => {
            return { ...item, position: index + 1 };
          });
          list.value = newList;
          emit('end', event);
          emit('list-changed', newList);
        });
      },

      onAdd: (event: SortableEvent) => emit('add', event),
      onUpdate: (event: SortableEvent) => emit('update', event),
      onSort: (event: SortableEvent) => emit('sort', event),
      onRemove: (event: SortableEvent) => emit('remove', event),
      onFilter: (event: SortableEvent) => emit('filter', event),
      onMove: (event: SortableEvent, originalEvent: SortableEvent) =>
        'onMoveCapture' in attrs
          ? (<(event: SortableMoveEvent, originalEvent: Event) => void>(
            attrs.onMoveCapture
          ))(event, originalEvent)
          : emit('move', event, originalEvent),
      onClone: (event: SortableEvent) => emit('clone', event),
      onChange: (event: SortableEvent) => emit('change', event),
      onListChanged: (event: SortableEvent) => emit('list-changed', event)
    });
  }
});

watch(
  () => props.options,
  (options) => {
    if (options && sortable?.value) {
      for (const property in options) {
        sortable.value.option(
          property as keyof SortableOptionsProp,
          options[property as keyof SortableOptionsProp]
        );
      }
    }
  }
);

// Mettre à jour la copie réactive de la liste lorsque la prop change
watch(
  () => props.list,
  (newList) => {
    list.value = [...newList];
  }
);

onUnmounted(() => {
  if (sortable.value) {
    sortable.value.destroy();
    containerRef.value = null;
    sortable.value = null;
  }
});
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-sortable-list.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
