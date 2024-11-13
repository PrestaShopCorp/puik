import { PuikGroupOptions } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/GroupOptions',
  component: PuikGroupOptions
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikGroupOptions
  },
  setup() {
    return { args };
  },
  template: '<puik-group-options></puik-group-options>'
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
