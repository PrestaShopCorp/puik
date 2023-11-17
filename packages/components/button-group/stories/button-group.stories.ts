import { ref } from 'vue';
import { PuikButton, PuikButtonGroup } from '@prestashopcorp/puik-components';

import type { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/ButtonGroup',
  component: PuikButtonGroup,
  argTypes: {
    modelValue: {
      description: 'Selected button v-model',
      control: 'none',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string | number | object | []'
        }
      }
    },
    default: {
      control: 'none',
      description: 'Use puik buttons in the puik button group'
    }
  },
  args: {
    modelValue: 'btn1'
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikButtonGroup,
    PuikButton
  },
  setup() {
    const selectedValue = ref('btn1');

    return {
      selectedValue,
      args
    };
  },
  template: `
    <puik-button-group v-model="selectedValue">
      <puik-button :variant="(selectedValue === 'btn1') ? 'primary' : 'secondary'" value="btn1">Button 1</puik-button>
      <puik-button :variant="(selectedValue === 'btn2') ? 'primary' : 'secondary'" value="btn2">Button 2</puik-button>
      <puik-button :variant="(selectedValue === 'btn3') ? 'primary' : 'secondary'" value="btn3">Button 3</puik-button>
    </puik-button-group>

    `
});

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-button-group v-model="selectedValue">
    <puik-button :variant="(selectedValue === 'btn1') ? 'primary' : 'secondary'" value="btn1">Button 1</puik-button>
    <puik-button :variant="(selectedValue === 'btn2') ? 'primary' : 'secondary'" value="btn2">Button 2</puik-button>
    <puik-button :variant="(selectedValue === 'btn3') ? 'primary' : 'secondary'" value="btn3">Button 3</puik-button>
  </puik-button-group>

  <!--HTML/CSS Snippet-->
  <div class="puik-button-group">
    <button class="puik-button puik-button--primary puik-button--md">Button 1</button>
    <button class="puik-button puik-button--secondary puik-button--md">Button 2</button>
    <button class="puik-button puik-button--secondary puik-button--md">Button 3</button>
  </div>
        `,
        language: 'html'
      }
    }
  }
};
