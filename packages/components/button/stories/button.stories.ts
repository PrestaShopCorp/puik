import { capitalize } from 'lodash-unified'
import PuikButton from './../src/button.vue'
import { buttonVariants, buttonSizes } from './../src/button'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Button',
  component: PuikButton,
  argTypes: {
    variant: {
      control: 'select',
      description: 'Set the button variant',
      options: buttonVariants,
      table: {
        defaultValue: {
          summary: 'primary',
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
    loading: {
      description: 'Set the spinner loader inside the button',
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
    variant: 'primary',
    size: 'md',
    fluid: false,
    disabled: false,
    loading: false,
    leftIcon: '',
    rightIcon: '',
    to: undefined,
    href: undefined,
    default: 'Add to cart',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikButton,
  },
  setup() {
    return { args }
  },
  template: `<puik-button v-bind="args">{{ args.default }}</puik-button>`,
})

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet -->
      <!--
      $sizes: sm|md|lg
      $variants: primary|secondary|tertiary|text|destructive|info|success|warning|error
      -->
      <puik-button size="$sizes" variant="$variants">My button</puik-button>

      <!--HTML/CSS Snippet-->
      <!--
      $sizes: sm|md|lg (defaults to md)
      $variants: primary|secondary|tertiary|text|destructive|info|success|warning|error
      -->
      <button class="puik-button puik-button--{$variants} puik-button--{$sizes}">My button</button>
      `,
      language: 'html',
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

export const Primary: Story = ButtonTemplate.bind({})
Primary.args = {
  variant: 'primary',
}

Primary.parameters = {
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
}

export const Secondary: Story = ButtonTemplate.bind({})
Secondary.args = {
  variant: 'secondary',
}

Secondary.parameters = {
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
}

export const Tertiary: Story = ButtonTemplate.bind({})
Tertiary.args = {
  variant: 'tertiary',
}

Tertiary.parameters = {
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
}

export const Destructive: Story = ButtonTemplate.bind({})
Destructive.args = {
  variant: 'destructive',
}

Destructive.parameters = {
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
}

export const Text: Story = ButtonTemplate.bind({})
Text.args = {
  variant: 'text',
}

Text.parameters = {
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
}

export const Info: Story = ButtonTemplate.bind({})
Info.args = {
  variant: 'info',
}

Info.parameters = {
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
}

export const Success: Story = ButtonTemplate.bind({})
Success.args = {
  variant: 'success',
}

Success.parameters = {
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
}

export const Warning: Story = ButtonTemplate.bind({})
Warning.args = {
  variant: 'warning',
}

Warning.parameters = {
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
}

export const Danger: Story = ButtonTemplate.bind({})
Danger.args = {
  variant: 'danger',
}

Danger.parameters = {
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
}

export const Disabled: Story = AllVariantTemplate.bind({})
Disabled.args = {
  disabled: true,
}

Disabled.parameters = {
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
}

export const Fluid: Story = () => ({
  components: {
    PuikButton,
  },
  template: `
    <puik-button fluid>Primary Button lg</puik-button>
  `,
})

Fluid.parameters = {
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
}

export const WithSpinner: Story = ButtonTemplate.bind({})
WithSpinner.args = {
  leftIcon: 'shopping_cart',
  loading: true,
}

WithSpinner.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet -->
      <puik-button left-icon="shopping_cart" loading>My button</puik-button>

      <!--HTML/CSS Snippet-->
      <button class="puik-button puik-button--primary">
        <div class="puik-spinner-loader puik-spinner-loader--md puik-spinner-loader--reverse puik-button__loading" aria-live="polite" role="status">
          <div class="puik-spinner-loader__spinner" aria-hidden="true"></div>
        </div>
        My button
      </button>
      `,
      language: 'html',
    },
  },
}

export const WithIcon: Story = () => ({
  components: {
    PuikButton,
  },
  template: `
    <div class="space-x-4">
      <puik-button left-icon="shopping_cart">Left Icon</puik-button>
      <puik-button right-icon="shopping_cart">Right Icon</puik-button>
    </div>
  `,
})

WithIcon.parameters = {
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
}

export const Variants: Story = AllVariantTemplate.bind({})
