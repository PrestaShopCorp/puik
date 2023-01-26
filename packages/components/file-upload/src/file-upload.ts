import { buildProps } from '@puik/utils'
import type { PropType } from 'vue'
import type { UploadingFileProps } from './helpers/internal-types'

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
    type: Function as PropType<ValidateFileHandler>,
    required: true,
  },
  uploadFile: {
    type: Function as PropType<UploadFileHandler>,
    required: true,
  },
  deleteFile: {
    type: Function as PropType<DeleteFileHandler>,
    required: true,
  },
} as const)

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

export interface UploadedFile {
  fileId: string
  file: File
}

export type ValidateFileHandler = (
  file: File,
  additionalProperties: ValidateFileAdditionalProperties
) => FileValidation

export interface ValidateFileAdditionalProperties {
  totalSizeB: number
}

export type FileValidation =
  | { valid: true }
  | {
      valid: false
      errorMessage: string
    }

export type UploadFileHandler = (
  file: File,
  options: { onUploadProgress: UploadProgressHandler }
) => Promise<{ fileId: string }>

/**
 * @param progress is a number between 0 and 1.
 */
export type UploadProgressHandler = (progress: number) => void

export type DeleteFileHandler = (fileId: string) => Promise<void>
