import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/client-api'
import { PuikButton } from '@puik/components/button'
import { PuikModalVariant, PuikModalSize } from '../index'
import PuikModal from './../src/modal.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

const modalSizes = Object.values(PuikModalSize)
const modalSizesSummary = modalSizes.join('|')
const modalVariants = Object.values(PuikModalVariant)
const modalVariantsSummary = modalVariants.join('|')

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
`

export default {
  title: 'Components/Modal',
  component: PuikModal,
  argTypes: {
    title: {
      description: 'Set the modal title',
      control: 'text',
    },
    mainButtonText: {
      description: 'Set the text of the main button',
      control: 'text',
    },
    secondButtonText: {
      description: 'Set the text of the secondary button',
      control: 'text',
    },
    sideButtonText: {
      description: 'Set the text of the side button',
      control: 'text',
    },
    variant: {
      description: 'Set the style of the modal (use the PuikModalVariant enum)',
      control: 'select',
      options: modalVariants,
      table: {
        defaultValue: {
          summary: PuikModalVariant.DIALOG,
        },
        type: {
          summary: 'PuikModalVariant',
          detail: `
// Import enum
import { PuikModalVariant } from '@prestashopcorp/puik/components/modal/src/modal'

// Detail
export enum PuikModalVariant {
  DESTRUCTIVE = 'destructive',
  FEEDBACK = 'feedback',
  DIALOG = 'dialog',
}
          `,
        },
      },
    },
    size: {
      description: 'Set the size of the modal (use the PuikModalSize enum)',
      control: 'select',
      options: modalSizes,
      table: {
        defaultValue: {
          summary: PuikModalSize.SMALL,
        },
        type: {
          summary: 'PuikModalSize',
          detail: `
// Import enum
import { PuikModalSize } from '@prestashopcorp/puik/components/modal/src/modal'

// Detail
export enum PuikModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
`,
        },
      },
    },
    isOpen: {
      description: 'Tell if the modal is open or not',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    titleIcon: {
      description: 'The icon name of the modal (top left corner)',
      control: 'text',
    },
    default: {
      description: 'Modal content',
      control: 'none',
    },
    'button-main': {
      control: 'none',
      description: 'Event emitted on main button click',
    },
    'button-second': {
      control: 'none',
      description: 'Event emitted on second button click',
    },
    'button-side': {
      control: 'none',
      description: 'Event emitted on side button click',
    },
  },
  args: {
    title: 'The awesome title',
    mainButtonText: 'Awesome main button',
    secondButtonText: 'Awesome secondary button',
    isOpen: true,
    titleIcon: 'home',
    variant: PuikModalVariant.DIALOG,
    size: PuikModalSize.SMALL,
  },
  parameters: {
    chromatic: { delay: 3000 },
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta

const Template: Story = (args: Args) => {
  const [_, updateArgs] = useArgs()

  return {
    components: {
      PuikModal,
      PuikButton,
    },
    setup() {
      const openModal = () => {
        updateArgs({ isOpen: true })
      }

      const closeModal = () => {
        updateArgs({ isOpen: false })
      }

      const secondAction = () => {
        updateArgs({ isOpen: false })
      }

      return {
        args,
        openModal,
        closeModal,
        secondAction,
      }
    },
    methods: {
      closeModal: action('Close event triggered'),
      mainAction: action('Main event triggered'),
      secondAction: action('Second event triggered'),
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
    `,
  }
}

export const Default = Template.bind({})
Default.parameters = {
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
      language: 'html',
    },
  },
}

export const Destructive = Template.bind({})
Destructive.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  variant: PuikModalVariant.DESTRUCTIVE,
}
Destructive.parameters = {
  docs: {
    description: {
      story: 'Force the red warning icon and red main button',
    },
    source: {
      code: `
<!--VueJS Snippet-->
<puik-modal
  title="Title"
  main-button-text="Awesome main button"
  second-button-text="Awesome seond button"
  :is-open="true"
  :variant="PuikModalVariant.DESTRUCTIVE"
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
      language: 'html',
    },
  },
}

export const Feedback = Template.bind({})
Feedback.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  variant: PuikModalVariant.FEEDBACK,
}
Feedback.parameters = {
  docs: {
    description: {
      story: 'Force the purple icon',
    },
    source: {
      code: `
<!--VueJS Snippet-->
<puik-modal
  title="Title"
  main-button-text="Awesome main button"
  second-button-text="Awesome second button"
  :variant="PuikModalVariant.FEEDBACK"
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
      language: 'html',
    },
  },
}

export const Dialog = Template.bind({})
Dialog.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  sideButtonText: 'Awesome side button',
  variant: PuikModalVariant.DIALOG,
}
Dialog.parameters = {
  docs: {
    description: {
      story: 'Remove close button, remove backdrop click and add side button',
    },
    source: {
      code: `
<!--VueJS Snippet-->
<puik-modal
  title="title"
  main-button-text="Awesome main button"
  second-button-text="Awesome second button"
  side-button-text="Awesome side button"
  :variant="PuikModalVariant.DIALOG"
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
      language: 'html',
    },
  },
}

export const Large = Template.bind({})
Large.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  size: PuikModalSize.LARGE,
}
Large.parameters = {
  docs: {
    description: {
      story: 'Set the max-width to `904px`',
    },
    source: {
      code: `
<!--VueJS Snippet-->
<puik-modal
  title="title"
  main-button-text="Awesome main button"
  second-button-text="Awesome second button"
  :variant="PuikModalVariant.DIALOG"
  :size="PuikModalSize.LARGE"
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
      language: 'html',
    },
  },
}

export const Medium = Template.bind({})
Medium.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  size: PuikModalSize.MEDIUM,
}
Medium.parameters = {
  docs: {
    description: {
      story: 'Set the max-width to `680px`',
    },
    source: {
      code: `
<!--VueJS Snippet-->
<puik-modal
  title="title"
  main-button-text="Awesome main button"
  second-button-text="Awesome second button"
  :variant="PuikModalVariant.DIALOG"
  :size="PuikModalSize.MEDIUM"
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
      language: 'html',
    },
  },
}

export const Small = Template.bind({})
Small.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  size: PuikModalSize.SMALL,
}
Small.parameters = {
  docs: {
    description: {
      story: 'Set the max-width to `508px`',
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
  :size="PuikModalSize.SMALL" <---- HERE
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
      language: 'html',
    },
  },
}
