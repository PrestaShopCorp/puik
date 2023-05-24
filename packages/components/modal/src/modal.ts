import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Modal from './modal.vue'

export const DESTRUCTIVE_ICON_NAME = 'warning'

export enum PuikModalVariant {
  DESTRUCTIVE = 'destructive',
  FEEDBACK = 'feedback',
  DIALOG = 'dialog',
}

export enum PuikModalSize {
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
    required: false,
    default: undefined,
  },
  isMainButtonDisabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  secondButtonText: {
    type: String,
    required: false,
    default: undefined,
  },
  sideButtonText: {
    type: String,
    required: false,
    default: undefined,
  },
  variant: {
    type: String as PropType<PuikModalVariant>,
    required: false,
    default: PuikModalVariant.FEEDBACK,
  },
  size: {
    type: String as PropType<PuikModalSize>,
    required: false,
    default: PuikModalSize.SMALL,
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
