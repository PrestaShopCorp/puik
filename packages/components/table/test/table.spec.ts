import {
  mount,
  ComponentMountingOptions,
  VueWrapper,
  DOMWrapper
} from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';
import { locales } from '@prestashopcorp/puik-locale';
import {
  PuikTable,
  PuikTableHeader,
  PuikTableSortOrder,
  sortOption,
  TableProps
} from '@prestashopcorp/puik-components';

const defaultItems = Array(5)
  .fill(null)
  .map(() => {
    return {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName()
    };
  });

describe('Table tests', () => {
  let wrapper: VueWrapper<any>;
  const colClass = 'puik-table__body__row__item';
  const headerColClass = 'puik-table__head__row__item';
  const searchBarClass = '.puik-table__search__bar';
  const searchSubmitButtonClass =
    '.puik-table-search-input--submit .puik-button';

  const getTable = () => wrapper.find('.puik-table');
  const getHeaders = () => wrapper.findAll(`.${headerColClass}`);
  const getRows = () => wrapper.findAll('.puik-table__body__row');
  const getCols = (rowIndex: number) =>
    getRows()[rowIndex].findAll(`.${colClass}`);
  const getAllItemsOfCol = (colIndex: number) => {
    const allItems: Array<DOMWrapper<Element>> = [];
    getRows().forEach((_, rowIndex) => {
      const Item = getCols(rowIndex)[colIndex];
      allItems.push(Item);
    });
    return allItems;
  };
  const getRowCheckbox = (rowIndex: number) =>
    getRows()[rowIndex].find(`.${colClass}--selection__checkbox`);
  const getAllRowCheckbox = () =>
    wrapper.findAll(`.${colClass}--selection__checkbox`);
  const getHeaderCheckbox = () =>
    wrapper.find(`.${headerColClass}--selection__checkbox`);

  const isCheckboxChecked = (checkbox: DOMWrapper<Element>) =>
    checkbox.find('.puik-checkbox__input:checked').exists();
  const isCheckboxInderminate = (checkbox: DOMWrapper<Element>) =>
    checkbox.find('.puik-checkbox__input:indeterminate').exists();

  const getCheckboxLabel = (checkbox: { find: (arg0: string) => any }) =>
    checkbox.find('.puik-checkbox__label');

  const factory = (
    props: TableProps,
    options?: ComponentMountingOptions<typeof PuikTable>
  ) => {
    wrapper = mount(PuikTable, {
      props: {
        ...props,
        items: props.items ?? defaultItems
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
    const headers: PuikTableHeader[] = [{ text: 'text', value: 'value' }];
    factory({ headers });
    expect(getHeaders()[0].text()).toBe('text');
  });
  it('should display headers without text (should display value instead)', () => {
    const headers: PuikTableHeader[] = [{ value: 'value' }];
    factory({ headers });
    expect(getHeaders()[0].text()).toBe('value');
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
    const getIinitials = (item: { firstname: any, lastname: any }) =>
      item.firstname[0] + item.lastname[0];
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
    expect((header.element as HTMLElement).style.width).toBe(width);
  });

  // Other tests
  it('should be full width', () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers, fullWidth: true });
    const table = getTable();
    expect(table.classes()).toContain('puik-table--full-width');
  });

  it('should have selectable column sticky', () => {
    const headers: PuikTableHeader[] = [
      { value: 'firstname' },
      { value: 'lastname' }
    ];
    factory({ headers, selectable: true, stickyFirstCol: true });
    const header = getHeaders()[0];
    const allFirstItems = getAllItemsOfCol(0);
    expect(header.classes()).toContain(
      'puik-table__head__row__item--selection'
    );
    expect(header.classes()).toContain('puik-table__head__row__item--sticky');
    allFirstItems.forEach((firstItemRow) => {
      expect(firstItemRow.classes()).toContain(
        'puik-table__body__row__item--sticky'
      );
    });
  });

  it('should have last column sticky', () => {
    const headers: PuikTableHeader[] = [
      { value: 'firstname' },
      { value: 'lastname' }
    ];
    factory({ headers, stickyLastCol: true });
    const header = getHeaders()[1];
    const allLastItems = getAllItemsOfCol(1);
    expect(header.classes()).toContain('puik-table__head__row__item--sticky');
    allLastItems.forEach((lastItemRow) => {
      expect(lastItemRow.classes()).toContain(
        'puik-table__body__row__item--sticky'
      );
    });
  });

  it('should have expandable rows', () => {
    const headers: PuikTableHeader[] = [
      { value: 'firstname' },
      { value: 'lastname' }
    ];
    factory({ headers, expandable: true });
    const header = getHeaders()[0];
    expect(header.classes()).toContain(
      'puik-table__head__row__item--expandable'
    );
  });

  it('should emit sortColum event', async () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname', sortable: true }];
    factory({ headers });
    const header = getHeaders()[0];
    const SortButton = header.find('.puik-button');
    const payload: sortOption = {
      sortBy: 'firstname',
      sortOrder: PuikTableSortOrder.Asc
    };
    expect(SortButton.classes()).toContain('puik-button');
    await SortButton.trigger('click');
    expect(wrapper.emitted('sortColumn')).toBeTruthy();
    expect(wrapper.emitted('sortColumn')?.[0]?.[0]).toStrictEqual(payload);
  });

  it('should display a search bar', async () => {
    const headers: PuikTableHeader[] = [
      { value: 'firstname', searchable: true },
      { value: 'lastname', searchable: true },
      { value: 'action', searchSubmit: true, preventExpand: true }
    ];
    factory({ headers, searchBar: true });
    const searchBar = getTable().find(searchBarClass);
    expect(searchBar).toBeTruthy();
  });

  it('should emit searchSubmit event', async () => {
    const headers: PuikTableHeader[] = [
      { value: 'firstname', searchable: true },
      { value: 'lastname', searchable: true },
      { value: 'action', searchSubmit: true, preventExpand: true }
    ];
    factory({ headers, searchBar: true });
    const searchSubmitButton = getTable().find(searchSubmitButtonClass);
    expect(searchSubmitButton).toBeTruthy();
    await searchSubmitButton.trigger('click');
    expect(wrapper.emitted('searchSubmit')).toBeTruthy();
  });

  it('should emit searchResultsLocally event', async () => {
    const headers: PuikTableHeader[] = [
      { value: 'firstname', searchable: true },
      { value: 'lastname', searchable: true },
      { value: 'action', searchSubmit: true, preventExpand: true }
    ];
    factory({ headers, searchBar: true, sortFromServer: false });
    const searchSubmitButton = getTable().find(searchSubmitButtonClass);
    expect(searchSubmitButton).toBeTruthy();
    await searchSubmitButton.trigger('click');
    expect(wrapper.emitted('searchResultsLocally')).toBeTruthy();
  });

  it('should update the table when items prop changes', async () => {
    const headers: PuikTableHeader[] = [{ value: 'firstname' }];
    factory({ headers, items: [] });
    expect(getRows().length).toBe(0);
    const newItems = [{ firstname: 'John' }, { firstname: 'Jane' }];
    await wrapper.setProps({ items: newItems });
    expect(getRows().length).toBe(newItems.length);
    newItems.forEach((item, index) => {
      const row = getRows()[index];
      expect(row.text()).toContain(item.firstname);
    });
  });

  describe('dataTest attribute', () => {
    const headers: PuikTableHeader[] = [
      {
        text: 'Nom',
        value: 'lastname',
        size: 'md',
        searchable: true,
        sortable: true
      },
      {
        text: 'Prénom',
        value: 'firstname',
        size: 'md',
        searchable: true,
        sortable: true
      },
      {
        text: 'Age',
        value: 'age',
        size: 'sm',
        align: 'right',
        searchable: true,
        sortable: true
      },
      {
        text: 'Email',
        value: 'email',
        align: 'left',
        searchable: true,
        sortable: false
      },
      {
        value: 'actions',
        size: 'sm',
        align: 'center',
        preventExpand: true,
        searchSubmit: true
      }
    ];
    const dataTest = 'data-test';
    it('should have data-test attribute on table', () => {
      factory({ headers, dataTest, selectable: true, expandable: true });
      const table = wrapper.findAll(`[data-test="table-${dataTest}"]`);
      expect(table.length).toBe(1);
    });
    it('should have data-test attribute on thead', () => {
      const thead = wrapper.findAll(`[data-test="table-header-${dataTest}"]`);
      expect(thead.length).toBe(1);
    });
    it('should have data-test attribute on th selectable', () => {
      const colSelection = wrapper.findAll(
        `[data-test="table-header-th-${dataTest}-selection"]`
      );
      expect(colSelection.length).toBe(1);
    });
    it('should have data-test attribute on header checkBox', () => {
      const headerCheckbox = wrapper.findAll(
        `[data-test="table-header-checkbox-${dataTest}"]`
      );
      expect(headerCheckbox.length).toBe(1);
    });
    it('should have data-test attribute on each th', () => {
      headers.forEach((header, index) => {
        const col = wrapper.findAll(
          `[data-test="table-header-content-${dataTest}-${headers[index].value}"]`
        );
        expect(col.length).toBe(1);
      });
    });
    it('should have data-test attribute on sortable button', () => {
      headers.forEach((header, index) => {
        if (header.sortable) {
          const col = wrapper.findAll(
            `[data-test="table-header-sort-${dataTest}-${headers[index].value}"]`
          );
          expect(col.length).toBe(1);
        }
      });
    });
    it('should have data-test attribute on tbody', () => {
      const tbody = wrapper.findAll(`[data-test="table-body-${dataTest}"]`);
      expect(tbody.length).toBe(1);
    });
    it('should have data-test attribute on each checkbox', () => {
      defaultItems.forEach((item, index) => {
        const col = wrapper.findAll(
          `[data-test="table-body-checkbox-${index}-${dataTest}"]`
        );
        expect(col.length).toBe(1);
      });
    });
    it('should have data-test attribute for each icon', () => {
      defaultItems.forEach((item, index) => {
        const col = wrapper.findAll(
          `[data-test="table-body-icon-${index}-${dataTest}"]`
        );
        expect(col.length).toBe(1);
      });
    });
    it('should have data-test attribute for each item', () => {
      headers.forEach((header, index) => {
        defaultItems.forEach((item, index) => {
          const col = wrapper.findAll(
            `[data-test="table-body-item-${index}-${header.value}-${dataTest}"]`
          );
          expect(col.length).toBe(1);
        });
      });
    });
  });
});
