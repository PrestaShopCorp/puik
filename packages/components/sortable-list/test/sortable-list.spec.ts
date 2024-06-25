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
    factory();
    expect(wrapper).toBeTruthy();
  });
});
