import type Table from './table.vue';

export enum PuikTableHeaderSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}
export enum PuikTableHeaderAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export interface PuikTableHeader {
  value: string
  text?: string
  size?: `${PuikTableHeaderSize}`
  align?: `${PuikTableHeaderAlign}`
  width?: string
}

export interface TableProps {
  headers: PuikTableHeader[]
  items?: any[]
  selectable?: boolean
  selection?: number[]
  fullWidth?: boolean
}

export type TableInstance = InstanceType<typeof Table>;
