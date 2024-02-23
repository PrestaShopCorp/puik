import { PuikSnackbarProvider } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/SnackbarProvider',
  component: PuikSnackbarProvider
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSnackbarProvider
  },
  setup() {
    return { args };
  },
  template: '<puik-snackbar-provider></puik-snackbar-provider>'
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
