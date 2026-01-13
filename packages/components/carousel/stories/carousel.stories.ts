import { PuikCarousel } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/Carousel',
  component: PuikCarousel
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikCarousel
  },
  setup() {
    return { args };
  },
  template: '<puik-carousel></puik-carousel>'
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
