import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Modal from './modal.vue'

export enum ModalStyle {
  Dangerous,
  Destructive,
  Feedback,
  Dialog,
}

export enum ModalSize {
  Small,
  Medium,
  Large,
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
  modalStyle: {
    type: Number as PropType<ModalStyle>,
    required: false,
    default: ModalStyle.Feedback,
  },
  modalSize: {
    type: Number as PropType<ModalSize>,
    required: false,
    default: ModalSize.Small,
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
  iconName: {
    type: String,
    required: false,
    default: undefined,
  },
  hasCloseButton: {
    type: Boolean,
    required: false,
    default: false,
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
