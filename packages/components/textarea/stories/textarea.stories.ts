import { ref } from 'vue'
import PuikTextarea from './../src/textarea.vue'
import PuikLabel from './../../label/src/label.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Textarea',
  component: PuikTextarea,
  argTypes: {
    id: {
      description: '',
    },
    name: {
      control: 'text',
      description: '',
    },
    placeholder: {
      control: 'text',
      description: '',
    },
    autofocus: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    readonly: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    required: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    success: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    hideHint: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    autoGrow: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    maxlength: {
      control: 'number',
      description: '',
      table: {
        defaultValue: {
          summary: undefined,
        },
      },
    },
    rows: {
      control: 'number',
      description: '',
      table: {
        defaultValue: {
          summary: 2,
        },
      },
    },
    maxRows: {
      control: 'number',
      description: '',
      table: {
        defaultValue: {
          summary: 2,
        },
      },
    },
    error: {
      control: 'text',
      description: '',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikTextarea,
    PuikLabel,
  },
  setup() {
    const value = ref('')
    return { value, args }
  },
  template: `
<puik-textarea
  v-bind="args"
  v-model="value">
</puik-textarea>
  `,
})

export const Default = Template.bind({})
Default.args = {
  name: '',
  placeholder: '',
  autofocus: false,
  required: false,
  success: false,
  hideHint: false,
  readonly: false,
  disabled: false,
  autoGrow: true,
  rows: 2,
  maxRows: 2,
  maxlength: undefined,
}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
<puik-textarea
  id="textarea"
  v-model="value"
>
</puik-textarea>
      
      <!--HTML/CSS Snippet-->
</label>
<div class="puik-textarea">
  <div class="puik-textarea__character-count">
    <p>50</p>
  </div>
  <div class="puik-textarea__wrapper">
    <textarea id="textarea-1" class="puik-textarea__field" name="" placeholder="" style="height: 56px;"></textarea>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'textarea-1',
  name: '',
  placeholder: '',
  autofocus: false,
  required: false,
  success: false,
  hideHint: false,
  readonly: false,
  disabled: true,
  autoGrow: true,
  rows: 2,
  maxRows: 2,
  maxlength: undefined,
}
Disabled.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
<puik-textarea
  id="textarea"
  disabled
  v-model="value"
>
</puik-textarea>
      
      <!--HTML/CSS Snippet-->
<div class="puik-textarea">
  <div class="puik-textarea__wrapper puik-textarea__wrapper--disabled">
    <textarea id="textarea-1" class="puik-textarea__field" name="" placeholder="" disabled="" style="height: 56px;"></textarea>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}

export const Readonly = Template.bind({})
Readonly.args = {
  id: 'textarea-1',
  name: '',
  placeholder: '',
  autofocus: false,
  required: false,
  success: false,
  hideHint: false,
  readonly: true,
  disabled: false,
  autoGrow: true,
  rows: 2,
  maxRows: 2,
  maxlength: undefined,
}
Readonly.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
<puik-textarea
  id="textarea"
  readonly
  v-model="value"
>
</puik-textarea>
      
      <!--HTML/CSS Snippet-->
<div class="puik-textarea">
  <div class="puik-textarea__wrapper puik-textarea__wrapper--readonly">
    <textarea id="textarea-1" class="puik-textarea__field" name="" placeholder="" disabled="" style="height: 56px;"></textarea>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}

export const Success = Template.bind({})
Success.args = {
  id: 'textarea-1',
  name: '',
  placeholder: '',
  autofocus: false,
  required: false,
  success: true,
  hideHint: false,
  readonly: false,
  disabled: false,
  autoGrow: true,
  rows: 2,
  maxRows: 2,
  maxlength: undefined,
}
Success.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
<puik-textarea
  id="textarea"
  success
  v-model="value"
>
</puik-textarea>
      
      <!--HTML/CSS Snippet-->
<div class="puik-textarea">
  <div class="puik-textarea__wrapper puik-textarea__wrapper--success">
    <textarea id="textarea-1" class="puik-textarea__field" name="" placeholder="" disabled="" style="height: 56px;"></textarea>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}

export const Error = Template.bind({})
Error.args = {
  id: 'textarea-1',
  name: '',
  placeholder: '',
  autofocus: false,
  required: false,
  success: true,
  hideHint: false,
  readonly: false,
  disabled: false,
  autoGrow: true,
  rows: 2,
  maxRows: 2,
  maxlength: undefined,
  error: 'This is an error message',
}
Error.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
<puik-textarea
  id="textarea"
  error="This is an error message"
  v-model="value"
>
</puik-textarea>
      
      <!--HTML/CSS Snippet-->
<div class="puik-textarea">
  <div class="puik-textarea__wrapper puik-textarea__wrapper--error">
    <textarea id="error" class="puik-textarea__field" style="height: 56px;"></textarea>
  </div>
  <div class="puik-textarea__hint">
    <div class="puik-textarea__hint__error">
      <div class="puik-icon material-icons-round puik-textarea__hint__error__icon" style="font-size: 1.25rem;">error</div>
      <span class="puik-textarea__hint__error__text">This is an error</span>
    </div>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}

export const CharacterCount = Template.bind({})
CharacterCount.args = {
  id: 'textarea-1',
  name: '',
  placeholder: '',
  autofocus: false,
  required: false,
  success: false,
  hideHint: false,
  readonly: false,
  disabled: false,
  autoGrow: true,
  rows: 2,
  maxRows: 2,
  maxlength: 50,
}
CharacterCount.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: 100,
    source: {
      code: `
      <!--VueJS Snippet-->
<puik-textarea
  id="textarea"
  v-model="value"
  :maxlength="50"
>
</puik-textarea>
      
      <!--HTML/CSS Snippet-->
<div class="puik-textarea">
  <div class="puik-textarea__character-count puik-textarea__character-count--error">
    <p>0/50</p>
  </div>
  <div class="puik-textarea__wrapper">
    <textarea id="classic" class="puik-textarea__field" style="height: 76px;"></textarea>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}

export const AutoGrow = Template.bind({})
AutoGrow.args = {
  id: 'textarea-1',
  name: '',
  placeholder: '',
  autofocus: false,
  required: false,
  success: false,
  hideHint: false,
  readonly: false,
  disabled: false,
  autoGrow: true,
  rows: 2,
  maxRows: 5,
}
AutoGrow.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: 200,
    description: {
      story:
        'This component will autogrow when text overflow and stop when reaching `maxRows`',
    },
    source: {
      code: `
      <!--VueJS Snippet-->
<puik-textarea
  id="textarea"
  v-model="value"
  :maxRows="5"
>
</puik-textarea>
      
      <!--HTML/CSS Snippet-->
<div class="puik-textarea">
  <div class="puik-textarea__character-count puik-textarea__character-count--error">
    <p>0/50</p>
  </div>
  <div class="puik-textarea__wrapper">
    <textarea id="classic" class="puik-textarea__field" style="height: 76px;"></textarea>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}
