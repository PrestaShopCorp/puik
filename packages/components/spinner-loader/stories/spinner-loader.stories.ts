import PuikSpinnerLoader from './../src/spinner-loader.vue'
import { spinnerSizes, spinnerVariants } from './../src/spinner-loader'
import type { Meta, Story, Args } from '@storybook/vue3'

const sizesSummary = spinnerSizes.join('|')
const variantsSummary = spinnerVariants.join('|')

export default {
  title: 'Components/SpinnerLoader',
  component: PuikSpinnerLoader,
  argTypes: {
    size: {
      control: 'select',
      description: 'Set the spinner size',
      options: spinnerSizes,
      table: {
        type: {
          summary: sizesSummary,
        },
        defaultValue: {
          summary: 'md',
        },
      },
    },
    variant: {
      control: 'select',
      description: 'Set the spinner variant',
      options: spinnerVariants,
      table: {
        type: {
          summary: variantsSummary,
        },
        defaultValue: {
          summary: 'dark',
        },
      },
    },
    text: {
      control: 'text',
      description: 'Set label below the spinner',
    },
    textRight: {
      control: 'text',
      description: 'Set label beside right the spinner',
    },
  },
  args: {
    size: 'md',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikSpinnerLoader,
  },
  setup() {
    return { args }
  },
  template: `<puik-spinner-loader v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet -->
      <!--
      $sizes: ${sizesSummary}
      $variants: ${variantsSummary}
      -->
      <puik-spinner-loader
        size="$sizes"
        variant="$variants"
      />
      `,
      language: 'html',
    },
  },
}

const SpinnerTemplate = (args: Args, storyContext) => ({
  components: { PuikSpinnerLoader },
  setup() {
    const variant = args.variant ?? storyContext?.args?.variant ?? ''
    const isDark = variant !== 'dark' ? 'bg-primary-800' : ''

    return {
      args,
      isDark,
    }
  },
  template: `
    <div
      class="flex flex-row flex-wrap items-center gap-4"
      :class="[isDark]"
    >
      <puik-spinner-loader v-bind="args" :variant="args.variant" size="lg" />

      <puik-spinner-loader v-bind="args" :variant="args.variant" />

      <puik-spinner-loader v-bind="args" :variant="args.variant" size="sm" />
    </div>
  `,
})

export const Dark: Story = SpinnerTemplate.bind({})
Dark.args = {
  variant: 'dark',
}

Dark.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-spinner-loader />
      `,
      language: 'html',
    },
  },
}

export const Light: Story = SpinnerTemplate.bind({})
Light.args = {
  variant: 'light',
}

Light.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-spinner-loader variant="light" />
      `,
      language: 'html',
    },
  },
}

export const WithLabel: Story = SpinnerTemplate.bind({})
WithLabel.args = {
  variant: 'dark',
  text: 'In progress ',
}

WithLabel.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-spinner-loader text="In progress" />
      `,
      language: 'html',
    },
  },
}

export const WithLabelAlignRigth: Story = SpinnerTemplate.bind({})
WithLabelAlignRigth.args = {
  variant: 'dark',
  textRight: 'In progress ',
}

WithLabelAlignRigth.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-spinner-loader text-right="In progress" />
      `,
      language: 'html',
    },
  },
}
