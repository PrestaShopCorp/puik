import type SortableList from './sortable-list.vue';
import { SortableOptions } from 'sortablejs';
import type { AutoScrollOptions } from 'sortablejs/plugins';

type SortableOptionsProp = Omit<
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

export interface SortableListProps {
  options?: SortableOptionsProp
  list: any[]
  itemKey: string | ((item: any) => string | number | Symbol)
  tag?: string
}

export type SortableListInstance = InstanceType<typeof SortableList>;
