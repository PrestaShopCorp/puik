import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type DragDropFile from './drag-drop-file.vue'

export const dragDropFileProps = buildProps({
  attachment: {
    type: Object,
    required: true,
  },
  closing: {
    type: Boolean,
  },
} as const)

export type DragDropFileProps = ExtractPropTypes<typeof dragDropFileProps>
export const removedFileEmits = ['removed']
export type RemovedFileEmits = typeof removedFileEmits

export type DragDropFileInstance = InstanceType<typeof DragDropFile>
