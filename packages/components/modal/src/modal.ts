import type Modal from './modal.vue';

export const DESTRUCTIVE_ICON_NAME = 'warning';

export enum PuikModalVariants {
  Feedback = 'feedback',
  Destructive = 'destructive',
  Dialog = 'dialog',
}

export enum PuikModalSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ModalProps {
  title?: string
  titleIcon?: string
  mainButtonText?: string
  secondButtonText?: string
  sideButtonText?: string
  isOpen?: boolean
  isMainButtonDisabled?: boolean
  variant?: `${PuikModalVariants}`
  size?: `${PuikModalSizes}`
  dataTest?: string
}

export const modalEmits = [
  'close',
  'button-main',
  'button-second',
  'button-side'
];

export type ModalInstance = InstanceType<typeof Modal>;
