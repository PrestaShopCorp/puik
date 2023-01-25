import PuikFileUpload from '../src/file-upload.vue'
import { deleteFile, uploadFile, validateFile } from './impl-example'
import type { Meta, Story, Args } from '@storybook/vue3'

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
  initialFiles: [
    {
      fileRelId: -1,
      file: new File(
        [
          `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
  <circle cx="25" cy="25" r="20" fill="#abc"/>
</svg>`,
        ],
        'my-image.svg',
        {
          type: 'image/svg+xml',
        }
      ),
    },
  ],
  validateFile,
  uploadFile,
  deleteFile,
  inputAccept: 'image/*, application/pdf',
}
Default.parameters = {}
