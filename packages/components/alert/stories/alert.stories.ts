import { action } from '@storybook/addon-actions';
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';
import { PuikAlert, PuikAlertVariants, PuikButton, PuikLink } from '@prestashopcorp/puik-components';
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3';
import { ref } from 'vue';

const alertVariants = Object.values(PuikAlertVariants);
const alertVariantsSummary = alertVariants.join('|');

const alertAriaLive = Object.values(PuikAriaLive);
const alertAriaLiveSummary = alertAriaLive.join('|');

export default {
  title: 'Components/Alert',
  component: PuikAlert,
  argTypes: {
    title: {
      description: 'Sets the alert title',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    description: {
      description: 'Sets the alert description (also exists as a default slot)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    buttonLabel: {
      description: 'Label of the Action button',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    linkLabel: {
      description: 'Label of the Link button',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    variant: {
      control: 'select',
      description: 'Sets the alert variant',
      options: alertVariants,
      table: {
        type: {
          summary: alertVariantsSummary
        },
        defaultValue: {
          summary: 'success'
        }
      }
    },
    isClosable: {
      description: 'Displays a close button which emits a `close event` on click',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    disableBorders: {
      description: 'Disables alert borders',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    buttonWrapLabel: {
      description: 'Sets the carriage return for label of Action and Link buttons',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    default: {
      description: 'Sets the alert description via the `default slot`. Useful if you want to create a description a little more complex than a simple text and integrate other puik elements like for example a classic `puik-link` (which can be an alternative to the Link button - see example below)'
    },
    leftIconBtn: {
      description: 'Sets icon on the left side of the Action button (from Material Symbols: https://fonts.google.com/icons)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    rightIconBtn: {
      description: 'Sets icon on the right side of the Action button (from Material Symbols: https://fonts.google.com/icons)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    leftIconLink: {
      description: 'Sets icon on the left side of the Link button (from Material Symbols: https://fonts.google.com/icons)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    rightIconLink: {
      description: 'Sets icon on the right side of the Link button (from Material Symbols: https://fonts.google.com/icons)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    internalLink: {
      description: 'Internal link for the Link button (use vue `router-link` under the hood)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    externalLink: {
      description: 'External link for the Link button (use a native `a` tag link under the hood)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    ariaLive: {
      description: 'Option for "aria-live" attribute',
      control: 'select',
      options: alertAriaLive,
      table: {
        defaultValue: {
          summary: 'polite'
        },
        type: {
          summary: alertAriaLiveSummary
        }
      }
    },
    ariaLabelBtn: {
      description: 'ARIA label for the Action button',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    ariaLabelLink: {
      description: 'ARIA label for the Link button',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    dataTest: {
      control: 'text',
      description: 'Sets the data-test attribute for the alert components `title-${dataTest}` `description-${dataTest}` `button-${dataTest}` `close-${dataTest}` `link-${dataTest}`',
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
    title: 'Title',
    description: 'This is the description of the success alert.',
    buttonLabel: 'Action',
    linkLabel: 'Learn more',
    variant: 'success',
    isClosable: false,
    disableBorders: false,
    buttonWrapLabel: false,
    leftIconBtn: undefined,
    rightIconBtn: undefined,
    leftIconLink: undefined,
    rightIconLink: undefined,
    internalLink: undefined,
    externalLink: undefined,
    ariaLabelBtn: undefined,
    ariaLabelLink: undefined,
    ariaLive: 'polite',
    dataTest: undefined
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikAlert
  },
  setup() {
    return { args };
  },
  methods: {
    click: action('click'),
    close: action('close'),
    clickLink: action('clickLink')
  },
  template: `
    <puik-alert
      v-bind="args"
      @click="click"
      @click-link="clickLink"
      @close="close"
    ></puik-alert>`
});

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-alert
    :title="title"
    :variant="$variants"
    :button-label="Action"
    :link-label="Learn more"
    @click="handleClickAction"
    @click-link="handleClickLink"
    @close="handleClose"
  >
    This is the description of the success alert
  </puik-alert>

  <!--HTML/CSS Snippet-->
  <div class="puik-alert puik-alert--success" role="alert" aria-labelledby="title-5929" aria-describedby="description-5929" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
      <div class="puik-alert__content">
        <div class="puik-icon puik-alert__icon" aria-label="check_circle icon" role="img" style="font-size: 1.25rem;">check_circle</div>
        <div class="puik-alert__text">
          <h4 id="title-5929" class="puik-alert__title">Title</h4>
          <p id="description-5929" class="puik-alert__description">This is the description of the success alert.</p>
        </div>
      </div>
      <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
        Learn more
      </button>
      <button class="puik-button puik-button--success puik-button--md puik-button--no-wrap puik-alert__button" role="button">
        Action
      </button>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Variants: StoryObj = {
  render: () => ({
    components: {
      PuikAlert
    },
    template: `
    <div class="flex flex-col gap-y-4">
        <puik-alert
          title="Success"
          description="this is a description"
          variant="success"
          button-label="Action"
          link-label="Learn more"
        />
        <puik-alert
          title="Info"
          description="this is a description"
          variant="info"
          button-label="Action"
          link-label="Learn more"
        />
        <puik-alert
          title="Warning"
          description="this is a description"
          variant="warning"
          button-label="Action"
          link-label="Learn more"
        />
        <puik-alert
          title="Danger"
          description="this is a description"
          variant="danger"
          button-label="Action"
          link-label="Learn more"
        />
    </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <!--
  $variants: ${alertVariantsSummary}
  -->
  <puik-alert
    title="Success"
    description="this is a description"
    variant="success"
    button-label="Action"
    link-label="Learn more"
  />
  <puik-alert
    title="Info"
    description="this is a description"
    variant="info"
    button-label="Action"
    link-label="Learn more"
  />
  <puik-alert
    title="Warning"
    description="this is a description"
    variant="warning"
    button-label="Action"
    link-label="Learn more"
  />
  <puik-alert
    title="Danger"
    description="this is a description"
    variant="danger"
    button-label="Action"
    link-label="Learn more"
  />
    This a success alert with a title and a description.
  </puik-alert>

  <!--HTML/CSS Snippet-->
  <div class="puik-alert puik-alert--success" role="alert" aria-labelledby="title-1437" aria-describedby="description-1437" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
      <div class="puik-alert__content">
        <div class="puik-icon puik-alert__icon" aria-label="check_circle icon" role="img" style="font-size: 1.25rem;">check_circle</div>
        <div class="puik-alert__text">
          <h4 id="title-1437" class="puik-alert__title">Success</h4>
          <p id="description-1437" class="puik-alert__description">this is a description</p>
        </div>
      </div>
      <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
        Learn more
      </button>
      <button class="puik-button puik-button--success puik-button--md puik-button--no-wrap puik-alert__button" role="button">
        Action
      </button>
    </div>

  </div>

  <div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-1065" aria-describedby="description-1065" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
      <div class="puik-alert__content">
        <div class="puik-icon puik-alert__icon" aria-label="info icon" role="img" style="font-size: 1.25rem;">info</div>
        <div class="puik-alert__text">
          <h4 id="title-1065" class="puik-alert__title">Info</h4>
          <p id="description-1065" class="puik-alert__description">this is a description</p>
        </div>
      </div>
      <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
        Learn more
      </button>
      <button class="puik-button puik-button--info puik-button--md puik-button--no-wrap puik-alert__button" role="button">
        Action
      </button>
    </div>

  </div>

  <div class="puik-alert puik-alert--warning" role="alert" aria-labelledby="title-6761" aria-describedby="description-6761" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
      <div class="puik-alert__content">
        <div class="puik-icon puik-alert__icon" aria-label="warning icon" role="img" style="font-size: 1.25rem;">warning</div>
        <div class="puik-alert__text">
          <h4 id="title-6761" class="puik-alert__title">Warning</h4>
          <p id="description-6761" class="puik-alert__description">this is a description</p>
        </div>
      </div>
      <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
        Learn more
      </button>
      <button class="puik-button puik-button--warning puik-button--md puik-button--no-wrap puik-alert__button" role="button">
        Action
      </button>
    </div>
  </div>

  <div class="puik-alert puik-alert--danger" role="alert" aria-labelledby="title-1684" aria-describedby="description-1684" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
      <div class="puik-alert__content">
        <div class="puik-icon puik-alert__icon" aria-label="error icon" role="img" style="font-size: 1.25rem;">error</div>
        <div class="puik-alert__text">
          <h4 id="title-1684" class="puik-alert__title">Danger</h4>
          <p id="description-1684" class="puik-alert__description">this is a description</p>
        </div>
      </div>
      <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
        Learn more
      </button>
      <button class="puik-button puik-button--danger puik-button--md puik-button--no-wrap puik-alert__button" role="button">
        Action
      </button>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const VariantsWithoutBorder: StoryObj = {
  render: () => ({
    components: {
      PuikAlert
    },
    template: `
    <div class="flex flex-col gap-y-4">
        <puik-alert
          title="Success"
          description="this is a description"
          variant="success"
          button-label="Action"
          link-label="Learn more"
          disable-borders
        />
        <puik-alert
          title="Info"
          description="this is a description"
          variant="info"
          button-label="Action"
          link-label="Learn more"
          disable-borders
        />
        <puik-alert
          title="Warning"
          description="this is a description"
          variant="warning"
          button-label="Action"
          link-label="Learn more"
          disable-borders
        />
        <puik-alert
          title="Danger"
          description="this is a description"
          variant="danger"
          button-label="Action"
          link-label="Learn more"
          disable-borders
        />
    </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <!--
  $variants: ${alertVariantsSummary}
  -->
  <puik-alert
    title="Success"
    description="this is a description"
    variant="success"
    button-label="Action"
    link-label="Learn more"
    disable-borders
  />
  <puik-alert
    title="Info"
    description="this is a description"
    variant="info"
    button-label="Action"
    link-label="Learn more"
    disable-borders
  />
  <puik-alert
    title="Warning"
    description="this is a description"
    variant="warning"
    button-label="Action"
    link-label="Learn more"
    disable-borders
  />
  <puik-alert
    title="Danger"
    description="this is a description"
    variant="danger"
    button-label="Action"
    link-label="Learn more"
    disable-borders
  />
    This a success alert with a title and a description.
  </puik-alert>

  <!--HTML/CSS Snippet-->
  <div class="puik-alert puik-alert--success puik-alert--no-borders" role="alert" aria-labelledby="title-5065" aria-describedby="description-5065" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="check_circle icon" role="img">check_circle</div>
          <div class="puik-alert__text">
              <h4 id="title-5065" class="puik-alert__title">Success</h4>
              <p id="description-5065" class="puik-alert__description">this is a description</p>
          </div>
        </div>
        <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
          Learn more
        </button>
        <button class="puik-button puik-button--success puik-button--md puik-button--no-wrap puik-alert__button" role="button">
          Action
        </button>
    </div>
  </div>

  <div class="puik-alert puik-alert--info puik-alert--no-borders" role="alert" aria-labelledby="title-574" aria-describedby="description-574" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
          <div class="puik-alert__text">
              <h4 id="title-574" class="puik-alert__title">Info</h4>
              <p id="description-574" class="puik-alert__description">this is a description</p>
          </div>
        </div>
        <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
          Learn more
        </button>
        <button class="puik-button puik-button--info puik-button--md puik-button--no-wrap puik-alert__button" role="button">
          Action
        </button>
    </div>
  </div>

  <div class="puik-alert puik-alert--warning puik-alert--no-borders" role="alert" aria-labelledby="title-5783" aria-describedby="description-5783" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="warning icon" role="img">warning</div>
          <div class="puik-alert__text">
              <h4 id="title-5783" class="puik-alert__title">Warning</h4>
              <p id="description-5783" class="puik-alert__description">this is a description</p>
          </div>
        </div>
        <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
          Learn more
        </button>
        <button class="puik-button puik-button--warning puik-button--md puik-button--no-wrap puik-alert__button" role="button">
          Action
        </button>
    </div>
  </div>

  <div class="puik-alert puik-alert--danger puik-alert--no-borders" role="alert" aria-labelledby="title-8888" aria-describedby="description-8888" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="error icon" role="img">error</div>
          <div class="puik-alert__text">
              <h4 id="title-8888" class="puik-alert__title">Danger</h4>
              <p id="description-8888" class="puik-alert__description">this is a description</p>
          </div>
        </div>
        <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
          Learn more
        </button>
        <button class="puik-button puik-button--danger puik-button--md puik-button--no-wrap puik-alert__button" role="button">
          Action
        </button>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const IsClosable = {
  render: () => ({
    components: {
      PuikAlert,
      PuikButton
    },
    setup() {
      const showAlert = ref(true);
      return { showAlert };
    },

    template: `
      <puik-alert
        v-if="showAlert"
        title="Closable alert"
        description="Click on close button"
        variant="info"
        button-label="Action"
        link-label="Learn more"
        is-closable
        @close="showAlert = false"
      />

      <puik-button
        v-if="!showAlert"
        @click="showAlert = !showAlert">
          refresh alert
      </puik-button>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  // const showAlert = ref(true)

  <puik-alert
    v-if="showAlert"
    title="Closable alert"
    description="this is a description"
    variant="info"
    button-label="Action"
    link-label="Learn more"
    is-closable
    @close="showAlert = false"
  />

  <!--HTML/CSS Snippet-->
  <div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-9572" aria-describedby="description-9572" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
          <div class="puik-alert__text">
              <h4 id="title-9572" class="puik-alert__title">Closable alert</h4>
              <p id="description-9572" class="puik-alert__description">this is a description</p>
          </div>
        </div>
        <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
          Learn more
        </button>
        <button class="puik-button puik-button--info puik-button--md puik-button--no-wrap puik-alert__button" role="button">
          Action
        </button>
    </div>
    <div class="puik-icon puik-alert__close" style="font-size: 1.5rem;" aria-label="close icon" role="img">close</div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const ButtonWrapLabel: StoryObj = {
  render: () => ({
    components: {
      PuikAlert
    },
    template: `
      <div class="flex flex-col gap-y-4">
       <puik-alert variant="info" title="buttonWrapLabel to true" button-label="Action Button with a very long label" link-label="Link button with a very long label" :button-wrap-Label="true">
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
       </puik-alert>
       <puik-alert variant="info" title="buttonWrapLabel to false (by default)" button-label="Action button with a very long label" link-label="Link button with a very long label">
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
        This an alert with a very long description.
       </puik-alert>
      </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-alert
    title="buttonWrapLabel to true"
    button-label="Action button with a very long label"
    link-label="Link button with a very long label"
    button-wrap-Label
  >
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
  </puik-alert>

  <puik-alert
    title="buttonWrapLabel to false (by default)"
    button-label="Action button with a very long label"
    link-label="Link button with a very long label"
  >
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
    This an alert with a very long description.
  </puik-alert>

  <!--HTML/CSS Snippet-->
  <div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-3605" aria-describedby="description-3605" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
          <div class="puik-alert__text">
              <h4 id="title-3605" class="puik-alert__title">buttonWrapLabel to true</h4>
              <p id="description-3605" class="puik-alert__description">
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
              </p>
          </div>
        </div>
        <button class="puik-button puik-button--text puik-button--md puik-alert__link" role="button" tabindex="0">
          Link button with a very long label
        </button>
        <button class="puik-button puik-button--info puik-button--md puik-alert__button" role="button">
          Action Button with a very long label
        </button>
    </div>
  </div>

  <div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-2321" aria-describedby="description-2321" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
          <div class="puik-alert__text">
              <h4 id="title-2321" class="puik-alert__title">buttonWrapLabel to false (by default)</h4>
              <p id="description-2321" class="puik-alert__description">
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
                This an alert with a very long description.
              </p>
          </div>
        </div>
        <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
          Link button with a very long label
        </button>
        <button class="puik-button puik-button--info puik-button--md puik-button--no-wrap puik-alert__button" role="button">
          Action button with a very long label
        </button>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const ActionAndLinkButtonsWithIcon: StoryObj = {
  render: () => ({
    components: {
      PuikAlert
    },

    template: `
    <div class="flex flex-col gap-y-4">
      <puik-alert
        title="Right icon btn"
        variant="info"
        button-label="Action"
        right-icon-btn="open_in_new"
      >
        This is the description
      </puik-alert>

      <puik-alert
        title="Left icon btn"
        variant="info"
        button-label="Action"
        left-icon-btn="open_in_new"
      >
        This is the description
      </puik-alert>

      <puik-alert
        title="Right icon link"
        variant="info"
        link-label="Learn more"
        right-icon-link="open_in_new"
      >
        This is the description
      </puik-alert>

      <puik-alert
        title="Left icon link"
        variant="info"
        link-label="Learn more"
        left-icon-link="open_in_new"
      >
        This is the description
      </puik-alert>
    </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-alert
  title="Right icon btn"
  variant="info"
  button-label="Action"
  right-icon-btn="open_in_new"
>
  This is the description
</puik-alert>

<puik-alert
  title="Left icon btn"
  variant="info"
  button-label="Action"
  left-icon-btn="open_in_new"
>
  This is the description
</puik-alert>

<puik-alert
  title="Right icon link"
  variant="info"
  link-label="Learn more"
  right-icon-link="open_in_new"
>
  This is the description
</puik-alert>

<puik-alert
  title="Left icon link"
  variant="info"
  link-label="Learn more"
  left-icon-link="open_in_new"
>
  This is the description
</puik-alert>

<!--HTML/CSS Snippet-->
<div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-7222" aria-describedby="description-7222" aria-live="polite" tabindex="0">
   <div class="puik-alert__container">
      <div class="puik-alert__content">
         <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
         <div class="puik-alert__text">
            <h4 id="title-7222" class="puik-alert__title">Right icon btn</h4>
            <p id="description-7222" class="puik-alert__description"> This is the description </p>
         </div>
      </div>
      <button class="puik-button puik-button--info puik-button--md puik-button--no-wrap puik-alert__button" role="button">
         Action
         <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;" aria-label="open_in_new icon" role="img" aria-hidden="true">open_in_new</div>
      </button>
   </div>
</div>

<div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-3413" aria-describedby="description-3413" aria-live="polite" tabindex="0">
   <div class="puik-alert__container">
      <div class="puik-alert__content">
         <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
         <div class="puik-alert__text">
            <h4 id="title-3413" class="puik-alert__title">Left icon btn</h4>
            <p id="description-3413" class="puik-alert__description"> This is the description </p>
         </div>
      </div>
      <button class="puik-button puik-button--info puik-button--md puik-button--no-wrap puik-alert__button" role="button">
         <div class="puik-icon puik-button__left-icon" style="font-size: 1.25rem;" aria-label="open_in_new icon" role="img" aria-hidden="true">open_in_new</div>
         Action
      </button>
   </div>
</div>

<div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-34" aria-describedby="description-34" aria-live="polite" tabindex="0">
   <div class="puik-alert__container">
      <div class="puik-alert__content">
         <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
         <div class="puik-alert__text">
            <h4 id="title-34" class="puik-alert__title">Right icon link</h4>
            <p id="description-34" class="puik-alert__description"> This is the description </p>
         </div>
      </div>
      <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
         Learn more
         <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;" aria-label="open_in_new icon" role="img" aria-hidden="true">open_in_new</div>
      </button>
   </div>
</div>

<div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-4747" aria-describedby="description-4747" aria-live="polite" tabindex="0">
   <div class="puik-alert__container">
      <div class="puik-alert__content">
         <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
         <div class="puik-alert__text">
            <h4 id="title-4747" class="puik-alert__title">Left icon link</h4>
            <p id="description-4747" class="puik-alert__description"> This is the description </p>
         </div>
      </div>
      <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" tabindex="0">
         <div class="puik-icon puik-button__left-icon" style="font-size: 1.25rem;" aria-label="open_in_new icon" role="img" aria-hidden="true">open_in_new</div>
         Learn more
      </button>
   </div>
</div>
      `,
        language: 'html'
      }
    }
  }
};

export const InternalAndExternalLink = {
  render: () => ({
    components: {
      PuikAlert,
      PuikButton
    },
    setup() {
      const showAlert = ref(true);
      return { showAlert };
    },

    template: `
    <div class="flex flex-col gap-y-4">
      <puik-alert
        title="Internal link"
        variant="info"
        link-label="Learn more"
        internal-link="#"
      >
        Use vue <code>router-link</code> under the hood
      </puik-alert>

      <puik-alert
        title="External link"
        description="this is a description"
        variant="info"
        link-label="Learn more"
        right-icon-link="open_in_new"
        external-link="https://example.com"
      >
        Use native <code>a</code> tag under the hood
      </puik-alert>
    </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-alert
    title="Internal link"
    variant="info"
    link-label="Learn more"
    internal-link="#"
  >
    Use vue <code>router-link</code> under the hood
  </puik-alert>

  <puik-alert
    title="External link"
    description="this is a description"
    variant="info"
    link-label="Learn more"
    right-icon-link="open_in_new"
    external-link="https://example.com"
  >
    Use native <code>a</code> tag under the hood
  </puik-alert>

  <!--HTML/CSS Snippet-->
  <div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-4259" aria-describedby="description-4259" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
          <div class="puik-alert__text">
              <h4 id="title-4259" class="puik-alert__title">Internal link</h4>
              <p id="description-4259" class="puik-alert__description"> Use vue <code>router-link</code> under the hood </p>
          </div>
        </div>
        <router-link to="#" class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" disabled="false" tabindex="0">
          Learn more
        </router-link>
    </div>
  </div>

  <div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-2136" aria-describedby="description-2136" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
          <div class="puik-alert__text">
              <h4 id="title-2136" class="puik-alert__title">External link</h4>
              <p id="description-2136" class="puik-alert__description"> Use native <code>a</code> tag under the hood </p>
          </div>
        </div>
        <a href="https://example.com" class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-alert__link" role="button" disabled="false" tabindex="0">
          Learn more
          <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;" aria-label="open_in_new icon" role="img" aria-hidden="true">open_in_new</div>
        </a>
    </div>
</div>

        `,
        language: 'html'
      }
    }
  }
};

export const UseDefaultSlotForDescription = {
  render: () => ({
    components: {
      PuikAlert,
      PuikButton,
      PuikLink
    },
    setup() {
      const showAlert = ref(true);
      return { showAlert };
    },

    template: `
      <puik-alert
        title="Description in default slot"
        variant="info"
        button-label="Action"
      >
        <div class="flex flex-col gap-y-1">
          <p>
            This is a description writes in the default slot
          </p>
          <puik-link
            target="_blank"
            href="https://example.com"
          >
            use a puik-link in description for example
          </puik-link>
        </div>
      </puik-alert>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-alert
    title="Description in default slot"
    variant="info"
    button-label="Action"
  >
    <div class="flex flex-col gap-y-1">
      <p>
        This is a description writes in the default slot
      </p>
      <puik-link
        target="_blank"
        href="https://example.com"
      >
        use a puik-link in description for example
      </puik-link>
    </div>
  </puik-alert>

  <!--HTML/CSS Snippet-->
  <div class="puik-alert puik-alert--info" role="alert" aria-labelledby="title-7176" aria-describedby="description-7176" aria-live="polite" tabindex="0">
    <div class="puik-alert__container">
        <div class="puik-alert__content">
          <div class="puik-icon puik-alert__icon" style="font-size: 1.25rem;" aria-label="info icon" role="img">info</div>
          <div class="puik-alert__text">
              <h4 id="title-7176" class="puik-alert__title">Description in default slot</h4>
              <p id="description-7176" class="puik-alert__description">
              <div class="flex flex-col gap-y-1">
                <p> This is a description writes in the default slot </p>
                <a href="https://example.com" target="_blank" class="puik-link puik-link--md" role="link"> use a puik-link in description for example <span class="puik-link__target__icon" aria-hidden="true">open_in_new</span></a>
              </div>
              </p>
          </div>
        </div>
        <button class="puik-button puik-button--info puik-button--md puik-button--no-wrap puik-alert__button" role="button">
          Action<!--v-if--><!--v-if-->
        </button>
    </div>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Events = {
  render: () => ({
    components: {
      PuikAlert
    },
    setup() {
      const eventEmitted = ref('Click on Action, Link or Close button');
      const variant = ref('info');
      const title = ref('Handle Events');

      const successTriggered = (msg: string) => {
        eventEmitted.value = msg;
        title.value = msg;
        variant.value = 'success';
        setTimeout(() => {
          eventEmitted.value = 'Click on Action, Link or Close button';
          title.value = 'Handle Events';
          variant.value = 'info';
        }, 1000);
      };

      const handleClose = () => {
        successTriggered('close event triggered !');
      };
      const handleClickAction = () => {
        successTriggered('click event triggered !');
      };
      const handleClickLink = () => {
        successTriggered('click-link event triggered !');
      };
      return { eventEmitted, title, variant, successTriggered, handleClose, handleClickAction, handleClickLink };
    },

    template: `
    <puik-alert
      :title="title"
      :variant="variant"
      button-label="Action"
      link-label="Learn more"
      is-closable
      @close="handleClose"
      @click="handleClickAction"
      @click-link="handleClickLink"
    >
      {{ eventEmitted }}
    </puik-alert>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <!--
      const eventEmitted = ref('Click on Action, Link or Close button');
      const variant = ref('info');
      const title = ref('Handle Events');

      const successTriggered = (msg: string) => {
        eventEmitted.value = msg;
        title.value = msg;
        variant.value = 'success';
        setTimeout(() => {
          eventEmitted.value = 'Click on Action, Link or Close button';
          title.value = 'Handle Events';
          variant.value = 'info';
        }, 1000);
      };

      const handleClose = () => {
        successTriggered('close event triggered !');
      };
      const handleClickAction = () => {
        successTriggered('click event triggered !');
      };
      const handleClickLink = () => {
        successTriggered('click-link event triggered !');
      };
  -->

  <puik-alert
    :title="title"
    :variant="variant"
    button-label="Action"
    link-label="Learn more"
    is-closable
    @close="handleClose"
    @click="handleClickAction"
    @click-link="handleClickLink"
  >
    {{ eventEmitted }}
  </puik-alert>

  <!--HTML/CSS Snippet-->

        `,
        language: 'html'
      }
    }
  }
};
