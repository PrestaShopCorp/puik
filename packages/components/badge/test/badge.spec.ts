import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { faker } from '@faker-js/faker'
import PuikBadge from '../src/badge.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Badge tests', () => {
  let wrapper: VueWrapper<any>

  const findBadge = () => wrapper.find('.puik-badge')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikBadge, {
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

  it('should display an success badge by default', () => {
    factory()
    expect(findBadge().classes()).toContain('puik-badge--success')
  })

  it('should display an info badge', () => {
    factory({ variant: 'info' })
    expect(findBadge().classes()).toContain('puik-badge--info')
  })

  it('should display a text', () => {
    const slotDefault = 'Badge content'
    factory(
      {},
      {
        slots: {
          default: slotDefault,
        },
      }
    )
    expect(wrapper.text()).toEqual(slotDefault)
  })
})
