import type {
  FileValidation,
  ValidateFileAdditionalProperties,
  ValidateFileHandler,
} from '../file-upload'

const acceptedTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export const defaultAccept = `image/*, ${acceptedTypes.join(',')}`

export const defaultValidateFile: ValidateFileHandler = (
  file: File,
  {
    totalSizeB,
    t,
    accept,
    maxFileSizeB,
    maxTotalSizeB,
  }: ValidateFileAdditionalProperties
): FileValidation => {
  const baseType = file.type.replace(/\/.*$/, '')
  const extension = file.name.includes('.')
    ? `.${file.name.split('.').pop()}`
    : ''
  const acceptedType = accept
    .split(',')
    .map((type) => type.trim())
    .some((acceptedType) => {
      if (acceptedType.startsWith('.')) {
        return extension === acceptedType
      }
      if (/\/\*$/.test(acceptedType)) {
        return baseType === acceptedType.replace(/\/\*$/, '')
      }
      if (/^[^/]+\/[^/]+$/.test(acceptedType)) {
        return file.type === acceptedType
      }
      return false
    })
  if (!acceptedType) {
    return {
      valid: false,
      message: t('puik.fileUpload.errors.invalidType', {
        fileType: file.type,
        allowedTypes: accept,
      }),
    }
  }
  if (file.size > maxFileSizeB) {
    return {
      valid: false,
      message: t('puik.fileUpload.errors.fileSizeTooBig', {
        fileName: file.name,
      }),
    }
  }
  if (totalSizeB + file.size > maxTotalSizeB) {
    return {
      valid: false,
      message: t('puik.fileUpload.errors.uploadSizeLimit'),
    }
  }
  return { valid: true }
}
