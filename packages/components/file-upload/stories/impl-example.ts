import type { UploadedFile } from '../src/file-upload'

/*
 * Example of user code for the File Upload component
 */

let seq = 0
const uploadedFiles: UploadedFile[] = []

export async function fakeUploadFile(
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

export async function fakeDeleteFile(fileId: string): Promise<void> {
  await wait(350)
  const index = uploadedFiles.findIndex((item) => item.fileId === fileId)
  if (index !== -1) uploadedFiles.splice(index, 1)
}

function wait(delayMs: number) {
  return new Promise((resolve) => setTimeout(resolve, delayMs))
}
