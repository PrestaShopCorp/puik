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
  title: 'Components/Carousel/CarouselNext',
  component: PuikCarouselNext,
  argTypes: {
    dataTest: {
      control: 'text',
      description:
        'The data-test attribute for E2E testing (e.g. <b>"carousel-next"</b>)',
      table: {
        type: {
          summary: 'string',
        },
      },
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
      <puik-carousel-content>
          <puik-carousel-item v-for="i in 5" :key="i">
            <puik-card class="h-[200px] m-1 flex items-center justify-center">
              <span class="text-4xl font-semibold text-primary-800">Slide {{ i }}</span>
            </puik-card>
          </puik-carousel-item>
      </puik-carousel-content>
      
      <div class="flex justify-center mt-4 gap-2">
        <puik-carousel-next v-bind="args" />
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
          'The `PuikCarouselNext` component is a button to navigate to the next slide. It must be used within a `PuikCarousel` component.',
      },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-carousel>
  <!-- ... content ... -->
  <puik-carousel-next />
</puik-carousel>
        `,
        language: 'html',
      },
    },
  },
};
