import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Modal from './modal.vue'

export const modalProps = buildProps({} as const)

export type ModalProps = ExtractPropTypes<typeof modalProps>

export type ModalInstance = InstanceType<typeof Modal>
