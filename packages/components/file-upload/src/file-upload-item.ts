import { buildProps } from '@puik/utils'
import type { PropType } from 'vue'
import type { DeleteFileHandler } from './file-upload'
import type { UploadingFileProps } from './helpers/internal-types'

export const fileUploadItemProps = buildProps({
  uploading: {
    type: Object as PropType<UploadingFileProps>,
    required: true,
  },
  closing: {
    type: Boolean,
  },
  deleteFileCb: {
    type: Function as PropType<DeleteFileHandler>,
    required: true,
  },
  accessibilityRemoveLabel: {
    type: String,
    required: true,
  },
} as const)
