import { PuikSpinnerLoader, PuikSpinnerLoaderColors, PuikSpinnerLoaderPositions, PuikSpinnerLoaderSizes } from "@prestashopcorp/puik-components"
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3'

const puikSpinnerLoaderSizes = Object.values(PuikSpinnerLoaderSizes)
const sizesSummary = puikSpinnerLoaderSizes.join('|')
const puikSpinnerLoaderColors = Object.values(PuikSpinnerLoaderColors)
const colorsSummary = puikSpinnerLoaderColors.join('|')
const puikSpinnerLoaderPositions = Object.values(PuikSpinnerLoaderPositions)
const positionSummary = puikSpinnerLoaderPositions.join('|')

export default {
  title: 'Components/SpinnerLoader',
  component: PuikSpinnerLoader,
  argTypes: {
    size: {
      control: 'select',
      description: 'Set the spinner size',
      options: puikSpinnerLoaderSizes,
      table: {
        type: {
          summary: sizesSummary,
        },
        defaultValue: {
          summary: 'md',
        },
      },
    },
    color: {
      control: 'select',
      description: 'Set the spinner color',
      options: puikSpinnerLoaderColors,
      table: {
        type: {
          summary: colorsSummary,
        },
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    label: {
      control: 'text',
      description: 'Set label below the spinner',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    position: {
      control: 'select',
      description: 'Set label beside right the spinner',
      options: puikSpinnerLoaderPositions,
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
    label: '',
    color: 'primary',
  },
} as Meta

const Template: StoryFn = (args: Args, storyContext) => ({
  components: {
    PuikSpinnerLoader,
  },
  setup() {
    const color = args.color ?? storyContext?.args?.color ?? ''
    const isDark = color !== 'primary' ? 'bg-primary-800' : ''

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
      <puik-spinner-loader v-bind="args" />
    </div>
  `,
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
        $sizes: ${sizesSummary}
        $colors: ${colorsSummary}
        $positions: ${positionSummary}

        -->
        <puik-spinner-loader
          size="$sizes"
          color="$colors"
          position="$positions"
          :label="label"
        />

        <!--HTML/CSS Snippet-->
        <!--
          State classes
          size: "puik-spinner-loader--${sizesSummary}"
          colors: "puik-spinner-loader--${colorsSummary}"
          positions: "puik-spinner-loader--${positionSummary}"
         -->
        <div class="puik-spinner-loader" aria-live="polite" role="status">
          <div class="puik-spinner-loader__spinner" aria-hidden="true"></div>
          <!-- Label -->
          <span class="puik-spinner-loader__label">label</span>
        </div>
        `,
        language: 'html',
      },
    },
  },
}

const SpinnerTemplate = (args: Args, storyContext) => ({
  components: { PuikSpinnerLoader },
  setup() {
    const color = args.color ?? storyContext?.args?.color ?? ''
    const isDark = color !== 'primary' ? 'bg-primary-800' : ''

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
      <puik-spinner-loader v-bind="args" size="lg" />

      <puik-spinner-loader v-bind="args" />

      <puik-spinner-loader v-bind="args" size="sm" />
    </div>
  `,
})

export const Primary: StoryObj = {
  render: SpinnerTemplate,

  args: {
    color: 'primary',
  },

  parameters: {
    docs: {
      source: {
        code: `
        <!--VueJS Snippet-->
        <puik-spinner-loader />

        <!--HTML/CSS Snippet-->
        <div class="puik-spinner-loader" aria-live="polite" role="status">
          <div class="puik-spinner-loader__spinner" aria-hidden="true"></div>
        </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Reverse: StoryObj = {
  render: SpinnerTemplate,

  args: {
    color: 'reverse',
  },

  parameters: {
    docs: {
      source: {
        code: `
        <!--VueJS Snippet-->
        <puik-spinner-loader color="reverse" />

        <!--HTML/CSS Snippet-->
        <div class="puik-spinner-loader puik-spinner-loader--reverse" aria-live="polite" role="status">
          <div class="puik-spinner-loader__spinner" aria-hidden="true"></div>
        </div>
        `,
        language: 'html',
      },
    },
  },
}

export const LabelBottom: StoryObj = {
  render: SpinnerTemplate,

  args: {
    label: 'In progress',
  },

  parameters: {
    docs: {
      source: {
        code: `
        <!--VueJS Snippet-->
        <puik-spinner-loader label="In progress" />

        <!--HTML/CSS Snippet-->
        <div class="puik-spinner-loader" aria-live="polite" role="status">
          <div class="puik-spinner-loader__spinner" aria-hidden="true"></div>
          <span class="puik-spinner-loader__label">In progress</span>
        </div>
        `,
        language: 'html',
      },
    },
  },
}

export const LabelRight: StoryObj = {
  render: SpinnerTemplate,

  args: {
    label: 'In progress ',
    position: 'right',
  },

  parameters: {
    docs: {
      source: {
        code: `
        <!--VueJS Snippet-->
        <puik-spinner-loader label="In progress" position="right"/>

        <!--HTML/CSS Snippet-->
        <div class="puik-spinner-loader puik-spinner-loader--right" aria-live="polite" role="status">
          <div class="puik-spinner-loader__spinner" aria-hidden="true"></div>
          <span class="puik-spinner-loader__label">In progress</span>
        </div>
        `,
        language: 'html',
      },
    },
  },
}
