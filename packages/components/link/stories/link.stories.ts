import { PuikLink, PuikLinkSizes, PuikLinkTargetVariants } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';

const targetVariants = Object.values(PuikLinkTargetVariants);
const targetVariantsSummary = targetVariants.join('|');
const linkSizes = Object.values(PuikLinkSizes);
const linkSizesSummary = linkSizes.join('|');

export default {
  title: 'Components/Link',
  component: PuikLink,
  argTypes: {
    href: {
      control: 'text',
      description: 'Set a link (changes link to "a" html tag)'
    },
    to: {
      control: 'text',
      description:
        'Set a vue router link (changes link to "router-link" or html tag)'
    },
    target: {
      control: 'select',
      description:
        'Set the link target. If you set it to "_blank" the icon "open in new" is displayed',
      options: targetVariants,
      table: {
        defaultValue: {
          summary: '_self'
        },
        type: {
          summary: targetVariantsSummary
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
    size: {
      control: 'select',
      description: 'Set the link font size',
      options: linkSizes,
      table: {
        defaultValue: {
          summary: 'md'
        },
        type: {
          summary: linkSizesSummary
        }
      }
    },
    highContrast: {
      description:
        'Sets the link in high contrast mode by changing the gray underline color',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    articles: {
      description:
        'Sets the link in articles mode, adding the purple color for the visited stated',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    default: {
      control: 'text',
      description: 'Label of the link'
    },
    title: {
      control: 'text',
      description: 'Title displayed in tooltips then your cursor stay in link'
    },
    dataTest: {
      description: 'Set the data-test attribute'
    }
  },
  args: {
    href: '#',
    to: undefined,
    target: '_self',
    highContrast: false,
    articles: false,
    default: "I'm a cool link",
    title: "I'm a tooltip for your link",
    size: 'md',
    dataTest: ''
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikLink
  },
  setup() {
    return { args };
  },
  template: '<puik-link v-bind="args">{{ args.default }}</puik-link>'
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
  $sizes: ${linkSizesSummary}
  $targets: ${targetVariantsSummary}
  -->
  <puik-link size="$sizes" href="#" target="$targets" title="I'm a tooltip for your link">
    I'm a cool link
  </puik-link>

  <!--HTML/CSS Snippet-->
  <!--
  $sizes: ${linkSizesSummary}
  $targets: ${targetVariantsSummary}
  $variants: high-contrast (optional)
  -->
  <a class="puik-link puik-link--{$sizes} puik-link--{$variants}" href="#" target="$targets" title="I'm a tooltip for your link">
    I'm a cool link
  </a>
        `,
        language: 'html'
      }
    }
  }
};

export const Blank = {
  render: Template,

  args: {
    target: '_blank'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-link href="#" target="_blank" title="I'm a tooltip for your link">
  I'm a cool link
  </puik-link>

  <!--HTML/CSS Snippet-->
  <a class="puik-link puik-link--md" href="#" target="_blank" title="I'm a tooltip for your link">
    I'm a cool link
  </a>
        `,
        language: 'html'
      }
    }
  }
};
