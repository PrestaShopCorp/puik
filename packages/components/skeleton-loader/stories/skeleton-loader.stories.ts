import { PuikSkeletonLoader, PuikSkeletonLoaderGroup, PuikSkeletonLoaderVariants } from "@prestashopcorp/puik-components"
import type { Meta, StoryFn, StoryObj, Args } from '@storybook/vue3'

const skeletonLoaderVariants = Object.values(PuikSkeletonLoaderVariants)
const skeletonLoaderVariantsSummary = skeletonLoaderVariants.join('|')

export default {
  title: 'Components/SkeletonLoader/SkeletonLoader',
  component: PuikSkeletonLoader,
  argTypes: {
    variant: {
      control: 'select',
      description: 'Set the skeleton loader variant',
      options: skeletonLoaderVariants,
      table: {
        type: {
          summary: skeletonLoaderVariantsSummary,
        },
        defaultValue: {
          summary: 'text-medium',
        },
      },
    },
    width: {
      control: 'text',
      description: 'Force the skeleton loader width',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    height: {
      control: 'text',
      description: 'Force the skeleton loader height',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    tag: {
      control: 'text',
      description: 'Set the balise used as root element in the skeleton loader',
      table: {
        defaultValue: {
          summary: 'div',
        },
      },
    },
  },
  args: {
    tag: 'div',
    variant: 'text-medium',
    width: '',
    height: '',
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSkeletonLoader,
    PuikSkeletonLoaderGroup,
  },
  setup() {
    return { args }
  },
  template: `<puik-skeleton-loader-group>
    <puik-skeleton-loader v-bind="args"></puik-skeleton-loader>
  </puik-skeleton-loader-group>`,
})

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-skeleton-loader-group>
    <!--
      $variants: ${skeletonLoaderVariantsSummary}
    ->
    <puik-skeleton-loader variant="$variants"></puik-skeleton-loader>
  <puik-skeleton-loader-group>

  <!--HTML/CSS Snippet-->
  <div class="puik-skeleton-loader-group" role="status" aria-label="Loading" aria-live="polite">
    <!--
      $variants:  ${skeletonLoaderVariantsSummary}
    ->
    <div class="puik-skeleton material-icons-round puik-skeleton--$variants"></div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

function generateStory(variant: string): StoryObj {
  return {
    render: Template,
    args: {
      variant,
    },
    parameters: {
      docs: {
        source: {
          code: `
<!--VueJS Snippet-->
<puik-skeleton-loader-group>
  <puik-skeleton-loader variant="${variant}"></puik-skeleton-loader>
<puik-skeleton-loader-group>

<!--HTML/CSS Snippet-->
<div class="puik-skeleton-loader-group" role="status" aria-label="Loading" aria-live="polite">
  <div class="puik-skeleton material-icons-round puik-skeleton--${variant}"></div>
</div>
        `,
          language: 'html',
        },
      },
    },
  }
}

export const h1: StoryObj = generateStory('h1')
export const h2: StoryObj = generateStory('h2')
export const h3: StoryObj = generateStory('h3')
export const h4: StoryObj = generateStory('h4')
export const h5: StoryObj = generateStory('h5')
export const h6: StoryObj = generateStory('h6')
export const Jumbotron: StoryObj = generateStory('jumbotron')
export const MegaJumbotron: StoryObj = generateStory('mega-jumbotron')
export const TextSmall: StoryObj = generateStory('text-small')
export const TextMedium: StoryObj = generateStory('text-medium')
export const TextLarge: StoryObj = generateStory('text-large')
export const Badge: StoryObj = generateStory('badge')
export const Tag: StoryObj = generateStory('tag')
export const Image: StoryObj = generateStory('image')
export const Graph: StoryObj = generateStory('graph')
export const Video: StoryObj = generateStory('video')
