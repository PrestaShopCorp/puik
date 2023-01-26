import { withInstall } from '@puik/utils'
import FileUpload from './src/file-upload.vue'
// import FileUploadItem from './src/file-upload-item.vue'

export const PuikFileUpload = withInstall(FileUpload)
export default PuikFileUpload

// export const PuikFileUploadItem = withInstall(FileUploadItem)

export * from './src/file-upload'
