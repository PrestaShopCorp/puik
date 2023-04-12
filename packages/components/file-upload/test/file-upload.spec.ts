import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import FileUpload from '../src/file-upload.vue'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import type { FileValidation } from '../src/file-upload'

let seq = 0

function validateFileImpl(): FileValidation {
  return { valid: true }
}

function uploadFileImpl(): Promise<{ fileId: string }> {
  return Promise.resolve({ fileId: String(++seq) })
}

function deleteFileImpl(): Promise<void> {
  return Promise.resolve()
}

describe('File Upload tests', () => {
  let wrapper: VueWrapper<any>

  const validateFile = vi.fn(validateFileImpl)
  const uploadFile = vi.fn(uploadFileImpl)
  const deleteFile = vi.fn(deleteFileImpl)

  const factory = (propsData: Record<string, any> = {}) => {
    wrapper = mount(FileUpload, {
      props: {
        validateFile,
        uploadFile,
        deleteFile,
        accept: 'image/*, application/pdf',
        slowDownMs: 0,
        ...propsData,
      },
    })
  }

  it('should be a vue instance', () => {
    factory()
    expect(wrapper).toBeTruthy()
  })

  it('simulates file input change', async () => {
    factory()
    const mediasWrapper = wrapper.find('.puik-file-upload__medias')
    expect(mediasWrapper.wrapperElement.children.length).toBe(0)

    const file = makeImageFile()

    // create a file input event
    const fileInputEvent = new Event('change', { bubbles: true })

    // set the files property of the file input
    Object.defineProperty(fileInputEvent, 'target', {
      value: { files: [file] },
      writable: true,
    })

    // trigger the change event on the file input
    const input = wrapper.find('input[type="file"]')
    input.element.dispatchEvent(fileInputEvent)

    // wait for next tick to allow the component to update
    await wrapper.vm.$nextTick()

    expect(mediasWrapper.wrapperElement.children.length).toBe(1)
    expect(validateFile).toHaveBeenCalledOnce()
    expect(uploadFile).toHaveBeenCalledOnce()

    await waitUntilUploaded()

    const loadingWrapper: DOMWrapper<HTMLElement, HTMLElement> =
      mediasWrapper.find(
        '.puik-file-upload-media__big-icon.puik-file-upload-media__big-icon--light'
      )
    expect(loadingWrapper.exists()).toBe(false)

    const imgWrapper: DOMWrapper<HTMLElement, HTMLElement> = mediasWrapper.find(
      '.puik-file-upload-media__img'
    )
    expect(imgWrapper.exists()).toBe(true)
  })

  it('should reject non-accepted files', async () => {
    factory({
      initialFiles: [
        {
          fileId: String(++seq),
          file: new File(['file content'], 'file.txt', { type: 'text/plain' }),
        },
        {
          fileId: String(++seq),
          file: makeImageFile(),
        },
      ],
      validateFile(file: File): FileValidation {
        if (file.type === 'text/plain')
          return { valid: false, message: 'rejected' }
        return { valid: true }
      },
    })
    const mediasWrapper = wrapper.find('.puik-file-upload__medias')
    await wrapper.vm.$nextTick()
    // Only the image file should have been accepted
    expect(mediasWrapper.wrapperElement.children.length).toBe(1)
  })

  it('should display the PDF icon', async () => {
    factory({
      initialFiles: [
        {
          fileId: String(++seq),
          file: new File(['file content'], 'file.pdf', {
            type: 'application/pdf',
          }),
        },
      ],
    })
    const mediasWrapper = wrapper.find('.puik-file-upload__medias')
    await wrapper.vm.$nextTick()
    expect(mediasWrapper.wrapperElement.children.length).toBe(1)

    await waitUntilUploaded()
    const loadingWrapper: DOMWrapper<HTMLElement, HTMLElement> =
      mediasWrapper.find('.puik-file-upload-media__big-icon')
    expect(loadingWrapper.exists()).toBe(true)

    const loadingWrapper2: DOMWrapper<HTMLElement, HTMLElement> =
      mediasWrapper.find('.puik-file-upload-media__big-icon--light')
    expect(loadingWrapper2.exists()).toBe(false)
  })
})

function makeImageFile() {
  return new File(
    [
      `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
  <circle cx="25" cy="25" r="20" fill="#abc"/>
</svg>`,
    ],
    'my-image.svg',
    {
      type: 'image/svg+xml',
    }
  )
}

async function waitUntilUploaded() {
  // 'await' of uploadFile takes time
  await new Promise((resolve) => setTimeout(resolve, 50))
}
