import PuikFileUpload from '../src/file-upload.vue'
import { fakeDeleteFile, fakeUploadFile } from './impl-example'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/FileUpload',
  component: PuikFileUpload,
  argTypes: {
    initialFiles: {
      description:
        'Provides an optional list of files to display as already uploaded. The format is of type: <code>{ fileId: string; file: File }</code>.',
    },
    accept: {
      description:
        'A string value that would be transmitted to the <code>&lt;input&gt;</code> of type <code>file</code>. See also: [documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept).',
      table: {
        defaultValue: {
          summary:
            'image/*, application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        },
      },
    },
    slowDownMs: {
      description:
        'A delay in milliseconds, each uploading progress bar will take this minimal amount of time before ending.',
      table: {
        defaultValue: { summary: 1000 },
      },
    },
    validateFile: {
      description:
        "A function for validating the files. It is required to check the file type here because the attribute <code>accept</code> of the <code>&lt;input&gt;</code> type <code>file</code> doesn't apply on dropped files.",
      table: {
        defaultValue: {
          summary: 'a function that validates the file types, and that checks',
        },
      },
    },
    uploadFile: {
      description:
        "A function that uploads a file. It returns a <code>Promise</code> that is resolved when the file is uploaded. As a parameter, it takes the <code>File</code> and a callback <code>onUploadProgress</code> that must be called for animating the progress bar. Note: use <code>XMLHttpRequest</code> or <code>axios</code>. <code>fetch</code> doesn't provide a way to observe the progression.",
    },
    deleteFile: {
      description: 'A function that deletes a file.',
    },
  },
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
      fileId: '-1',
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
  uploadFile: fakeUploadFile,
  deleteFile: fakeDeleteFile,
}
Default.parameters = {}
