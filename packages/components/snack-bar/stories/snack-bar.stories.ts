import { snackBarVariants } from '../src/snack-bar'
import PuikSnackBar from './../src/snack-bar.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/SnackBar',
  component: PuikSnackBar,
  argTypes: {
    text: {
      description: 'The text of the snackbar',
    },
    action: {
      description: 'The action label of the snackbar',
    },
    variant: {
      description: 'Set the snack bar variant',
      options: snackBarVariants,
    },
  },
} as Meta

const DefaultTemplateWithoutAction: Story = (args: Args) => ({
  components: {
    PuikSnackBar,
  },
  setup() {
    return { args }
  },
  template: `<puik-snack-bar :text="'${args.text}'"></puik-snack-bar>`,
})

export const DefaultWithoutAction = DefaultTemplateWithoutAction.bind({})
DefaultWithoutAction.args = {
  text: 'Hello world',
}
DefaultWithoutAction.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-snack-bar text="Hello world" />

      <!--HTML/CSS Snippet-->
      <div class="puik-snack-bar puik-snack-bar--default">
        <span class="puik-snack-bar__text">Hello world</span>
        <span class="puik-snack-bar__right">
          <svg class="puik-snack-bar__close-button" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2496 0.758297C11.0939 0.602253 10.8825 0.514559 10.6621 0.514559C10.4417 0.514559 10.2303 0.602253 10.0746 0.758297L5.99961 4.82496L1.92461 0.749964C1.76892 0.59392 1.55754 0.506226 1.33711 0.506226C1.11668 0.506226 0.905302 0.59392 0.749609 0.749964C0.424609 1.07496 0.424609 1.59996 0.749609 1.92496L4.82461 5.99996L0.749609 10.075C0.424609 10.4 0.424609 10.925 0.749609 11.25C1.07461 11.575 1.59961 11.575 1.92461 11.25L5.99961 7.17496L10.0746 11.25C10.3996 11.575 10.9246 11.575 11.2496 11.25C11.5746 10.925 11.5746 10.4 11.2496 10.075L7.17461 5.99996L11.2496 1.92496C11.5663 1.6083 11.5663 1.07496 11.2496 0.758297Z" fill="white"></path></svg>
        </span>
      </div>
      `,
      language: 'html',
    },
  },
}

const DefaultTemplateWithAction: Story = (args: Args) => ({
  components: {
    PuikSnackBar,
  },
  setup() {
    const onAction = () => {
      console.log('onAction')
    }
    return { args, onAction }
  },
  template: `<puik-snack-bar :text="'${args.text}'" :action="'${args.action}'" @on-action="onAction"></puik-snack-bar>`,
})
export const DefaultWithAction = DefaultTemplateWithAction.bind({})
DefaultWithAction.args = {
  text: 'Hello world',
  action: 'Cancel',
}
DefaultWithAction.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-snack-bar text="Hello world" action="Cancel" />

      <!--HTML/CSS Snippet-->
      <div class="puik-snack-bar puik-snack-bar--default">
        <span class="puik-snack-bar__text">Hello world</span>
        <span class="puik-snack-bar__right">
          <span class="puik-snack-bar__right__action">Cancel</span>
          <svg class="puik-snack-bar__close-button" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2496 0.758297C11.0939 0.602253 10.8825 0.514559 10.6621 0.514559C10.4417 0.514559 10.2303 0.602253 10.0746 0.758297L5.99961 4.82496L1.92461 0.749964C1.76892 0.59392 1.55754 0.506226 1.33711 0.506226C1.11668 0.506226 0.905302 0.59392 0.749609 0.749964C0.424609 1.07496 0.424609 1.59996 0.749609 1.92496L4.82461 5.99996L0.749609 10.075C0.424609 10.4 0.424609 10.925 0.749609 11.25C1.07461 11.575 1.59961 11.575 1.92461 11.25L5.99961 7.17496L10.0746 11.25C10.3996 11.575 10.9246 11.575 11.2496 11.25C11.5746 10.925 11.5746 10.4 11.2496 10.075L7.17461 5.99996L11.2496 1.92496C11.5663 1.6083 11.5663 1.07496 11.2496 0.758297Z" fill="white"></path></svg>
        </span>
      </div>
      `,
      language: 'html',
    },
  },
}

const DangerTemplateWithoutAction: Story = (args: Args) => ({
  components: {
    PuikSnackBar,
  },
  setup() {
    return { args }
  },
  template: `<puik-snack-bar :text="'${args.text}'" :variant="'danger'"></puik-snack-bar>`,
})

export const DangerWithoutAction = DangerTemplateWithoutAction.bind({})
DangerWithoutAction.args = {
  text: 'This is dangerous',
}
DangerWithoutAction.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-snack-bar text="This is dangerous" variant="danger" />

      <!--HTML/CSS Snippet-->
      <div class="puik-snack-bar puik-snack-bar--danger">
        <span class="puik-snack-bar__text">This is dangerous</span>
        <span class="puik-snack-bar__right">
          <svg class="puik-snack-bar__close-button" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2496 0.758297C11.0939 0.602253 10.8825 0.514559 10.6621 0.514559C10.4417 0.514559 10.2303 0.602253 10.0746 0.758297L5.99961 4.82496L1.92461 0.749964C1.76892 0.59392 1.55754 0.506226 1.33711 0.506226C1.11668 0.506226 0.905302 0.59392 0.749609 0.749964C0.424609 1.07496 0.424609 1.59996 0.749609 1.92496L4.82461 5.99996L0.749609 10.075C0.424609 10.4 0.424609 10.925 0.749609 11.25C1.07461 11.575 1.59961 11.575 1.92461 11.25L5.99961 7.17496L10.0746 11.25C10.3996 11.575 10.9246 11.575 11.2496 11.25C11.5746 10.925 11.5746 10.4 11.2496 10.075L7.17461 5.99996L11.2496 1.92496C11.5663 1.6083 11.5663 1.07496 11.2496 0.758297Z" fill="white"></path></svg>
        </span>
      </div>
      `,
      language: 'html',
    },
  },
}

const DangerTemplateWithAction: Story = (args: Args) => ({
  components: {
    PuikSnackBar,
  },
  setup() {
    const onAction = () => {
      console.log('onAction')
    }
    return { args, onAction }
  },
  template: `<puik-snack-bar :text="'${args.text}'" :action="'${args.action}'" :variant="'danger'" @on-action="onAction"></puik-snack-bar>`,
})

export const DangerWithAction = DangerTemplateWithAction.bind({})
DangerWithAction.args = {
  text: 'This is dangerous',
  action: 'Retry',
}
DangerWithAction.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-snack-bar text="This is dangerous" action="Retry" variant="danger" />

      <!--HTML/CSS Snippet-->
      <div class="puik-snack-bar puik-snack-bar--danger">
        <span class="puik-snack-bar__text"This is dangerous</span>
        <span class="puik-snack-bar__right">
          <span class="puik-snack-bar__right__action">Retry</span>
          <svg class="puik-snack-bar__close-button" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2496 0.758297C11.0939 0.602253 10.8825 0.514559 10.6621 0.514559C10.4417 0.514559 10.2303 0.602253 10.0746 0.758297L5.99961 4.82496L1.92461 0.749964C1.76892 0.59392 1.55754 0.506226 1.33711 0.506226C1.11668 0.506226 0.905302 0.59392 0.749609 0.749964C0.424609 1.07496 0.424609 1.59996 0.749609 1.92496L4.82461 5.99996L0.749609 10.075C0.424609 10.4 0.424609 10.925 0.749609 11.25C1.07461 11.575 1.59961 11.575 1.92461 11.25L5.99961 7.17496L10.0746 11.25C10.3996 11.575 10.9246 11.575 11.2496 11.25C11.5746 10.925 11.5746 10.4 11.2496 10.075L7.17461 5.99996L11.2496 1.92496C11.5663 1.6083 11.5663 1.07496 11.2496 0.758297Z" fill="white"></path></svg>
        </span>
      </div>
      `,
      language: 'html',
    },
  },
}
