import type {
  FileValidation,
  UploadedFile,
  ValidateFileAdditionalProperties,
} from '../src/file-upload'

/*
 * Example of user code for the File Upload component
 */

let seq = 0
const uploadedFiles: UploadedFile[] = []

export function validateFile(
  file: File,
  { totalSizeB }: ValidateFileAdditionalProperties
): FileValidation {
  if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
    return {
      valid: false,
      errorMessage: 'invalid file type: only images and PDF files are allowed',
    }
  }
  const maxFileSizeB = 1_000_000
  const maxTotalSizeB = 2_000_000
  if (file.size > maxFileSizeB) {
    return {
      valid: false,
      errorMessage: `file "${file.name}" is too big`,
    }
  }
  if (totalSizeB + file.size > maxTotalSizeB) {
    // Total file size error handling (10MO max)
    return {
      valid: false,
      errorMessage: 'maximum size is reached',
    }
  }
  return { valid: true }
}

export async function uploadFile(
  file: File,
  options: { onUploadProgress: (progress: number) => void }
): Promise<{ fileId: string }> {
  const stepMs = (Math.random() * 2800 + 200) / 100 // total will be between 200ms and 3 seconds
  for (let i = 1; i <= 100; ++i) {
    await wait(stepMs)
    options.onUploadProgress(i / 100)
  }
  const fileId = String(++seq)
  uploadedFiles.push({
    fileId,
    file,
  })
  return {
    fileId,
  }
}

export async function deleteFile(fileId: string): Promise<void> {
  await wait(350)
  const index = uploadedFiles.findIndex((item) => item.fileId === fileId)
  if (index !== -1) uploadedFiles.splice(index, 1)
}

function wait(delayMs: number) {
  return new Promise((resolve) => setTimeout(resolve, delayMs))
}
