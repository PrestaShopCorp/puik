export interface UploadingFileProps {
  frontId: number
  file: File
  uploadPromise: Promise<{ fileId: string }>
  status: {
    /**
     * A value between 0 and 1.
     */
    progress: number
    ended: boolean
    hasError: boolean
  }
}

export interface FrontItem {
  frontId: number
}
