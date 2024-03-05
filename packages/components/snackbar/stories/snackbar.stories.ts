import { PuikSnackbarVariants, PuikSnackbarSwipeAnimations, PuikSnackbarProvider, PuikSnackbar, PuikButton } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';
import { ref } from 'vue';

const snackbarVariants = Object.values(PuikSnackbarVariants);
const snackbarVariantsSummary = snackbarVariants.join('|');

const snackbarSwipeAnimations = Object.values(PuikSnackbarSwipeAnimations);
const snackbarSwipeAnimationsSummary = snackbarSwipeAnimations.join('|');

export default {
  title: 'Components/Snackbar',
  components: PuikSnackbar,
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the snackbar. Can be bind as v-model:open.',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    title: {
      control: 'text',
      description: 'Set the snackbar title'
    },
    description: {
      control: 'text',
      description: 'Set the snackbar description'
    },
    duration: {
      description: 'Time in milliseconds that snackbar should remain visible for. Overrides value given to PuikSnackbarProvider component.',
      control: 'number',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 5000
        }
      }
    },
    variant: {
      control: 'select',
      description: 'Set the color variant of the snackbar',
      options: snackbarVariants,
      table: {
        type: {
          summary: snackbarVariantsSummary,
          detail: `
import { PuikSnackbarVariants } from '@prestashopcorp/puik-components';

enum PuikSnackbarVariants {
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
}
          `
        },
        defaultValue: {
          summary: 'default'
        }
      }
    },
    swipeAnimation: {
      control: 'select',
      description: 'Set the swipe animation (to close the snackbar dialog)',
      options: snackbarSwipeAnimations,
      table: {
        type: {
          summary: snackbarSwipeAnimationsSummary,
          detail: `
import { PuikSnackbarSwipeAnimations } from '@prestashopcorp/puik-components';

enum PuikSnackbarSwipeAnimations {
  Right = 'slide-right',
  Left = 'slide-left',
  Up = 'slide-up',
  Down = 'slide-down',
}
          `
        },
        defaultValue: {
          summary: 'slide-right'
        }
      }
    },
    hasCloseButton: {
      control: 'boolean',
      description: 'Add a close button',
      table: {
        defaultValue: {
          summary: false
        }
      }
    }
  },
  args: {
    open: false,
    title: 'Snackbar Title',
    description: 'Snackbar Description',
    variant: 'default',
    duration: 5000,
    swipeAnimation: 'slide-right',
    hasCloseButton: true
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSnackbarProvider,
    PuikSnackbar,
    PuikButton
  },
  setup() {
    const snackbarProviderArgs = ref({
      label: 'Notification',
      duration: 3000,
      swipeDirection: 'right',
      swipeThreshold: 50,
      positionX: 'center',
      positionY: 'down'

    });
    return { snackbarProviderArgs, args };
  },
  template: `
<puik-snackbar-provider
  v-bind="snackbarProviderArgs"
>
  <puik-button
    @click="args.open = true"
  >
    Display snackbar
  </puik-button>

  <puik-snackbar v-bind="args" @update:open="args.open = false">
    <template #action>
      <puik-button
        @click="console.log('action btn triggered')"
      >
        action
      </puik-button>
    </template>
  </puik-snackbar>
</puik-snackbar-provider>
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
  <puik-snackbar-provider
    v-bind="snackbarProviderArgs"
  >
    <puik-button
      @click="args.open = true"
    >
      Display snackbar
    </puik-button>

    <puik-snackbar v-bind="args" @update:open="args.open = false">
      <template #action>
        <puik-button
          @click="console.log('action btn triggered')"
        >
          action
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
