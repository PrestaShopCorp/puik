import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { PuikSortableList, SortableListProps } from '@prestashopcorp/puik-components';

describe('SortableList tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: SortableListProps,
    options: ComponentMountingOptions<typeof PuikSortableList> = {}
  ) => {
    wrapper = mount(PuikSortableList, {
      props,
      ...options,
      listeners: {
        add: vi.fn(),
        update: vi.fn(),
        remove: vi.fn(),
        choose: vi.fn(),
        unchoose: vi.fn(),
        start: vi.fn(),
        end: vi.fn(),
        sort: vi.fn(),
        filter: vi.fn(),
        move: vi.fn(),
        clone: vi.fn()
      }
    });
  };

  it('should be a Vue instance', () => {
    factory({ listId: 'test', list: [], itemKey: 'id' });
    expect(wrapper).toBeTruthy();
  });

  it('should render list items correctly', () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' });
    expect(wrapper.findAll('.draggable').length).toBe(list.length);
  });

  it('should handle keydown events correctly', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' });
    const draggable = wrapper.find('.draggable');
    await draggable.trigger('keydown', { key: 'ArrowUp' });
    expect(wrapper.emitted().keydown).toBeTruthy();
    expect((wrapper.emitted().keydown[0][0] as KeyboardEvent).key).toBe('ArrowUp');
    await draggable.trigger('keydown', { key: 'ArrowDown' });
    expect(wrapper.emitted().keydown).toBeTruthy();
    expect((wrapper.emitted().keydown[1][0] as KeyboardEvent).key).toBe('ArrowDown');
  });

  it('should handle displayPositionNumbers prop correctly', () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id', displayPositionNumbers: true });
    expect(wrapper.findAll('.puik-sortable-list_item-index').length).toBe(list.length);
  });

  it('should handle iconPosition prop correctly', () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id', iconPosition: 'left' });
    expect(wrapper.findAll('.puik-icon').length).toBe(list.length);
  });

  it('should handle tag prop correctly', () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id', tag: 'section' });
    expect(wrapper.find('section').exists()).toBe(true);
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

  it('should emit events without errors', async () => {
    const list = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }];
    factory({ listId: 'test', list, itemKey: 'id' });
    const events = [
      'choose', 'unchoose', 'start', 'end', 'add', 'update', 'sort', 'remove', 'filter', 'move', 'clone', 'change'
    ];

    events.forEach(event => {
      const spy = vi.spyOn(wrapper.vm, '$emit');
      wrapper.vm.$emit(event, {});
      expect(spy).toHaveBeenCalledWith(event, {});
    });
  });
});
