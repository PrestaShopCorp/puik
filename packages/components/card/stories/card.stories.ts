import PrestaShopSloganBg from '../../../../docs/assets/img/prestashop-slogan-bg.jpg'
import { PuikCardVariants } from '../src/card'
import PuikCard from './../src/card.vue'
import PuikButton from './../../button/src/button.vue'
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3'

const cardVariants = Object.values(PuikCardVariants)
const cardVariantsSummary = cardVariants.join('|')

export default {
  title: 'Components/Card',
  component: PuikCard,
  argTypes: {
    variant: {
      description: 'Set the card variant',
      table: {
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: cardVariantsSummary,
        },
      },
    },
    default: {
      control: 'text',
      description: 'Card content',
    },
  },
  args: {
    default: 'Card content',
  },
  decorators: [
    () => ({
      template: '<div class="w-96"><story/></div>',
    }),
  ],
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikCard,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-card v-bind="args">
      <h3 class="puik-h3">Card title</h3>
      {{ args.default }}
    </puik-card>
  `,
})

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <!--
  $variants: ${cardVariantsSummary}
  -->
  <puik-card variant="$variants">
    Card content
  </puik-card>

  <!--HTML/CSS Snippet-->
  <!--
  $variants: ${cardVariantsSummary}
  -->
  <div class="puik-card puik-card--{$variants}">
    Card content
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Highlight = {
  render: Template,

  args: {
    variant: 'highlight',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="highlight">
    Card content
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--highlight">
    Card content
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Blue = {
  render: Template,

  args: {
    variant: 'blue',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="blue">
    Card content
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--blue">
    Card content
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Purple = {
  render: Template,

  args: {
    variant: 'purple',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="purple">
    Card content
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--purple">
    Card content
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Amber = {
  render: Template,

  args: {
    variant: 'amber',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="amber">
    Card content
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--amber">
    Card content
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Green = {
  render: Template,

  args: {
    variant: 'green',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="amber">
    Card content
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--green">
    Card content
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const WithPictureTitleTextAndAction: StoryObj = {
  render: (args: Args) => ({
    components: {
      PuikButton,
      PuikCard,
    },
    setup() {
      return { args, PrestaShopSloganBg }
    },
    template: `
    <puik-card>
      <img class="rounded-lg" :src="PrestaShopSloganBg" />
      <h3 class="puik-h3">Card title</h3>
      {{ args.default }}
      <div>
        <puik-button>Button</puik-button>
      </div>
    </puik-card>
    `,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card>
    <img src="/assets/img/prestashop-slogan-bg.png" />
      <h3 class="puik-h3">Card title</h3>
      Card content
      <div>
        <puik-button>Button</puik-button>
      </div>
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card">
    <img src="/assets/img/prestashop-slogan-bg.png" />
      <h3 class="puik-h3">Card title</h3>
      Card description
      <div>
        <button class="puik-button">Button</-button>
      </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}
