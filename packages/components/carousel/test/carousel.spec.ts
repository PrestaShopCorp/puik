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
};

vi.mock('embla-carousel-vue', () => ({
  default: vi.fn(() => [ref(document.createElement('div')), ref(mockEmblaApi)]),
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
  });

  it('should emit events forwarded from embla', async () => {
    factory();
    // Simulate event registration and firing manually if needed,
    // but we can verify that .on was called to register events
    expect(mockEmblaApi.on).toHaveBeenCalledWith('init', expect.any(Function));
    expect(mockEmblaApi.on).toHaveBeenCalledWith(
      'select',
      expect.any(Function)
    );
  });
});
