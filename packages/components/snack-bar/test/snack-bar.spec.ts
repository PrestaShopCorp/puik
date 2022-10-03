import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { faker } from '@faker-js/faker'
import PuikSnackBar from '../src/snack-bar.vue'
import type { SnackBarOptions } from './../src/snack-bar'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'
describe('SnackBar tests', () => {
  let wrapper: VueWrapper<any>

  const findText = () => wrapper.find('.puik-snack-bar__text')
  const findAction = () => wrapper.find('.puik-snack-bar__action')
  const findSnackBar = () => wrapper.find('.puik-snack-bar')
  const findCloseButton = () => wrapper.find('.puik-snack-bar__close-button')

  const factory = (
    propsData: SnackBarOptions,
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
    const text = faker.lorem.sentence()
    factory({ text })
    expect(wrapper).toBeTruthy()
  })

  it('should be a default snackbar without action', () => {
    const text = faker.lorem.sentence()
    factory({ text })
    expect(findText().text()).toEqual(text)
    expect(findSnackBar().classes()).toContain('puik-snack-bar--default')
    expect(findAction().exists()).toBeFalsy()
  })

  it('should be a default snackbar with action', async () => {
    const text = faker.lorem.sentence()
    const label = faker.lorem.word()
    const callback = vi.fn()
    factory({
      text,
      action: {
        label,
        callback,
      },
    })
    expect(findText().text()).toEqual(text)
    expect(findAction().exists()).toBeTruthy()
    expect(findSnackBar().classes()).toContain('puik-snack-bar--default')
    expect(findAction().text()).toEqual(label)
    await findAction().trigger('click')
    expect(callback).toBeCalled()
  })

  it('should be a dangerous snackbar without action', () => {
    const text = faker.lorem.sentence()
    factory({ text, variant: 'danger' })
    expect(findText().text()).toEqual(text)
    expect(findSnackBar().classes()).toContain('puik-snack-bar--danger')
    expect(findAction().exists()).toBeFalsy()
  })

  it('should be a dangerous snackbar with action', async () => {
    const text = faker.lorem.sentence()
    const label = faker.lorem.word()
    const callback = vi.fn()
    factory({
      text,
      action: {
        label,
        callback,
      },
      variant: 'danger',
    })
    expect(findAction().exists()).toBeTruthy()
    expect(findText().text()).toEqual(text)
    expect(findSnackBar().classes()).toContain('puik-snack-bar--danger')
    expect(findAction().text()).toEqual(label)
    await findAction().trigger('click')
    expect(callback).toBeCalled()
  })

  it('should close the snackbar when clicking on the close button', async () => {
    const text = faker.lorem.sentence()
    await factory({ text })
    expect(findSnackBar().isVisible()).toBeTruthy()
    await findCloseButton().trigger('click')
    expect(findSnackBar().isVisible()).toBeFalsy()
  })

  it('should dismiss the snackbar after 3 seconds', async () => {
    vi.useFakeTimers()
    const text = faker.lorem.sentence()
    await factory({ text, duration: 3000 })
    expect(findSnackBar().isVisible()).toBeTruthy()
    await vi.advanceTimersByTime(3000)
    expect(findSnackBar().isVisible()).toBeFalsy()
    await vi.clearAllTimers()
  })

  it('should reset the snack bar timer on mouse hover', async () => {
    vi.useFakeTimers()
    const text = faker.lorem.sentence()

    await factory({ text, duration: 3000 })
    expect(findSnackBar().isVisible()).toBeTruthy()

    await vi.advanceTimersByTime(2000)
    await findSnackBar().trigger('mouseenter')
    await findSnackBar().trigger('mouseleave')

    await vi.advanceTimersByTime(1000)
    expect(findSnackBar().isVisible()).toBeTruthy()

    await vi.advanceTimersByTime(2000)
    expect(findSnackBar().isVisible()).toBeFalsy()

    await vi.clearAllTimers()
  })
})
