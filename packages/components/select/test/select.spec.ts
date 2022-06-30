import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { faker } from '@faker-js/faker'
import PuikSelect from '../src/select.vue'
import PuikOption from '../src/option.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Select tests', () => {
  let wrapper: VueWrapper<any>

  const findSelect = () => wrapper.find('.puik-select__button')
  const findSelectComponent = () => wrapper.findComponent(PuikSelect)
  const findList = () => wrapper.find('.puik-select__options')
  const findSelected = () => wrapper.find('.puik-select__selected')
  const findAllOptions = () => wrapper.findAllComponents(PuikOption)
  const findErrorMsg = () => wrapper.find('.puik-select__error')

  const factory = (
    template: string,
    data: Record<string, any> = () => ({}),
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(
      {
        components: {
          'puik-select': PuikSelect,
          'puik-option': PuikOption,
        },
        template,
        data,
        ...options,
      },
      {
        attachTo: 'body',
      }
    )
  }

  it('should be a vue instance', () => {
    factory(
      `<puik-select>
        <puik-option option="test">test</puik-option>
      </puik-select>`
    )
    expect(wrapper).toBeTruthy()
  })

  it('should be in a disabled state', async () => {
    factory(
      `<puik-select disabled>
        <puik-option option="test">test</puik-option>
      </puik-select>`
    )
    await findSelect().trigger('click')
    expect(findList().exists()).toBeFalsy()
  })

  it('should display a placeholder', () => {
    const placeholder = faker.random.word()
    factory(
      `<puik-select :placeholder="placeholder">
        <puik-option option="test">test</puik-option>
      </puik-select>`,
      () => ({
        placeholder,
      })
    )
    expect(findSelected().text()).toBe(placeholder)
  })

  it('should be in an error state', () => {
    const error = faker.lorem.sentence()
    factory(
      `<puik-select :error="error">
        <puik-option option="test">test</puik-option>
      </puik-select>`,
      () => ({
        error,
      })
    )
    expect(findSelect().classes()).toContain('puik-select__button--error')
    expect(findErrorMsg().text()).toContain(error)
  })

  it('should return the selected option string', async () => {
    factory(
      `<puik-select v-model="value">
        <puik-option option="test">test</puik-option>
        <puik-option option="test2">test2</puik-option>
        <puik-option option="test3">test3</puik-option>
      </puik-select>`,
      () => ({
        value: '',
      })
    )
    await findSelect().trigger('click')
    expect(findList().exists()).toBeTruthy()
    await findAllOptions().at(1)?.trigger('click')
    await nextTick()
    expect(
      findSelectComponent().emitted('update:modelValue')?.[0]
    ).toStrictEqual(['test2'])
  })

  it('should return the selected option object', async () => {
    const options = [
      {
        label: 'Test',
        value: 'test',
      },
      {
        label: 'Test2',
        value: 'test2',
      },
      {
        label: 'Test3',
        value: 'test3',
      },
    ]
    factory(
      `<puik-select v-model="value">
        <puik-option v-for="option in options" :option="option">option.label</puik-option>
      </puik-select>`,
      () => ({
        options,
        value: {},
      })
    )
    await findSelect().trigger('click')
    expect(findList().exists()).toBeTruthy()
    await findAllOptions().at(2)?.trigger('click')
    await nextTick()
    expect(
      findSelectComponent().emitted('update:modelValue')?.[0]
    ).toStrictEqual([options[2]])
    expect(findSelected().text()).toBe(options[2].label)
  })

  it('should set a default string value', () => {
    const options = ['test', 'test2', 'test3']
    factory(
      `<puik-select v-model="value">
        <puik-option v-for="option in options" :option="option">option</puik-option>
      </puik-select>`,
      () => ({
        options,
        value: options[2],
      })
    )
    expect(findSelected().text()).toBe(options[2])
  })

  it('should set a default object value', () => {
    const options = [
      {
        label: 'Test',
        value: 'test',
      },
      {
        label: 'Test2',
        value: 'test2',
      },
      {
        label: 'Test3',
        value: 'test3',
      },
    ]
    factory(
      `<puik-select v-model="value">
        <puik-option v-for="option in options" :option="option">option.label</puik-option>
      </puik-select>`,
      () => ({
        options,
        value: options[2],
      })
    )
    expect(findSelected().text()).toBe(options[2].label)
  })

  it('should display the chosen displayProperty', async () => {
    const options = [
      {
        name: 'Test',
        value: 'test',
      },
      {
        name: 'Test2',
        value: 'test2',
      },
      {
        name: 'Test3',
        value: 'test3',
      },
    ]
    factory(
      `<puik-select displayProperty="name" v-model="value">
        <puik-option v-for="option in options" :option="option">option.name</puik-option>
      </puik-select>`,
      () => ({
        options,
        value: {},
      })
    )
    await findSelect().trigger('click')
    expect(findList().exists()).toBeTruthy()
    await findAllOptions().at(0)?.trigger('click')
    expect(findSelected().text()).toBe(options[0].name)
  })

  it('should disable the option', async () => {
    factory(`
    <puik-select>
      <puik-option option="test" disabled>test</puik-option>
      <puik-option option="test2">test2</puik-option>
    </puik-select>`)
    await findSelect().trigger('click')
    expect(findAllOptions().at(0)?.find('.puik-option').classes()).toContain(
      'puik-option--disabled'
    )
    await findAllOptions().at(0)?.trigger('click')
    expect(findSelected().text()).toBe('')
  })
})
