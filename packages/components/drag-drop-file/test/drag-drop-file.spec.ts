import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikDragDropFile from '../src/drag-drop-file.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('DragDropFile tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikDragDropFile, {
      props: {
        ...propsData,
      },
      ...options,
    })
  }
  it('should be a vue instance', () => {
    factory()
    expect(wrapper).toBeTruthy()
  })
})
