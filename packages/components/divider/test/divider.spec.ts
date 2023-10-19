import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikDivider from '../src/divider.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Divider tests', () => {
  let wrapper: VueWrapper<any>
  const findDivider = () => wrapper.find('.puik-divider')
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikDivider, {
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

  it('as id prop value is "puik-chip-example", id html attribute of puik-chip should be "puik-chip-example"', () => {
    factory({ id: 'puik-divider-id' })
    expect(findDivider().attributes().id).toBe('puik-divider-id')
  })
})
