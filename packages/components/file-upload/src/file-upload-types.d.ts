export interface UploadingFileProps {
  frontId: number
  file: File
  uploadPromise: Promise<{ fileRelId: number }>
  status: {
    /**
     * A value between 0 and 1.
     */
    progress: number
    ended: boolean
    hasError: boolean
  }
}
