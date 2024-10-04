import { PuikRatingCard } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/RatingCard',
  component: PuikRatingCard
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikRatingCard
  },
  setup() {
    return { args };
  },
  template: '<puik-rating-card></puik-rating-card>'
});

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
        <!--VueJS Snippet-->

        <!--HTML/CSS Snippet-->
        `,
        language: 'html'
      }
    }
  }
};
