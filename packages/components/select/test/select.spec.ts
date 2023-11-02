import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { faker } from '@faker-js/faker'
import PuikSelect from '../src/select.vue'
import PuikOption from '../src/option.vue'
import PuikInput from '../../input/src/input.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Select tests', () => {
  let wrapper: VueWrapper<any>

  const findSelect = () => wrapper.find('.puik-select__button')
  const findSelectComponent = () => wrapper.findComponent(PuikSelect)
  const findInputComponent = () => wrapper.findComponent(PuikInput)
  const findList = () => wrapper.find('.puik-select__options')
  const findSelected = () => wrapper.find('.puik-select__selected')
  const findAllOptions = () => wrapper.findAllComponents(PuikOption)
  const findErrorMsg = () => wrapper.find('.puik-select__error')
  const findFullWidth = () => wrapper.find('.puik-select__selected--full-width')

  const factory = (
    template: string,
    data: Record<string, any> = () => ({}),
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount({
      components: {
        'puik-select': PuikSelect,
        'puik-option': PuikOption,
      },
      template,
      data,
      ...options,
    })
  }

  it('should be a vue instance', () => {
    factory(
      `<puik-select v-model="value">
        <puik-option value="test" label="test" />
      </puik-select>`,
      () => ({
        value: '',
      })
    )
    expect(wrapper).toBeTruthy()
  })

  it('should be in a disabled state', async () => {
    factory(
      `<puik-select v-model="value" disabled>
        <puik-option value="test" label="test" />
      </puik-select>`,
      () => ({
        value: '',
      })
    )
    await findSelect().trigger('click')
    expect(findList().isVisible()).toBeFalsy()
  })

  it('should display a placeholder', () => {
    const placeholder = faker.lorem.sentence(1)
    factory(
      `<puik-select v-model="value" :placeholder="placeholder">
        <puik-option value="test" label="test" />
      </puik-select>`,
      () => ({
        value: '',
        placeholder,
      })
    )
    expect(findSelected().attributes('placeholder')).toBe(placeholder)
  })

  it('should be in an error state with', () => {
    const error = faker.lorem.sentence()
    factory(
      `<puik-select v-model="value" :error="error">
        <puik-option value="test" label="test" />
      </puik-select>`,
      () => ({
        value: '',
        error,
      })
    )
    expect(findSelect().classes()).toContain('puik-select__button--error')
    expect(findErrorMsg().text()).toContain(error)
  })

  it('should return the selected option string', async () => {
    factory(
      `<puik-select v-model="value">
        <puik-option value="test" label="test" />
        <puik-option value="test2" label="test2" />
        <puik-option value="test3" label="test3" />
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
        <puik-option v-for="option in options" :value="option" :label="option.label" />
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
    expect(findSelected().element.value).toBe(options[2].label)
  })

  it('should set a default string value', async () => {
    const options = ['test', 'test2', 'test3']
    factory(
      `<puik-select v-model="value">
        <puik-option v-for="option in options" :value="option" :label="option" />
      </puik-select>`,
      () => ({
        options,
        value: options[2],
      })
    )
    await nextTick()
    expect(findSelected().element.value).toBe(options[2])
  })

  it('should set a default object value', async () => {
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
        <puik-option v-for="option in options" :value="option" :label="option.label" />
      </puik-select>`,
      () => ({
        options,
        value: options[2],
      })
    )
    await nextTick()
    expect(findSelected().element.value).toBe(options[2].label)
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
        <puik-option v-for="option in options" :value="option" :label="option.name" />
      </puik-select>`,
      () => ({
        options,
        value: {},
      })
    )
    await findSelect().trigger('click')
    expect(findList().exists()).toBeTruthy()
    await findAllOptions().at(0)?.trigger('click')
    expect(findSelected().element.value).toBe(options[0].name)
  })

  it('should disable the option', async () => {
    factory(
      `
    <puik-select v-model="value">
      <puik-option value="test" label="test" disabled />
      <puik-option value="test2" label="test2" />
    </puik-select>`,
      () => ({
        value: '',
      })
    )
    await findSelect().trigger('click')
    expect(findAllOptions().at(0)?.find('.puik-option').classes()).toContain(
      'puik-option--disabled'
    )
    await findAllOptions().at(0)?.trigger('click')
    expect(findSelected().text()).toBe('')
  })

  it('should filter through the options by using the search', async () => {
    const items = [
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
    const query = 'Test3'
    factory(
      `<puik-select v-slot="{ options }"  v-model="value" :options="items">
        <puik-option v-for="option in options" :value="option" :label="option.label" />
      </puik-select>`,
      () => ({
        items,
        value: {},
      })
    )
    await findSelect().trigger('click')
    await findInputComponent().setValue(query)
    expect(findAllOptions().length).toBe(1)
    expect(findAllOptions().at(0)?.text()).toBe(query)
  })

  it('should call the custom filter method when filtering the options by using the search', async () => {
    const items = [
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
    const customFilterMethod = vi.fn()
    const query = 'Test3'
    factory(
      `<puik-select v-slot="{ options }" v-model="value" :options="items" :custom-filter-method="customFilterMethod">
        <puik-option v-for="option in options" :value="option" :label="option.label" />
      </puik-select>`,
      () => ({
        items,
        value: {},
        customFilterMethod,
      })
    )
    await findSelect().trigger('click')
    await findInputComponent().setValue(query)
    expect(customFilterMethod).toHaveBeenCalledOnce()
  })

  it('should display the list of options with a maximum content width', () => {
    factory(
      `<puik-select v-model="value" :full-width="false">
        <puik-option value="test" label="test" />
      </puik-select>`,
      () => ({
        value: '',
      })
    )
    expect(findSelected().classes(findFullWidth())).toBe(false)
  })

  it('should display the custom label', async () => {
    const items = [
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
      `<puik-select :options="items" v-model="value" custom-label="Custom Label">
        <puik-option value="test" label="test" />
      </puik-select>`,
      () => ({
        items,
        value: '',
      })
    )
    await findAllOptions().at(0)?.trigger('click')
    expect(findSelected().element.value).toBe('Custom Label')
  })

  it('should have a data-test attribute on select, searchInput noResults and options', async () => {
    const items = [
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
    const query = 'Test4'
    factory(
      `<puik-select v-slot="{ options }"  v-model="value" :options="items" data-test="test" noMatchText="No results">
        <puik-option v-for="(option, index) in options" :value="option" :label="option.label" :data-test="'option-test-' + (index + 1)"/>
      </puik-select>`,
      () => ({
        items,
        value: {},
      })
    )

    const select = wrapper.find('.puik-select__selected')
    expect(select.attributes('data-test')).toBe('select-test')
    await findSelect().trigger('click')
    const field = wrapper.find('.puik-input__field')
    expect(field.attributes('data-test')).toBe('input-searchInput-test')
    const option = wrapper.findAll('.puik-option')
    expect(option[2].attributes('data-test')).toBe('option-test-3')
    await findInputComponent().setValue(query)
    const noResults = wrapper.find('.puik-select__no-results')
    expect(noResults.attributes('data-test')).toBe('noResults-test')
  })
})
