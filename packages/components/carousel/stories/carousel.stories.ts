import {
  PuikCard,
  PuikCarousel,
  PuikCarouselContent,
  PuikCarouselItem,
  PuikCarouselNext,
  PuikCarouselPrevious,
  PuikCarouselIndicators,
  PuikButton,
} from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';
import { ref } from 'vue';
import Autoplay from 'embla-carousel-autoplay';

export default {
  title: 'Components/Carousel',
  component: PuikCarousel,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the carousel',
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
      },
    },
    verticalHeight: {
      control: 'text',
      description:
        'The height of the carousel when orientation is <b>vertical</b> (e.g. <b>"200px"</b>)',
      table: {
        defaultValue: {
          summary: '200px',
        },
      },
    },
    itemWidth: {
      control: 'number',
      description:
        'The width of the carousel items  as a <b>percentage</b> when orientation is <b>horizontal</b>',
      table: {
        defaultValue: {
          summary: '100',
        },
      },
    },
    opts: {
      control: 'object',
      description:
        'Embla Carousel options (e.g. { loop: true, align: "start" })',
    },
    plugins: {
      control: 'object',
      description: 'Embla Carousel plugins',
    },
    init: {
      action: 'init',
      description: 'Emitted when the carousel is initialized',
    },
    reInit: {
      action: 'reInit',
      description: 'Emitted when the carousel moves',
    },
    destroy: {
      action: 'destroy',
      description: 'Emitted when the carousel is destroyed',
    },
    select: {
      action: 'select',
      description: 'Emitted when a slide is selected',
    },
    scroll: {
      action: 'scroll',
      description: 'Emitted when the carousel is scrolled',
    },
    settle: {
      action: 'settle',
      description: 'Emitted when the carousel settles',
    },
    resize: {
      action: 'resize',
      description: 'Emitted when the carousel is resized',
    },
    slidesChanged: {
      action: 'slidesChanged',
      description: 'Emitted when slides changed',
    },
    pointerDown: {
      action: 'pointerDown',
      description: 'Emitted on pointer down',
    },
    pointerUp: { action: 'pointerUp', description: 'Emitted on pointer up' },
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
    <puik-carousel :key="args.orientation" v-bind="args">
      <puik-carousel-content>
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
      source: {
        code: `
<!--VueJS Snippet-->
<puik-carousel>
  <puik-carousel-content>
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
        language: 'html',
      },
    },
  },
};

export const Vertical = {
  render: Template,
  args: {
    orientation: 'vertical',
    verticalHeight: 200,
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-carousel orientation="vertical" :vertical-height="200">
  <puik-carousel-content>
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
        language: 'html',
      },
    },
  },
};

export const CustomItemWidth = {
  render: Template,
  args: {
    itemWidth: 66,
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-carousel :item-width="66">
  <puik-carousel-content>
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
        language: 'html',
      },
    },
  },
};

export const WithOptions = {
  render: Template,
  args: {
    opts: {
      loop: true,
      align: 'start',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can pass any Embla Carousel options via the `opts` prop. In this example, `loop: true` and `align: "start"` are used.',
      },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-carousel :opts="{ loop: true, align: 'start' }">
  <puik-carousel-content>
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
        language: 'html',
      },
    },
  },
};

export const ManualControl = {
  render: (args: Args) => ({
    components: {
      PuikCarousel,
      PuikCarouselContent,
      PuikCarouselItem,
      PuikButton,
    },
    setup() {
      const carouselRef = ref<InstanceType<typeof PuikCarousel> | null>(null);

      const next = () => carouselRef.value?.scrollNext();
      const prev = () => carouselRef.value?.scrollPrev();
      const goTo = (index: number) => carouselRef.value?.scrollTo(index);
      return { args, carouselRef, next, prev, goTo };
    },
    template: `
<puik-carousel ref="carouselRef" v-bind="args">
  <puik-carousel-content>
      <puik-carousel-item v-for="i in 5" :key="i">
        <puik-card class="h-[200px] m-1 flex items-center justify-center">
          <span class="text-4xl font-semibold text-primary-800">Slide {{ i }}</span>
        </puik-card>
      </puik-carousel-item>
  </puik-carousel-content>
</puik-carousel>

<div class="flex gap-2 justify-center">
  <puik-button @click="prev">Prev</puik-button>
  <puik-button @click="goTo(0)">Go to 1</puik-button>
  <puik-button @click="goTo(2)">Go to 3</puik-button>
  <puik-button @click="goTo(4)">Go to last</puik-button>
  <puik-button @click="next">Next</puik-button>
</div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'You can control the carousel programmatically using the exposed methods via `ref`.',
      },
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const carouselRef = ref<InstanceType<typeof PuikCarousel> | null>(null);

const next = () => carouselRef.value?.scrollNext();
const prev = () => carouselRef.value?.scrollPrev();
const goTo = (index: number) => carouselRef.value?.scrollTo(index);
return { args, carouselRef, next, prev, goTo };
</script>

<template>
  <puik-carousel ref="carouselRef" v-bind="args">
    <puik-carousel-content>
        <puik-carousel-item v-for="i in 5" :key="i">
          <puik-card class="h-[200px] m-1 flex items-center justify-center">
            <span class="text-4xl font-semibold text-primary-800">Slide {{ i }}</span>
          </puik-card>
        </puik-carousel-item>
    </puik-carousel-content>
  </puik-carousel>

  <div class="flex gap-2 justify-center">
    <puik-button @click="prev">Prev</puik-button>
    <puik-button @click="goTo(0)">Go to 1</puik-button>
    <puik-button @click="goTo(2)">Go to 3</puik-button>
    <puik-button @click="goTo(4)">Go to last</puik-button>
    <puik-button @click="next">Next</puik-button>
  </div>
</template>
        `,
        language: 'html',
      },
    },
  },
};

export const WithAutoplay = {
  render: Template,
  args: {
    plugins: [Autoplay({ delay: 2000 })],
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can use Embla Carousel plugins via the `plugins` prop. This example uses `embla-carousel-autoplay`.',
      },
      source: {
        code: `
<!--VueJS Snippet-->
<script setup>
import Autoplay from 'embla-carousel-autoplay'
</script>

<template>
  <puik-carousel :plugins="[Autoplay({ delay: 2000 })]">
    <puik-carousel-content>
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
</template>
        `,
        language: 'html',
      },
    },
  },
};
export const Indicators = {
  render: () => ({
    components: {
      PuikCarousel,
      PuikCarouselContent,
      PuikCarouselItem,
      PuikCard,
      PuikCarouselIndicators,
    },
    template: `
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="mb-4 font-bold">Standard Indicators</h3>
          <p class="mb-4 text-sm text-gray-600">The active indicator automatically cycles through different colors (blue, purple, amber, green) based on the slide index.</p>
          <puik-carousel>
            <puik-carousel-content>
              <puik-carousel-item v-for="i in 8" :key="i">
                <puik-card class="h-[100px] flex items-center justify-center">Slide {{ i }}</puik-card>
              </puik-carousel-item>
            </puik-carousel-content>
            <div class="flex justify-center mt-4">
              <puik-carousel-indicators />
            </div>
          </puik-carousel>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Indicators automatically cycle through a set of colors for the active state to provide visual variety. They are designed to be used within the `PuikCarousel` component.',
      },
      source: {
        code: `
<puik-carousel>
  <puik-carousel-content>
    <!-- ... items ... -->
  </puik-carousel-content>
  <puik-carousel-indicators />
</puik-carousel>
        `,
      },
    },
  },
};
