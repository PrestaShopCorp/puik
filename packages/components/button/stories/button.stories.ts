import { PuikButton, PuikButtonVariants, PuikButtonSizes, PuikButtonLoaderPositions } from '@prestashopcorp/puik-components';
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3';

const buttonVariants = Object.values(PuikButtonVariants);
const buttonVariantsSummary = buttonVariants.join('|');
const buttonSizes = Object.values(PuikButtonSizes);
const buttonSizesSummary = buttonSizes.join('|');
const buttonLoaderPositions = Object.values(PuikButtonLoaderPositions);
const buttonLoaderPositionsSummary = buttonLoaderPositions.join('|');

export default {
  title: 'Components/Button',
  component: PuikButton,
  argTypes: {
    variant: {
      control: 'select',
      description: 'Sets the button variant',
      options: buttonVariants,
      table: {
        defaultValue: {
          summary: 'primary'
        },
        type: {
          summary: buttonVariantsSummary
        }
      }
    },
    size: {
      control: 'select',
      description: 'Sets the button size',
      options: buttonSizes,
      table: {
        defaultValue: {
          summary: 'md'
        },
        type: {
          summary: buttonSizesSummary
        }
      }
    },
    fluid: {
      description: 'Sets the button as fluid',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    wrapLabel: {
      description: 'Sets the carriage return of the button label',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      description: 'Sets the button as disabled',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    leftIcon: {
      description: 'Sets the button left icon (from Material Symbols: https://fonts.google.com/icons)'
    },
    rightIcon: {
      description: 'Sets the button right icon (from Material Symbols: https://fonts.google.com/icons)'
    },
    loading: {
      control: 'boolean',
      description: 'Sets the loading state of the button',
      table: {
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    loaderPosition: {
      control: 'select',
      description: 'Sets the loading position of the button',
      options: buttonLoaderPositions,
      table: {
        defaultValue: {
          summary: 'right'
        },
        type: {
          summary: buttonLoaderPositionsSummary
        }
      }
    },
    default: {
      control: 'text',
      description: 'Label/Content of the button'
    },
    to: {
      control: 'text',
      description:
        'Sets a vue router link for the button (changes button to router-link)'
    },
    href: {
      control: 'text',
      description: 'Sets a link for the button (changes button to "a" html tag)'
    },
    dataTest: {
      control: 'text',
      description:
        'Sets a data-test attribute to the button `${dataTest}` `left-icon-${dataTest}` `right-icon-${dataTest}`'
    },
    ariaLabel: {
      description: 'Sets the aria-label attribute for accessibility',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    disabledReason: {
      control: 'text',
      description: 'Sets the aria-describedby attribute for accessibility if disabled'
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    fluid: false,
    wrapLabel: true,
    disabled: false,
    disabledReason: 'Reason not specified',
    leftIcon: '',
    rightIcon: '',
    loading: false,
    loaderPosition: PuikButtonLoaderPositions.Right,
    to: undefined,
    href: undefined,
    default: 'Add to cart'
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikButton
  },
  setup() {
    return { args };
  },
  template: '<puik-button v-bind="args">{{ args.default }}</puik-button>'
});

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <!--
  $sizes: ${buttonSizesSummary}
  $variants: ${buttonVariantsSummary}
  $loaderPositions: ${buttonLoaderPositionsSummary}
  -->
  <puik-button
    :variant="$variants"
    :size="$sizes"
    :fluid="true|false"
    :wrap-label="true|false"
    :disabled="true|false"
    :disabledReason="string"
    :left-icon="string"
    :right-icon="string"
    :loading="true|false"
    :loaderPosition="$loaderPositions"
    :to="RouteLocationRaw"
    :href="string"
    :data-test="string"
    :aria-label="string"
  >
    Add to cart
  </puik-button>
        `,
        language: 'html'
      }
    }
  }
};

const ButtonTemplate = (args: Args) => ({
  components: { PuikButton },
  setup() {
    return {
      args
    };
  },
  template: `
  <div class="flex items-center gap-x-4">
    <puik-button v-bind="args" :variant="args.variant" size="lg">{{ args.variant }} button lg</puik-button>
    <puik-button v-bind="args" :variant="args.variant">{{ args.variant }} button md</puik-button>
    <puik-button v-bind="args" :variant="args.variant" size="sm">{{ args.variant }} button sm</puik-button>
  </div>
  `
});

const AllCommonVariantsTemplate: StoryFn = (args: Args, storyContext) => ({
  components: { PuikButton },
  setup() {
    const variants = storyContext.argTypes.variant.options;
    return {
      args,
      variants
    };
  },
  template: `
    <div class="flex flex-row flex-wrap items-center gap-4">
      <template v-for="(variant, i) in variants" :key="i">
        <puik-button v-if="!variant.includes('reverse')" v-bind="args" :variant="variant">
          {{ variant }} button
        </puik-button>
      </template>
    </div>
  `
});
const AllVariantsTemplate: StoryFn = (args: Args, storyContext) => ({
  components: { PuikButton },
  setup() {
    const variants = storyContext.argTypes.variant.options;
    return {
      args,
      variants
    };
  },
  template: `
    <div class="flex flex-row flex-wrap items-center gap-4">
      <template v-for="(variant, i) in variants" :key="i">
        <puik-button v-bind="args" :variant="variant">
          {{ variant }} button
        </puik-button>
      </template>
    </div>
  `
});

const AllReversedVariantsTemplate: StoryFn = (args: Args, storyContext) => ({
  components: { PuikButton },
  setup() {
    const variants = storyContext.argTypes.variant.options;
    return {
      args,
      variants
    };
  },
  template: `
    <div class="flex flex-row flex-wrap items-center gap-4">
      <template v-for="(variant, i) in variants" :key="i">
        <puik-button v-if="variant.includes('reverse')" v-bind="args" :variant="variant">
          {{ variant }} button
        </puik-button>
      </template>
    </div>
  `
});

const LoadingTemplate: StoryFn = (args: Args, storyContext) => ({
  components: { PuikButton },
  args: {
    loading: true
  },
  setup() {
    const loaderPositions = storyContext.argTypes.loaderPosition.options;
    console.log(storyContext.argTypes.loaderPosition.options);
    return {
      args,
      loaderPositions
    };
  },
  template: `
    <div class="flex flex-row flex-wrap items-center gap-4">
      <template v-for="(position, i) in loaderPositions" :key="i">
        <puik-button  loading :loaderPosition="position">
          Loading ...
        </puik-button>
      </template>
    </div>
  `
});

export const LoadingState: StoryObj = {
  render: LoadingTemplate,

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button  loading loaderPosition="left">
    Loading ...
  </puik-button>

  <puik-button  loading loaderPosition="right">
    Loading ...
  </puik-button>

        `,
        language: 'html'
      }
    }
  }
};

export const Primary: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'primary'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="primary">primary button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--primary puik-button--md" role="button" aria-label="puik-button">Primary button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const PrimaryReverse: StoryObj = {
  render: ButtonTemplate,
  args: {
    variant: 'primary-reverse'
  },

  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="primary-reverse">primary-reverse button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--primary-reverse">primary-reverse button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const Secondary: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'secondary'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="secondary">secondary button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--secondary">secondary button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const SecondaryReverse: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'secondary-reverse'
  },

  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="secondary">secondary-reverse button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--secondary-reverse">secondary-reverse button</button>
        `,
        language: 'html',
        dark: true
      }
    }
  }
};

export const Tertiary: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'tertiary'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="tertiary">tertiary button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--tertiary">tertiary button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const Destructive: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'destructive'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="destructive">destructive button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--destructive">destructive button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const Text: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'text'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="text">text button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--text">text button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const TextReverse: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'text-reverse'
  },

  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="text-reverse">text-reverse button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--text-reverse">text-reverse button</button>
        `,
        language: 'html',
        dark: true
      }
    }
  }
};

export const Info: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'info'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="info">info button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--info">info button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const Success: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'success'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="success">success button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--success">success button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const Warning: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'warning'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="warning">warning button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--warning">warning button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const Danger: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'danger'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="error">danger button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--error">danger button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const Disabled: StoryObj = {
  render: AllVariantsTemplate,

  args: {
    disabled: true
  },

  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button disabled>disabled button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--primary" disabled>disabled button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const Fluid: StoryObj = {
  render: () => ({
    components: {
      PuikButton
    },
    template: `
      <puik-button fluid >fluid button</puik-button>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button fluid >fluid button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--primary puik-button--fluid">fluid button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const WithIcon: StoryObj = {
  render: () => ({
    components: {
      PuikButton
    },
    template: `
      <div class="flex gap-x-4">
        <puik-button left-icon="shopping_cart">Left Icon</puik-button>
        <puik-button right-icon="shopping_cart">Right Icon</puik-button>
      </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button left-icon="shopping_cart">Left Icon</puik-button>
  <puik-button right-icon="shopping_cart">Right Icon</puik-button>
        `,
        language: 'html'
      }
    }
  }
};

export const Variants: StoryObj = {
  render: AllCommonVariantsTemplate,

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button>My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--{$variants}">My button</button>
        `,
        language: 'html'
      }
    }
  }
};

export const ReversedVariants: StoryObj = {
  render: AllReversedVariantsTemplate,

  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button>My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--{$variants}">My button</button>
        `,
        language: 'html'
      }
    }
  }
};
