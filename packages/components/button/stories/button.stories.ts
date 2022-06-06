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

export const Default = Template.bind({})

Default.args = {}

export const Primary: Story = () => ({
  components: {
    PuikButton,
  },
  template: `
    <div class="space-x-4">
      <puik-button size="lg">Primary Button lg</puik-button>
      <puik-button>Primary Button md</puik-button>
    </div>
  `,
})

export const Secondary: Story = () => ({
  components: {
    PuikButton,
  },
  template: `
    <div class="space-x-4">
      <puik-button variant="secondary" size="lg">Secondary Button lg</puik-button>
      <puik-button variant="secondary">Secondary Button md</puik-button>
      <puik-button variant="secondary" size="sm">Secondary Button sm</puik-button>
    </div>
  `,
})

export const Tertiary: Story = () => ({
  components: {
    PuikButton,
  },
  template: `
    <div class="space-x-4">
      <puik-button variant="tertiary" size="lg">Tertiary Button lg</puik-button>
      <puik-button variant="tertiary">Tertiary Button md</puik-button>
      <puik-button variant="tertiary" size="sm">Tertiary Button sm</puik-button>
    </div>
  `,
})

export const Text: Story = () => ({
  components: {
    PuikButton,
  },
  template: `
    <div class="space-x-4">
      <puik-button variant="text" size="lg">Text Button lg</puik-button>
      <puik-button variant="text">Text Button md</puik-button>
      <puik-button variant="text" size="sm">Text Button sm</puik-button>
    </div>
  `,
})

export const Disabled: Story = () => ({
  components: {
    PuikButton,
  },
  template: `
    <div class="space-x-4">
      <puik-button disabled>Primary Button</puik-button>
      <puik-button variant="secondary" disabled>Secondary Button</puik-button>
      <puik-button variant="tertiary" disabled>Tertiary Button</puik-button>
      <puik-button variant="text" disabled>Text Button</puik-button>
    </div>
  `,
})

export const Fluid: Story = () => ({
  components: {
    PuikButton,
  },
  template: `
    <puik-button fluid>Primary Button lg</puik-button>
  `,
})

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

export const Variants: Story = (args: Args) => ({
  components: {
    PuikButton,
  },
  setup() {
    return { args }
  },
  template: `
    <div class="space-x-4">
      <puik-button>Primary Button</puik-button>
      <puik-button variant="secondary">Secondary Button</puik-button>
      <puik-button variant="tertiary">Tertiary Button</puik-button>
      <puik-button variant="text">Text Button</puik-button>
    </div>
  `,
})
