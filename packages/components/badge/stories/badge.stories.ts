import { PuikBadge, PuikBadgeVariants } from '@prestashopcorp/puik-components';
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3';

const badgeVariants = Object.values(PuikBadgeVariants);
const badgeVariantsSummary = badgeVariants.join('|');

export default {
  title: 'Components/Badge',
  component: PuikBadge,
  argTypes: {
    default: {
      control: 'text',
      description: 'Badge content'
    },
    variant: {
      control: 'select',
      description: 'Set the badge variant',
      options: badgeVariants,
      table: {
        type: {
          summary: badgeVariantsSummary
        },
        defaultValue: {
          summary: 'neutral'
        }
      }
    }
  },
  args: {
    default: 'Status',
    variant: 'neutral'
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikBadge
  },
  setup() {
    return { args };
  },
  template: '<puik-badge v-bind="args">{{ args.default }}</puik-badge>'
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
  $variants: ${badgeVariantsSummary}
  -->
  <puik-badge :variant="$variants">
    The text of the badge
  </puik-badge>

  <!--
  $variants: ${badgeVariantsSummary}
  -->
  <!--HTML/CSS Snippet-->
  <div class="puik-badge puik-badge--{$variants}">
    The text of the badge
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const success: StoryObj = {
  render: (args: Args) => ({
    components: {
      PuikBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<puik-badge variant="success" v-bind="args">{{ args.default }}</puik-badge>'
  }),

  args: {
    variant: 'success'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-badge variant="success">
    Status
  </puik-badge>

  <!--HTML/CSS Snippet-->
  <div class="puik-badge puik-badge--success">
    Status
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const warning: StoryObj = {
  render: (args: Args) => ({
    components: {
      PuikBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<puik-badge variant="warning" v-bind="args">{{ args.default }}</puik-badge>'
  }),

  args: {
    variant: 'warning'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-badge variant="warning">
    Status
  </puik-badge>

  <!--HTML/CSS Snippet-->
  <div class="puik-badge puik-badge--warning">
    Status
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const danger: StoryObj = {
  render: (args: Args) => ({
    components: {
      PuikBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<puik-badge variant="danger" v-bind="args">{{ args.default }}</puik-badge>'
  }),

  args: {
    variant: 'danger'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-badge variant="danger">
    Status
  </puik-badge>

  <!--HTML/CSS Snippet-->
  <div class="puik-badge puik-badge--danger">
    Status
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const info: StoryObj = {
  render: (args: Args) => ({
    components: {
      PuikBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<puik-badge variant="info" v-bind="args">{{ args.default }}</puik-badge>'
  }),

  args: {
    variant: 'info'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-badge variant="info">
    Status
  </puik-badge>

  <!--HTML/CSS Snippet-->
  <div class="puik-badge puik-badge--info">
    Status
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const neutral: StoryObj = {
  render: (args: Args) => ({
    components: {
      PuikBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<puik-badge variant="neutral" v-bind="args">{{ args.default }}</puik-badge>'
  }),

  args: {
    variant: 'neutral'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-badge variant="neutral">
    Status
  </puik-badge>

  <!--HTML/CSS Snippet-->
  <div class="puik-badge puik-badge--neutral">
    Status
  </div>
        `,
        language: 'html'
      }
    }
  }
};
