import { PuikSnackbarProvider, PuikSnackbar, PuikButton, PuikIcon } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/Snackbar',
  component: PuikSnackbar,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'danger', 'success']
      },
      defaultValue: 'default'
    },
    swipeDirection: {
      control: {
        type: 'select',
        options: ['right', 'left', 'up', 'down']
      },
      defaultValue: 'right'
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    hasCloseButton: {
      control: 'boolean'
    }
  },
  args: {
    open: false,
    title: 'Snackbar Title',
    description: 'Snackbar Description',
    variant: 'default',
    swipeDirection: 'right',
    hasCloseButton: true
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSnackbarProvider, PuikSnackbar, PuikButton, PuikIcon
  },
  setup() {
    return { args };
  },
  template: `
  <div style="height: 400px;">
    <puik-snackbar-provider>
      <puik-button
        variant="success"
        @click="args.open = true"
      >
        Open Snackbar
      </puik-button>

      <puik-snackbar v-bind="args">
        <template #action>
          <puik-button
            variant="text-reverse"
            @click="args.open = false"
          >
            Close
          </puik-button>
        </template>
      </puik-snackbar>
    </puik-snackbar-provider>
  
  </div>
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
  <puik-snackbar-provider>
  <puik-button
    variant="success"
    @click="args.open = true"
  >
    Open Snackbar
  </puik-button>

  <puik-snackbar v-bind="args">
    <template #action>
      <puik-button
        variant="text-reverse"
        @click="args.open = false"
      >
        Close
      </puik-button>
    </template>
  </puik-snackbar>
</puik-snackbar-provider>

  <!--HTML/CSS Snippet-->

        `,
        language: 'html'
      }
    }
  }
};
