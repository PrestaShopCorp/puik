import { mount, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { nextTick, ref } from 'vue';
import PuikCarousel from '../src/carousel.vue';
import PuikCarouselContent from '../src/carousel-content.vue';
import PuikCarouselItem from '../src/carousel-item.vue';
import PuikCarouselIndicators from '../src/carousel-indicators.vue';
import PuikCarouselNext from '../src/carousel-next.vue';
import PuikCarouselPrevious from '../src/carousel-previous.vue';

const mockEmblaApi = {
  canScrollPrev: vi.fn(() => false),
  canScrollNext: vi.fn(() => true),
  selectedScrollSnap: vi.fn(() => 0),
  scrollSnapList: vi.fn(() => [0, 1, 2]), // 3 slides
  scrollNext: vi.fn(),
  scrollPrev: vi.fn(),
  scrollTo: vi.fn(),
  on: vi.fn(),
  off: vi.fn(),
  reInit: vi.fn(),
  destroy: vi.fn(),
};

let capturedOptions: any = null;
vi.mock('embla-carousel-vue', () => ({
  default: vi.fn((options) => {
    capturedOptions = options;
    return [ref(document.createElement('div')), ref(mockEmblaApi)];
  }),
}));

describe('PuikCarousel', () => {
  let wrapper: VueWrapper<any>;

  const factory = (props = {}, slots = {}) => {
    wrapper = mount(PuikCarousel, {
      props,
      slots: {
        default: `
          <PuikCarouselContent>
            <PuikCarouselItem>Slide 1</PuikCarouselItem>
            <PuikCarouselItem>Slide 2</PuikCarouselItem>
            <PuikCarouselItem>Slide 3</PuikCarouselItem>
          </PuikCarouselContent>
          <PuikCarouselIndicators />
          <PuikCarouselNext />
          <PuikCarouselPrevious />
        `,
        ...slots,
      },
      global: {
        components: {
          PuikCarouselContent,
          PuikCarouselItem,
          PuikCarouselIndicators,
          PuikCarouselNext,
          PuikCarouselPrevious,
        },
      },
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly with default props', () => {
    factory();
    expect(wrapper.find('.puik-carousel').exists()).toBe(true);
    expect(wrapper.classes()).toContain('puik-carousel--horizontal');
  });

  it('should apply vertical orientation class', () => {
    factory({ orientation: 'vertical' });
    expect(wrapper.classes()).toContain('puik-carousel--vertical');
  });

  it('should apply style for verticalHeight', () => {
    factory({ orientation: 'vertical', verticalHeight: '300px' });
    const carousel = wrapper.find('.puik-carousel');
    expect(carousel.attributes('style')).toContain(
      '--puik-carousel-vertical-height: 300px'
    );
  });

  it('should apply style for itemWidth with number', () => {
    factory({ itemWidth: 80 });
    const carousel = wrapper.find('.puik-carousel');
    expect(carousel.attributes('style')).toContain(
      '--puik-carousel-item-width: 80%'
    );
  });

  it('should update embla options when props change', async () => {
    factory({ orientation: 'horizontal', opts: { loop: true } });
    await nextTick();
    expect(capturedOptions.value.axis).toBe('x');
    expect(capturedOptions.value.loop).toBe(true);

    await wrapper.setProps({ orientation: 'vertical' });
    expect(capturedOptions.value.axis).toBe('y');

    await wrapper.setProps({ opts: { loop: false } });
    expect(capturedOptions.value.loop).toBe(false);
  });

  it('should render indicators based on scrollSnaps', async () => {
    factory();
    // Wait for internal logic to sync with mock
    await nextTick();
    const indicators = wrapper.findAll('.puik-carousel__indicator');
    expect(indicators.length).toBe(3); // Mock returns 3 snaps
  });

  it('should call scrollTo when indicator is clicked', async () => {
    factory();
    await nextTick();
    const indicators = wrapper.findAll('.puik-carousel__indicator');
    await indicators[1].trigger('click');
    expect(mockEmblaApi.scrollTo).toHaveBeenCalledWith(1);
  });

  it('should call scrollNext when next button is clicked', async () => {
    factory();
    await nextTick();
    const nextBtn = wrapper.findComponent(PuikCarouselNext);
    await nextBtn.trigger('click');
    expect(mockEmblaApi.scrollNext).toHaveBeenCalled();
  });

  it('should call scrollPrev when previous button is clicked', async () => {
    mockEmblaApi.canScrollPrev.mockReturnValue(true);
    factory();
    await nextTick();
    const prevBtn = wrapper.findComponent(PuikCarouselPrevious);
    await prevBtn.trigger('click');
    expect(mockEmblaApi.scrollPrev).toHaveBeenCalled();
  });

  it('should expose public methods', () => {
    factory();
    const vm = wrapper.vm;
    expect(vm.scrollNext).toBeDefined();
    expect(vm.scrollPrev).toBeDefined();
    expect(vm.scrollTo).toBeDefined();
    expect(vm.api).toBeDefined();

    vm.scrollNext();
    expect(mockEmblaApi.scrollNext).toHaveBeenCalled();

    vm.reInit({ loop: false }, []);
    expect(mockEmblaApi.reInit).toHaveBeenCalledWith({ loop: false }, []);

    vm.destroy();
    expect(mockEmblaApi.destroy).toHaveBeenCalled();
  });

  it('should have a data-test attribute on the carousel container', () => {
    factory({ dataTest: 'test-carousel' });
    const carousel = wrapper.find('.puik-carousel');
    expect(carousel.attributes('data-test')).toBe('test-carousel');
  });

  it('should have data-test attributes on all sub-components', async () => {
    wrapper = mount(PuikCarousel, {
      props: { dataTest: 'carousel' },
      slots: {
        default: `
          <PuikCarouselContent data-test="carousel-content">
            <PuikCarouselItem data-test="carousel-item-1">Slide 1</PuikCarouselItem>
            <PuikCarouselItem data-test="carousel-item-2">Slide 2</PuikCarouselItem>
            <PuikCarouselItem data-test="carousel-item-3">Slide 3</PuikCarouselItem>
          </PuikCarouselContent>
          <PuikCarouselIndicators data-test="carousel-indicators" />
          <PuikCarouselNext data-test="carousel-next" />
          <PuikCarouselPrevious data-test="carousel-previous" />
        `,
      },
      global: {
        components: {
          PuikCarouselContent,
          PuikCarouselItem,
          PuikCarouselIndicators,
          PuikCarouselNext,
          PuikCarouselPrevious,
        },
      },
    });

    await nextTick();

    // Test main carousel
    expect(wrapper.find('.puik-carousel').attributes('data-test')).toBe(
      'carousel'
    );

    // Test carousel content
    expect(
      wrapper.find('.puik-carousel__viewport').attributes('data-test')
    ).toBe('carousel-content');

    // Test carousel items
    const items = wrapper.findAll('.puik-carousel__item');
    expect(items[0].attributes('data-test')).toBe('carousel-item-1');
    expect(items[1].attributes('data-test')).toBe('carousel-item-2');
    expect(items[2].attributes('data-test')).toBe('carousel-item-3');

    // Test indicators container
    expect(
      wrapper.find('.puik-carousel__indicators').attributes('data-test')
    ).toBe('carousel-indicators');

    // Test individual indicators
    const indicators = wrapper.findAll('.puik-carousel__indicator');
    expect(indicators[0].attributes('data-test')).toBe('carousel-indicators-0');
    expect(indicators[1].attributes('data-test')).toBe('carousel-indicators-1');
    expect(indicators[2].attributes('data-test')).toBe('carousel-indicators-2');

    // Test next button
    const nextButton = wrapper.findComponent(PuikCarouselNext);
    expect(
      nextButton.find('.puik-carousel__next').attributes('data-test')
    ).toBe('carousel-next');

    // Test previous button
    const prevButton = wrapper.findComponent(PuikCarouselPrevious);
    expect(
      prevButton.find('.puik-carousel__previous').attributes('data-test')
    ).toBe('carousel-previous');
  });

  it('should handle keyboard navigation in horizontal orientation', async () => {
    factory({ orientation: 'horizontal' });
    const carousel = wrapper.find('.puik-carousel');

    await carousel.trigger('keydown', { key: 'ArrowRight' });
    expect(mockEmblaApi.scrollNext).toHaveBeenCalled();

    await carousel.trigger('keydown', { key: 'ArrowLeft' });
    expect(mockEmblaApi.scrollPrev).toHaveBeenCalled();
  });

  it('should handle keyboard navigation in vertical orientation', async () => {
    factory({ orientation: 'vertical' });
    const carousel = wrapper.find('.puik-carousel');

    await carousel.trigger('keydown', { key: 'ArrowDown' });
    expect(mockEmblaApi.scrollNext).toHaveBeenCalled();

    await carousel.trigger('keydown', { key: 'ArrowUp' });
    expect(mockEmblaApi.scrollPrev).toHaveBeenCalled();
  });

  it('should emit events forwarded from embla', async () => {
    factory();
    const emblaEvents = [
      'init',
      'destroy',
      'scroll',
      'settle',
      'resize',
      'slidesChanged',
      'pointerDown',
      'pointerUp',
      'select',
      'reInit',
    ];

    emblaEvents.forEach((eventName) => {
      // Find the callback passed to api.on for this event
      const callback = mockEmblaApi.on.mock.calls.find(
        (call) => call[0] === eventName
      )?.[1];
      expect(callback).toBeDefined();

      // Trigger the callback
      callback(mockEmblaApi);

      // Check if PuikCarousel emitted the event
      expect(wrapper.emitted(eventName)).toBeTruthy();
      expect(wrapper.emitted(eventName)?.[0]).toEqual([mockEmblaApi]);
    });
  });

  it('should update indicators when embla api emits select or reInit', async () => {
    factory();
    await nextTick();

    const selectCallback = mockEmblaApi.on.mock.calls.find(
      (call) => call[0] === 'select'
    )?.[1];

    mockEmblaApi.selectedScrollSnap.mockReturnValue(1);
    mockEmblaApi.canScrollPrev.mockReturnValue(true);
    mockEmblaApi.canScrollNext.mockReturnValue(false);

    selectCallback(mockEmblaApi);
    await nextTick();

    const dots = wrapper.findAll('.puik-carousel__indicator-dot');
    expect(dots[1].classes()).toContain('puik-carousel__indicator-dot--active');
    expect(dots[1].classes()).toContain(
      'puik-carousel__indicator-dot--active--purple'
    );

    expect(wrapper.vm.canScrollPrev).toBe(true);
    expect(wrapper.vm.canScrollNext).toBe(false);
  });

  it('should use correct icons for horizontal orientation', () => {
    factory({ orientation: 'horizontal' });
    const nextIcon = wrapper.findComponent(PuikCarouselNext).findComponent({ name: 'PuikIcon' });
    const prevIcon = wrapper.findComponent(PuikCarouselPrevious).findComponent({ name: 'PuikIcon' });
    expect(nextIcon.props('icon')).toBe('chevron_right');
    expect(prevIcon.props('icon')).toBe('chevron_left');
  });

  it('should use correct icons for vertical orientation', () => {
    factory({ orientation: 'vertical' });
    const nextIcon = wrapper.findComponent(PuikCarouselNext).findComponent({ name: 'PuikIcon' });
    const prevIcon = wrapper.findComponent(PuikCarouselPrevious).findComponent({ name: 'PuikIcon' });
    expect(nextIcon.props('icon')).toBe('keyboard_arrow_down');
    expect(prevIcon.props('icon')).toBe('keyboard_arrow_up');
  });

  it('should disable next/previous buttons when embla says so', async () => {
    mockEmblaApi.canScrollNext.mockReturnValue(false);
    mockEmblaApi.canScrollPrev.mockReturnValue(false);
    factory();
    await nextTick();

    const nextBtn = wrapper.findComponent(PuikCarouselNext).find('button');
    const prevBtn = wrapper.findComponent(PuikCarouselPrevious).find('button');
    expect(nextBtn.element.disabled).toBe(true);
    expect(prevBtn.element.disabled).toBe(true);
  });

  it('should disable next/previous buttons when disabled prop is true', async () => {
    mockEmblaApi.canScrollNext.mockReturnValue(true);
    mockEmblaApi.canScrollPrev.mockReturnValue(true);
    wrapper = mount(PuikCarousel, {
      slots: {
        default: `
          <PuikCarouselNext disabled />
          <PuikCarouselPrevious disabled />
        `,
      },
      global: {
        components: { PuikCarouselNext, PuikCarouselPrevious },
      },
    });
    await nextTick();

    const nextBtn = wrapper.findComponent(PuikCarouselNext).find('button');
    const prevBtn = wrapper.findComponent(PuikCarouselPrevious).find('button');
    expect(nextBtn.element.disabled).toBe(true);
    expect(prevBtn.element.disabled).toBe(true);
  });

  it('should pass props to PuikCarouselNext and PuikCarouselPrevious buttons', async () => {
    wrapper = mount(PuikCarousel, {
      slots: {
        default: `
          <PuikCarouselNext
            variant="primary"
            size="large"
            disabled-reason="Not allowed"
            wrap-label
            fluid
            aria-label="Next slide custom"
          />
          <PuikCarouselPrevious
            variant="tertiary"
            size="medium"
            disabled-reason="Wait"
            wrap-label
            fluid
            aria-label="Previous slide custom"
          />
        `,
      },
      global: {
        components: { PuikCarouselNext, PuikCarouselPrevious },
      },
    });
    await nextTick();

    const nextBtn = wrapper.findComponent(PuikCarouselNext).findComponent({ name: 'PuikButton' });
    expect(nextBtn.props('variant')).toBe('primary');
    expect(nextBtn.props('size')).toBe('large');
    expect(nextBtn.props('disabledReason')).toBe('Not allowed');
    expect(nextBtn.props('wrapLabel')).toBe(true);
    expect(nextBtn.props('fluid')).toBe(true);
    expect(nextBtn.attributes('aria-label')).toBe('Next slide custom');

    const prevBtn = wrapper.findComponent(PuikCarouselPrevious).findComponent({ name: 'PuikButton' });
    expect(prevBtn.props('variant')).toBe('tertiary');
    expect(prevBtn.props('size')).toBe('medium');
    expect(prevBtn.props('disabledReason')).toBe('Wait');
    expect(prevBtn.props('wrapLabel')).toBe(true);
    expect(prevBtn.props('fluid')).toBe(true);
    expect(prevBtn.attributes('aria-label')).toBe('Previous slide custom');
  });

  it('should throw error when sub-components are used outside PuikCarousel', () => {
    const components = [
      PuikCarouselContent,
      PuikCarouselIndicators,
      PuikCarouselNext,
      PuikCarouselPrevious,
    ];

    components.forEach((component) => {
      // Suppress console.error as we expect it to throw
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
      expect(() => mount(component)).toThrow(
        `${component.name} must be used within a PuikCarousel`
      );
      spy.mockRestore();
    });
  });
});
