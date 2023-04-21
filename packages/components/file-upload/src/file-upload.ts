import { buildProps } from '@puik/utils'
import {
  defaultAccept,
  defaultValidateFile,
} from './helpers/default-validation'
import type { PropType } from 'vue'
import type { Translator } from '@puik/hooks'

export const fileUploadProps = buildProps({
  initialFiles: {
    type: Array as PropType<UploadedFile[]>,
    required: false,
  },
  accept: {
    type: String,
    default: defaultAccept,
  },
  validateFile: {
    type: Function as PropType<ValidateFileHandler>,
    default: defaultValidateFile,
  },
  uploadFile: {
    type: Function as PropType<UploadFileHandler>,
    required: true,
  },
  deleteFile: {
    type: Function as PropType<DeleteFileHandler>,
    required: true,
  },
  slowDownMs: {
    type: Number,
    default: 1000,
  },
  maxFileSizeB: {
    type: Number,
    default: 1_000,
  },
  maxTotalSizeB: {
    type: Number,
    default: 2_000_000,
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
  accept: string
  maxFileSizeB: number
  maxTotalSizeB: number
  t: Translator
}

export type FileValidation = { valid: true } | { valid: false; message: string }

export type UploadFileHandler = (
  file: File,
  options?: { onUploadProgress?: UploadProgressHandler }
) => Promise<{ fileId: string }>

/**
 * @param progress is a number between 0 and 1.
 */
export type UploadProgressHandler = (progress: number) => void

export type DeleteFileHandler = (fileId: string) => Promise<void>
