import { PuikSelectInput } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/SelectInput',
  component: PuikSelectInput
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSelectInput
  },
  setup() {
    return { args };
  },
  template: '<puik-select-input></puik-select-input>'
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
