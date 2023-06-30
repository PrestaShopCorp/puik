import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikModal from '../src/modal.vue'
import {
  PuikModalVariant,
  DESTRUCTIVE_ICON_NAME,
  PuikModalSize,
} from '../src/modal'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

// @ts-expect-error Find on the Tailwindlabs/headlessui repo
// https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-vue/src/components/dialog/dialog.test.ts#L46
global.ResizeObserver = class FakeResizeObserver {
  observe() {
    return
  }
  disconnect() {
    return
  }
}

describe('Modal tests', () => {
  let wrapper: VueWrapper<any>

  const findModal = () => wrapper.find('.puik-modal')
  const findIcon = () =>
    wrapper.find('.puik-modal__dialogPanelContainer__dialogPanel__header__icon')
  const findCloseButton = () =>
    wrapper.find(
      '.puik-modal__dialogPanelContainer__dialogPanel__header__close-button'
    )
  const findMainButton = () =>
    wrapper.find(
      '.puik-modal__dialogPanelContainer__dialogPanel__footer__button--main'
    )
  const findSecondaryButton = () =>
    wrapper.find(
      '.puik-modal__dialogPanelContainer__dialogPanel__footer__button--second'
    )
  const findSideButton = () =>
    wrapper.find(
      '.puik-modal__dialogPanelContainer__dialogPanel__footer__button--side'
    )

  const homeTitleIcon = 'home'

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikModal, {
      global: {
        stubs: {
          teleport: true,
        },
      },
      props: {
        ...propsData,
      },
      ...options,
    })
  }

  it('should be a vue instance, the default one', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
    })

    expect(wrapper).toBeTruthy()
    expect(findIcon().exists()).toBeFalsy()
    expect(findCloseButton().exists()).toBeTruthy()
    expect(findModal().classes()).toContain('puik-modal--small')
    expect(findMainButton().classes()).toContain('puik-button--primary')
    expect(findSecondaryButton().classes()).toContain('puik-button--secondary')
  })

  it('should display destructive style', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
      titleIcon: homeTitleIcon,
      variant: PuikModalVariant.DESTRUCTIVE,
    })

    expect(findIcon().text()).toBe(DESTRUCTIVE_ICON_NAME)
    expect(findModal().classes()).toContain('puik-modal--destructive')
    expect(findMainButton().classes()).toContain('puik-button--destructive')
    expect(findSecondaryButton().classes()).toContain('puik-button--tertiary')
  })

  it('should display feedback style', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
      titleIcon: homeTitleIcon,
      variant: PuikModalVariant.FEEDBACK,
    })

    expect(findIcon().text()).toBe(homeTitleIcon)
    expect(findModal().classes()).toContain('puik-modal--feedback')
    expect(findMainButton().classes()).toContain('puik-button--primary')
    expect(findSecondaryButton().classes()).toContain('puik-button--secondary')
  })

  it('should display dialog style', async () => {
    const sideButtonText = 'Awesome side button'

    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
      titleIcon: homeTitleIcon,
      variant: PuikModalVariant.DIALOG,
      sideButtonText,
    })

    expect(findIcon().text()).toBe(homeTitleIcon)
    expect(findModal().classes()).toContain('puik-modal--dialog')
    expect(findMainButton().classes()).toContain('puik-button--primary')
    expect(findSecondaryButton().classes()).toContain('puik-button--secondary')
    expect(findSideButton().exists()).toBeTruthy()
    expect(findSideButton().text()).toBe(sideButtonText)
  })

  it('should display with the large size', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
      size: PuikModalSize.LARGE,
    })

    expect(findModal().classes()).toContain('puik-modal--large')
  })

  it('should display with the medium size', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
      size: PuikModalSize.MEDIUM,
    })

    expect(findModal().classes()).toContain('puik-modal--medium')
  })

  it('should display with the small size', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
      size: PuikModalSize.SMALL,
    })

    expect(findModal().classes()).toContain('puik-modal--small')
  })

  it('should display the close button and send close event when clicked', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
      hasCloseButton: true,
    })

    expect(findCloseButton().exists()).toBeTruthy()

    findCloseButton().trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('should display the close button', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
      hasCloseButton: true,
    })

    expect(findCloseButton().exists()).toBeTruthy()

    findCloseButton().trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('check main button event', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
    })

    findMainButton().trigger('click')
    expect(wrapper.emitted('button-main')).toBeTruthy()
  })

  it('check secondary button event', async () => {
    await factory({
      title: 'Awesome title',
      mainButtonText: 'Awesome main',
      secondButtonText: 'Awesome second',
      isOpen: true,
    })

    findSecondaryButton().trigger('click')
    expect(wrapper.emitted('button-second')).toBeTruthy()
  })
})
