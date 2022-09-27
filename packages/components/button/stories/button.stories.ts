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

export const Default = Template.bind({})

Default.args = {}

export const Variants: Story = AllVariantTemplate.bind({})

export const Sizes = (args: Args) => ({
  components: { PuikButton },
  setup() {
    return {
      args,
      capitalize,
    }
  },
  template: `
  <div class="space-x-4">    
    <puik-button size="sm">{{ capitalize(args.variant) }} Button sm</puik-button>
    <puik-button>{{ capitalize(args.variant) }} Button md</puik-button>
    <puik-button size="lg">{{ capitalize(args.variant) }} Button lg</puik-button>
  </div>
  `,
})

export const Disabled: Story = AllVariantTemplate.bind({})
Disabled.args = {
  disabled: true,
}

export const Fluid: Story = Template.bind({})

Fluid.args = {
  fluid: true,
}

export const WithIcon: Story = () => ({
  components: {
    PuikButton,
  },
  template: `
    <div class="space-x-4">
      <puik-button left-icon="shopping_cart">Left Icon</puik-button>
      <puik-button right-icon="shopping_cart">Right Icon</puik-button>
      <puik-button left-icon="shopping_cart" right-icon="shopping_cart">Both Icons</puik-button>
    </div>
  `,
})
