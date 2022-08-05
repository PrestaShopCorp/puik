import PuikModal from '../src/modal.vue'
import type { Args, Meta, Story } from '@storybook/vue3'

export default {
  title: 'Components/Modal',
  component: PuikModal,
  argTypes: {
    'v-model': {
      description: 'Set the modal visibility',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    appendToBody: {
      description: 'Append the modal to the body',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    title: {
      description: 'Set the modal title',
      control: 'text',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    width: {
      description: 'Set the modal width',
      control: 'text',
      table: {
        defaultValue: {
          summary: '50%',
        },
      },
    },
    top: {
      description: 'Set the modal top',
      control: 'text',
      table: {
        defaultValue: {
          summary: '15vh',
        },
      },
    },
    center: {
      description: 'Center the modal content',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    customClass: {
      description: 'Set the modal custom class',
      control: 'text',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    showClose: {
      description: 'Show the close button',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikModal,
  },
  setup() {
    return { args }
  },
  template: `<puik-modal v-bind="args" v-model="args['v-model']">
    <p>modal content</p>
    <template #footer>
      <div>Footer section</div>
    </template>
  </puik-modal>`,
})

export const Default = Template.bind({})
Default.args = {
  'v-model': true,
  appendToBody: false,
  title: 'Modal title',
  width: '50%',
  top: '15vh',
  center: false,
  customClass: '',
  showClose: true,
}

Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-modal v-model="dialogVisible" title="Modal title">
        <p>modal content</p>
        <template #footer>
          <div>Footer section</div>
        </template>
      </puik-modal>
      <!--HTML/CSS Snippet-->
      `,
      language: 'html',
    },
  },
}

export const closeButtonDisabled = Template.bind({})
closeButtonDisabled.args = {
  'v-model': true,
  appendToBody: false,
  title: 'Modal title',
  width: '50%',
  top: '15vh',
  center: false,
  customClass: '',
  showClose: false,
}

closeButtonDisabled.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-modal v-model="dialogVisible" :show-close="false" title="Modal title">
        <p>modal content</p>
        <template #footer>
          <div>Footer section</div>
        </template>
      </puik-modal>
      <!--HTML/CSS Snippet-->
      `,
      language: 'html',
    },
  },
}

export const centerContent = Template.bind({})
centerContent.args = {
  'v-model': true,
  appendToBody: false,
  title: 'Modal title',
  width: '50%',
  top: '15vh',
  center: true,
  customClass: '',
  showClose: true,
}

centerContent.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-modal v-model="dialogVisible" :show-close="true" title="Modal title" center>
        <p>modal content</p>
        <template #footer>
          <div>Footer section</div>
        </template>
      </puik-modal>
      <!--HTML/CSS Snippet-->
      `,
      language: 'html',
    },
  },
}
