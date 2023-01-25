import { buildProps } from '@puik/utils'
import type { PropType } from 'vue'

export const fileUploadProps = buildProps({
  initialFiles: {
    type: Array as PropType<UploadedFile[]>,
    required: false,
  },
  inputAccept: {
    type: String,
    required: true,
  },
  slowDownMs: {
    type: Number,
    required: false,
    default: 1000,
  },
  validateFile: {
    type: Function as PropType<
      (
        file: File,
        additionalProperties: ValidateFileAdditionalProperties
      ) => FileValidation
    >,
    required: true,
  },
  uploadFile: {
    type: Function as PropType<UploadFileHandler>,
    required: true,
  },
  deleteFile: {
    type: Function as PropType<(fileRefId: number) => Promise<boolean>>,
    required: true,
  },
} as const)

export interface UploadedFile {
  fileRelId: number
  file: File
}

export interface ValidateFileAdditionalProperties {
  totalSizeB: number
}

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
