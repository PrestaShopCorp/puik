import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { faker } from '@faker-js/faker'
import Alert from '../src/alert.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Alert tests', () => {
  let wrapper: VueWrapper<any>

  const findAlert = () => wrapper.find('.puik-alert')
  const findClose = () => wrapper.find('.puik-alert__close')
  const findButton = () => wrapper.find('.puik-alert__button')
  const findDesc = () => wrapper.find('.puik-alert__description')
  const findViewMore = () => wrapper.find('.puik-alert__collapse')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Alert, {
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

  it('should display an success alert by default', () => {
    factory()
    expect(findAlert().classes()).toContain('puik-alert--success')
  })

  it('should display a warning alert', () => {
    factory({ variant: 'warning' })
    expect(findAlert().classes()).toContain('puik-alert--warning')
  })

  it('should be a closable alert and emit the close event on close', () => {
    factory({ closable: true })
    expect(findClose().exists()).toBeTruthy()
    findClose().trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('should display a button which emits the click event on click', () => {
    factory({ buttonLabel: 'Button' })
    expect(findButton().exists()).toBeTruthy()
    findButton().trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('should display a view more link if the description has more than 50 characters', async () => {
    factory({
      title: faker.lorem.word(2),
      description: faker.lorem.sentence(60),
    })
    expect(findViewMore().exists()).toBeTruthy()
    expect(findDesc().classes()).not.toContain(
      'puik-alert__description--view-more'
    )
    await findViewMore().trigger('click')
    expect(findDesc().classes()).toContain('puik-alert__description--view-more')
  })
})
