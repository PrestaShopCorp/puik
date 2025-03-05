import type Modal from './modal.vue';

export const DESTRUCTIVE_ICON_NAME = 'warning';

export enum PuikModalVariants {
  Destructive = 'destructive',
  Feedback = 'feedback',
  Dialog = 'dialog',
}

export enum PuikModalSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ModalProps {
  title?: string
  mainButtonText?: string
  isMainButtonDisabled?: boolean
  secondButtonText?: string
  sideButtonText?: string
  variant?: `${PuikModalVariants}`
  size?: `${PuikModalSizes}`
  isOpen?: boolean
  titleIcon?: string
  dataTest?: string
}

export const modalEmits = [
  'close',
  'button-main',
  'button-second',
  'button-side'
];

export type ModalInstance = InstanceType<typeof Modal>;
