import { action } from '@storybook/addon-actions'
import { PuikButton, PuikSnackbar, PuikSnackbarVariants, type PuikSnackbarOptions } from "@prestashopcorp/puik-components"
import type { Meta, StoryFn, StoryObj, Args } from '@storybook/vue3'

const snackbarVariants = Object.values(PuikSnackbarVariants)
const snackbarVariantSummary = snackbarVariants.join('|')

export default {
  title: 'Components/Snackbar',
  component: PuikSnackbar,
  argTypes: {
    text: {
      description: 'The text of the snackbar',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    variant: {
      description: 'The color variant of the snackbar',
      control: 'select',
      options: snackbarVariants,
      table: {
        type: {
          summary: snackbarVariantSummary,
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    action: {
      description: 'The action label of the snackbar',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    duration: {
      description:
        'Duration in ms before the snackbar closes. Can be disabled if set to 0',
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 3000,
        },
      },
    },
    offset: {
      description:
        'Offset from the bottom edge of the screen. Every Snackbar must have the same offset',
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 0,
        },
      },
    },
    isClosable: {
      description: 'Display a close button or not',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    onClose: {
      description: 'Set the function to call when the snackbar has been closed',
      table: {
        type: {
          summary: '() => void',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
  args: {},
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikButton,
  },
  setup() {
    const open = () => PuikSnackbar(args as PuikSnackbarOptions)
    return { args, open }
  },
  template: `<puik-button @click="open">Display Snackbar</puik-button>`,
})

export const Default = {
  render: Template,
  args: {
    text: 'New category added.',
  },
}

const HasNoCloseButtonTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikButton,
  },
  setup() {
    const open = () => PuikSnackbar(args as PuikSnackbarOptions)
    return { args, open }
  },
  template: `<puik-button @click="open">Display Snackbar</puik-button>`,
})

export const HasNoCloseButton = {
  render: HasNoCloseButtonTemplate,
  args: {
    text: 'New category added.',
    hasCloseButton: false,
  },
}

const WithoutActionTemplate: StoryFn = () => ({
  components: {
    PuikButton,
  },
  setup() {
    const displaySnackbar = () =>
      PuikSnackbar({
        text: 'New category added.',
      })
    const displayErrorSnackbar = () =>
      PuikSnackbar({
        text: 'Unable to update settings.',
        variant: 'danger',
      })
    const displaySuccessSnackbar = () =>
      PuikSnackbar({
        text: 'Settings updated successfully.',
        variant: 'success',
      })
    return { displaySnackbar, displayErrorSnackbar, displaySuccessSnackbar }
  },
  template: `
    <div class="space-x-4">
      <puik-button @click="displaySnackbar">Display Snackbar</puik-button>
      <puik-button @click="displayErrorSnackbar">Display Error Snackbar</puik-button>
      <puik-button @click="displaySuccessSnackbar">Display Success Snackbar</puik-button>
    </div>
  `,
})

export const WithoutAction: StoryObj = {
  render: WithoutActionTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<template>
  <puik-button @click="displaySnackbar">Display Snackbar</puik-button>
  <puik-button @click="displayErrorSnackbar">Display Error Snackbar</puik-button>
  <puik-button @click="displaySuccessSnackbar">Display Success Snackbar</puik-button>
</template>

<script lang="ts" setup>
const displaySnackbar = () =>
  PuikSnackbar({
    text: 'New category added.',
  })
const displayErrorSnackbar = () =>
  PuikSnackbar({
    text: 'Unable to update settings.',
    variant: 'danger',
  })
const displaySuccessSnackbar = () =>
  PuikSnackbar({
    text: 'Settings updated successfully.',
    variant: 'success',
  })
</script>

<!--HTML/CSS Snippet-->
<!--
    Snackbar, show/hide base on snackbar state

    Enter From: "puik-snackbar__transition--enter-from"
    Leave To: "puik-snackbar__transition--leave-to"

    Style bottom calculation:
    If there is only one snack bar displayed the default value will be the offset (32px)
    But if you want to stack the snackbar you may need to do the following computation
    Offset (32px) + First Snackbar offsetHeight + Gap (16px)
    Example: 32 + 52 + 16 = 100px
  -->
<div class="puik-snackbar puik-snackbar--default" style="bottom: 32px">
  <span class="puik-snackbar__text">New category added.</span>
  <button class="puik-snackbar__close-button">
    close
  </button>
</div>

<div class="puik-snackbar puik-snackbar--danger" style="bottom: 100px">
  <span class="puik-snackbar__text">Unable to update settings.</span>
  <button class="puik-snackbar__close-button">
    close
  </button>
</div>

<div class="puik-snackbar puik-snackbar--success" style="bottom: 168px">
  <span class="puik-snackbar__text">Settings updated successfully.</span>
  <button class="puik-snackbar__close-button">
    close
  </button>
</div>
      `,
        language: 'html',
      },
    },
  },
}

const WithActionTemplate: StoryFn = () => ({
  components: {
    PuikButton,
  },
  setup() {
    const displaySnackbar = () =>
      PuikSnackbar({
        text: 'New attribute “Size” added.',
        action: {
          label: 'Cancel',
          callback: action('Default snackbar action callback function'),
        },
      })
    const displayErrorSnackbar = () =>
      PuikSnackbar({
        text: 'Unable to update settings.',
        variant: 'danger',
        action: {
          label: 'Cancel',
          callback: action('Error snackbar action callback function'),
        },
      })
    const displaySuccessSnackbar = () =>
      PuikSnackbar({
        text: 'Settings updated successfully.',
        variant: 'success',
        action: {
          label: 'Cancel',
          callback: action('Success snackbar action callback function'),
        },
      })
    return { displaySnackbar, displayErrorSnackbar, displaySuccessSnackbar }
  },
  template: `
    <div class="space-x-4">
      <puik-button @click="displaySnackbar">Display Snackbar</puik-button>
      <puik-button @click="displayErrorSnackbar">Display Error Snackbar</puik-button>
      <puik-button @click="displaySuccessSnackbar">Display Success Snackbar</puik-button>
    </div>
  `,
})

export const WithAction: StoryObj = {
  render: WithActionTemplate,
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <template>
    <puik-button @click="displaySnackbar">Display Snackbar</puik-button>
    <puik-button @click="displayErrorSnackbar">Display Error Snackbar</puik-button>
    <puik-button @click="displaySuccessSnackbar">Display Success Snackbar</puik-button>
  </template>

  <script lang="ts" setup>
  const displaySnackbar = () =>
    PuikSnackbar({
      text: 'New attribute “Size” added.',
      action: {
        label: 'Cancel',
        callback: action('Default snackbar action callback function'),
      },
    })
  const displayErrorSnackbar = () =>
    PuikSnackbar({
      text: 'Unable to update settings.',
      variant: 'danger',
      action: {
        label: 'Cancel',
        callback: action('Error snackbar action callback function'),
      },
    })
  const displaySuccessSnackbar = () =>
    PuikSnackbar({
      text: 'Unable to update settings.',
      variant: 'success',
      action: {
        label: 'Cancel',
        callback: action('Success snackbar action callback function'),
      },
    })
  </script>

  <!--HTML/CSS Snippet-->
  <!--
      Snackbar, show/hide base on snackbar state

      Enter From: "puik-snackbar__transition--enter-from"
      Leave To: "puik-snackbar__transition--leave-to"

      Style bottom calculation:
      If there is only one snack bar displayed the default value will be the offset (32px)
      But if you want to stack the snackbar you may need to do the following computation
      Offset (32px) + First Snackbar offsetHeight + Gap (16px)
      Example: 32 + 52 + 16 = 100px
    -->
  <div class="puik-snackbar puik-snackbar--default" style="bottom: 32px">
    <span class="puik-snackbar__text">New category added.</span>
    <button class="puik-snackbar__action">Cancel</button>
    <button class="puik-snackbar__close-button">
      close
    </button>
  </div>

  <div class="puik-snackbar puik-snackbar--danger" style="bottom: 100px">
    <span class="puik-snackbar__text">Unable to update settings.</span>
    <button class="puik-snackbar__action">Retry</button>
    <button class="puik-snackbar__close-button">
      close
    </button>
  </div>

  <div class="puik-snackbar puik-snackbar--success" style="bottom: 168px">
    <span class="puik-snackbar__text">Settings updated successfully.</span>
    <button class="puik-snackbar__action">Retry</button>
    <button class="puik-snackbar__close-button">
      close
    </button>
  </div>
        `,
        language: 'html',
      },
    },
  },
}
