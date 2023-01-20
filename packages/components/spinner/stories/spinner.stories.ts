import { spinnerVariants, spinnerSizes } from '../src/spinner'
import PuikSpinner from './../src/spinner.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Spinner',
  component: PuikSpinner,
  argTypes: {
    size: {
      control: 'select',
      description: 'Set the spinner size',
      options: spinnerSizes,
      table: {
        defaultValue: {
          summary: 'normal',
        },
      },
    },
    variant: {
      control: 'select',
      description: 'Set the spinner variant',
      options: spinnerVariants,
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
  },
  args: {
    size: 'normal',
    variant: 'primary',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikSpinner,
  },
  setup() {
    return { args }
  },
  template: `<puik-spinner v-bind="args"></puik-spinner>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-spinner
        :size="normal"
        :variant="primary"
      >
      </puik-spinner>

      <!--HTML/CSS Snippet-->
      <div id="puik-spinner">
        <div class="lds-ring--{primary|success|warning|danger|info} zoom--{small|normal|big} lds-ring zoom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}

export const Small: Story = () => ({
  components: {
    PuikSpinner,
  },
  template: `
    <div class="flex flex-col space-y-4">
    <puik-spinner size="small" variant="success">
    <puik-spinner size="small" variant="warning">
    <puik-spinner size="small" variant="danger">
    <puik-spinner size="small" variant="info">
    </div>
  `,
})

Small.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-spinner size="small" variant="success">
      
      <!--HTML/CSS Snippet-->
      <div id="puik-spinner">
        <div class="lds-ring--success zoom--small lds-ring zoom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}

export const Big: Story = () => ({
  components: {
    PuikSpinner,
  },
  template: `
    <div class="flex flex-col space-y-4">
    <puik-spinner size="big" variant="danger">
    <puik-spinner size="big" variant="success">
    <puik-spinner size="big" variant="warning">
    <puik-spinner size="big" variant="info">
    </div>
  `,
})

Big.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-spinner size="big" variant="danger">
      
      <!--HTML/CSS Snippet-->
      <div id="puik-spinner">
        <div class="lds-ring--danger zoom--big lds-ring zoom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
