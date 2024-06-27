<template>
  <component
    :is="$props.tag"
    ref="containerRef"
    :class="$props.class"
    role="list"
  >
    <div
      v-for="(item, index) of list"
      :key="getKey(item)"
      :element="item"
      :index="index"
      name="item"
      class="puik-sortable-list_item"
    >
      <span class="puik-sortable-list_item-index">{{ index }}</span>
      <div class="puik-sortable-list_item-container">
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
          emit('end', event);
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
      onChange: (event: SortableEvent) => emit('change', event)
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
