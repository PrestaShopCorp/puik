import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Radio from '../src/radio.vue'
import type { RadioProps } from '../src/radio'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Radio tests', () => {
  let wrapper: VueWrapper<any>
  const findInput = () => wrapper.find('.puik-radio__input')
  const findLabel = () => wrapper.find('.puik-radio__label')

  const factory = (
    props: Partial<RadioProps> = {
      disabled: false,
      label: 'Label',
      modelValue: false,
      value: false,
    },
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Radio, {
      props,
      ...options,
    })
  }
  it('should emit update:modelValue with true as payload when the input is clicked', async () => {
    factory({ modelValue: false })
    await findInput().setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  // it('should emit update:modelValue with true as payload when the label is clicked', async () => {
  //   factory({ label: 'Label', modelValue: false, value: false }, { attachTo: document.body })
  //   await findLabel().trigger('click')
  //   expect(wrapper.emitted('update:modelValue')).toStrictEqual([['on']])
  // })
  it('should not emit update:modelValue when the input is clicked AND the radio is disabled', async () => {
    factory({ disabled: true, modelValue: false })
    await findInput().setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
  it('should not emit update:modelValue when the label is clicked AND the radio is disabled', async () => {
    factory({ label: 'Label', disabled: true, modelValue: false })
    await findLabel().trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
  it('should not emit update:modelValue when the custom label is clicked AND the radio is disabled', async () => {
    factory(
      { disabled: true, modelValue: false },
      { slots: { default: 'Custom label' } }
    )
    await findLabel().trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
  it('should display the label', () => {
    factory({ label: 'The label', modelValue: false })
    expect(findLabel().text()).toContain('The label')
  })
  it('should not render the label if there is no label prop or slot', () => {
    factory({ label: undefined })
    expect(findLabel().exists()).toBeFalsy()
  })
  it('should fill the custom label slot when no label is provided', () => {
    factory(
      { modelValue: false },
      {
        slots: { default: 'Custom label' },
      }
    )
    expect(findLabel().text()).toContain('Custom label')
  })
  it('should display the custom label slot even if a props label is provided', () => {
    factory(
      { label: 'Label', modelValue: false },
      {
        slots: { default: 'Custom label' },
      }
    )
    expect(findLabel().text()).toContain('Custom label')
  })
})
