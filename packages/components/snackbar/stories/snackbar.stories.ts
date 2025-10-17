import {
  PuikLabel,
  PuikInput,
  PuikButton,
  PuikSnackbarVariants,
  PuikSnackbarSwipeAnimations,
  PuikSnackbarProvider,
  PuikSnackbar,
  SnackbarsState,
  useSnackbar
} from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';
import { ref, isVNode, h } from 'vue';

const snackbarVariants = Object.values(PuikSnackbarVariants);
const snackbarVariantsSummary = snackbarVariants.join('|');

const snackbarSwipeAnimations = Object.values(PuikSnackbarSwipeAnimations);
const snackbarSwipeAnimationsSummary = snackbarSwipeAnimations.join('|');

export default {
  title: 'Components/Snackbar',
  components: PuikSnackbar,
  argTypes: {
    id: {
      control: 'text',
      description: 'Sets the snackbar id. If this prop is not configured, an id will be automatically generated using this pattern: puik-snackbar-{randomNumber}',
      table: {
        defaultValue: {
          summary: 'puik-snackbar-{randomNumber}'
        },
        type: {
          summary: 'string'
        }
      }
    },
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
      description: 'Sets the snackbar title'
    },
    description: {
      control: 'text',
      description: 'Sets the snackbar description'
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
      description: 'Sets the color variant of the snackbar',
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
      description: 'Sets the swipe animation (to close the snackbar dialog)',
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
    },
    action: {
      control: 'none',
      description: 'Sets the action button of the snackbar (usefull in case of programmatic snackbar - see useSnackbar function)',
      table: {
        type: {
          summary: 'Component'
        }
      }
    },
    onOpenChange: {
      control: 'none',
      description: 'Emits when the open state of the snackbar changes. The open state is passed as an argument. (usefull in case of programmatic snackbar - see useSnackbar function)',
      table: {
        type: {
          summary: 'function',
          detail: '(openState: boolean) => void'
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

const UseSnackbarTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikSnackbarProvider,
    PuikSnackbar,
    PuikButton,
    PuikLabel,
    PuikInput
  },
  setup() {
    const snackbarProviderArgs = ref({
      label: 'Notification',
      duration: 3000,
      swipeDirection: 'right',
      swipeThreshold: 50,
      positionX: 'right',
      positionY: 'up'

    });
    const snackbarsLimit = ref(0);
    const snackbarRemoveDelay = ref(5000);
    const state = ref<SnackbarsState>([]);
    const addSuccessSnackbar = () => {
      const { snackbarsState, removeSnackbar } = useSnackbar(
        {
          title: 'Success snackbar',
          description: 'create success snackbar programmatically',
          hasCloseButton: true,
          variant: 'success',
          onOpenChange: (open) => {
            if (!open) {
              state.value = removeSnackbar(state.value);
              console.log('state after remove', state.value);
            }
          },
          action: h(PuikButton, { onClick: () => console.log('success action') }, () => 'success action')
        },
        state.value,
        snackbarsLimit.value,
        snackbarRemoveDelay.value
      );
      state.value = snackbarsState;
      console.log('state before remove', state.value);
    };
    const addDefaultSnackbar = () => {
      const { snackbarsState, removeSnackbar } = useSnackbar(
        {
          title: 'Default snackbar',
          description: 'create default snackbar programmatically',
          hasCloseButton: true,
          variant: 'default',
          onOpenChange: (open) => {
            if (!open) {
              state.value = removeSnackbar(state.value);
              console.log('state after remove', state.value);
            }
          },
          action: h(PuikButton, { onClick: () => console.log('default action') }, () => 'default action')
        },
        state.value,
        snackbarsLimit.value,
        snackbarRemoveDelay.value
      );
      state.value = snackbarsState;
      console.log('state before remove', state.value);
    };

    return { snackbarProviderArgs, args, state, addSuccessSnackbar, addDefaultSnackbar, isVNode, snackbarsLimit, snackbarRemoveDelay };
  },
  template: `
  <div class="flex flex-col gap-y-4 max-w-fit">
    <div class="flex gap-x-4">
      <puik-button
      variant="success"
        @click="addSuccessSnackbar"
      >
        Display success snackbar programatically
      </puik-button>

      <puik-button
        @click="addDefaultSnackbar"
      >
        Display default snackbar programatically
      </puik-button>
    </div>
    <puik-label for="snackbar-duration">
      duration
    </puik-label>
    <puik-input
      id="snackbar-duration"
      v-model="snackbarRemoveDelay"
      type="number"
    />
    <puik-label for="snackbars-limit">
      snackbars limit
    </puik-label>
    <puik-input
      id="snackbars-limit"
      v-model="snackbarsLimit"
      type="number"
    />

    <puik-snackbar-provider
      v-bind="snackbarProviderArgs"
    >
      <puik-snackbar
        v-for="snackbar in state"
        :key="snackbar.id"
        v-bind="snackbar"
      >
        <template
          v-if="isVNode(snackbar.action)"
          #action
        >
          <component :is="snackbar.action" />
        </template>
      </puik-snackbar>
    </puik-snackbar-provider>
  </div>
  `
});

export const UseSnackbarProgrammatically = {
  render: UseSnackbarTemplate,
  args: {},

  parameters: {
    docs: {
      description: {
        story: `
useSnackbar function :
Manages the state of snackbars, including adding, removing, and dismissing snackbars.

Params:

props (type UseSnackbarProps = Omit<SnackbarProps, 'id' | 'duration'>) - The properties of the snackbar to be added (id is automatically generated and duration is setting with removeDelay param).

SnackbarsState (type SnackbarsState = SnackbarProps[]) -  The current state of the snackbars Array.

snackbarsLimit (type number) - The number of snackbars allowed in the state (default is 0 same as no limit).

removeDelay (type number) - The delay in milliseconds before a snackbar is automatically dismissed (sets duration of snackbar - default is 5000).

return:

{ snackbarsState, id, dissmissSnackbar, removeSnackbar } -  An object containing the updated snackbars state, the ID of the newly added snackbar,
a function to dismiss a snackbar, and a function to remove closed snackbars.

details of returned functions:

- dissmissSnackbar(id: string): Dismisses the snackbar with the given id.

- removeSnackbar(snackbarsState: SnackbarsState): Removes closed snackbars from the state.

nb: see show code snippet below for more details of implementation
        `
      },
      source: {
        code: `
  <!--VueJS Snippet-->

  // import {
  //  PuikSnackbarProvider,
  //  PuikSnackbar,
  //  SnackbarsState,
  //  useSnackbar
  // } from '@prestashopcorp/puik-components';
  // import { ref, isVNode, h } from 'vue';
  //
  // const snackbarsLimit = ref(0);
  // const snackbarRemoveDelay = ref(5000);
  // const state = ref<SnackbarsState>([]);
  //
  // const addSuccessSnackbar = () => {
  //   const { snackbarsState, removeSnackbar } = useSnackbar(
  //     {
  //       title: 'Success snackbar',
  //       description: 'create success snackbar programmatically',
  //       hasCloseButton: true,
  //       variant: 'success',
  //       onOpenChange: (open) => {
  //         if (!open) {
  //           state.value = removeSnackbar(state.value);
  //           console.log('state after remove', state.value);
  //         }
  //       },
  //       action: h(PuikButton, { onClick: () => console.log('success action') }, () => 'success action')
  //     },
  //     state.value,
  //     snackbarsLimit.value,
  //     snackbarRemoveDelay.value
  //   );
  //   state.value = snackbarsState;
  //   console.log('state before remove', state.value);
  // };
  //
  // const addDefaultSnackbar = () => {
  //   const { snackbarsState, removeSnackbar } = useSnackbar(
  //     {
  //       title: 'Default snackbar',
  //       description: 'create default snackbar programmatically',
  //       hasCloseButton: true,
  //       variant: 'default',
  //       onOpenChange: (open) => {
  //         if (!open) {
  //           state.value = removeSnackbar(state.value);
  //           console.log('state after remove', state.value);
  //         }
  //       },
  //       action: h(PuikButton, { onClick: () => console.log('default action') }, () => 'default action')
  //     },
  //     state.value,
  //     snackbarsLimit.value,
  //     snackbarRemoveDelay.value
  //   );
  //   state.value = snackbarsState;
  //   console.log('state before remove', state.value);
  // };

  <puik-button
  variant="success"
    @click="addSuccessSnackbar"
  >
    Display success snackbar programatically
  </puik-button>
  <puik-button
    @click="addDefaultSnackbar"
  >
    Display default snackbar programatically
  </puik-button>

  <puik-label for="snackbar-duration">
    duration
  </puik-label>
  <puik-input
    id="snackbar-duration"
    v-model="snackbarRemoveDelay"
    type="number"
  />
  <puik-label for="snackbars-limit">
    snackbars limit
  </puik-label>
  <puik-input
    id="snackbars-limit"
    v-model="snackbarsLimit"
    type="number"
  />
  <puik-label for="snackbars-limit">
    snackbars limit
  </puik-label>
  <puik-input
    id="snackbars-limit"
    v-model="snackbarsLimit"
    type="number"
  />

  <puik-snackbar-provider
    v-bind="snackbarProviderArgs"
  >
    <puik-snackbar
      v-for="snackbar in state"
      :key="snackbar.id"
      v-bind="snackbar"
    >
      <template
        v-if="isVNode(snackbar.action)"
        #action
      >
        <component :is="snackbar.action" />
      </template>
    </puik-snackbar>
    </puik-snackbar>
  </puik-snackbar-provider>
        `,
        language: 'html'
      }
    }
  }
};
