import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import { locales } from '@prestashopcorp/puik-locale';
import PuikTable from '../src/table.vue';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';
import type { PuikTableHeader } from '../src/table';

const defaultItems = Array(5)
  .fill(null)
  .map(() => {
    return {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName()
    };
  });

describe('Table tests', () => {
  let wrapper: VueWrapper<any>;
  const colClass = 'puik-table__body__row__item';
  const headerColClass = 'puik-table__head__row__item';

  const getTable = () => wrapper.find('.puik-table');
  const getHeaders = () => wrapper.findAll(`.${headerColClass}`);
  const getRows = () => wrapper.findAll('.puik-table__body__row');
  const getCols = (rowIndex) => getRows()[rowIndex].findAll(`.${colClass}`);
  const getRowCheckbox = (rowIndex) =>
    getRows()[rowIndex].find(`.${colClass}--selection__checkbox`);
  const getAllRowCheckbox = () =>
    wrapper.findAll(`.${colClass}--selection__checkbox`);
  const getHeaderCheckbox = () =>
    wrapper.find(`.${headerColClass}--selection__checkbox`);

  const isCheckboxChecked = (checkbox) =>
    checkbox.find('.puik-checkbox__input:checked').exists();
  const isCheckboxInderminate = (checkbox) =>
    checkbox.find('.puik-checkbox__input:indeterminate').exists();

  const getCheckboxLabel = (checkbox) => checkbox.find('.puik-checkbox__label');

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTable, {
      props: {
        ...propsData,
        items: propsData.items ?? defaultItems
      },
      ...options
    });
  };
  // Global tests
  it('should be a vue instance', () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers });
    expect(wrapper).toBeTruthy();
  });
  it('should display headers with text', () => {
    const text = 'firstname';
    const headers: PuikTableHeader[] = [{ text, value: text }];
    factory({ headers });
    expect(getHeaders()[0].text()).toBe(text);
  });
  it('should display headers without text', () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers });
    expect(getHeaders()[0].text()).toBe('');
  });
  it('should display 5 items', () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers });
    expect(getRows().length).toBe(5);
  });
  it('should display item values', () => {
    const headers: PuikTableHeader[] = [
      { value: 'firstname' },
      { value: 'lastname' }
    ];
    factory({ headers });
    const displayedItems = getCols(0);
    expect(displayedItems[0].text()).toBe(defaultItems[0].firstname);
    expect(displayedItems[1].text()).toBe(defaultItems[0].lastname);
  });
  it('should display item using slot', () => {
    const getIinitials = (item) => item.firstname[0] + item.lastname[0];
    const headers: PuikTableHeader[] = [{ value: 'initials' }];
    factory(
      { headers },
      {
        slots: {
          'item-initials': ({ item }) => getIinitials(item)
        }
      }
    );
    const displayedItems = getCols(0);
    expect(displayedItems[0].text()).toBe(getIinitials(defaultItems[0]));
  });
  it('should display header using slot', () => {
    const value = 'firstname';
    const headers: PuikTableHeader[] = [{ value, text: 'Firstname' }];
    factory(
      { headers },
      {
        slots: {
          'header-firstname': ({ header }) => header.value
        }
      }
    );
    const header = getHeaders()[0];
    expect(header.text()).toBe(value);
  });
  // Selection tests
  it('should display selection checkboxes', () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers, selectable: true });
    const checkbox = getRowCheckbox(0);
    const headerCheckbox = getHeaderCheckbox();
    expect(checkbox.exists()).toBeTruthy();
    expect(headerCheckbox.exists()).toBeTruthy();
  });
  it('should first checkbox checked and header checkbox indeterminate', () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers, selectable: true, selection: [0] });
    const checkbox = getRowCheckbox(0);
    const headerCheckbox = getHeaderCheckbox();
    expect(isCheckboxChecked(checkbox)).toBeTruthy();
    expect(isCheckboxInderminate(headerCheckbox)).toBeTruthy();
    expect(isCheckboxChecked(headerCheckbox)).toBeFalsy();
  });
  it('should header checkbox checked', () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers, selectable: true, selection: [0, 1, 2, 3, 4] });
    const headerCheckbox = getHeaderCheckbox();
    expect(isCheckboxInderminate(headerCheckbox)).toBeFalsy();
    expect(isCheckboxChecked(headerCheckbox)).toBeTruthy();
  });
  it('should emit select event', async () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers, selectable: true, selection: [] });
    const checkbox = getRowCheckbox(1);
    await checkbox.trigger('click');
    expect(wrapper.emitted('select')?.[0]).toStrictEqual([1]);
    expect(wrapper.emitted('update:selection')?.[0]).toStrictEqual([[1]]);
  });
  it('should emit select all event', async () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers, selectable: true, selection: [] });
    const headerCheckbox = getHeaderCheckbox();
    await headerCheckbox.trigger('click');
    expect(wrapper.emitted('select:all')).toBeTruthy();
    expect(wrapper.emitted('update:selection')?.[0]).toStrictEqual([
      [0, 1, 2, 3, 4]
    ]);
  });
  it('should selected checkbox change when prop change', async () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    const items = defaultItems.slice(0, 2);
    factory({
      headers,
      selectable: true,
      selection: [],
      items
    });
    const checkboxes = getAllRowCheckbox();
    const headerCheckbox = getHeaderCheckbox();
    // Check checked when selection is empty
    expect(isCheckboxChecked(checkboxes[0])).toBeFalsy();
    expect(isCheckboxChecked(checkboxes[1])).toBeFalsy();
    expect(isCheckboxChecked(headerCheckbox)).toBeFalsy();
    // Check checked when 1 item is selected
    await wrapper.setProps({ selection: [0] });
    expect(isCheckboxChecked(checkboxes[0])).toBeTruthy();
    expect(isCheckboxChecked(checkboxes[1])).toBeFalsy();
    expect(isCheckboxChecked(headerCheckbox)).toBeFalsy();
    // Check checked when all items are selected
    await wrapper.setProps({ selection: [0, 1] });
    expect(isCheckboxChecked(checkboxes[0])).toBeTruthy();
    expect(isCheckboxChecked(checkboxes[1])).toBeTruthy();
    expect(isCheckboxChecked(headerCheckbox)).toBeTruthy();
  });
  it('should checkboxes have aria-label', async () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers, selectable: true, selection: [] });
    const tableLocales = locales.en.puik.table;
    const headerCheckbox = getHeaderCheckbox();
    const checkbox = getRowCheckbox(0);
    // Check label when selection is empty
    expect(getCheckboxLabel(headerCheckbox).text()).toBe(
      tableLocales.selectAllLabel
    );
    expect(getCheckboxLabel(checkbox).text()).toBe(tableLocales.selectLabel);
    // Check label when one item is selected
    await wrapper.setProps({ selection: [0] });
    expect(getCheckboxLabel(headerCheckbox).text()).toBe(
      tableLocales.selectAllLabel
    );
    expect(getCheckboxLabel(checkbox).text()).toBe(tableLocales.unselectLabel);
    // Check label when all items are selected
    await wrapper.setProps({ selection: [0, 1, 2, 3, 4] });
    expect(getCheckboxLabel(headerCheckbox).text()).toBe(
      tableLocales.unselectAllLabel
    );
    expect(getCheckboxLabel(checkbox).text()).toBe(tableLocales.unselectLabel);
  });
  // Col style tests
  it('should cols have size class', () => {
    const items = [defaultItems[0]];
    const headers: PuikTableHeader[] = [
      { value: 'firstname', size: 'sm' },
      { value: 'firstname', size: 'md' },
      { value: 'firstname', size: 'lg' }
    ];
    factory({ headers, items });
    const headerCols = getHeaders();
    expect(headerCols[0].classes()).toContain(`${headerColClass}--sm`);
    expect(headerCols[1].classes()).toContain(`${headerColClass}--md`);
    expect(headerCols[2].classes()).toContain(`${headerColClass}--lg`);
  });

  it('should cols have align class', () => {
    const items = [defaultItems[0]];
    const headers: PuikTableHeader[] = [
      { value: 'firstname', align: 'left' },
      { value: 'firstname', align: 'center' },
      { value: 'firstname', align: 'right' }
    ];
    factory({ headers, items });
    const rowCols = getRows()[0].findAll(`.${colClass}`);
    expect(rowCols[0].classes()).toContain(`${colClass}--left`);
    expect(rowCols[1].classes()).toContain(`${colClass}--center`);
    expect(rowCols[2].classes()).toContain(`${colClass}--right`);
  });

  it('should col have custom width', () => {
    const items = [defaultItems[0]];
    const width = '500px';
    const headers: PuikTableHeader[] = [{ value: 'firstname', width }];
    factory({ headers, items });
    const header = getHeaders()[0];
    expect(header.element.style.width).toBe(width);
  });

  // Other tests
  it('should be full width', () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers, fullWidth: true });
    const table = getTable();
    expect(table.classes()).toContain('puik-table--full-width');
  });
});
