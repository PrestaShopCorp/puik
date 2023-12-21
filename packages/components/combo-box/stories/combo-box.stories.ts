import { PuikComboBox } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/ComboBox',
  component: PuikComboBox
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikComboBox
  },
  setup() {
    return { args };
  },
  template: '<puik-ComboBox></puik-ComboBox>'
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
