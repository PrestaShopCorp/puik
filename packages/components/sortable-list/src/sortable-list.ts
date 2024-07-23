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

export interface ListItemOptions {
  title?: string
  description?: string
  imgSrc?: string
}

export type ListItem = {
  [key: string]: any
} & ListItemOptions;

export interface SortableListProps {
  listId: string
  list: ListItem[]
  displayPositionNumbers?: boolean
  iconPosition?: `${PuikSortableListIconPosition}`
  itemKey: string | ((item: any) => string | number | Symbol)
  tag?: string
  options?: SortableOptionsProp
}

export type SortableListEmits = {
  'list-changed': any[]
  'change': [event: SortableEvent]
  'choose': [event: SortableEvent]
  'unchoose': [event: SortableEvent]
  'start': [event: SortableEvent]
  'end': [event: SortableEvent]
  'add': [event: SortableEvent]
  'update': [event: SortableEvent]
  'sort': [event: SortableEvent]
  'remove': [event: SortableEvent]
  'filter': [event: SortableEvent]
  'move': [event: SortableEvent]
  'clone': [event: SortableEvent]
};

export type SortableListInstance = InstanceType<typeof SortableList>;
