import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/client-api'
import { PuikButton } from '@puik/components/button'
import { PuikModalVariant, PuikModalSize } from '../index'
import PuikModal from './../src/modal.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

const content = `
<div class="flex flex-col gap-5">
  <section class="flex">
    <div>
      <h3>Build for Prestashop - coming soon</h3>
      <p>
        It will be awesome !
      </p>
    </div>
    <puik-button variant="tertiary">
      Stay informed
      <span class="puik-icon puik-button__right-icon">open_in_new</span>
    </puik-button>
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
      options: Object.values(PuikModalVariant),
      table: {
        defaultValue: {
          summary: PuikModalVariant.DIALOG,
        },
        type: {
          summary: Object.values(PuikModalVariant).join('|'),
        },
      },
    },
    size: {
      description: 'Set the size of the modal (use the PuikModalSize enum)',
      control: 'select',
      options: Object.values(PuikModalSize),
      table: {
        defaultValue: {
          summary: PuikModalSize.SMALL,
        },
        type: {
          summary: Object.values(PuikModalSize).join('|'),
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
<puik-modal
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText"
  :variant="args.variant"
  :size="args.size"
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  @close="closeModal"
  @buttonMain="mainAction"
  @buttonSecond="secondAction"
>
  Your content
</puik-modal>
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
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :is-open="args.isOpen"
  :variant="PuikModalVariant.DESTRUCTIVE" <---- HERE
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
        <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 1rem;">warning</div>
        <div class="puik-tooltip puik-modal__dialogPanelContainer__dialogPanel__header__title" tabindex="0">
          <div class="puik-tooltip__wrapper">
            <h2 class="title">The awesome title</h2>
          </div>
          <div class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; display: none; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(350px, -463px);" data-popper-placement="top">
            <div class="puik-tooltip__tip__content">
              <span class="puik-tooltip__tip__content__description">The awesome title</span>
            </div>
            <div class="puik-tooltip__tip__arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
          </div>
        </div>
        <button class="puik-button puik-button--error puik-button--md puik-modal__dialogPanelContainer__dialogPanel__header__close-button" aria-label="closeButton">
          <div class="puik-icon material-icons-round" style="font-size: 1rem;">close</div>
        </button>
      </header>
      <div class="puik-modal__dialogPanelContainer__dialogPanel__content">
        Your content
      </div>
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
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText"
  :variant="PuikModalVariant.FEEDBACK" <---- HERE
  :size="args.size"
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
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
        <div class="puik-tooltip puik-modal__dialogPanelContainer__dialogPanel__header__title" tabindex="0">
          <div class="puik-tooltip__wrapper">
            <h2 class="title">The awesome title</h2>
          </div>
          <div class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; display: none; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(350px, -463px);" data-popper-placement="top">
            <div class="puik-tooltip__tip__content">
              <span class="puik-tooltip__tip__content__description">The awesome title</span>
            </div>
            <div class="puik-tooltip__tip__arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
          </div>
        </div>
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
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="Awesome side button" <---- HERE
  :variant="PuikModalVariant.DIALOG" <---- HERE
  :size="args.size"
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  @close="closeModal"
  @buttonMain="mainAction"
  @buttonSecond="secondAction"
  @buttonSide="sideAction" <---- HERE
>
  Your content
</puik-modal>

<!--HTML/CSS Snippet-->
<div class="puik-modal puik-modal--dialog puik-modal--small" role="dialog" aria-modal="true">
  <div class="puik-modal__dialogPanelContainer">
    <div class="puik-modal__dialogPanelContainer__dialogPanel">
      <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
        <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 1rem;">home</div>
        <div class="puik-tooltip puik-modal__dialogPanelContainer__dialogPanel__header__title" tabindex="0">
          <div class="puik-tooltip__wrapper">
            <h2 class="title">The awesome title</h2>
          </div>
          <div class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; display: none; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(366px, -463px);" data-popper-placement="top">
            <div class="puik-tooltip__tip__content">
              <span class="puik-tooltip__tip__content__description">The awesome title</span>
            </div>
            <div class="puik-tooltip__tip__arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
          </div>
        </div>
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
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText"
  :variant="args.variant" 
  :size="PuikModalSize.LARGE" <---- HERE
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  @close="closeModal"
  @buttonMain="mainAction"
  @buttonSecond="secondAction"
>
  Your content
</puik-modal>

<!--HTML/CSS Snippet-->
<div class="puik-modal puik-modal--feedback puik-modal--large" role="dialog" aria-modal="true">
  <div class="puik-modal__dialogPanelContainer">
    <div class="puik-modal__dialogPanelContainer__dialogPanel">
      <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
        <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 1rem;">home</div>
        <div class="puik-tooltip puik-modal__dialogPanelContainer__dialogPanel__header__title" tabindex="0">
          <div class="puik-tooltip__wrapper">
            <h2 class="title">The awesome title</h2>
          </div>
          <div class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; display: none; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(351px, -459px);" data-popper-placement="top">
            <div class="puik-tooltip__tip__content">
              <span class="puik-tooltip__tip__content__description">The awesome title</span>
            </div>
            <div class="puik-tooltip__tip__arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
          </div>
        </div>
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
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText"
  :variant="args.variant" 
  :size="PuikModalSize.MEDIUM" <---- HERE
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  @close="closeModal"
  @buttonMain="mainAction"
  @buttonSecond="secondAction"
>
  Your content
</puik-modal>

<!--HTML/CSS Snippet-->
<div class="puik-modal puik-modal--feedback puik-modal--medium" role="dialog" aria-modal="true">
  <div class="puik-modal__dialogPanelContainer">
    <div class="puik-modal__dialogPanelContainer__dialogPanel">
      <header class="puik-modal__dialogPanelContainer__dialogPanel__header">
        <div class="puik-icon material-icons-round puik-modal__dialogPanelContainer__dialogPanel__header__icon" style="font-size: 1rem;">home</div>
        <div class="puik-tooltip puik-modal__dialogPanelContainer__dialogPanel__header__title" tabindex="0">
          <div class="puik-tooltip__wrapper">
            <h2 class="title">The awesome title</h2>
          </div>
          <div class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; display: none; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(350px, -463px);" data-popper-placement="top">
            <div class="puik-tooltip__tip__content">
              <span class="puik-tooltip__tip__content__description">The awesome title</span>
            </div>
            <div class="puik-tooltip__tip__arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
          </div>
        </div>
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
  :title-icon="args.titleIcon"
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
        <div class="puik-tooltip puik-modal__dialogPanelContainer__dialogPanel__header__title" tabindex="0">
          <div class="puik-tooltip__wrapper">
            <h2 class="title">The awesome title</h2>
          </div>
          <div class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; display: none; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(350px, -463px);" data-popper-placement="top">
            <div class="puik-tooltip__tip__content">
              <span class="puik-tooltip__tip__content__description">The awesome title</span>
            </div>
            <div class="puik-tooltip__tip__arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);"></div>
          </div>
        </div>
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
