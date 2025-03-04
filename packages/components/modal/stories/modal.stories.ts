import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import { PuikButton, PuikModal, PuikModalVariants, PuikModalSizes } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';

const modalSizes = Object.values(PuikModalSizes);
const modalSizesSummary = modalSizes.join('|');
const modalVariants = Object.values(PuikModalVariants);
const modalVariantsSummary = modalVariants.join('|');

const content = `
<div class="flex flex-col gap-5">
  <section class="flex">
    <div>
      <h3>Build for Prestashop - coming soon</h3>
      <p>
        It will be awesome !
      </p>
    </div>
  </section>

  <section class="flex">
    <div>
      <h3>On premises module</h3>
      <p>Already awesome!</p>
    </div>
  </section>

  <section class="flex">
    <div>
      <h3>Theme</h3>
      <p>
        You know!
      </p>
    </div>
  </section>

  <section class="flex">
    <div>
      <h3>El Famoso Lorem Ipsumos</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        aspernatur modi totam explicabo, veniam tempore praesentium
        laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
        reprehenderit repudiandae facere maiores non.
      </p>
    </div>
  </section>
</div>
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
      description: 'Sets the text of the side button',
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
    variant: {
      description:
        'Sets the style of the modal (use the PuikModalVariants enum)',
      control: 'select',
      options: modalVariants,
      table: {
        defaultValue: {
          summary: PuikModalVariants.Dialog
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
    isOpen: {
      description: 'Tell if the modal is open or not',
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
    titleIcon: {
      description: 'Set the icon name of the modal on the top left corner (from Material Symbols: https://fonts.google.com/icons)',
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
    title: 'The awesome title',
    mainButtonText: 'Awesome main button',
    secondButtonText: 'Awesome secondary button',
    isOpen: true,
    titleIcon: 'home',
    variant: PuikModalVariants.Dialog,
    size: PuikModalSizes.Small
  },
  parameters: {
    chromatic: { delay: 3000 },
    docs: {
      story: {
        inline: false,
        iframeHeight: 500
      }
    }
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

      const secondAction = () => {
        updateArgs({ isOpen: false });
      };

      return {
        args,
        openModal,
        closeModal,
        secondAction
      };
    },
    methods: {
      closeModal: action('Close event triggered'),
      mainAction: action('Main event triggered'),
      secondAction: action('Second event triggered')
    },
    template: `
      <puik-button variant="primary" @click="openModal">
        Click me !
      </puik-button>
      <PuikModal
        v-bind="args"
        @close="closeModal"
        @buttonMain="mainAction"
        @buttonSecond="secondAction"
      >
        ${content}
      </PuikModal>
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
    :main-button-text="mainButtonText"
    :second-button-text="secondButtonText"
    :side-button-text="sideButtonText"
    :variant="variants"
    :size="size"
    :is-open="true|false"
    :title-icon="titleIcon"
    @close="closeModal"
    @buttonMain="mainAction"
    @buttonSecond="secondAction"
  >
    Your content
  </puik-modal>

  <!--HTML/CSS Snippet-->
  <!--
  $sizes: ${modalSizesSummary}
  $variants: ${modalVariantsSummary}
  -->
  <!--
  State classes
  invisible: "puik-modal--invisible"
  -->
  <div class="puik-modal puik-modal--{$variants} puik-modal--small" role="dialog" aria-modal="true">
    <div class="puik-modal__dialogPanelContainer">
      <div class="puik-modal__dialogPanelContainer__dialogPanel">
        <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
          <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 24px;">home</div>
            <h2 class="title">The awesome title</h2>
          <button class="puik-button puik-button--text puik-button--md puik-modal__dialogPanelContainer__dialogPanel__header__close-button" aria-label="close">
            <div class="puik-icon material-icons-round" style="font-size: 24px;">close</div>
          </button>
        </header>
        <div class="puik-modal__dialogPanelContainer__dialogPanel__content"> Your content here </div>
        <footer class="puik-modal__dialogPanelContainer__dialogPanel__footer">
          <button class="puik-button puik-button--secondary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--second">
            Awesome secondary button
          </button>
          <button class="puik-button puik-button--primary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--main">
            Awesome main button
          </button>
          <span class="puik-modal__dialogPanelContainer__dialogPanel__footer__spacer"></span>
        </footer>
      </div>
    </div>
  </div>
  `,
        language: 'html'
      }
    }
  }
};

export const Destructive = {
  render: Template,

  args: {
    title: 'The awesome title',
    mainButtonText: 'Awesome main button',
    secondButtonText: 'Awesome secondary button',
    variant: PuikModalVariants.Destructive
  },

  parameters: {
    docs: {
      description: {
        story: 'Force the red warning icon and red main button'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-modal
    title="Title"
    main-button-text="Awesome main button"
    second-button-text="Awesome seond button"
    :is-open="true"
    :variant="PuikModalVariants.Destructive"
    @close="closeModal"
    @buttonMain="mainAction"
    @buttonSecond="secondAction"
  >
    Your content
  </puik-modal>

  <!--HTML/CSS Snippet-->
  <div class="puik-modal puik-modal--destructive puik-modal--small" role="dialog" aria-modal="true">
    <div class="puik-modal__dialogPanelContainer">
      <div class="puik-modal__dialogPanelContainer__dialogPanel">
        <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
          <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 24px;">warning</div>
            <h2 class="title">The awesome title</h2>
          <button class="puik-button puik-button--text puik-button--md puik-modal__dialogPanelContainer__dialogPanel__header__close-button" aria-label="close">
            <div class="puik-icon material-icons-round" style="font-size: 24px;">close</div>
          </button>
        </header>
        <div class="puik-modal__dialogPanelContainer__dialogPanel__content"> Your content here </div>
        <footer class="puik-modal__dialogPanelContainer__dialogPanel__footer">
          <button class="puik-button puik-button--tertiary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--second">
            Awesome secondary button
          </button>
          <button class="puik-button puik-button--destructive puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--main">
            Awesome main button
          </button>
          <span class="puik-modal__dialogPanelContainer__dialogPanel__footer__spacer"></span>
        </footer>
      </div>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Feedback = {
  render: Template,

  args: {
    title: 'The awesome title',
    mainButtonText: 'Awesome main button',
    secondButtonText: 'Awesome secondary button',
    variant: PuikModalVariants.Feedback
  },

  parameters: {
    docs: {
      description: {
        story: 'Force the purple icon'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-modal
    title="Title"
    main-button-text="Awesome main button"
    second-button-text="Awesome second button"
    :variant="PuikModalVariants.Feedback"
    :is-open="true"
    title-icon="home"
    @close="closeModal"
    @buttonMain="mainAction"
    @buttonSecond="secondAction"
  >
    Your content
  </puik-modal>

  <!--HTML/CSS Snippet-->
  <div class="puik-modal puik-modal--feedback puik-modal--small" role="dialog" aria-modal="true">
    <div class="puik-modal__dialogPanelContainer">
      <div class="puik-modal__dialogPanelContainer__dialogPanel">
        <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
          <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 1rem;">home</div>
          <h2 class="title">The awesome title</h2>
          <button class="puik-button puik-button--error puik-button--md puik-modal__dialogPanelContainer__dialogPanel__header__close-button" aria-label="closeButton">
            <div class="puik-icon material-icons-round" style="font-size: 1rem;">close</div>
          </button>
        </header>
        <div class="puik-modal__dialogPanelContainer__dialogPanel__content">
          Your content
        </div>
        <footer class="puik-modal__dialogPanelContainer__dialogPanel__footer">
          <button class="puik-button puik-button--secondary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--second">
            Awesome secondary button
          </button>
          <button class="puik-button puik-button--primary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--main">
            Awesome main button
          </button>
          <span class="puik-modal__dialogPanelContainer__dialogPanel__footer__spacer"></span>
        </footer>
      </div>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Dialog = {
  render: Template,

  args: {
    title: 'The awesome title',
    mainButtonText: 'Awesome main button',
    secondButtonText: 'Awesome secondary button',
    sideButtonText: 'Awesome side button',
    variant: PuikModalVariants.Dialog
  },

  parameters: {
    docs: {
      description: {
        story: 'Remove close button, remove backdrop click and add side button'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-modal
    title="title"
    main-button-text="Awesome main button"
    second-button-text="Awesome second button"
    side-button-text="Awesome side button"
    :variant="PuikModalVariants.Dialog"
    :is-open="true"
    title-icon="home"
    @close="closeModal"
    @buttonMain="mainAction"
    @buttonSecond="secondAction"
    @buttonSide="sideAction"
  >
    Your content
  </puik-modal>

  <!--HTML/CSS Snippet-->
  <div class="puik-modal puik-modal--dialog puik-modal--small" role="dialog" aria-modal="true">
    <div class="puik-modal__dialogPanelContainer">
      <div class="puik-modal__dialogPanelContainer__dialogPanel">
        <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
          <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 1rem;">home</div>
          <h2 class="title">The awesome title</h2>
        </header>
        <div class="puik-modal__dialogPanelContainer__dialogPanel__content">
          Your content
        </div>
        <footer class="puik-modal__dialogPanelContainer__dialogPanel__footer">
          <button class="puik-button puik-button--secondary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--second">
            Awesome secondary button
          </button>
          <button class="puik-button puik-button--primary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--main">
            Awesome main button
          </button>
          <span class="puik-modal__dialogPanelContainer__dialogPanel__footer__spacer"></span>
          <button class="puik-button puik-button--text puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--side">
            Awesome side button
          </button>
        </footer>
      </div>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Large = {
  render: Template,

  args: {
    title: 'The awesome title',
    mainButtonText: 'Awesome main button',
    secondButtonText: 'Awesome secondary button',
    size: PuikModalSizes.Large
  },

  parameters: {
    docs: {
      description: {
        story: 'Sets the max-width to `904px`'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-modal
    title="title"
    main-button-text="Awesome main button"
    second-button-text="Awesome second button"
    :variant="PuikModalVariants.Dialog"
    :size="PuikModalSizes.Large"
    :is-open="true"
    title-icon="home"
    @close="closeModal"
    @buttonMain="mainAction"
    @buttonSecond="secondAction"
  >
    Your content
  </puik-modal>

  <!--HTML/CSS Snippet-->
  <div class="puik-modal puik-modal--dialog puik-modal--large" role="dialog" aria-modal="true">
    <div class="puik-modal__dialogPanelContainer">
      <div data-headlessui-state="open" class="puik-modal__dialogPanelContainer__dialogPanel">
        <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
          <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 24px;">home</div>
          <h2 class="title">The awesome title</h2>
        </header>
        <div class="puik-modal__dialogPanelContainer__dialogPanel__content"> Your content here </div>
        <footer class="puik-modal__dialogPanelContainer__dialogPanel__footer">
          <button class="puik-button puik-button--secondary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--second">
            Awesome secondary button
          </button>
          <button class="puik-button puik-button--primary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--main">
            Awesome main button
          </button>
        </footer>
      </div>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Medium = {
  render: Template,

  args: {
    title: 'The awesome title',
    mainButtonText: 'Awesome main button',
    secondButtonText: 'Awesome secondary button',
    size: PuikModalSizes.Medium
  },

  parameters: {
    docs: {
      description: {
        story: 'Sets the max-width to `680px`'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-modal
    title="title"
    main-button-text="Awesome main button"
    second-button-text="Awesome second button"
    :variant="PuikModalVariants.Dialog"
    :size="PuikModalSizes.Medium"
    :is-open="true"
    title-icon="home"
    @close="closeModal"
    @buttonMain="mainAction"
    @buttonSecond="secondAction"
  >
    Your content
  </puik-modal>

  <!--HTML/CSS Snippet-->
  <div class="puik-modal puik-modal--dialog puik-modal--medium" id="headlessui-dialog-33" role="dialog" aria-modal="true" data-headlessui-state="open">
    <div class="puik-modal__dialogPanelContainer">
      <div id="headlessui-dialog-panel-34" data-headlessui-state="open" class="puik-modal__dialogPanelContainer__dialogPanel">
        <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
          <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 24px;">home</div>
          <h2 class="title">The awesome title</h2>
        </header>
        <div class="puik-modal__dialogPanelContainer__dialogPanel__content"> Your content here </div>
        <footer class="puik-modal__dialogPanelContainer__dialogPanel__footer">
          <button class="puik-button puik-button--secondary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--second">
            Awesome secondary button
          </button>
          <button class="puik-button puik-button--primary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--main">
            Awesome main button
          </button>
        </footer>
      </div>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Small = {
  render: Template,

  args: {
    title: 'The awesome title',
    mainButtonText: 'Awesome main button',
    secondButtonText: 'Awesome secondary button',
    size: PuikModalSizes.Small
  },

  parameters: {
    docs: {
      description: {
        story: 'Sets the max-width to `508px`'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-modal
    :title="args.title"
    :main-button-text="args.mainButtonText"
    :second-button-text="args.secondButtonText"
    :side-button-text="args.sideButtonText"
    :variant="args.variant"
    :size="PuikModalSizes.Small" <---- HERE
    :is-open="args.isOpen"
    :title-icon="home"
    @close="closeModal"
    @buttonMain="mainAction"
    @buttonSecond="secondAction"
  >
    Your content
  </puik-modal>

  <!--HTML/CSS Snippet-->
  <div class="puik-modal puik-modal--dialog puik-modal--small" id="headlessui-dialog-3" role="dialog" aria-modal="true" data-headlessui-state="open">
    <div class="puik-modal__dialogPanelContainer">
      <div id="headlessui-dialog-panel-4" data-headlessui-state="open" class="puik-modal__dialogPanelContainer__dialogPanel">
        <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
          <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 24px;">home</div>
          <h2 class="title">The awesome title</h2>
        </header>
        <div class="puik-modal__dialogPanelContainer__dialogPanel__content"> Your content here </div>
        <footer class="puik-modal__dialogPanelContainer__dialogPanel__footer">
          <button class="puik-button puik-button--secondary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--second">
            Awesome secondary button
          </button>
          <button class="puik-button puik-button--primary puik-button--md puik-modal__dialogPanelContainer__dialogPanel__footer__button--main">
            Awesome main button
          </button>
        </footer>
      </div>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};
