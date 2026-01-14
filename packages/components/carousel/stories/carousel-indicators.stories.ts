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
  title: 'Components/Carousel/CarouselIndicators',
  component: PuikCarouselIndicators,
  argTypes: {},
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
      <puik-carousel-content>
          <puik-carousel-item v-for="i in 8" :key="i">
            <puik-card class="h-[200px] m-1 flex items-center justify-center">
              <span class="text-4xl font-semibold text-primary-800">Slide {{ i }}</span>
            </puik-card>
          </puik-carousel-item>
      </puik-carousel-content>
      
      <div class="flex justify-center mt-4">
        <puik-carousel-indicators v-bind="args" />
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
          'The `PuikCarouselIndicators` component displays the dots to navigate to specific slides. It must be used within a `PuikCarousel` component. The active indicator automatically cycles through different colors (`blue`, `purple`, `amber`, `green`) based on the slide index.',
      },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-carousel>
  <!-- ... content ... -->
  <puik-carousel-indicators />
</puik-carousel>
        `,
        language: 'html',
      },
    },
  },
};
