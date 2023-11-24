import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikBreadcrumb, BreadcrumbProps, BreadcrumbItem, PuikLinkTargetVariants } from '@prestashopcorp/puik-components';

describe('Breadcrumb tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: BreadcrumbProps,
    options?: ComponentMountingOptions<typeof PuikBreadcrumb>
  ) => {
    wrapper = mount(PuikBreadcrumb, {
      props,
      ...options
    } as any);
  };

  const getBreadcrumbItems = () =>
    wrapper.findAll('.puik-breadcrumb__item-link, .puik-breadcrumb__item--last');
  const getBreadcrumbSeparatorIcons = () =>
    wrapper.findAll('.puik-breadcrumb__item-icon');
  const getBreadcrumbHomeIcon = () =>
    wrapper.find('.puik-breadcrumb__home-icon');

  const items: BreadcrumbItem[] = [
    {
      label: 'First link',
      href: '#',
      target: PuikLinkTargetVariants.Blank,
      dataTest: 'test-1'
    },
    {
      label: 'Second link',
      href: '#'
    },
    {
      label: 'Third link',
      to: 'name',
      dataTest: 'test-3'
    },
    {
      label: 'Last link'
    }
  ];
  it('should be a vue instance', () => {
    factory({ items });
    expect(wrapper).toBeTruthy();
  });
  it('should not display without items', () => {
    factory({ items: [] });
    expect(wrapper.element.tagName).toBeFalsy();
  });
  it('should first item be A with href and data-test', () => {
    factory({ items });
    const localItems = getBreadcrumbItems();
    expect(localItems[0].element.tagName).toBe('A');
    expect(localItems[0].element.getAttribute('href')).toBe(items[0].href);
    expect(
      localItems[0].element.getAttribute('data-test')?.includes(items[0].dataTest)
    );
  });
  it('should third item be ROUTER-LINK with to and data-test', () => {
    factory({ items });
    const localItems = getBreadcrumbItems();
    expect(localItems[2].element.tagName).toBe('ROUTER-LINK');
    expect(localItems[2].element.getAttribute('to')).toBe(items[2].to);
    expect(localItems[2].element.getAttribute('data-test')?.includes(items[2].dataTest)
    );
  });
  it('should display only three separator icon', () => {
    factory({ items });
    expect(getBreadcrumbSeparatorIcons().length).toBe(3);
  });
  it('should not display separator icon', () => {
    factory({ items: [items[0]] });
    expect(getBreadcrumbSeparatorIcons().length).toBe(0);
  });
  it('should display custom icon', () => {
    const separatorIcon = 'check';
    factory({ items, separatorIcon });
    const icons = getBreadcrumbSeparatorIcons();
    expect(icons[0].text()).toBe(separatorIcon);
  });
  it('should display home icon', () => {
    const icon = 'home';
    factory({ items, icon });
    expect(getBreadcrumbHomeIcon().text()).toBe(icon);
  });
  it('should have target', () => {
    factory({ items });
    expect(getBreadcrumbItems()[0].element.getAttribute('target')).toBe(
      '_blank'
    );
  });
  it('should last item be div', () => {
    factory({ items });
    const lastItem = getBreadcrumbItems().pop();
    expect(lastItem?.element.tagName).toBe('DIV');
  });
});
