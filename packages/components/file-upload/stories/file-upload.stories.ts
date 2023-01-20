import PuikFileUpload from '../src/file-upload.vue'
import type { Meta, Story, Args } from '@storybook/vue3'
import type {
  FileValidation,
  ValidateFileAdditionalProperties,
} from '../src/file-upload'

export default {
  title: 'Components/FileUpload',
  component: PuikFileUpload,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikFileUpload,
  },
  setup() {
    return { args }
  },
  template: `<puik-file-upload v-bind="args" />`,
})

export const Default = Template.bind({})

Default.args = {
  validateFile,
  uploadFile,
  deleteFile,
  inputAccept: 'image/*, application/pdf',
}
Default.parameters = {}

/*
 * Example of implementation
 */

let seq = 0
const uploadedFiles: { fileRelId: number; file: File }[] = []

function validateFile(
  file: File,
  { totalSizeB }: ValidateFileAdditionalProperties
): FileValidation {
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

function wait(delayMs: number) {
  return new Promise((resolve) => setTimeout(resolve, delayMs))
}

async function uploadFile(
  file: File,
  options: { onUploadProgress: (progress: number) => void }
): Promise<{ fileRelId: number }> {
  const stepMs = (Math.random() * 2800 + 200) / 100 // total will be between 200ms and 3 seconds
  for (let i = 1; i <= 100; ++i) {
    await wait(stepMs)
    options.onUploadProgress(i / 100)
  }
  const fileRelId = ++seq
  uploadedFiles.push({
    fileRelId,
    file,
  })
  return {
    fileRelId,
  }
}

async function deleteFile(fileRelId: number): Promise<boolean> {
  await wait(500)
  const index = uploadedFiles.findIndex((item) => item.fileRelId === fileRelId)
  if (index === -1) return false
  uploadedFiles.splice(index, 1)
  return true
}
