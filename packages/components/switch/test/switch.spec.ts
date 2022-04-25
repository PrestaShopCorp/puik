import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Switch from '../src/switch.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Switch tests', () => {
  let wrapper: VueWrapper<any>
  const findLabel = () => wrapper.find('.puik-switch__label')
  const findSwitch = () => wrapper.find('.puik-switch')
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Switch, {
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

  it('should have a label', () => {
    const label = 'Switch label'
    factory({ label })
    expect(findLabel().text()).toBe(label)
  })

  it('should be disabled', () => {
    factory({ disabled: true })
    expect((findSwitch().element as HTMLButtonElement).disabled).toBeTruthy()
  })

  it('should be set as enabled', () => {
    factory({ modelValue: true })
    expect(findSwitch().classes()).toContain('puik-switch--enabled')
  })

  it('should emit an event on click', async () => {
    factory({ modelValue: false })
    await findSwitch().trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toStrictEqual([true])
  })
})
