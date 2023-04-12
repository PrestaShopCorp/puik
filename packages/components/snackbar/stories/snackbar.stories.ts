import { action } from '@storybook/addon-actions'
import { PuikSnackbar } from '..'
import { snackBarVariants, type SnackBarOptions } from '../src/snackbar'
import { PuikButton } from '../../button/index'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Snackbar',
  component: PuikSnackbar,
  argTypes: {
    text: {
      description: 'The text of the snackbar',
    },
    variant: {
      description: 'The color variant of the snackbar',
      control: 'select',
      options: snackBarVariants,
    },
    action: {
      description: 'The action label of the snackbar',
      control: 'object',
    },
    duration: {
      description:
        'Duration in ms before the snackbar closes. Can be disabled if set to 0',
      control: 'number',
    },
    offset: {
      description:
        'Offset from the bottom edge of the screen. Every Snackbar must have the same offset',
      control: 'number',
    },
    onClose: {
      description: 'Set the function to call when the snackbar has been closed',
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikButton,
  },
  setup() {
    const open = () => PuikSnackbar(args as SnackBarOptions)
    return { args, open }
  },
  template: `
    <puik-button @click="open">Display Snackbar</puik-button>
  `,
})

export const Default = Template.bind({})

Default.args = {
  text: 'New category added.',
}

export const WithoutAction: Story = () => ({
  components: {
    PuikButton,
  },
  setup() {
    const displaySnackBar = () =>
      PuikSnackbar({
        text: 'New category added.',
      })
    const displayErrorSnackBar = () =>
      PuikSnackbar({
        text: 'Unable to update settings.',
        variant: 'danger',
      })
    return { displaySnackBar, displayErrorSnackBar }
  },
  template: `
    <div class="space-x-4">
      <puik-button @click="displaySnackBar">Display Snackbar</puik-button>
      <puik-button @click="displayErrorSnackBar">Display Error Snackbar</puik-button>
    </div>
  `,
})

WithoutAction.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <!--VueJS Snippet-->
      <template>
        <puik-button @click="displaySnackBar">Display Snackbar</puik-button>
        <puik-button @click="displayErrorSnackBar">Display Error Snackbar</puik-button>
      </template>
      
      <script lang="ts" setup>
      const displaySnackBar = () =>
        PuikSnackbar({
          text: 'New category added.',
        })
      const displayErrorSnackBar = () =>
        PuikSnackbar({
          text: 'Unable to update settings.',
          variant: 'danger',
        })
      </script>

      <!--HTML/CSS Snippet-->
      <!--
          Snackbar, show/hide base on snackbar state

          Enter From: "puik-snack-bar__transition--enter-from"
          Leave To: "puik-snack-bar__transition--leave-to"

          Style bottom calculation:
          If there is only one snack bar displayed the default value will be the offset (32px)
          But if you want to stack the snackbar you may need to do the following computation
          Offset (32px) + First Snackbar offsetHeight + Gap (16px)
          Example: 32 + 52 + 16 = 100px
        -->
      <div class="puik-snack-bar puik-snack-bar--default" style="bottom: 32px">
        <span class="puik-snack-bar__text">New category added.</span>
        <button class="puik-snack-bar__close-button">
          close
        </button>
      </div>

      <div class="puik-snack-bar puik-snack-bar--danger" style="bottom: 100px">
        <span class="puik-snack-bar__text">Unable to update settings.</span>
        <button class="puik-snack-bar__close-button">
          close
        </button>
      </div>
      `,
      language: 'html',
    },
  },
}

export const WithAction: Story = () => ({
  components: {
    PuikButton,
  },
  setup() {
    const displaySnackBar = () =>
      PuikSnackbar({
        text: 'New attribute “Size” added.',
        action: {
          label: 'Cancel',
          callback: action('Default snackbar action callback function'),
        },
      })
    const displayErrorSnackBar = () =>
      PuikSnackbar({
        text: 'Unable to update settings.',
        variant: 'danger',
        action: {
          label: 'Cancel',
          callback: action('Error snackbar action callback function'),
        },
      })
    return { displaySnackBar, displayErrorSnackBar }
  },
  template: `
    <div class="space-x-4">
      <puik-button @click="displaySnackBar">Display Snackbar</puik-button>
      <puik-button @click="displayErrorSnackBar">Display Error Snackbar</puik-button>
    </div>
  `,
})

WithAction.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <template>
        <puik-button @click="displaySnackBar">Display Snackbar</puik-button>
        <puik-button @click="displayErrorSnackBar">Display Error Snackbar</puik-button>
      </template>

      <script lang="ts" setup>
      const displaySnackBar = () =>
        PuikSnackbar({
          text: 'New attribute “Size” added.',
          action: {
            label: 'Cancel',
            callback: action('Default snackbar action callback function'),
          },
        })
      const displayErrorSnackBar = () =>
        PuikSnackbar({
          text: 'Unable to update settings.',
          variant: 'danger',
          action: {
            label: 'Cancel',
            callback: action('Error snackbar action callback function'),
          },
        })
      </script>

      <!--HTML/CSS Snippet-->
      <!--
          Snackbar, show/hide base on snackbar state

          Enter From: "puik-snack-bar__transition--enter-from"
          Leave To: "puik-snack-bar__transition--leave-to"

          Style bottom calculation:
          If there is only one snack bar displayed the default value will be the offset (32px)
          But if you want to stack the snackbar you may need to do the following computation
          Offset (32px) + First Snackbar offsetHeight + Gap (16px)
          Example: 32 + 52 + 16 = 100px
        -->
      <div class="puik-snack-bar puik-snack-bar--default" style="bottom: 32px">
        <span class="puik-snack-bar__text">New category added.</span>
        <button class="puik-snack-bar__action">Cancel</button>
        <button class="puik-snack-bar__close-button">
          close
        </button>
      </div>

      <div class="puik-snack-bar puik-snack-bar--danger" style="bottom: 100px">
        <span class="puik-snack-bar__text">Unable to update settings.</span>
        <button class="puik-snack-bar__action">Retry</button>
        <button class="puik-snack-bar__close-button">
          close
        </button>
      </div>
      `,
      language: 'html',
    },
  },
}
