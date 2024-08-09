import PrestaShopSloganBg from '../../../../docs/assets/img/prestashop-slogan-bg.jpg';
import { PuikButton, PuikCard, PuikCardVariants } from '@prestashopcorp/puik-components';
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3';

const cardVariants = Object.values(PuikCardVariants);
const cardVariantsSummary = cardVariants.join('|');

export default {
  title: 'Components/Card',
  component: PuikCard,
  argTypes: {
    variant: {
      description: 'Set the card variant',
      table: {
        defaultValue: {
          summary: 'default'
        },
        type: {
          summary: cardVariantsSummary
        }
      }
    },
    ariaLabel: {
      description: 'Set the aria-label attribute for accessibility',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    default: {
      control: 'text',
      description: 'Card content'
    }
  },
  args: {
    default: 'Card content'
  },
  decorators: [
    () => ({
      template: '<div class="w-96"><story/></div>'
    })
  ]
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikCard
  },
  setup() {
    return { args };
  },
  template: `
    <puik-card v-bind="args">
      <h3 class="puik-h3">Card title</h3>
      <p>{{ args.default }}</p>
    </puik-card>
  `
});

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
  <puik-card variant="$variants" aria-label="Card description" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </puik-card>

  <!--HTML/CSS Snippet-->
  <!--
  $variants: ${cardVariantsSummary}
  -->
  <div class="puik-card puik-card--{$variants}" aria-label="Card description" role="region" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Highlight = {
  render: Template,

  args: {
    variant: 'highlight',
    ariaLabel: 'Highlighted card'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="highlight" aria-label="Highlighted card" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--highlight" aria-label="Highlighted card" role="region" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Blue = {
  render: Template,

  args: {
    variant: 'blue',
    ariaLabel: 'Blue card'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="blue" aria-label="Blue card" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--blue" aria-label="Blue card" role="region" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Purple = {
  render: Template,

  args: {
    variant: 'purple',
    ariaLabel: 'Purple card'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="purple" aria-label="Purple card" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--purple" aria-label="Purple card" role="region" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Amber = {
  render: Template,

  args: {
    variant: 'amber',
    ariaLabel: 'Amber card'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="amber" aria-label="Amber card" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--amber" aria-label="Amber card" role="region" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Green = {
  render: Template,

  args: {
    variant: 'green',
    ariaLabel: 'Green card'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card variant="green" aria-label="Green card" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card puik-card--green" aria-label="Green card" role="region" tabindex="0">
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const WithPictureTitleTextAndAction: StoryObj = {
  render: (args: Args) => ({
    components: {
      PuikButton,
      PuikCard
    },
    setup() {
      return { args, PrestaShopSloganBg };
    },
    template: `
    <puik-card aria-label="Card with picture, title, text, and action" tabindex="0">
      <img class="rounded-lg" :src="PrestaShopSloganBg" alt="PrestaShop slogan"/>
      <h3 class="puik-h3">Card title</h3>
      <p>{{ args.default }}</p>
      <div>
        <puik-button>Button</puik-button>
      </div>
    </puik-card>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-card aria-label="Card with picture, title, text, and action" tabindex="0">
    <img src="/assets/img/prestashop-slogan-bg.png" alt="PrestaShop slogan"/>
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
    <div>
      <puik-button>Button</puik-button>
    </div>
  </puik-card>

  <!--HTML/CSS Snippet-->
  <div class="puik-card" aria-label="Card with picture, title, text, and action" role="region" tabindex="0">
    <img src="/assets/img/prestashop-slogan-bg.png" />
    <h3 class="puik-h3">Card title</h3>
    <p>Card content</p>
    <div>
      <button class="puik-button">Button</button>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};
