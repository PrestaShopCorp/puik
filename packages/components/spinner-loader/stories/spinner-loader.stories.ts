import PuikSpinnerLoader from './../src/spinner-loader.vue'
import {
  spinnerSizes,
  spinnerVariants,
  spinnerPosition,
} from './../src/spinner-loader'
import type { Meta, Story, Args } from '@storybook/vue3'

const sizesSummary = spinnerSizes.join('|')
const variantsSummary = spinnerVariants.join('|')
const positionSummary = spinnerPosition.join('|')

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
    label: {
      control: 'text',
      description: 'Set label below the spinner',
    },
    position: {
      control: 'select',
      description: 'Set label beside right the spinner',
      options: spinnerPosition,
      table: {
        type: {
          summary: positionSummary,
        },
        defaultValue: {
          summary: 'bottom',
        },
      },
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
      $positions: ${positionSummary}

      -->
      <puik-spinner-loader
        size="$sizes"
        variant="$variants"
        position="$positions"
        :label="My Label"
      />

      <!--HTML/CSS Snippet-->
      <!--
        State classes
        size: "puik-spinner-loader--${sizesSummary}"
        variants: "puik-spinner-loader--${variantsSummary}"
        positions: "puik-spinner-loader--${positionSummary}"
       -->
      <div class="puik-spinner-loader">
        <div class="puik-spinner-loader__spinner"></div>
        <!-- Label -->
        <span class="puik-spinner-loader__label">My Label</span>
      </div>
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

      <!--HTML/CSS Snippet-->
      <div class="puik-spinner-loader">
        <div class="puik-spinner-loader__spinner"></div>
      </div>
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

      <!--HTML/CSS Snippet-->
      <div class="puik-spinner-loader puik-spinner-loader--light">
        <div class="puik-spinner-loader__spinner"></div>
      </div>
      `,
      language: 'html',
    },
  },
}

export const Bottom: Story = SpinnerTemplate.bind({})
Bottom.args = {
  variant: 'dark',
  label: 'In progress ',
}

Bottom.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-spinner-loader label="In progress" />

      <!--HTML/CSS Snippet-->
      <div class="puik-spinner-loader">
        <div class="puik-spinner-loader__spinner"></div>
        <span class="puik-spinner-loader__label">In progress</span>
      </div>
      `,
      language: 'html',
    },
  },
}

export const Rigth: Story = SpinnerTemplate.bind({})
Rigth.args = {
  variant: 'dark',
  label: 'In progress ',
  position: 'right',
}

Rigth.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-spinner-loader label="In progress" position="right"/>

      <!--HTML/CSS Snippet-->
      <div class="puik-spinner-loader puik-spinner-loader--right">
        <div class="puik-spinner-loader__spinner"></div>
        <span class="puik-spinner-loader__label">In progress</span>
      </div>
      `,
      language: 'html',
    },
  },
}
