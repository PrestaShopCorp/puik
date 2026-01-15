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
  title: 'Components/Carousel/CarouselPrevious',
  component: PuikCarouselPrevious,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'primary-reverse',
        'secondary',
        'secondary-reverse',
        'tertiary',
        'tertiary-reverse',
        'text',
        'text-reverse',
        'destructive',
        'info',
        'success',
        'warning',
        'danger',
      ],
      description: 'The variant of the button',
      table: {
        defaultValue: {
          summary: 'secondary',
        },
        type: {
          summary: 'PuikButtonVariants',
        },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        defaultValue: {
          summary: 'sm',
        },
        type: {
          summary: 'PuikButtonSizes',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Whether the button is disabled (in addition to automatic disable when cannot scroll)',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    disabledReason: {
      control: 'text',
      description: 'Tooltip text shown when button is disabled',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    wrapLabel: {
      control: 'boolean',
      description: 'Whether to wrap the button label',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    fluid: {
      control: 'boolean',
      description: 'Whether the button should take full width',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    dataTest: {
      control: 'text',
      description:
        'The data-test attribute for E2E testing (e.g. <b>"carousel-previous"</b>)',
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
        <puik-carousel-previous v-bind="args" />
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
          'The `PuikCarouselPrevious` component is a button to navigate to the previous slide. It must be used within a `PuikCarousel` component.',
      },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-carousel>
  <!-- ... content ... -->
  <puik-carousel-previous />
</puik-carousel>
        `,
        language: 'html',
      },
    },
  },
};
