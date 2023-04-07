import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Modal from './modal.vue'

export const DESTRUCTIVE_ICON_NAME = 'warning'

export enum ModalVariant {
  DESTRUCTIVE = 'destructive',
  FEEDBACK = 'feedback',
  DIALOG = 'dialog',
}

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const modalProps = buildProps({
  title: {
    type: String,
    required: true,
  },
  mainButtonText: {
    type: String,
    required: true,
  },
  secondButtonText: {
    type: String,
    required: true,
  },
  sideButtonText: {
    type: String,
    required: false,
  },
  variant: {
    type: String as PropType<ModalVariant>,
    required: false,
    default: ModalVariant.FEEDBACK,
  },
  size: {
    type: String as PropType<ModalSize>,
    required: false,
    default: ModalSize.SMALL,
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
  titleIcon: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export const modalEmits = [
  'close',
  'button-main',
  'button-second',
  'button-side',
]

export type ModalProps = ExtractPropTypes<typeof modalProps>

export type ModalInstance = InstanceType<typeof Modal>
