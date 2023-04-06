import type { UploadFileHandler, UploadProgressHandler } from '../file-upload'

export const makeUpload = (url: string) => {
  const upload: UploadFileHandler = async (
    file: File,
    options: { onUploadProgress?: UploadProgressHandler } = {}
  ): Promise<{ fileId: string }> => {
    const response = await new Promise<any>((resolve, reject) => {
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

    if (!response) throw new Error(`Error ${response} from API`)
    if (typeof response?.fileId !== 'string')
      throw new Error('Invalid response from API')
    return {
      fileId: response.fileId,
    }
  }
  return upload
}
