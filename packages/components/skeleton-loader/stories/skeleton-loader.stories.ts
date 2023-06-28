import { skeletonLoaderVariants } from '../src/skeleton-loader'
import PuikSkeletonLoader from './../src/skeleton-loader.vue'
import PuikSkeletonLoaderGroup from './../src/skeleton-loader-group.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

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

const Template: Story = (args: Args) => ({
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

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
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
}

function generateStory(variant: string) {
  const story = Template.bind({})
  story.args = {
    variant,
  }
  story.parameters = {
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
  }

  return story
}

export const h1 = generateStory('h1')
export const h2 = generateStory('h2')
export const h3 = generateStory('h3')
export const h4 = generateStory('h4')
export const h5 = generateStory('h5')
export const h6 = generateStory('h6')
export const Jumbotron = generateStory('jumbotron')
export const MegaJumbotron = generateStory('mega-jumbotron')
export const TextSmall = generateStory('text-small')
export const TextMedium = generateStory('text-medium')
export const TextLarge = generateStory('text-large')
export const Badge = generateStory('badge')
export const Tag = generateStory('tag')
export const Image = generateStory('image')
export const Graph = generateStory('graph')
export const Video = generateStory('video')
