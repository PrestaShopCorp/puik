import { ref } from 'vue';
import { useArgs } from '@storybook/client-api';
import { PuikSwitch } from '@prestashopcorp/puik-components';
import type { StoryObj, StoryFn, Meta } from '@storybook/vue3';

export default {
  title: 'Components/Switch',
  component: PuikSwitch,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label of the switch toggle',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    labelRight: {
      control: 'text',
      description: 'Right label of the switch toggle (props or slot)',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Set if the switch toggle is disabled',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    srLabel: {
      control: 'text',
      description: 'If no label is defined (neither via the label prop nor via the slots) then you should consider setting this prop for a better experience when using screen readers (although the label is not visible)',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    modelValue: {
      control: 'boolean',
      description: 'v-model of the switch',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    default: {
      control: 'text',
      description: 'Label of the switch toggle using the slot'
    }
  },
  args: {
    label: '',
    labelRight: '',
    disabled: false,
    default: null,
    modelValue: false
  }
} as Meta;

const Template: StoryFn = () => {
  const [args, updateArgs] = useArgs();
  return {
    components: {
      PuikSwitch
    },
    setup() {
      const onClick = () => updateArgs({ modelValue: !args.modelValue });
      return { args, onClick };
    },
    template: '<puik-switch v-bind="args" @click="onClick"></puik-switch>'
  };
};

export const DefaultWithScreenReadersLabel = {
  render: Template,
  args: {
    srLabel: 'Screen readers label'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-switch v-model="enabled" sr-label="Screen readers label">Switch Label Slot</puik-switch>

  <!--HTML/CSS Snippet-->
  <div class="puik-switch__group">
    <button class="puik-switch" aria-label="Enable" id="headlessui-switch-{random-id-nb}" role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state="">
      <span class="puik-sr-only">Enable : Screen readers label</span>
      <span class="puik-switch__toggle"></span>
    </button>
  </div>
        `
      }
    }
  }
};

export const Label: StoryObj = {
  render: () => ({
    components: {
      PuikSwitch
    },
    setup() {
      const enabled = ref(false);
      return { enabled };
    },
    template:
    '<puik-switch v-model="enabled" label="Switch Label"></puik-switch>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-switch v-model="enabled" label="Switch Label"></puik-switch>

  <!--HTML/CSS Snippet-->
  <div class="puik-switch__group">
    <label id="headlessui-label-248" for="headlessui-switch-{random-id-nb}" class="puik-switch__label puik-switch__label--left">Switch Label</label>
    <button class="puik-switch" aria-label="Switch Label" id="headlessui-switch-{random-id-nb}" role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state="" aria-labelledby="headlessui-label-248">
      <span class="puik-switch__toggle"></span>
    </button>
  </div>
        `
      }
    }
  }
};

export const LabelRight: StoryObj = {
  render: () => ({
    components: {
      PuikSwitch
    },
    setup() {
      const enabled = ref(false);
      return { enabled };
    },
    template:
      '<puik-switch v-model="enabled" label-right="Switch Label Right"></puik-switch>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-switch v-model="enabled" label-right="Switch Label Right"></puik-switch>

  <!--HTML/CSS Snippet-->
<div class="puik-switch__group">
  <button class="puik-switch" aria-label="" id="headlessui-switch-{random-id-nb}" role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state="" aria-labelledby="headlessui-label-251">
    <span class="puik-switch__toggle"></span>
  </button>
  <label id="headlessui-label-251" for="headlessui-switch-{random-id-nb}" class="puik-switch__label puik-switch__label--right">Switch Label Right</label>
</div>
        `
      }
    }
  }
};

export const LabelBySlot: StoryObj = {
  render: () => ({
    components: {
      PuikSwitch
    },
    setup() {
      const enabled = ref(false);
      return { enabled };
    },
    template:
      '<puik-switch v-model="enabled">Switch Label Slot</puik-switch>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-switch v-model="enabled">Switch Label Slot</puik-switch>

  <!--HTML/CSS Snippet-->
  <div class="puik-switch__group">
    <label id="headlessui-label-{random-id-nb}" for="headlessui-switch-277" class="puik-switch__label puik-switch__label--left">Switch Label Slot</label>
    <button class="puik-switch" aria-label="" id="headlessui-switch-277" role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state="" aria-labelledby="headlessui-label-{random-id-nb}">
      <span class="puik-switch__toggle"></span>
    </button>
  </div>
        `
      }
    }
  }
};

export const LabelRightBySlot: StoryObj = {
  render: () => ({
    components: {
      PuikSwitch
    },
    setup() {
      const enabled = ref(false);
      return { enabled };
    },
    template:
      '<puik-switch v-model="enabled"><template #labelRight>Switch Label Right Slot</template></puik-switch>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-switch v-model="enabled"><template #labelRight>Switch Label Right Slot</template></puik-switch>

  <!--HTML/CSS Snippet-->
  <div class="puik-switch__group">
    <button class="puik-switch" aria-label="" id="headlessui-switch-{random-id-nb}" role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state="" aria-labelledby="headlessui-label-303">
      <span class="puik-switch__toggle"></span>
    </button>
    <label id="headlessui-label-303" for="headlessui-switch-{random-id-nb}" class="puik-switch__label puik-switch__label--right">Switch Label Right Slot</label>
  </div>
        `
      }
    }
  }
};

export const Disabled: StoryObj = {
  render: () => ({
    components: {
      PuikSwitch
    },
    setup() {
      const firstSwitch = ref(true);
      const secondSwitch = ref(false);
      return { firstSwitch, secondSwitch };
    },
    template: `
    <div class="flex flex-col space-y-1">
      <puik-switch v-model="firstSwitch" disabled>Disabled On</puik-switch>
      <puik-switch v-model="secondSwitch" disabled>Disabled Off</puik-switch>
    </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-switch v-model="firstSwitch" disabled>Disabled On</puik-switch>
  <puik-switch v-model="secondSwitch" disabled>Disabled Off</puik-switch>

  <!--HTML/CSS Snippet-->
  <div class="puik-switch__group">
    <label id="headlessui-label-376" for="headlessui-switch-377" class="puik-switch__label puik-switch__label--left">Disabled On</label>
    <button class="puik-switch--enabled puik-switch" aria-label="" id="headlessui-switch-377" disabled="" role="switch" type="button" tabindex="0" aria-checked="true" data-headlessui-state="checked" aria-labelledby="headlessui-label-376">
      <span class="puik-switch__toggle--enabled puik-switch__toggle"></span>
    </button>
  </div>

  <div class="puik-switch__group">
    <label id="headlessui-label-402" for="headlessui-switch-403" class="puik-switch__label puik-switch__label--left">Disabled Off</label>
    <button class="puik-switch" aria-label="" id="headlessui-switch-403" disabled="" role="switch" type="button" tabindex="0" aria-checked="false" data-headlessui-state="" aria-labelledby="headlessui-label-402">
      <span class="puik-switch__toggle"></span>
    </button>
  </div>
        `
      }
    }
  }
};

export const Active: StoryObj = {
  render: () => ({
    components: {
      PuikSwitch
    },
    setup() {
      const enabled = ref(true);
      return { enabled };
    },
    template: '<puik-switch v-model="enabled">On</puik-switch>'
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-switch v-model="enabled">Switch label</puik-switch>

  <!--HTML/CSS Snippet-->
  <div class="puik-switch__group">
    <label id="headlessui-label-428" for="headlessui-switch-429" class="puik-switch__label puik-switch__label--left">On</label>
    <button class="puik-switch--enabled puik-switch" aria-label="" id="headlessui-switch-429" role="switch" type="button" tabindex="0" aria-checked="true" data-headlessui-state="checked" aria-labelledby="headlessui-label-428">
      <span class="puik-switch__toggle--enabled puik-switch__toggle"></span>
    </button>
  </div>
        `
      }
    }
  }
};

export const AllStates: StoryObj = {
  render: () => ({
    components: {
      PuikSwitch
    },
    setup() {
      const firstSwitch = ref(true);
      const secondSwitch = ref(false);
      const thirdSwitch = ref(true);
      const lastSwitch = ref(false);
      return { firstSwitch, secondSwitch, thirdSwitch, lastSwitch };
    },
    template: `
    <div class="flex flex-col space-y-1">
      <puik-switch v-model="firstSwitch" label="On"></puik-switch>
      <puik-switch v-model="secondSwitch">Off</puik-switch>
      <puik-switch v-model="thirdSwitch" disabled>Disabled On</puik-switch>
      <puik-switch v-model="lastSwitch" disabled>Disabled Off</puik-switch>
    </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-switch v-model="firstSwitch" label="On"></puik-switch>
  <puik-switch v-model="secondSwitch">Off</puik-switch>
  <puik-switch v-model="thirdSwitch" disabled>Disabled On</puik-switch>
  <puik-switch v-model="lastSwitch" disabled>Disabled Off</puik-switch>
    `
      }
    }
  }
};
