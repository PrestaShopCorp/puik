import { capitalize } from 'lodash-unified'
import PuikButton from './../src/button.vue'
import { buttonVariants, buttonSizes, buttonTheme } from './../src/button'
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3'

const buttonVariantsSummary = buttonVariants.join('|')
const buttonSizesSummary = buttonSizes.join('|')
const buttonThemeSummary = buttonTheme.join('|')

export default {
  title: 'Components/Button',
  component: PuikButton,
  argTypes: {
    theme: {
      control: 'select',
      description: 'Set the button color theme',
      options: buttonTheme,
      table: {
        defaultValue: {
          summary: 'light',
        },
        type: {
          summary: buttonThemeSummary,
        },
      },
    },
    variant: {
      control: 'select',
      description: 'Set the button variant',
      options: buttonVariants,
      table: {
        defaultValue: {
          summary: 'primary',
        },
        type: {
          summary: buttonVariantsSummary,
        },
      },
    },
    size: {
      control: 'select',
      description: 'Set the button size',
      options: buttonSizes,
      table: {
        defaultValue: {
          summary: 'md',
        },
        type: {
          summary: buttonSizesSummary,
        },
      },
    },
    fluid: {
      description: 'Set the button as fluid',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      description: 'Set the button as disabled',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    leftIcon: {
      description: 'Set the button left icon',
    },
    rightIcon: {
      description: 'Set the button right icon',
    },
    default: {
      control: 'text',
      description: 'Label/Content of the button',
    },
    to: {
      control: 'text',
      description:
        'Set a vue router link for the button (changes button to router-link)',
    },
    href: {
      control: 'text',
      description: 'Set a link for the button (changes button to "a" html tag)',
    },
  },
  args: {
    theme: 'light',
    variant: 'primary',
    size: 'md',
    fluid: false,
    disabled: false,
    leftIcon: '',
    rightIcon: '',
    to: undefined,
    href: undefined,
    default: 'Add to cart',
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikButton,
  },
  setup() {
    return { args }
  },
  template: `<puik-button v-bind="args">{{ args.default }}</puik-button>`,
})

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <!--
  $themes: ${buttonThemeSummary}
  $sizes: ${buttonSizesSummary}
  $variants: ${buttonVariantsSummary}
  -->
  <puik-button
    :theme="$themes"
    :size="$sizes"
    :variant="$variants"
    :fluid="true|false"
    :disabled="true|false"
    :left-icon="leftIcon"
    :right-icon="rightIcon"
    >
    My button
  </puik-button>
  
  <!--HTML/CSS Snippet-->
  <!--
  $themes: ${buttonThemeSummary} (defaults to light)
  $sizes: ${buttonSizesSummary} (defaults to md)
  $variants: ${buttonVariantsSummary}
  -->
  <button class="puik-button puik-button--{$variants} puik-button--{$sizes}">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

const ButtonTemplate = (args: Args) => ({
  components: { PuikButton },
  setup() {
    return {
      args,
      capitalize,
    }
  },
  template: `
  <div class="space-x-4">
    <puik-button v-bind="args" :variant="args.variant" size="lg">{{ capitalize(args.variant) }} Button lg</puik-button>
    <puik-button v-bind="args" :variant="args.variant">{{ capitalize(args.variant) }} Button md</puik-button>
    <puik-button v-bind="args" :variant="args.variant" size="sm">{{ capitalize(args.variant) }} Button sm</puik-button>
  </div>
  `,
})

const AllVariantTemplate = (args: Args, storyContext) => ({
  components: { PuikButton },
  setup() {
    const variants = storyContext.argTypes.variant.options
    return {
      args,
      capitalize,
      variants,
    }
  },
  template: `
    <div class="flex flex-row flex-wrap items-center gap-4">
      <template v-for="(variant, i) in variants" :key="i">
        <puik-button v-bind="args" :variant="variant">
          {{ capitalize(variant) }} Button
        </puik-button>
      </template>
    </div>
  `,
})

export const Primary: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'primary',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button>My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--primary">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Secondary: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'secondary',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="secondary">My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--secondary">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Tertiary: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'tertiary',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="tertiary">My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--tertiary">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Destructive: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'destructive',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="destructive">My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--destructive">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Text: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'text',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="text">My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--text">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Info: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'info',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="info">My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--info">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Success: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'success',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="success">My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--success">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Warning: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'warning',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="warning">My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--warning">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Danger: StoryObj = {
  render: ButtonTemplate,

  args: {
    variant: 'danger',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button variant="error">My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--error">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Disabled: StoryObj = {
  render: AllVariantTemplate,

  args: {
    disabled: true,
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button disabled>My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--primary" disabled>My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const Fluid: StoryObj = {
  render: () => ({
    components: {
      PuikButton,
    },
    template: `
      <puik-button fluid>Primary Button lg</puik-button>
    `,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button fluid>My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--primary puik-button--fluid">My button</button>
        `,
        language: 'html',
      },
    },
  },
}

export const WithIcon: StoryObj = {
  render: () => ({
    components: {
      PuikButton,
    },
    template: `
      <div class="space-x-4">
        <puik-button left-icon="shopping_cart">Left Icon</puik-button>
        <puik-button right-icon="shopping_cart">Right Icon</puik-button>
      </div>
    `,
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button left-icon="shopping_cart">My button</puik-button>
  <puik-button right-icon="shopping_cart">My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--primary">
    <span class="puik-icon puik-button__left-icon">shopping_cart</span>
    My button
  </button>
  <button class="puik-button puik-button--primary">
    My button
    <span class="puik-icon puik-button__right-icon">shopping_cart</span>
  </button>
        `,
        language: 'html',
      },
    },
  },
}

export const Variants: StoryObj = {
  render: AllVariantTemplate,

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet -->
  <puik-button>My button</puik-button>

  <!--HTML/CSS Snippet-->
  <button class="puik-button puik-button--{$variants}">My button</button>
        `,
        language: 'html',
      },
    },
  },
}
