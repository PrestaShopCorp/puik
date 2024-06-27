import { PuikSortableList } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/SortableList',
  component: PuikSortableList
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSortableList
  },
  setup() {
    return { args };
  },
  template: '<puik-sortable-list></puik-sortable-list>'
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
