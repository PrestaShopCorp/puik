import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikDragDrop from '../src/drag-drop.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('DragDrop tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikDragDrop, {
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
