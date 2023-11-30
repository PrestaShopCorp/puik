import type Modal from './modal.vue';

export const DESTRUCTIVE_ICON_NAME_V2 = 'warning';

export enum PuikModalVariantsV2 {
  Destructive = 'destructive',
  Feedback = 'feedback',
  Dialog = 'dialog',
}

export enum PuikModalSizesV2 {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ModalPropsV2 {
  title?: string
  mainButtonText?: string
  isMainButtonDisabled?: boolean
  secondButtonText?: string
  sideButtonText?: string
  variant?: `${PuikModalVariantsV2}`
  size?: `${PuikModalSizesV2}`
  isOpen?: boolean
  titleIcon?: string
  dataTest?: string
}

export const modalEmitsV2 = [
  'close',
  'button-main',
  'button-second',
  'button-side'
];

export type ModalInstanceV2 = InstanceType<typeof Modal>;
