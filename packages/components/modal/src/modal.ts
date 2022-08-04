import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Modal from './modal.vue'

export const modalProps = buildProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  appendToBody: {
    type: Boolean,
    required: false,
    default: false,
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
  width: {
    type: [Number, String],
    required: false,
    default: '50%',
  },
  top: {
    type: [Number, String],
    required: false,
    default: '15vh',
  },
  center: {
    type: Boolean,
    required: false,
    default: false,
  },
  customClass: {
    type: String,
    required: false,
    default: '',
  },
  showClose: {
    type: Boolean,
    required: false,
    default: true,
  },
} as const)

export type ModalProps = ExtractPropTypes<typeof modalProps>

export const modalEmits = ['update:modelValue']

export type ModalInstance = InstanceType<typeof Modal>
