import {
  PuikCard,
  PuikCarousel,
  PuikCarouselContent,
  PuikCarouselItem,
  PuikCarouselNext,
  PuikCarouselPrevious,
  PuikCarouselIndicators,
} from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/Carousel/CarouselContent',
  component: PuikCarouselContent,
  argTypes: {
    default: {
      control: 'none',
      description: 'Slot for carousel items',
    },
  },
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikCard,
    PuikCarousel,
    PuikCarouselContent,
    PuikCarouselItem,
    PuikCarouselNext,
    PuikCarouselPrevious,
    PuikCarouselIndicators,
  },
  setup() {
    return { args };
  },
  template: `
    <puik-carousel>
      <puik-carousel-content v-bind="args">
          <puik-carousel-item v-for="i in 5" :key="i">
            <puik-card class="h-[200px] m-1 flex items-center justify-center">
              <span class="text-4xl font-semibold text-primary-800">Slide {{ i }}</span>
            </puik-card>
          </puik-carousel-item>
      </puik-carousel-content>
      
      <div class="flex justify-between gap-2 mt-4">
      <div class="flex gap-2">
        <puik-carousel-previous />
        <puik-carousel-next />
      </div>
        <puik-carousel-indicators />
      </div>
    </puik-carousel>
  `,
});

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'The `PuikCarouselContent` component is the wrapper for the carousel items. It must be used within a `PuikCarousel` component.',
      },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-carousel>
  <puik-carousel-content>
    <!-- PuikCarouselItem components go here -->
  </puik-carousel-content>
</puik-carousel>
        `,
        language: 'html',
      },
    },
  },
};
