import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { faker } from '@faker-js/faker'
import PuikLabel from '../src/label.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Label tests', () => {
  let wrapper: VueWrapper<any>

  const findLabel = () => wrapper.find('.puik-label')
  const findLabelOptional = () => wrapper.find('.puik-label--optional')
  const findLabelRequired = () => wrapper.find('.puik-label--required')
  const findLabelReadonly = () => wrapper.find('.puik-label--readonly')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikLabel, {
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

  it('should set the label', () => {
    const label = faker.lorem.words(2)
    factory(
      {},
      {
        slots: {
          default: label,
        },
      }
    )
    expect(findLabel().text()).toBe(label)
  })

  it('should set the label in optional mode', () => {
    factory(
      { optional: true },
      {
        slots: {
          default: faker.lorem.words(2),
        },
      }
    )
    expect(findLabelOptional().exists()).toBeTruthy()
  })

  it('should set the label in required mode', () => {
    factory(
      { required: true },
      {
        slots: {
          default: faker.lorem.words(2),
        },
      }
    )
    expect(findLabelRequired().exists()).toBeTruthy()
  })

  it('should set the label in readonly mode', () => {
    factory(
      { readonly: true },
      {
        slots: {
          default: faker.lorem.words(2),
        },
      }
    )
    expect(findLabelReadonly().exists()).toBeTruthy()
  })
})
