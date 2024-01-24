---
to: packages/components/<%= h.changeCase.param(name) %>/stories/<%= h.changeCase.param(name) %>.stories.ts
---
import { Puik<%= h.changeCase.pascal(name) %> } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: Puik<%= h.changeCase.pascal(name) %>
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    Puik<%= h.changeCase.pascal(name) %>
  },
  setup() {
    return { args };
  },
  template: '<puik-<%= h.changeCase.pascal(name) %>></puik-<%= h.changeCase.pascal(name) %>>'
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
