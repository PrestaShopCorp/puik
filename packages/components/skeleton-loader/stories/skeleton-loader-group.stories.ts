import PuikSkeletonLoader from '../src/skeleton-loader.vue'
import PuikSkeletonLoaderGroup from '../src/skeleton-loader-group.vue'
import PuikCard from '../../card/src/card.vue'
import { skeletonLoaderVariants } from '../src/skeleton-loader'
import type { Meta, Story, Args } from '@storybook/vue3'

const skeletonLoaderVariantsSummary = skeletonLoaderVariants.join('|')

export default {
  title: 'Components/SkeletonLoader/SkeletonLoaderGroup',
  component: PuikSkeletonLoaderGroup,
  argTypes: {
    tag: {
      control: 'text',
      description:
        'Set the balise used as root element in the skeleton loader group',
      table: {
        defaultValue: {
          summary: 'div',
        },
      },
    },
    default: {
      control: 'none',
      description:
        'Set the skeleton loader group content, can be anything, but skeleton loader must be wrapper in it (for accessibility purpose)',
    },
  },
  args: {
    tag: 'div',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikSkeletonLoader,
    PuikSkeletonLoaderGroup,
    PuikCard,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-skeleton-loader-group v-bind="args">
      <puik-card class="w-full max-w-max">
        <puik-skeleton-loader variant="image"></puik-skeleton-loader>
        <puik-skeleton-loader variant="h3"></puik-skeleton-loader>
        <puik-skeleton-loader variant="jumbotron"></puik-skeleton-loader>
      </puik-card>
    </puik-skeleton-loader-group>
  `,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-skeleton-loader-group>
  <puik-card class="w-full max-w-max">
    <!--
      $variants: ${skeletonLoaderVariantsSummary}
    ->
    <puik-skeleton-loader variant="image"></puik-skeleton-loader>
    <puik-skeleton-loader variant="h3"></puik-skeleton-loader>
    <puik-skeleton-loader variant="jumbotron"></puik-skeleton-loader>
  </puik-card>
</puik-skeleton-loader-group>

<!--HTML/CSS Snippet-->
<div class="puik-skeleton-loader-group" aria-label="Loading" aria-live="polite" role="status">
  <div class="puik-card w-full max-w-max">
    <div class="puik-skeleton-loader material-icons-round puik-skeleton-loader--image"></div>
    <div class="puik-skeleton-loader material-icons-round puik-skeleton-loader--h3"></div>
    <div class="puik-skeleton-loader material-icons-round puik-skeleton-loader--jumbotron"></div>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}
