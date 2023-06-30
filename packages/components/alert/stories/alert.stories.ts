import { action } from '@storybook/addon-actions'
import { alertVariants } from '../src/alert'
import PuikAlert from './../src/alert.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

const alertVariantsSummary = alertVariants.join('|')

export default {
  title: 'Components/Alert',
  component: PuikAlert,
  argTypes: {
    title: {
      description: 'Set the alert title',
    },
    description: {
      description: 'Set the alert description (also exists as a default slot)',
    },
    variant: {
      control: 'select',
      description: 'Set the alert variant',
      options: alertVariants,
      table: {
        defaultValue: {
          summary: 'success',
        },
        type: {
          summary: alertVariantsSummary,
        },
      },
    },
    disableBorders: {
      description:
        'Disable alert borders (only for info, warning, error variants)',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    buttonLabel: {
      description: 'Label of the button',
    },
    default: {
      control: 'none',
      description: 'Set the alert description',
    },
  },
  args: {
    title: 'Title',
    description: 'This is the description of the success alert.',
    variant: 'success',
    disableBorders: false,
    buttonLabel: 'Button',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikAlert,
  },
  setup() {
    return { args }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <puik-alert
      v-bind="args"
      @click="click"
    ></puik-alert>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<!--
$variants: ${alertVariantsSummary}
-->
<puik-alert
  :title="title"
  :variant="$variants"
  :disable-borders="disableBorders"
  :button-label="buttonLabel"
  @click="click"
>
  This is the description of the success alert
</puik-alert>

<!--HTML/CSS Snippet-->
<!--
$variants: ${alertVariantsSummary}
-->
<div class="puik-alert puik-alert--{$variants}" aria-live="{polite|assertive}">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">check_circle</span>
    <div class="puik-alert__text">
      <p class="puik-alert__title">Title</p>
      <span class="puik-alert__description">This is the description of the success alert.</span>
    </div>
  </div>
  <button class="puik-alert__button">Button</button>
</div>
      `,
      language: 'html',
    },
  },
}

export const Success: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert title="Title">This a success alert with a title and a description.</puik-alert>
     <puik-alert>This a success alert with only a description.</puik-alert>
     <puik-alert title="Title" button-label="Button">This a success alert with a title and a description and a button.</puik-alert>
     <puik-alert button-label="Button">This a success alert with a description and a button.</puik-alert>
    </div>
  `,
})

Success.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-alert
  title="Title"
  variant="success"
  button-label="Button"
  @click="click"
>
  This a success alert with a title and a description.
</puik-alert>

<!--HTML/CSS Snippet-->
<div class="puik-alert puik-alert--success" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">check_circle</span>
    <div class="puik-alert__text">
      <p class="puik-alert__title">Title</p>
      <span class="puik-alert__description">This a success alert with a title and a description.</span>
    </div>
  </div>
  <button class="puik-alert__button">Button</button>
</div>
      `,
      language: 'html',
    },
  },
}

export const Warning: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
      <puik-alert variant="warning" title="Title">This a warning alert with a title and a description.</puik-alert>
      <puik-alert title="Title" variant="warning" :disable-borders="true">This a warning alert with disabled borders</puik-alert>
      <puik-alert variant="warning">This a warning alert with only a description.</puik-alert>
      <puik-alert variant="warning" title="Title" button-label="Button">This a warning alert with a title and a description and a button.</puik-alert>
      <puik-alert variant="warning" button-label="Button">This a warning alert with a description and a button.</puik-alert>
    </div>
  `,
})

Warning.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-alert
  title="Title"
  variant="warning"
  :disabled-borders="true|false"
  button-label="Button"
  @click="click"
>
  This a warning alert with a title and a description.
</puik-alert>

<!--HTML/CSS Snippet-->
<div class="puik-alert puik-alert--warning puik-alert--no-borders" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">warning</span>
    <div class="puik-alert__text">
      <p class="puik-alert__title">Title</p>
      <span class="puik-alert__description">This a warning alert with a title and a description.</span>
    </div>
  </div>
  <button class="puik-alert__button">Button</button>
</div>
      `,
      language: 'html',
    },
  },
}

export const Info: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert variant="info" title="Title">This a info alert with a title and a description.</puik-alert>
     <puik-alert variant="info" title="Title" :disable-borders="true">This a info alert with disabled borders</puik-alert>
     <puik-alert variant="info">This a info alert with only a description.</puik-alert>
     <puik-alert variant="info" title="Title" button-label="Button">This a info alert with a title and a description and a button.</puik-alert>
     <puik-alert variant="info" button-label="Button">This a info alert with a description and a button.</puik-alert>
    </div>
  `,
})

Info.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
<puik-alert
  title="Title"
  variant="info"
  :disabled-borders="true|false"
  button-label="Button"
  @click="click"
>
  This a info alert with a title and a description.
</puik-alert>

<!--HTML/CSS Snippet-->
<div class="puik-alert puik-alert--info puik-alert--no-borders" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">info</span>
    <div class="puik-alert__text">
      <p class="puik-alert__title">Title</p>
      <span class="puik-alert__description">This a info alert with a title and a description.</span>
    </div>
  </div>
  <button class="puik-alert__button">Button</button>
</div>
      `,
      language: 'html',
    },
  },
}

export const Danger: Story = () => ({
  components: {
    PuikAlert,
  },
  template: `
    <div class="flex flex-col space-y-4">
     <puik-alert variant="danger" title="Title">This a danger alert with a title and a description.</puik-alert>
     <puik-alert variant="danger" title="Title" :disable-borders="true">This a danger alert with disabled borders</puik-alert>
     <puik-alert variant="danger">This a danger alert with only a description.</puik-alert>
     <puik-alert variant="danger" title="Title" button-label="Button">This a danger alert with a title and a description and a button.</puik-alert>
     <puik-alert variant="danger" button-label="Button">This a danger alert with a description and a button.</puik-alert>
    </div>
  `,
})

Danger.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-alert
  title="Title"
  variant="danger"
  :disabled-borders="true|false"
  button-label="Button"
  @click="click"
>
  This a info alert with a title and a description.
</puik-alert>

<!--HTML/CSS Snippet-->
<div class="puik-alert puik-alert--danger puik-alert--no-borders" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">danger</span>
    <div class="puik-alert__text">
      <p class="puik-alert__title">Title</p>
      <span class="puik-alert__description">This a danger alert with a title and a description.</span>
    </div>
  </div>
  <button class="puik-alert__button">Button</button>
</div>
      `,
      language: 'html',
    },
  },
}
