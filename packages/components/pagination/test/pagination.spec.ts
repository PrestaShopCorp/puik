import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { useLocale } from '@puik/hooks'
import PuikPagination from '../src/pagination.vue'
import { PaginationVariantEnum } from '../src/pagination'
import { PuikOption } from '../../select'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Pagination tests', () => {
  let wrapper: VueWrapper<any>

  const findPagination = () => wrapper.find('.puik-pagination')
  const findPaginationComponent = () => wrapper.findComponent(PuikPagination)

  const findPreviousButton = () =>
    wrapper.find('.puik-pagination__previous-button')
  const findPreviousButtonText = () =>
    wrapper.find('.puik-pagination__previous-button-text')

  const findNextButton = () => wrapper.find('.puik-pagination__next-button')
  const findNextButtonText = () =>
    wrapper.find('.puik-pagination__next-button-text')

  const findLabel = () => wrapper.find('.puik-pagination__label')

  const findMobileButton = () =>
    wrapper.find('.puik-pagination--mobile__load-more-button')

  const findSeparators = () =>
    wrapper.findAll('.puik-pagination__pager-separator')

  const findButtons = () => wrapper.findAll('.puik-pagination__button')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikPagination, {
      props: {
        ...propsData,
      },
      ...options,
    })
  }

  const propsData = {
    modelValue: 5,
    maxPage: 10,
    totalItem: 500,
    itemCount: 50,
  }

  it('should be a vue instance', () => {
    factory(propsData)
    expect(wrapper).toBeTruthy()
  })

  it('should display a medium pagination by default', () => {
    factory(propsData)
    expect(findPagination().classes()).toContain('puik-pagination--medium')
  })

  it('should display a small pagination', () => {
    factory({
      ...propsData,
      variant: PaginationVariantEnum.small,
    })
    expect(findPagination().classes()).toContain('puik-pagination--small')
  })

  it('should display a medium pagination', () => {
    factory({
      ...propsData,
      variant: PaginationVariantEnum.medium,
    })
    expect(findPagination().classes()).toContain('puik-pagination--medium')
  })

  it('should display a large pagination', () => {
    factory({
      ...propsData,
      variant: PaginationVariantEnum.large,
    })
    expect(findPagination().classes()).toContain('puik-pagination--large')
  })

  it('should display a mobile pagination', () => {
    factory({
      ...propsData,
      variant: PaginationVariantEnum.mobile,
    })
    expect(findPagination().classes()).toContain('puik-pagination--mobile')
  })

  // Generic tests
  it('should emit event when clicking on previous button', async () => {
    factory(propsData)
    await findPreviousButton().trigger('click')
    await nextTick()
    expect(
      findPaginationComponent().emitted('update:modelValue')?.[0]
    ).toStrictEqual([4])
  })

  it('should emit event when clicking on next button', async () => {
    factory(propsData)
    await findNextButton().trigger('click')
    await nextTick()
    expect(
      findPaginationComponent().emitted('update:modelValue')?.[0]
    ).toStrictEqual([6])
  })

  it('should render with custom label', async () => {
    const label = 'Custom label given to pagination'
    factory({ ...propsData, label })
    expect(findLabel().text()).toBe(label)
  })

  // Mobile tests
  it('should render with custom button label on mobile', async () => {
    const mobileButtonLabel = 'Custom label given to pagination'
    factory({
      ...propsData,
      variant: PaginationVariantEnum.mobile,
      mobileButtonLabel,
    })
    expect(findMobileButton().text()).toBe(mobileButtonLabel)
  })

  it('should emit event when clicking on load more button', async () => {
    factory({
      ...propsData,
      variant: PaginationVariantEnum.mobile,
    })
    await findMobileButton().trigger('click')
    await nextTick()
    expect(
      findPaginationComponent().emitted('update:modelValue')?.[0]
    ).toStrictEqual([6])
  })

  // Medium tests
  it('should both separators be visible', () => {
    factory({
      modelValue: 10,
      maxPage: 20,
      totalItem: 500,
      itemCount: 50,
    })
    expect(findSeparators().length).toBe(2)
  })

  it('should first separator be visible', () => {
    factory({
      modelValue: 20,
      maxPage: 20,
      totalItem: 500,
      itemCount: 50,
    })
    expect(findSeparators().length).toBe(1)
  })

  it('should last separator be visible', () => {
    factory({
      modelValue: 2,
      maxPage: 20,
      totalItem: 500,
      itemCount: 50,
    })
    expect(findSeparators().length).toBe(1)
  })

  it('should separators be invisible', () => {
    factory({
      modelValue: 3,
      maxPage: 5,
      totalItem: 500,
      itemCount: 50,
    })
    expect(findSeparators().length).toBe(0)
  })

  it('should click page emit event', async () => {
    factory(propsData)
    const buttonPage1 = findButtons()[1]
    await buttonPage1.trigger('click')
    await nextTick()
    expect(
      findPaginationComponent().emitted('update:modelValue')?.[0]
    ).toStrictEqual([1])
  })

  it('should click page change active class and aria-current', async () => {
    wrapper = mount({
      template: `<puik-pagination
        v-model="page"
        :item-count="50"
        :total-item="500"
        :max-page="20"
      />`,
      components: {
        'puik-pagination': PuikPagination,
      },
      data() {
        const page = ref(1)
        return { page }
      },
    })

    const buttons = findButtons()
    const firstPagerButton = buttons[1]
    const middlePagerButton = buttons[4]
    const lastPagerButton = buttons[buttons.length - 2]

    const activeClass = 'puik-pagination__button--active'

    const getAriaCurrent = (button) => button.attributes('aria-current')

    // Click first pager button
    await buttons[1].trigger('click')
    await nextTick()
    expect(firstPagerButton.classes()).toContain(activeClass)
    expect(getAriaCurrent(firstPagerButton)).toBe('true')

    // Click middle pager button
    await middlePagerButton.trigger('click')
    await nextTick()
    expect(middlePagerButton.classes()).toContain(activeClass)
    expect(getAriaCurrent(middlePagerButton)).toBe('true')

    // Click last pager button
    await lastPagerButton.trigger('click')
    await nextTick()
    expect(lastPagerButton.classes()).toContain(activeClass)
    expect(getAriaCurrent(lastPagerButton)).toBe('true')
  })

  // Large tests
  it('should previous and next button have text', async () => {
    const { t } = useLocale()
    const previousText = t('puik.pagination.previous')
    const nextText = t('puik.pagination.next')

    factory({ ...propsData, variant: PaginationVariantEnum.large })
    expect(findPreviousButtonText().text()).toContain(previousText)
    expect(findNextButtonText().text()).toBe(nextText)
  })

  it('should click page change active class and aria-current', async () => {
    factory({ ...propsData, variant: PaginationVariantEnum.large })

    const findSelect = () => wrapper.find('.puik-pagination__select')
    const findAllOptions = () => wrapper.findAllComponents(PuikOption)

    // Click first pager button
    await findSelect().trigger('click')
    await findAllOptions()[5].trigger('click')
    await nextTick()
    expect(
      findPaginationComponent().emitted('update:modelValue')?.[0]
    ).toStrictEqual([5])
  })
})
