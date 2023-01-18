import { buildProps } from '@puik/utils'
import type { PropType } from 'vue'

export const fileUploadProps = buildProps({
  validateFile: {
    type: Function as PropType<(file: File) => FileValidation>,
    required: true,
  },
  deleteFile: {
    type: Function as PropType<(fileRefId: number) => Promise<boolean>>,
    required: true,
  },
  uploadFile: {
    type: Function as PropType<UploadFileHandler>,
    required: true,
  },
} as const)

export type UploadFileHandler = (
  file: File,
  options: { onUploadProgress: (progress: number) => void }
) => Promise<{ fileRelId: number }>

export type FileValidation =
  | { valid: true }
  | {
      valid: false
      errorMessage: string
    }
