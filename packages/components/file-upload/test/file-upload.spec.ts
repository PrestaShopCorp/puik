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
        inputAccept: 'image/*, application/pdf',
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
    const itemsWrapper = wrapper.find('.puik-file-upload__items')
    expect(itemsWrapper.wrapperElement.children.length).toBe(0)

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

    expect(itemsWrapper.wrapperElement.children.length).toBe(1)
    expect(validateFile).toHaveBeenCalledOnce()
    expect(uploadFile).toHaveBeenCalledOnce()

    await waitUntilUploaded()

    const loadingWrapper: DOMWrapper<HTMLElement, HTMLElement> =
      itemsWrapper.find('.puik-file-upload-item__loading-icon')
    expect(loadingWrapper.exists()).toBe(false)

    const imgWrapper: DOMWrapper<HTMLElement, HTMLElement> = itemsWrapper.find(
      '.puik-file-upload-item__img'
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
          return { valid: false, errorMessage: 'rejected' }
        return { valid: true }
      },
    })
    const itemsWrapper = wrapper.find('.puik-file-upload__items')
    await wrapper.vm.$nextTick()
    // Only the image file should have been accepted
    expect(itemsWrapper.wrapperElement.children.length).toBe(1)
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
    const itemsWrapper = wrapper.find('.puik-file-upload__items')
    await wrapper.vm.$nextTick()
    expect(itemsWrapper.wrapperElement.children.length).toBe(1)

    await waitUntilUploaded()
    const loadingWrapper: DOMWrapper<HTMLElement, HTMLElement> =
      itemsWrapper.find('.puik-file-upload-item__doc-icon')
    expect(loadingWrapper.exists()).toBe(true)
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
  // 'await' of uploadFile take time
  await new Promise((resolve) => setTimeout(resolve, 50))
}
