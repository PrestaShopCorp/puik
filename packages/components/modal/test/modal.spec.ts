import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PuikModal from '../src/modal.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Modal tests', () => {
  let wrapper: VueWrapper<any>
  const findModal = () => wrapper.find('.puik-modal')
  const findModalTitle = () => wrapper.find('.puik-modal_title')
  const findModalCloseButton = () => wrapper.find('.puik-modal_close')

  const factory = async (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikModal, {
      props: {
        ...propsData,
      },
      ...options,
    })

    await nextTick()
  }

  it('should be a vue instance', async () => {
    await factory()
    expect(wrapper).toBeTruthy()
  })

  it('should be visible', async () => {
    await factory({ modelValue: true })

    expect(findModal().exists()).toBeTruthy()
  })

  it('should be hidden', async () => {
    await factory({ modelValue: false })

    expect(findModal().exists()).toBeFalsy()
  })

  it('should set the title', async () => {
    await factory({ modelValue: true, title: 'Hello world title' })

    expect(findModalTitle().text()).toBe('Hello world title')
  })

  it('should set the width css property', async () => {
    await factory({ modelValue: true, width: '10px' })

    expect(findModal().element.style.width).toBe('10px')
  })

  it('should set the top css property', async () => {
    await factory({ modelValue: true, top: '20%' })

    expect(findModal().element.style.top).toBe('20%')
  })

  it('should set all internal node in center', async () => {
    await factory({ modelValue: true, center: true })

    expect(findModal().element.style.textAlign).toBe('center')
  })

  it('should set a custom class', async () => {
    await factory({ modelValue: true, customClass: 'test' })

    expect(findModal().classes()).toContain('test')
  })

  it('should show close arrow', async () => {
    await factory({ modelValue: true, showClose: true })

    expect(findModalCloseButton().exists()).toBeTruthy()
  })

  it('should hide close arrow', async () => {
    await factory({ modelValue: true, showClose: false })

    expect(findModalCloseButton().exists()).toBeFalsy()
  })
})
