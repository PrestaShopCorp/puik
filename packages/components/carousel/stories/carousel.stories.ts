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
        'Embla Carousel options (e.g. { loop: true, align: "start" }). See <a href="https://www.embla-carousel.com/api/options/" target="_blank">Embla Options</a>',
      table: {
        type: {
          summary: 'EmblaOptionsType',
        },
      },
    },
    plugins: {
      control: 'object',
      description:
        'Embla Carousel plugins. See <a href="https://www.embla-carousel.com/plugins/" target="_blank">Embla Plugins</a>',
      table: {
        type: {
          summary: 'EmblaPluginType[]',
        },
      },
    },
    dataTest: {
      control: 'text',
      description:
        'The data-test attribute for E2E testing (e.g. <b>"carousel"</b>)',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    init: {
      action: 'init',
      description:
        'Emitted when the carousel is initialized. See <a href="https://www.embla-carousel.com/api/events/#init" target="_blank">init event</a>',
    },
    reInit: {
      action: 'reInit',
      description:
        'Emitted when the carousel moves. See <a href="https://www.embla-carousel.com/api/events/#reinit" target="_blank">reInit event</a>',
    },
    destroy: {
      action: 'destroy',
      description:
        'Emitted when the carousel is destroyed. See <a href="https://www.embla-carousel.com/api/events/#destroy" target="_blank">destroy event</a>',
    },
    select: {
      action: 'select',
      description:
        'Emitted when a slide is selected. See <a href="https://www.embla-carousel.com/api/events/#select" target="_blank">select event</a>',
    },
    scroll: {
      action: 'scroll',
      description:
        'Emitted when the carousel is scrolled. See <a href="https://www.embla-carousel.com/api/events/#scroll" target="_blank">scroll event</a>',
    },
    settle: {
      action: 'settle',
      description:
        'Emitted when the carousel settles. See <a href="https://www.embla-carousel.com/api/events/#settle" target="_blank">settle event</a>',
    },
    resize: {
      action: 'resize',
      description:
        'Emitted when the carousel is resized. See <a href="https://www.embla-carousel.com/api/events/#resize" target="_blank">resize event</a>',
    },
    slidesChanged: {
      action: 'slidesChanged',
      description:
        'Emitted when slides changed. See <a href="https://www.embla-carousel.com/api/events/#slideschanged" target="_blank">slidesChanged event</a>',
    },
    pointerDown: {
      action: 'pointerDown',
      description:
        'Emitted on pointer down. See <a href="https://www.embla-carousel.com/api/events/#pointerdown" target="_blank">pointerDown event</a>',
    },
    pointerUp: {
      action: 'pointerUp',
      description:
        'Emitted on pointer up. See <a href="https://www.embla-carousel.com/api/events/#pointerup" target="_blank">pointerUp event</a>',
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

export const WithoutNavigation = {
  render: (args: Args) => ({
    components: {
      PuikCard,
      PuikCarousel,
      PuikCarouselContent,
      PuikCarouselItem,
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
        
        <div class="flex justify-center mt-4">
          <puik-carousel-indicators />
        </div>
      </puik-carousel>
    `,
  }),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Example of a carousel without navigation buttons, showing only indicators.',
      },
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
  
  <div class="flex justify-center mt-4">
    <puik-carousel-indicators />
  </div>
</puik-carousel>
        `,
        language: 'html',
      },
    },
  },
};

export const WithoutIndicators = {
  render: (args: Args) => ({
    components: {
      PuikCard,
      PuikCarousel,
      PuikCarouselContent,
      PuikCarouselItem,
      PuikCarouselNext,
      PuikCarouselPrevious,
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
        
        <div class="flex justify-center mt-4 gap-2">
          <puik-carousel-previous />
          <puik-carousel-next />
        </div>
      </puik-carousel>
    `,
  }),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Example of a carousel without indicators, showing only navigation buttons.',
      },
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
  
  <div class="flex justify-center mt-4 gap-2">
    <puik-carousel-previous />
    <puik-carousel-next />
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
      PuikCard,
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

<div class="flex gap-2 justify-center mt-4">
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
        story: `
You can control the carousel programmatically using the exposed methods via \`ref\`. 

### Available Methods
The \`PuikCarousel\` component exposes the following methods from the [Embla API](https://www.embla-carousel.com/api/methods/):

- **Navigation**: \`scrollNext()\`, \`scrollPrev()\`, \`scrollTo(index)\`
- **State**: \`canScrollNext()\`, \`canScrollPrev()\`, \`selectedScrollSnap()\`, \`previousScrollSnap()\`, \`scrollSnapList()\`
- **Nodes**: \`rootNode()\`, \`containerNode()\`, \`slideNodes()\`
- **Lifecycle**: \`reInit(options, plugins)\`, \`destroy()\`
- **Events**: \`on(event, callback)\`, \`off(event, callback)\`, \`emit(event)\`
- **Others**: \`plugins()\`, \`internalEngine()\`
`,
      },
      source: {
        code: `
<script setup>
import { ref } from 'vue';
const carouselRef = ref<InstanceType<typeof PuikCarousel> | null>(null);

const next = () => carouselRef.value?.scrollNext();
const prev = () => carouselRef.value?.scrollPrev();
const goTo = (index: number) => carouselRef.value?.scrollTo(index);
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

  <div class="flex gap-2 justify-center mt-4">
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

export const WithPlugins = {
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
