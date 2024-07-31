import '@prestashopcorp/puik-components/sortable-list/style/css';
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
  listId: string
  list: any[]
  displayPositionNumbers?: boolean
  iconPosition?: `${PuikSortableListIconPosition}`
  itemKey: string | ((item: any) => string | number | Symbol)
  tag?: string
  options?: any
}

export type SortableListEmits = {
  (event: 'list-changed', evt: any[]): void
  (event: 'choose', evt: Sortable.SortableEvent): void
  (event: 'unchoose', evt: Sortable.SortableEvent): void
  (event: 'start', evt: Sortable.SortableEvent): void
  (event: 'end', evt: Sortable.SortableEvent): void
  (event: 'add', evt: Sortable.SortableEvent): void
  (event: 'update', evt: Sortable.SortableEvent): void
  (event: 'sort', evt: Sortable.SortableEvent): void
  (event: 'remove', evt: Sortable.SortableEvent): void
  (event: 'filter', evt: Sortable.SortableEvent): void
  (event: 'move', evt: Sortable.MoveEvent, originalEvent: Event): void
  (event: 'clone', evt: Sortable.SortableEvent): void
  (event: 'change', evt: Sortable.SortableEvent): void
};

export type SortableListInstance = InstanceType<typeof SortableList>;
