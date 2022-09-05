import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type DragDrop from './drag-drop.vue'

export const dragDropProps = buildProps({
  id: {
    type: String,
    required: true,
  },
} as const)

export type DragDropProps = ExtractPropTypes<typeof dragDropProps>

export type DragDropInstance = InstanceType<typeof DragDrop>
