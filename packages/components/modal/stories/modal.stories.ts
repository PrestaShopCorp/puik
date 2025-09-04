import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import { PuikButton, PuikModal, PuikModalVariants, PuikModalSizes } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';
import { ref } from 'vue';

const modalSizes = Object.values(PuikModalSizes);
const modalSizesSummary = modalSizes.join('|');
const modalVariants = Object.values(PuikModalVariants);
const modalVariantsSummary = modalVariants.join('|');

const content = `
  <section class="flex flex-col gap-4">
    <h3 class="puik-h3">El Famoso Lorem Ipsum</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
      aspernatur modi totam explicabo, veniam tempore praesentium
      laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
      reprehenderit repudiandae facere maiores non.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
      aspernatur modi totam explicabo, veniam tempore praesentium
      laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
      reprehenderit repudiandae facere maiores non.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
      aspernatur modi totam explicabo, veniam tempore praesentium
      laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
      reprehenderit repudiandae facere maiores non.
    </p>
  </section>
`;

export default {
  title: 'Components/Modal',
  component: PuikModal,
  argTypes: {
    title: {
      description: 'Sets the modal title',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    titleIcon: {
      description: 'Sets the icon name of the modal on the top left corner (from Material Symbols: https://fonts.google.com/icons)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: undefined
        }
      }
    },
    mainButtonText: {
      description: 'Sets the text of the main button',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: undefined
        }
      }
    },
    secondButtonText: {
      description: 'Sets the text of the secondary button',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: undefined
        }
      }
    },
    sideButtonText: {
      description: 'Sets the text of the side button (only available in the case of the dialog variant)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: undefined
        }
      }
    },
    isOpen: {
      description: 'Tells if the modal is open or not',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    disabledMainButton: {
      description: 'Disables the main button',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabledSecondButton: {
      description: 'Disables the secondary button',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabledSideButton: {
      description: 'Disables the side button (in the case of the dialog variant)',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    variant: {
      description:
        'Sets the style of the modal (use the PuikModalVariants enum)',
      control: 'select',
      options: modalVariants,
      table: {
        defaultValue: {
          summary: PuikModalVariants.Feedback
        },
        type: {
          summary: 'PuikModalVariants',
          detail: `
// Import
import { PuikModalVariants } from '@prestashopcorp/puik-components';

// Detail
export enum PuikModalVariants {
  Destructive = 'destructive',
  Feedback = 'feedback',
  Dialog = 'dialog',
}
          `
        }
      }
    },
    size: {
      description: 'Sets the size of the modal (use the PuikModalSizes enum)',
      control: 'select',
      options: modalSizes,
      table: {
        defaultValue: {
          summary: PuikModalSizes.Small
        },
        type: {
          summary: 'PuikModalSizes',
          detail: `
// Import
import { PuikModalSizes } from '@prestashopcorp/puik-components';

// Detail
export enum PuikModalSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
`
        }
      }
    },
    dataTest: {
      description:
        'Sets the data-test attribute for modal `title-${dataTest}` `mainButton-${dataTest}` `secondButton-${dataTest}` `sideButton-${dataTest}` `closeButton-${dataTest}`',
      control: 'text'
    },
    default: {
      description: 'Modal content',
      control: 'none'
    },
    'button-main': {
      control: 'none',
      description: 'Event emitted on main button click'
    },
    'button-second': {
      control: 'none',
      description: 'Event emitted on second button click'
    },
    'button-side': {
      control: 'none',
      description: 'Event emitted on side button click'
    }
  },
  args: {
    title: 'Modal title',
    titleIcon: 'home',
    mainButtonText: 'Main button',
    secondButtonText: 'Secondary button',
    sideButtonText: 'Side button',
    isOpen: false,
    disabledMainButton: false,
    disabledSecondButton: false,
    disabledSideButton: false,
    variant: PuikModalVariants.Feedback,
    size: PuikModalSizes.Small,
    dataTest: 'datatest-modal',
  },
  parameters: {
    chromatic: { delay: 3000 },
  }
} as Meta;


const Template: StoryFn = (args: Args) => {
  const updateArgs = useArgs()[1];
  return {
    components: {
      PuikModal,
      PuikButton
    },
    setup() {
      const openModal = () => {
        updateArgs({ isOpen: true });
      };
      const closeModal = () => {
        updateArgs({ isOpen: false });
      };
      const logAction = (actionName: string) => {
        console.log(actionName);
        closeModal();
      }

      return {
        args,
        openModal,
        closeModal,
        logAction
      };
    },
    methods: {
      closeModal: action('Close event triggered'),
    },
    template: `
    <puik-button @click="openModal">
      open modal
    </puik-button>
    <puik-modal
      :title="args.title"
      :title-icon="args.titleIcon"
      :main-button-text="args.mainButtonText"
      :second-button-text="args.secondButtonText"
      :side-button-text="args.sideButtonText"
      :is-open="args.isOpen"
      :disabled-main-button="args.disabledMainButton"
      :disabled-second-button="args.disabledSecondButton"
      :disabled-side-button="args.disabledSideButton"
      :variant="args.variant"
      :size="args.size"
      :data-test="args.dataTest"
      @close="closeModal"
      @button-main="logAction('main action')"
      @button-second="logAction('second action')"
      @button-side="logAction('side action')"
    >
      ${content}
    </puik-modal>
    `
  };
};


export const Default = {
  render: Template,

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <!--
  $sizes: ${modalSizesSummary}
  $variants: ${modalVariantsSummary}
  -->
  <puik-modal
    :title="title"
    :title-icon="titleIcon"
    :main-button-text="mainButtonText"
    :second-button-text="secondButtonText"
    :side-button-text="sideButtonText"
    :is-open="true|false"
    :variant="variants"
    :size="size"
    :data-test="dataTest"
    @close="closeModal"
    @button-main="logAction('main action')"
    @button-second="logAction('second action')"
    @button-side="logAction('side action')"
  >
    Your content
  </puik-modal>
  `,
        language: 'html'
      }
    }
  }
};

export const Feedback = {
  render: () => ({
    components: {
      PuikButton,
      PuikModal,
    },
    setup() {
      const args = {
        title: 'Feedback variant',
        titleIcon: 'home',
        mainButtonText: 'Main button',
        secondButtonText: 'Secondary button',
        variant: PuikModalVariants.Feedback,
      };
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: `
    <puik-button variant="info" @click="openModal">
      open feedback modal
    </puik-button>
    <puik-modal
      v-bind="args"
      :is-open="isOpen"
      @close="closeModal"
      @button-main="closeModal"
      @button-second="closeModal"
    >
      ${content}
    </puik-modal>
    `
  }),

  parameters: {
    docs: {
      description: {
        story: 'Forces the blue title icon, displays a close button and allows the modal to close when clicked outside (default variant)'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  // const isOpen = ref(false);
  // const openModal = () => {
  //  isOpen.value = true;
  // };
  // const closeModal = () => {
  //  isOpen.value = false;
  // };

  <puik-button variant="info" @click="openModal">
    open feedback modal
  </puik-button>
  <puik-modal
    title="Feedback variant"
    titleIcon="home"
    mainButtonText="Main button"
    secondButtonText="Secondary button"
    variant="feedback"
    :is-open="isOpen"
    @close="closeModal"
    @button-main="closeModal"
    @button-second="closeModal"
  >
        `,
        language: 'html'
      }
    }
  }
};

export const Destructive = {
  render: () => ({
    components: {
      PuikButton,
      PuikModal,
    },
    setup() {
      const args = {
        title: 'Destructive variant',
        mainButtonText: 'Main button',
        secondButtonText: 'Secondary button',
        variant: PuikModalVariants.Destructive,
      };
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: `
    <puik-button variant="danger" @click="openModal">
      open destructive modal
    </puik-button>
    <puik-modal
      v-bind="args"
      :is-open="isOpen"
      @close="closeModal"
      @button-main="closeModal"
      @button-second="closeModal"
    >
      ${content}
    </puik-modal>
    `
  }),

  parameters: {
    docs: {
      description: {
        story: 'Forces the red warning icon and red main button, displays a close button and allows the modal to close when clicked outside.'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  // const isOpen = ref(false);
  // const openModal = () => {
  //  isOpen.value = true;
  // };
  // const closeModal = () => {
  //  isOpen.value = false;
  // };

  <puik-button variant="info" @click="openModal">
    open destructive modal
  </puik-button>
  <puik-modal
    title="Destructive variant"
    mainButtonText="Main button"
    secondButtonText="Secondary button"
    variant="destructive"
    :is-open="isOpen"
    @close="closeModal"
    @button-main="closeModal"
    @button-second="closeModal"
  >
        `,
        language: 'html'
      }
    }
  }
};

export const Dialog = {
  render: () => ({
    components: {
      PuikButton,
      PuikModal,
    },
    setup() {
      const args = {
        title: 'Dialog variant',
        titleIcon: 'home',
        mainButtonText: 'Main button',
        secondButtonText: 'Secondary button',
        sideButtonText: 'Side button',
        variant: PuikModalVariants.Dialog
      };
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: `
    <puik-button @click="openModal">
      open dialog modal
    </puik-button>
    <puik-modal
      v-bind="args"
      :is-open="isOpen"
      @close="closeModal"
      @button-main="closeModal"
      @button-second="closeModal"
      @button-side="closeModal"
    >
      ${content}
    </puik-modal>
    `
  }),

  parameters: {
    docs: {
      description: {
        story: 'Removes close button, removes backdrop click and adds side button'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  // const isOpen = ref(false);
  // const openModal = () => {
  //  isOpen.value = true;
  // };
  // const closeModal = () => {
  //  isOpen.value = false;
  // };

  <puik-button variant="info" @click="openModal">
    open dialog modal
  </puik-button>
  <puik-modal
    title="Dialog variant"
    titleIcon="home"
    mainButtonText="Main button"
    secondButtonText="Secondary button"
    sideButtonText="Side button"
    variant="dialog"
    :is-open="isOpen"
    @close="closeModal"
    @button-main="closeModal"
    @button-second="closeModal"
    @button-side="closeModal"
  >
        `,
        language: 'html'
      }
    }
  }
};

export const Large = {
  render: () => ({
    components: {
      PuikButton,
      PuikModal,
    },
    setup() {
      const args = {
        title: 'Large size',
        titleIcon: 'home',
        mainButtonText: 'Main button',
        secondButtonText: 'Secondary button',
        variant: PuikModalVariants.Feedback,
        size: PuikModalSizes.Large
      };
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: `
    <puik-button @click="openModal">
      open large modal
    </puik-button>
    <puik-modal
      v-bind="args"
      :is-open="isOpen"
      @close="closeModal"
      @button-main="closeModal"
      @button-second="closeModal"
    >
      ${content}
    </puik-modal>
    `
  }),

  parameters: {
    docs: {
      description: {
        story: 'Sets the max-width to `904px`'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  // const isOpen = ref(false);
  // const openModal = () => {
  //  isOpen.value = true;
  // };
  // const closeModal = () => {
  //  isOpen.value = false;
  // };

  <puik-button variant="info" @click="openModal">
    open large modal
  </puik-button>
  <puik-modal
    title="Large size"
    titleIcon="home"
    mainButtonText="Main button"
    secondButtonText="Secondary button"
    :is-open="isOpen"
    size="large"
    @close="closeModal"
    @button-main="closeModal"
    @button-second="closeModal"
  >
        `,
        language: 'html'
      }
    }
  }
};

export const Medium = {
  render: () => ({
    components: {
      PuikButton,
      PuikModal,
    },
    setup() {
      const args = {
        title: 'Medium size',
        titleIcon: 'home',
        mainButtonText: 'Main button',
        secondButtonText: 'Secondary button',
        variant: PuikModalVariants.Feedback,
        size: PuikModalSizes.Medium
      };
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: `
    <puik-button @click="openModal">
      open medium modal
    </puik-button>
    <puik-modal
      v-bind="args"
      :is-open="isOpen"
      @close="closeModal"
      @button-main="closeModal"
      @button-second="closeModal"
    >
      ${content}
    </puik-modal>
    `
  }),

  parameters: {
    docs: {
      description: {
        story: 'Sets the max-width to `680px`'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  // const isOpen = ref(false);
  // const openModal = () => {
  //  isOpen.value = true;
  // };
  // const closeModal = () => {
  //  isOpen.value = false;
  // };

  <puik-button variant="info" @click="openModal">
    open medium modal
  </puik-button>
  <puik-modal
    title="Medium size"
    titleIcon="home"
    mainButtonText="Main button"
    secondButtonText="Secondary button"
    :is-open="isOpen"
    size="medium"
    @close="closeModal"
    @button-main="closeModal"
    @button-second="closeModal"
  >
        `,
        language: 'html'
      }
    }
  }
};

export const Small = {
  render: () => ({
    components: {
      PuikButton,
      PuikModal,
    },
    setup() {
      const args = {
        title: 'Small size',
        titleIcon: 'home',
        mainButtonText: 'Main button',
        secondButtonText: 'Secondary button',
        variant: PuikModalVariants.Feedback,
        size: PuikModalSizes.Small
      };
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: `
    <puik-button @click="openModal">
      open small modal
    </puik-button>
    <puik-modal
      v-bind="args"
      :is-open="isOpen"
      @close="closeModal"
      @button-main="closeModal"
      @button-second="closeModal"
    >
      ${content}
    </puik-modal>
    `
  }),

  parameters: {
    docs: {
      description: {
        story: 'Sets the max-width to `508px`'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  // const isOpen = ref(false);
  // const openModal = () => {
  //  isOpen.value = true;
  // };
  // const closeModal = () => {
  //  isOpen.value = false;
  // };

  <puik-button variant="info" @click="openModal">
    open small modal
  </puik-button>
  <puik-modal
    title="Small size"
    titleIcon="home"
    mainButtonText="Main button"
    secondButtonText="Secondary button"
    :is-open="isOpen"
    size="small"
    @close="closeModal"
    @button-main="closeModal"
    @button-second="closeModal"
  >
        `,
        language: 'html'
      }
    }
  }
};

export const DisabledMainAndSecondaryButtons = {
  render: () => ({
    components: {
      PuikButton,
      PuikModal,
    },
    setup() {
      const args = {
        title: 'Disabled main and secondary buttons',
        titleIcon: 'home',
        mainButtonText: 'Main button',
        secondButtonText: 'Secondary button',
        variant: PuikModalVariants.Feedback,
        size: PuikModalSizes.Large,
        disabledMainButton: true,
        disabledSecondButton: true,
      };
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: `
    <puik-button @click="openModal">
      open modal with disabled main and secondary buttons
    </puik-button>
    <puik-modal
      v-bind="args"
      :is-open="isOpen"
      @close="closeModal"
      @button-main="closeModal"
      @button-second="closeModal"
    >
      ${content}
    </puik-modal>
    `
  }),

  parameters: {
    docs: {
      description: {
        story: 'Disables main and secondary buttons'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  // const isOpen = ref(false);
  // const openModal = () => {
  //  isOpen.value = true;
  // };
  // const closeModal = () => {
  //  isOpen.value = false;
  // };

  <puik-button variant="info" @click="openModal">
    open modal with disabled main and secondary buttons
  </puik-button>
  <puik-modal
    title="Disabled main and secondary buttons"
    titleIcon="home"
    size="large"
    mainButtonText="Main button"
    secondButtonText="Secondary button"
    sideButtonText="Side button"
    disabledMainButton
    disabledSecondButton
    :is-open="isOpen"
    @close="closeModal"
    @button-main="closeModal"
    @button-second="closeModal"
  >
    Your content
  </puik-modal>
        `,
        language: 'html'
      }
    }
  }
};


export const DisabledSideButton = {
  render: () => ({
    components: {
      PuikButton,
      PuikModal,
    },
    setup() {
      const args = {
        title: 'Disabled side button (dialog variant only)',
        titleIcon: 'home',
        mainButtonText: 'Main button',
        secondButtonText: 'Secondary button',
        sideButtonText: 'Side button',
        variant: PuikModalVariants.Dialog,
        size: PuikModalSizes.Large,
        disabledSideButton: true,
      };
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };

      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: `
    <puik-button @click="openModal">
      open modal with disabled side button (dialog variant only)
    </puik-button>
    <puik-modal
      v-bind="args"
      :is-open="isOpen"
      @close="closeModal"
      @button-main="closeModal"
      @button-second="closeModal"
      @button-side="closeModal"
    >
      ${content}
    </puik-modal>
    `
  }),

  parameters: {
    docs: {
      description: {
        story: 'Disables side button'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  // const isOpen = ref(false);
  // const openModal = () => {
  //  isOpen.value = true;
  // };
  // const closeModal = () => {
  //  isOpen.value = false;
  // };

  <puik-button variant="info" @click="openModal"></puik-button>
    open modal with disabled side button (only dialog variant)
  </puik-button>
  <puik-modal
    title="Disabled side button (dialog variant only)"
    titleIcon="home"
    mainButtonText="Main button"
    secondButtonText="Secondary button"
    sideButtonText="Side button"
    disabledSideButton
    :is-open="isOpen"
    size="large"
    @close="closeModal"
    @button-main="closeModal"
    @button-second="closeModal"
    @button-side="closeModal"
  >
    Your content
  </puik-modal>
        `,
        language: 'html'
      }
    }
  }
};

