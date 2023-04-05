import type {
  FileValidation,
  ValidateFileAdditionalProperties,
} from '../file-upload'

const maxFileSizeB = 1_000_000
const maxTotalSizeB = 2_000_000

const acceptedTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
const acceptedTypesSet = new Set(acceptedTypes)

export const defaultAccept = `image/*, ${acceptedTypes.join(',')}`

export function defaultValidateFile(
  file: File,
  { totalSizeB }: ValidateFileAdditionalProperties
): FileValidation {
  if (!file.type.startsWith('image/') && !acceptedTypesSet.has(file.type)) {
    return {
      valid: false,
      errorMessage: `invalid file type "${file.type}", only image files, PDF and Word documents are allowed`,
    }
  }
  if (file.size > maxFileSizeB) {
    return {
      valid: false,
      errorMessage: `file "${file.name}" is too big`,
    }
  }
  if (totalSizeB + file.size > maxTotalSizeB) {
    return {
      valid: false,
      errorMessage: 'maximum size is reached',
    }
  }
  return { valid: true }
}
