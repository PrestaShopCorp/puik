import { withInstall, withNoopInstall } from '@puik/utils'
import FileUpload from './src/file-upload.vue'
import FileUploadMedia from './src/file-upload-media.vue'

export const PuikFileUpload = withInstall(FileUpload)
export default PuikFileUpload

export const PuikFileUploadMedia = withNoopInstall(FileUploadMedia)

export * from './src/file-upload'
export * from './src/helpers/default-upload'
