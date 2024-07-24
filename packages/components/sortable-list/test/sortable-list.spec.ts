import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSortableList, SortableListProps } from '@prestashopcorp/puik-components';

describe('SortableList tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: SortableListProps,
    options: ComponentMountingOptions<typeof PuikSortableList>
  ) => {
    wrapper = mount(PuikSortableList, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory({ listId: 'test', list: [], itemKey: 'id' }, {});
    expect(wrapper).toBeTruthy();
  });

  it('should render list items correctly', () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    expect(wrapper.findAll('.draggable').length).toBe(list.length);
  });

  it('should handle keydown events correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const draggable = wrapper.find('.draggable');
    await draggable.trigger('keydown', { key: 'ArrowUp' });
    // Add assertions to check the behavior of the keydown event...
  });

  it('should handle sortable events correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('add');
    // Add assertions to check the behavior of the sortable events...
  });

  it('should handle displayPositionNumbers prop correctly', () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id', displayPositionNumbers: true }, {});
    expect(wrapper.findAll('.puik-sortable-list_item-index').length).toBe(list.length);
  });

  it('should handle iconPosition prop correctly', () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id', iconPosition: 'left' }, {});
    expect(wrapper.findAll('.puik-icon').length).toBe(list.length);
  });

  it('should handle tag prop correctly', () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id', tag: 'section' }, {});
    expect(wrapper.find('section').exists()).toBe(true);
  });

  it('should handle options prop correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    const options = { group: 'shared' };
    factory({ listId: 'test', list, itemKey: 'id', options }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('add');
    // Add assertions to check the behavior of the sortable events with the given options...
  });

  it('should handle unchoose event correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('unchoose');
    // Add assertions to check the behavior of the unchoose event...
  });

  it('should handle start event correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('start');
    // Add assertions to check the behavior of the start event...
  });

  it('should handle end event correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('end');
    // Add assertions to check the behavior of the end event...
  });

  it('should handle update event correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('update');
    // Add assertions to check the behavior of the update event...
  });

  it('should handle sort event correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('sort');
    // Add assertions to check the behavior of the sort event...
  });

  it('should handle remove event correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('remove');
    // Add assertions to check the behavior of the remove event...
  });

  it('should handle filter event correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('filter');
    // Add assertions to check the behavior of the filter event...
  });

  it('should handle move event correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('move');
    // Add assertions to check the behavior of the move event...
  });

  it('should handle clone event correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {});
    const sortable = wrapper.findComponent({ ref: 'test' });
    await sortable.trigger('clone');
    // Add assertions to check the behavior of the clone event...
  });

  it('should handle custom-content slot correctly', () => {
    const list = [{ id: '1', title: 'Item 1', custom: 'Custom Content 1' }, { id: '2', title: 'Item 2', custom: 'Custom Content 2' }];
    factory({ listId: 'test', list, itemKey: 'id' }, {
      slots: {
        'custom-content': `
          <template #custom-content="{ element }">
            <div class="custom-content">{{ element.custom }}</div>
          </template>
        `
      }
    });
    expect(wrapper.findAll('.custom-content').length).toBe(list.length);
  });

  // Add more tests as needed...
});
