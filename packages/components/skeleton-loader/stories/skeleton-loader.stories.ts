import { skeletonLoaderVariants } from '../src/skeleton-loader'
import PuikSkeletonLoader from './../src/skeleton-loader.vue'
import PuikSkeletonLoaderGroup from './../src/skeleton-loader-group.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

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
          summary: skeletonLoaderVariants.join('|'),
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
          $variants: h1|h2|h3||h4|h5|h6||jumbotron|mega-jumbotron|text-small|text-medium|text-large|badge|tag|image|graph|video-
        ->
        <puik-skeleton-loader variant="$variants"></puik-skeleton-loader>
      <puik-skeleton-loader-group>

      <!--HTML/CSS Snippet-->
      <div class="puik-skeleton-loader-group" role="status" aria-label="Loading" aria-live="polite">
        <!--
          $variants: h1|h2|h3||h4|h5|h6||jumbotron|mega-jumbotron|text-small|text-medium|text-large|badge|tag|image|graph|video-
        ->
        <div class="puik-skeleton material-icons-round puik-skeleton--$variants"></div>
      </div>
      `,
      language: 'html',
    },
  },
}
