import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSnackbarPositionsX, PuikSnackbarPositionsY, PuikSnackbarProvider, PuikSnackbarSwipeDirections, SnackbarProviderProps } from '@prestashopcorp/puik-components';

describe('SnackbarProvider tests', () => {
  let wrapper: VueWrapper<any>;

  const factory = (
    props?: SnackbarProviderProps,
    options?: ComponentMountingOptions<typeof PuikSnackbarProvider>
  ) => {
    wrapper = mount(PuikSnackbarProvider, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should have correct duration prop', () => {
    factory({ duration: 3000 });
    expect(wrapper.props().duration).toBe(3000);
  });

  it('should have correct label prop', () => {
    factory({ label: 'Test Notification' });
    expect(wrapper.props().label).toBe('Test Notification');
  });

  it('should have correct swipeDirection prop', () => {
    factory({ swipeDirection: PuikSnackbarSwipeDirections.Left });
    expect(wrapper.props().swipeDirection).toBe(PuikSnackbarSwipeDirections.Left);
  });

  it('should have correct swipeThreshold prop', () => {
    factory({ swipeThreshold: 100 });
    expect(wrapper.props().swipeThreshold).toBe(100);
  });

  it('should have correct positionX prop', () => {
    factory({ positionX: PuikSnackbarPositionsX.Left });
    expect(wrapper.props().positionX).toBe(PuikSnackbarPositionsX.Left);
  });

  it('should have correct positionY prop', () => {
    factory({ positionY: PuikSnackbarPositionsY.Up });
    expect(wrapper.props().positionY).toBe(PuikSnackbarPositionsY.Up);
  });

  it('should have correct classes for swipeDirection', () => {
    factory({ swipeDirection: PuikSnackbarSwipeDirections.Left });
    expect(wrapper.find('.puik-snackbar-viewport--left').exists()).toBe(true);
  });

  it('should have correct classes for positionX and positionY', () => {
    factory({ positionX: PuikSnackbarPositionsX.Left, positionY: PuikSnackbarPositionsY.Up });
    expect(wrapper.find('.puik-snackbar-viewport--left').exists()).toBe(true);
    expect(wrapper.find('.puik-snackbar-viewport--up').exists()).toBe(true);
  });
});
