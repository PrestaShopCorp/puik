import { nextTick, ref } from 'vue';
import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { useLocale } from '@prestashopcorp/puik-locale';
import { PuikPagination, PuikPaginationVariants, PuikOption, PaginationProps } from '@prestashopcorp/puik-components';

describe('Pagination tests', () => {
  let wrapper: VueWrapper<any>;

  const findPagination = () => wrapper.find('.puik-pagination');
  const findPaginationComponent = () => wrapper.findComponent(PuikPagination);

  const findPreviousButton = () =>
    wrapper.find('.puik-pagination__previous-button');
  const findPreviousButtonText = () =>
    wrapper.find('.puik-pagination__previous-button-text');

  const findNextButton = () => wrapper.find('.puik-pagination__next-button');
  const findNextButtonText = () =>
    wrapper.find('.puik-pagination__next-button-text');

  const findLabel = () => wrapper.find('.puik-pagination__label');

  const findLoaderButton = () =>
    wrapper.find('.puik-pagination__load-more-button');

  const findSeparators = () =>
    wrapper.findAll('.puik-pagination__pager-separator');

  const findButtons = () => wrapper.findAll('.puik-pagination__pager-button');

  const findItemsPerPageSelect = () =>
    wrapper.find('.puik-pagination__items-per-page-select');
  const findAllOptions = (select) => select.findAllComponents(PuikOption);

  const factory = (
    props: PaginationProps,
    options?: ComponentMountingOptions<typeof PuikPagination>
  ) => {
    wrapper = mount(PuikPagination, {
      props,
      ...options
    });
  };

  const propsData = {
    page: 5,
    itemsPerPage: 10,
    totalItem: 500
  };

  it('should be a vue instance', () => {
    factory(propsData);
    expect(wrapper).toBeTruthy();
  });

  it('as id prop value is "puik-pagination-id", id html attribute of puik-pagination should be "puik-pagination-id"', () => {
    factory({
      ...propsData,
      id: 'puik-pagination-id'
    });
    expect(findPagination().attributes().id).toBe('puik-pagination-id');
  });

  it('should display a medium pagination by default', () => {
    factory(propsData);
    expect(findPagination().classes()).toContain('puik-pagination--medium');
  });

  it('should display a small pagination', () => {
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Small
    });
    expect(findPagination().classes()).toContain('puik-pagination--small');
  });

  it('should display a medium pagination', () => {
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Medium
    });
    expect(findPagination().classes()).toContain('puik-pagination--medium');
  });

  it('should display a large pagination', () => {
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Large
    });
    expect(findPagination().classes()).toContain('puik-pagination--large');
  });

  it('should display a mobile pagination', () => {
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Mobile
    });
    expect(findPagination().classes()).toContain('puik-pagination--mobile');
  });

  it('should display a loader pagination', () => {
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Loader
    });
    expect(findPagination().classes()).toContain('puik-pagination--loader');
  });

  // Generic tests
  it('should emit event when clicking on previous button', async () => {
    factory(propsData);
    await findPreviousButton().trigger('click');
    await nextTick();
    expect(findPaginationComponent().emitted('update:page')?.[0]).toStrictEqual(
      [4]
    );
  });

  it('should emit event when clicking on next button', async () => {
    factory(propsData);
    await findNextButton().trigger('click');
    await nextTick();
    expect(findPaginationComponent().emitted('update:page')?.[0]).toStrictEqual(
      [6]
    );
  });

  it('should render with custom label', async () => {
    const label = 'Custom label given to pagination';
    factory({ ...propsData, label });
    expect(findLabel().text()).toBe(label);
  });

  // Loader tests
  it('should render with custom button label on loader', async () => {
    const loaderButtonLabel = 'Custom label given to pagination';
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Loader,
      loaderButtonLabel
    });
    expect(findLoaderButton().text()).toBe(loaderButtonLabel);
  });

  it('should emit event when clicking on load more button', async () => {
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Loader
    });
    await findLoaderButton().trigger('click');
    await nextTick();
    expect(findPaginationComponent().emitted('update:page')?.[0]).toStrictEqual(
      [6]
    );
  });

  // Medium tests
  it('should both separators be visible', () => {
    factory({
      page: 10,
      itemsPerPage: 20,
      totalItem: 500
    });
    expect(findSeparators().length).toBe(2);
  });

  it('should first separator be visible', () => {
    factory({
      page: 10,
      itemsPerPage: 50,
      totalItem: 500
    });
    expect(findSeparators().length).toBe(1);
  });

  it('should last separator be visible', () => {
    factory({
      page: 2,
      itemsPerPage: 20,
      totalItem: 500
    });
    expect(findSeparators().length).toBe(1);
  });

  it('should separators be invisible', () => {
    factory({
      page: 3,
      itemsPerPage: 100,
      totalItem: 500
    });
    expect(findSeparators().length).toBe(0);
  });

  it('should click page emit event', async () => {
    factory(propsData);
    const buttonPage1 = findButtons()[0];
    await buttonPage1.trigger('click');
    await nextTick();
    expect(findPaginationComponent().emitted('update:page')?.[0]).toStrictEqual(
      [1]
    );
  });

  it('should click page change active class and aria-current', async () => {
    wrapper = mount({
      template: `<puik-pagination
        v-model:page="page"
        :item-count="50"
        :total-item="500"
        :items-per-page="20"
      />`,
      components: {
        'puik-pagination': PuikPagination
      },
      data() {
        const page = ref(1);
        return { page };
      }
    });

    const buttons = findButtons();
    const getAriaCurrent = (button) => button.attributes('aria-current');

    // Click first pager button
    const firstPagerButton = buttons[0];
    await firstPagerButton.trigger('click');
    await nextTick();
    expect(getAriaCurrent(firstPagerButton)).toBe('true');

    // Click middle pager button
    await buttons[4].trigger('click');
    await nextTick();
    expect(getAriaCurrent(buttons[3])).toBe('true');

    // Click last pager button
    const lastPagerButton = buttons[buttons.length - 1];
    await lastPagerButton.trigger('click');
    await nextTick();
    expect(getAriaCurrent(lastPagerButton)).toBe('true');
  });

  // Large tests
  it('should previous and next button have text', async () => {
    const { t } = useLocale();
    const previousText = t('puik.pagination.previous');
    const nextText = t('puik.pagination.next');

    factory({ ...propsData, variant: PuikPaginationVariants.Large });
    expect(findPreviousButtonText().text()).toContain(previousText);
    expect(findNextButtonText().text()).toBe(nextText);
  });

  it('should click page change active class and aria-current', async () => {
    factory({ ...propsData, variant: PuikPaginationVariants.Large });

    const findSelect = () => wrapper.find('.puik-pagination__select');
    const findAllOptions = () => wrapper.findAllComponents(PuikOption);

    // Click first pager button
    await findSelect().trigger('click');
    await findAllOptions()[5].trigger('click');
    await nextTick();
    expect(findPaginationComponent().emitted('update:page')?.[0]).toStrictEqual(
      [5]
    );
  });

  it('should emit when selecting item per page', async () => {
    factory({ ...propsData, variant: PuikPaginationVariants.Large });

    const itemsPerPageSelect = findItemsPerPageSelect();

    await findItemsPerPageSelect().trigger('click');
    await findAllOptions(itemsPerPageSelect)[1].trigger('click');
    await nextTick();
    expect(
      findPaginationComponent().emitted('update:itemsPerPage')?.[0]
    ).toStrictEqual([10]);
  });

  it('should have custom items per page options', async () => {
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Large,
      itemsPerPageOptions: [1, 2]
    });

    const itemsPerPageSelect = findItemsPerPageSelect();

    await findItemsPerPageSelect().trigger('click');
    const options = findAllOptions(itemsPerPageSelect);
    expect(options[0].text()).toBe('1');
    expect(options[1].text()).toBe('2');
    expect(options.length).toBe(2);
  });

  it('should have a data-test attribute on container nav, nextButton, previousButton and label', () => {
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Large,
      dataTest: 'test'
    });

    expect(findPreviousButton().attributes('data-test')).toBe(
      'previousButton-test'
    );
    expect(findPagination().attributes('data-test')).toBe('test');
    expect(findNextButton().attributes('data-test')).toBe('nextButton-test');
    expect(findLabel().attributes('data-test')).toBe('label-test');
  });

  it('should have a data-test attribute on loaderButton', () => {
    factory({
      ...propsData,
      variant: PuikPaginationVariants.Loader,
      dataTest: 'test'
    });

    expect(findLoaderButton().attributes('data-test')).toBe(
      'loadMoreButton-test'
    );
  });

  it('should display items per page select when displayItemsPerPage is true for large pagination variant', async () => {
    factory({
      ...propsData,
      displayItemsPerPage: true,
      variant: 'large'
    });
    await nextTick();
    const itemsPerPageSelect = findItemsPerPageSelect();
    expect(itemsPerPageSelect.exists()).toBe(true);
  });

  it('should not display items per page select when displayItemsPerPage is false for large pagination variant', async () => {
    factory({
      ...propsData,
      displayItemsPerPage: false,
      variant: 'large'
    });
    await nextTick();
    const itemsPerPageSelect = findItemsPerPageSelect();
    expect(itemsPerPageSelect.exists()).toBe(false);
  });

  it('should display results label when displayResults is true', async () => {
    factory({
      ...propsData,
      displayResults: true
    });
    await nextTick();
    const label = findLabel();
    expect(label.exists()).toBe(true);
  });

  it('should not display results label when displayResults is false', async () => {
    factory({
      ...propsData,
      displayResults: false
    });
    await nextTick();
    const label = findLabel();
    expect(label.exists()).toBe(false);
  });
});
