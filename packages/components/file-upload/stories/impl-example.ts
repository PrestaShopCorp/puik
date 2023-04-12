import type {
  DeleteFileHandler,
  UploadFileHandler,
  UploadedFile,
} from '../src/file-upload'

/*
 * Example of user code for the File Upload component
 */

let seq = 0
const uploadedFiles: UploadedFile[] = []

export const fakeUploadFile: UploadFileHandler = async (file, options = {}) => {
  const stepMs = (Math.random() * 2800 + 200) / 100 // total will be between 200ms and 3 seconds
  for (let i = 1; i <= 100; ++i) {
    await wait(stepMs)
    options.onUploadProgress?.(i / 100)
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

export const fakeDeleteFile: DeleteFileHandler = async (fileId) => {
  await wait(350)
  const index = uploadedFiles.findIndex((media) => media.fileId === fileId)
  if (index !== -1) uploadedFiles.splice(index, 1)
}

function wait(delayMs: number) {
  return new Promise((resolve) => setTimeout(resolve, delayMs))
}
