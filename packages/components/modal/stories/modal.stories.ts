import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/client-api'
import { PuikButton } from '@puik/components/button'
import { ModalSize, ModalVariant } from '../src/modal'
import PuikModal from './../src/modal.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

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
      description: 'Set the style of the modal (use the ModalVariant enum)',
      control: 'select',
      options: Object.values(ModalVariant),
      table: {
        defaultValue: {
          summary: ModalVariant.DIALOG,
        },
        type: {
          summary: Object.values(ModalVariant).join('|'),
        },
      },
    },
    size: {
      description: 'Set the size of the modal (use the ModalSize enum)',
      control: 'select',
      options: Object.values(ModalSize),
      table: {
        defaultValue: {
          summary: ModalSize.SMALL,
        },
        type: {
          summary: Object.values(ModalSize).join('|'),
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
    hasCloseButton: {
      description:
        'Tell if the modal has a close button (and if the backdrop can close the modal)',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
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
    content: `
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
  `,
  },
  parameters: {
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
        closeMyModalPleaseFunction: closeModal,
        secondAction,
      }
    },
    methods: {
      closeMyModalPleaseFunction: action('Close event triggered'),
      mainAction: action('Main event triggered'),
      secondAction: action('Second event triggered'),
    },
    template: `
      <puik-button variant="primary" @click="openModal">
        Click me !
      </puik-button>
      <PuikModal
        v-bind="args"
        @close="closeMyModalPleaseFunction"
        @buttonMain="mainAction"
        @buttonSecond="secondAction"
      >
        ${args.content}
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
  :has-close-button="args.hasCloseButton"
  @close="closeMyModalPleaseFunction"
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
  variant: ModalVariant.DESTRUCTIVE,
}
Destructive.parameters = {
  docs: {
    description: {
      story: 'Force the red warning icon and red main button',
    },
    source: {
      code: `
<puik-modal
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText"
  :variant="ModalVariant.DESTRUCTIVE" <---- HERE
  :size="args.size"
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  :has-close-button="args.hasCloseButton"
  @close="closeMyModalPleaseFunction"
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

export const Feedback = Template.bind({})
Feedback.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  variant: ModalVariant.FEEDBACK,
}
Feedback.parameters = {
  docs: {
    description: {
      story: 'Force the purple icon',
    },
    source: {
      code: `
<puik-modal
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText"
  :variant="ModalVariant.FEEDBACK" <---- HERE
  :size="args.size"
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  :has-close-button="args.hasCloseButton"
  @close="closeMyModalPleaseFunction"
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

export const Dialog = Template.bind({})
Dialog.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  variant: ModalVariant.DIALOG,
}
Dialog.parameters = {
  docs: {
    description: {
      story: 'Remove close button, remove backdrop click and add side button',
    },
    source: {
      code: `
<puik-modal
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText" <---- HERE
  :variant="ModalVariant.DIALOG" <---- HERE
  :size="args.size"
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  :has-close-button="args.hasCloseButton"
  @close="closeMyModalPleaseFunction"
  @buttonMain="mainAction"
  @buttonSecond="secondAction"
  @buttonSide="sideAction" <---- HERE
>
  Your content
</puik-modal>
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
  size: ModalSize.LARGE,
}
Large.parameters = {
  docs: {
    description: {
      story: 'Set the max-width to `904px`',
    },
    source: {
      code: `
<puik-modal
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText"
  :variant="args.variant" 
  :size="ModalSize.LARGE" <---- HERE
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  :has-close-button="args.hasCloseButton"
  @close="closeMyModalPleaseFunction"
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

export const Medium = Template.bind({})
Medium.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  size: ModalSize.MEDIUM,
}
Medium.parameters = {
  docs: {
    description: {
      story: 'Set the max-width to `680px`',
    },
    source: {
      code: `
<puik-modal
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText"
  :variant="args.variant" 
  :size="ModalSize.MEDIUM" <---- HERE
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  :has-close-button="args.hasCloseButton"
  @close="closeMyModalPleaseFunction"
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

export const Small = Template.bind({})
Small.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  size: ModalSize.SMALL,
}
Small.parameters = {
  docs: {
    description: {
      story: 'Set the max-width to `508px`',
    },
    source: {
      code: `
<puik-modal
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="args.sideButtonText"
  :variant="args.variant" 
  :size="ModalSize.SMALL" <---- HERE
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  :has-close-button="args.hasCloseButton"
  @close="closeMyModalPleaseFunction"
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

export const SideButton = Template.bind({})
SideButton.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  sideButtonText: 'Wow insane button',
}
SideButton.parameters = {
  docs: {
    description: {
      story: 'Add a side button, the emitted event will `buttonSide`',
    },
    source: {
      code: `
<puik-modal
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="Wow insane button" <---- HERE
  :variant="args.variant" 
  :size="args.size"
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  :has-close-button="args.hasCloseButton"
  @close="closeMyModalPleaseFunction"
  @buttonMain="mainAction"
  @buttonSecond="secondAction"
  @buttonSide="sideActionFunction" <---- HERE
>
  Your content
</puik-modal>
      `,
      language: 'html',
    },
  },
}

export const HasCloseButton = Template.bind({})
HasCloseButton.args = {
  title: 'The awesome title',
  mainButtonText: 'Awesome main button',
  secondButtonText: 'Awesome secondary button',
  hasCloseButton: true,
}
HasCloseButton.parameters = {
  docs: {
    description: {
      story:
        'Add a close button and allow you to close the modal by clicking out of the modal',
    },
    source: {
      code: `
<puik-modal
  :title="args.title"
  :main-button-text="args.mainButtonText"
  :second-button-text="args.secondButtonText"
  :side-button-text="Wow insane button" 
  :variant="args.variant" 
  :size="args.size"
  :is-open="args.isOpen"
  :title-icon="args.titleIcon"
  :has-close-button="true"  <---- HERE
  @close="closeMyModalPleaseFunction" <---- HERE
  @buttonMain="mainAction"
  @buttonSecond="secondAction"
  @buttonSide="sideActionFunction"
>
  Your content
</puik-modal>
      `,
      language: 'html',
    },
  },
}
