import { PuikTextarea, PuikLabel } from '@prestashopcorp/puik-components';
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/Textarea',
  component: PuikTextarea,
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'v-model for textarea value',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    id: {
      description: 'Set the textarea id',
      control: 'none',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    name: {
      control: 'text',
      description: 'Set the textarea name',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Set the placeholder',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    autofocus: {
      control: 'boolean',
      description: 'Set the autofocus attribute',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Set the textarea as disabled',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    readonly: {
      control: 'boolean',
      description: 'Set the textarea as readonly',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    required: {
      control: 'boolean',
      description: 'Set the textarea as required',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    hideHint: {
      control: 'boolean',
      description: 'Hide the hint slot',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    autoGrow: {
      control: 'boolean',
      description: 'Set the textarea height as the text increase to maxRows',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: true
        }
      }
    },
    maxLength: {
      control: 'number',
      description: 'Set the max number of character',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    rows: {
      control: 'number',
      description: 'Set the default height',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 2
        }
      }
    },
    maxRows: {
      control: 'number',
      description: 'Set the maximum height',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 2
        }
      }
    },
    error: {
      control: 'text',
      description: 'Set an error message',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    }
  },
  args: {
    id: 'textarea-1',
    name: '',
    placeholder: '',
    autofocus: false,
    required: false,
    hideHint: false,
    readonly: false,
    disabled: false,
    autoGrow: true,
    rows: 2,
    maxRows: 2,
    maxLength: undefined,
    modelValue: ''
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTextarea,
    PuikLabel
  },
  setup() {
    return { args };
  },
  template: `
<puik-textarea v-bind="args" v-model="args.modelValue"></puik-textarea>
  `
});

export const Default: StoryObj = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-textarea id="textarea" v-model="args.modelValue"></puik-textarea>

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
        language: 'html'
      }
    }
  }
};

export const Disabled: StoryObj = {
  render: Template,
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-textarea id="textarea" disabled v-model="value"></puik-textarea>

  <!--HTML/CSS Snippet-->
  <div class="puik-textarea">
    <div class="puik-textarea__wrapper puik-textarea__wrapper--disabled">
      <textarea id="textarea-1" class="puik-textarea__field" name="" placeholder="" disabled="" style="height: 56px;"></textarea>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Readonly: StoryObj = {
  render: Template,
  args: {
    readonly: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-textarea id="textarea" readonly v-model="value"></puik-textarea>

<!--HTML/CSS Snippet-->
<div class="puik-textarea">
  <div class="puik-textarea__wrapper puik-textarea__wrapper--readonly">
    <textarea id="textarea-1" class="puik-textarea__field" name="" placeholder="" disabled="" style="height: 56px;"></textarea>
  </div>
</div>
      `,
        language: 'html'
      }
    }
  }
};

export const Error: StoryObj = {
  render: Template,
  args: {
    error: 'This is an error message'
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-textarea id="textarea" error="This is an error message" v-model="value"></puik-textarea>

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
        language: 'html'
      }
    }
  }
};

export const CharacterCount: StoryObj = {
  render: Template,
  args: {
    maxLength: 50
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 100
      },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-textarea id="textarea" v-model="value" :max-length="50"></puik-textarea>

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
        language: 'html'
      }
    }
  }
};

export const AutoGrow: StoryObj = {
  render: Template,
  args: {
    autoGrow: true,
    rows: 5,
    maxRows: 10
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 200
      },
      description: {
        story:
          'This component will autogrow when text overflow and stop when reaching `maxRows`'
      },
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-textarea id="textarea" v-model="value" :maxRows="5"></puik-textarea>

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
        language: 'html'
      }
    }
  }
};
