import { PuikIcon } from '@prestashopcorp/puik-components';
import type { Args, Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/Icon',
  component: PuikIcon,
  argTypes: {
    icon: {
      description: 'Set the icon name (from Material Symbols: https://fonts.google.com/icons)'
    },
    fontSize: {
      description: 'Sets the icon font size',
      control: {
        type: 'range',
        min: 1,
        max: 100,
        step: 1
      }
    },
    color: {
      description: 'Sets the icon color',
      control: {
        type: 'color'
      }
    },
    nodeType: {
      description: 'Sets the HTML node type',
      default: 'div',
      control: {
        type: 'radio',
        options: ['div', 'span']
      }
    },
    dataTest: {
      description: 'Sets the data-test attribute'
    },
    isDisabled: {
      description: 'If the icon is disable',
      control: {
        type: 'boolean'
      }
    },
    ariaLabel: {
      description: 'Sets the aria-label attribute for accessibility (if this prop is not present the default aria-label will be set to the icon name)',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    }
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikIcon
  },
  setup() {
    return { args };
  },
  template: '<puik-icon v-bind="args" />'
});

export const Default = {
  render: Template,

  args: {
    icon: 'check',
    color: 'green',
    fontSize: 24,
    nodeType: 'span',
    dataTest: '',
    isDisabled: false
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-icon icon="check" font-size="70px" color="green" node-type="span" />

  <!--HTML/CSS Snippet-->
  <span class="puik-icon" aria-label="check icon" role="img" style="font-size: 24px; color: green;">check</span>
        `,
        language: 'html'
      }
    }
  }
};
