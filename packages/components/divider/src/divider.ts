import '../style';
import type Divider from './divider.vue';

export enum PuikDividerOrientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export interface DividerProps {
  orientation?: `${PuikDividerOrientation}`
  dataTest?: string
}

export type DividerInstance = InstanceType<typeof Divider>;
