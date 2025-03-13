import '../style';
import type Menu from './menu.vue';

export enum PuikMenuAligns {
  Left = 'left',
  Right = 'right',
}

export enum PuikMenuPositions {
  Top = 'top',
  Bottom = 'bottom',
}

export interface MenuProps {
  maxHeight?: string
  width?: string
  align?: `${PuikMenuAligns}`
  position?: `${PuikMenuPositions}`
}

export type MenuInstance = InstanceType<typeof Menu>;
