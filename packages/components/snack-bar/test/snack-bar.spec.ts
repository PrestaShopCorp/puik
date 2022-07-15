import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikSnackBar from '../src/snack-bar.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('SnackBar tests', () => {
  let wrapper: VueWrapper<any>

  const findText = () => wrapper.find('.puik-snack-bar__text')
  const findAction = () => wrapper.find('.puik-snack-bar__right__action')
  const findVariant = () => wrapper.find('.puik-snack-bar')
  const findCloseButton = () => wrapper.find('.puik-snack-bar__close-button')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikSnackBar, {
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

  it('should be a default snackbar without action', () => {
    factory({ text: 'Hello world' })
    expect(findText().text()).toEqual('Hello world')
    expect(findVariant().classes()).toContain('puik-snack-bar--default')
    expect(findAction().exists()).toBeFalsy()
  })

  it('should be a default snackbar with action', () => {
    factory({ text: 'Hello world', action: 'Cancel' })
    expect(findText().text()).toEqual('Hello world')
    expect(findAction().exists()).toBeTruthy()
    expect(findVariant().classes()).toContain('puik-snack-bar--default')
    expect(findAction().text()).toEqual('Cancel')
  })

  it('should be a dangerous snackbar without action', () => {
    factory({ text: 'This is dangerous', variant: 'danger' })
    expect(findText().text()).toEqual('This is dangerous')
    expect(findVariant().classes()).toContain('puik-snack-bar--danger')
    expect(findAction().exists()).toBeFalsy()
  })

  it('should be a dangerous snackbar with action', () => {
    factory({ text: 'This is dangerous', action: 'Retry', variant: 'danger' })
    expect(findAction().exists()).toBeTruthy()
    expect(findText().text()).toEqual('This is dangerous')
    expect(findVariant().classes()).toContain('puik-snack-bar--danger')
    expect(findAction().text()).toEqual('Retry')
  })

  it('should trigger action click', async () => {
    factory({ text: 'Hello world', action: 'Cancel' })
    await findAction().trigger('click')
    expect(wrapper.emitted()).toHaveProperty('on-action')
  })

  it('should close the snackbar when clicking on the Close button', async () => {
    factory({ text: 'Hello world', action: 'Cancel' })
    expect(wrapper.vm.shown).toBeTruthy()
    await findCloseButton().trigger('click')
    expect(wrapper.vm.shown).toBeFalsy()
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
