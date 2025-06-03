import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikTooltip, TooltipProps } from '@prestashopcorp/puik-components';

describe('Tooltip tests', () => {
  let wrapper: VueWrapper<any>;
  const findToolTipContainer = () => wrapper.find('.puik-tooltip');
  const findSlotWrapper = () => wrapper.find('.puik-tooltip__slot--wrapper');
  const findTitle = () => wrapper.find('.puik-tooltip__tip__content__heading');
  const findDescription = () =>
    wrapper.find('.puik-tooltip__tip__content__description');
  const findToolTip = () => wrapper.find<HTMLElement>('.puik-tooltip__tip');

  const factory = (
    props?: TooltipProps,
    options?: ComponentMountingOptions<typeof PuikTooltip>
  ) => {
    wrapper = mount(PuikTooltip, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should have a heading and a description', async () => {
    const heading = 'Title';
    const description = 'This is a tooltip';
    factory(
      {},
      {
        slots: {
          heading,
          description,
          default: '<button>Hover me</button>'
        }
      }
    );

    await wrapper.find('button').trigger('mouseover');
    expect(findTitle().text()).toBe(heading);
    expect(findDescription().text()).toBe(description);
  });

  it('should be displayed on the right', async () => {
    factory(
      { position: 'right' },
      {
        slots: {
          default: '<button>Hover me</button>'
        }
      }
    );
    await wrapper.find('button').trigger('mouseover');
    expect(findToolTip().attributes('data-popper-placement')).toBe('right');
  });

  it('should be disabled', async () => {
    factory(
      { isDisabled: true },
      {
        slots: {
          default: '<button>Hover me</button>'
        }
      }
    );
    await wrapper.find('button').trigger('mouseover');
    expect(findToolTip().isVisible()).toBe(false);
  });

  it('should have a custom z-index', async () => {
    factory(
      { zindex: 5000 },
      {
        slots: {
          default: '<button>Hover me</button>'
        }
      }
    );
    await wrapper.find('button').trigger('mouseover');
    expect(findToolTip().element.style.zIndex).toBe('5000');
  });

  it('should have a custom max-width', async () => {
    factory(
      { maxWidth: '200px' },
      {
        slots: {
          default: '<button>Hover me</button>'
        }
      }
    );
    await wrapper.find('button').trigger('mouseover');
    expect(findToolTip().element.style.maxWidth).toBe('200px');
  });

  it('should have data-test attributes', async () => {
    factory(
      {
        heading: 'long heading for displaying the tooltip',
        description: 'long description for displaying the tooltip',
        dataTest: 'test'
      },
      {
        slots: {
          default: '<button>Hover me</button>'
        }
      }
    );
    await wrapper.find('button').trigger('mouseover');
    expect(findToolTipContainer().attributes('data-test')).toBe('test');
    expect(findSlotWrapper().attributes('data-test')).toBe('slot-content-test');
    expect(findTitle().attributes('data-test')).toBe('heading-test');
    expect(findDescription().attributes('data-test')).toBe('description-test');
  });

  it('should apply custom styles to tooltip', async () => {
    factory(
      { maxWidth: '300px', zindex: 2000 },
      {
        slots: {
          default: '<button>Hover me</button>'
        }
      }
    );
    await wrapper.find('button').trigger('mouseover');
    const tooltipElement = findToolTip().element;
    expect(tooltipElement.style.maxWidth).toBe('300px');
    expect(tooltipElement.style.zIndex).toBe('2000');
  });
});
