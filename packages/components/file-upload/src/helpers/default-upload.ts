import type { UploadFileHandler, UploadProgressHandler } from '../file-upload'

export const makeUpload = (url: string) => {
  const upload: UploadFileHandler = async (
    file: File,
    options: { onUploadProgress?: UploadProgressHandler } = {}
  ): Promise<{ fileId: string }> => {
    const response = await new Promise<string>((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onerror = (error) => reject(error)
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(xhr.response)
        }
      }
      xhr.upload.onprogress = (event) => {
        const progress = event.total === 0 ? 1 : event.loaded / event.total
        options.onUploadProgress?.(progress)
      }
      xhr.open('POST', url)

      const formData = new FormData()
      formData.append('file', file)
      xhr.send(formData)
    })

    if (!response) throw new Error('Missing response from API')
    let data: any
    try {
      data = JSON.parse(response)
    } catch (err: any) {
      throw new Error(`Invalid response from API: ${response}`)
    }
    if (!data?.fileId || typeof data.fileId !== 'string') {
      throw new Error(`Invalid response from API: ${response}`)
    }
    return {
      fileId: data.fileId,
    }
  }
  return upload
}
