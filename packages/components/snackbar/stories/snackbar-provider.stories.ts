import { ref } from 'vue';
import { PuikSnackbarPositionsX, PuikSnackbarPositionsY, PuikSnackbarSwipeDirections, PuikSnackbarProvider, PuikSnackbar, PuikButton } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

const snackbarSwipeDirectionsVariants = Object.values(PuikSnackbarSwipeDirections);
const snackbarSwipeDirectionsVariantsSummary = snackbarSwipeDirectionsVariants.join('|');

const snackbarPositionsX = Object.values(PuikSnackbarPositionsX);
const snackbarPositionsXSummary = snackbarPositionsX.join('|');

const snackbarPositionsY = Object.values(PuikSnackbarPositionsY);
const snackbarPositionsYSummary = snackbarPositionsY.join('|');

export default {
  title: 'Components/Snackbar/SnackbarProvider',
  component: PuikSnackbarProvider,
  argTypes: {
    label: {
      control: 'text',
      description: 'A label located on each toast. Used to help screen reader users associate the interruption with a toast.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'Notification'
        }
      }
    },
    duration: {
      description: 'Time in milliseconds that snackbars should remain visible for.',
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
    swipeDirection: {
      control: 'select',
      description: 'Set the swipe direction on mobile (to close the snackbar dialog)',
      options: snackbarSwipeDirectionsVariants,
      table: {
        type: {
          summary: snackbarSwipeDirectionsVariantsSummary
        },
        defaultValue: {
          summary: 'right'
        }
      }
    },
    swipeThreshold: {
      description: 'Distance in pixels that the swipe must pass before a close is triggered.',
      control: 'number',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 50
        }
      }
    },
    positionX: {
      control: 'select',
      description: 'Set horizontal axis position of the snackbars viewport',
      options: snackbarPositionsX,
      table: {
        type: {
          summary: snackbarPositionsXSummary
        },
        defaultValue: {
          summary: 'center'
        }
      }
    },
    positionY: {
      control: 'select',
      description: 'Set vertical axis position of the snackbars viewport',
      options: snackbarPositionsY,
      table: {
        type: {
          summary: snackbarPositionsYSummary
        },
        defaultValue: {
          summary: 'down'
        }
      }
    }
  },
  args: {
    label: 'Notification',
    duration: 5000,
    swipeDirection: 'right',
    swipeThreshold: 50,
    positionX: 'center',
    positionY: 'down'
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSnackbarProvider,
    PuikSnackbar,
    PuikButton
  },
  setup() {
    const snackbarArgs = ref({
      open: false,
      title: 'Snackbar Title',
      description: 'Snackbar Description',
      variant: 'default',
      duration: 5000,
      swipeDirection: 'right',
      hasCloseButton: true
    });
    return { snackbarArgs, args };
  },
  template: `
<puik-snackbar-provider
  v-bind="args"
>
  <puik-button
    @click="snackbarArgs.open = true"
  >
    Display snackbar
  </puik-button>

  <puik-snackbar 
    v-bind="snackbarArgs"
    @update:open="snackbarArgs.open = false">
    <template #action>
      <puik-button
        variant="text-reverse"
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
  v-bind="args"
>
  <puik-button
    @click="snackbarArgs.open = true"
  >
    Display snackbar
  </puik-button>

  <puik-snackbar 
    v-bind="snackbarArgs"
    @update:open="snackbarArgs.open = false">
    <template #action>
      <puik-button
        variant="text-reverse"
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
