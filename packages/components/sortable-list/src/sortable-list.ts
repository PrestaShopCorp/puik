import type SortableList from './sortable-list.vue';
import Sortable, { SortableOptions } from 'sortablejs';
import type { AutoScrollOptions } from 'sortablejs/plugins';

export enum PuikSortableListIconPosition {
  Left = 'left',
  Right = 'right',
}

export type SortableOptionsProp = Omit<
SortableOptions | AutoScrollOptions,
| 'onUnchoose'
| 'onChoose'
| 'onStart'
| 'onEnd'
| 'onAdd'
| 'onUpdate'
| 'onSort'
| 'onRemove'
| 'onFilter'
| 'onMove'
| 'onClone'
| 'onChange'
>;

export type SortableEvent = Sortable.SortableEvent;
export type SortableMoveEvent = Sortable.MoveEvent;

export interface SortableListProps {
  id: string
  options?: SortableOptionsProp
  list: any[]
  itemKey: string | ((item: any) => string | number | Symbol)
  tag?: string
  iconPosition?: `${PuikSortableListIconPosition}`
  displayPositionNumbers?: boolean
}

export type SortableListEmits = {
  (eventName: 'choose', evt: Sortable.SortableEvent): void
  (eventName: 'unchoose', evt: Sortable.SortableEvent): void
  (eventName: 'start', evt: Sortable.SortableEvent): void
  (eventName: 'end', evt: Sortable.SortableEvent): void
  (eventName: 'add', evt: Sortable.SortableEvent): void
  (eventName: 'update', evt: Sortable.SortableEvent): void
  (eventName: 'sort', evt: Sortable.SortableEvent): void
  (eventName: 'remove', evt: Sortable.SortableEvent): void
  (eventName: 'filter', evt: Sortable.SortableEvent): void
  (eventName: 'move', evt: Sortable.MoveEvent, originalEvent: Event): void
  (eventName: 'clone', evt: Sortable.SortableEvent): void
  (eventName: 'change', evt: Sortable.SortableEvent): void
  (eventName: 'list-changed', newList: any[]): void
};

export type SortableListInstance = InstanceType<typeof SortableList>;
