import type { UploadFileHandler, UploadProgressHandler } from '../file-upload'

export const makeUpload = (url: string) => {
  const upload: UploadFileHandler = async (
    file: File,
    options: { onUploadProgress?: UploadProgressHandler } = {}
  ): Promise<{ fileId: string }> => {
    let resolve: (responseData: any) => void
    let reject: (err: any) => void
    const promise = new Promise<any>((resolveCb, rejectCb) => {
      resolve = resolveCb
      reject = rejectCb
    })

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

    const responseData = await promise
    if (!responseData) throw new Error(`Error ${responseData} from API`)
    if (typeof responseData?.fileId !== 'string')
      throw new Error('Invalid response from API')
    return {
      fileId: responseData.fileId,
    }
  }
  return upload
}
