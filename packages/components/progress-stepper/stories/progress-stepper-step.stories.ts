import { PuikProgressStepper, PuikProgressStepperStep } from "@prestashopcorp/puik-components"
import type { Meta, StoryFn, Args } from '@storybook/vue3'

export default {
  title: 'Components/ProgressStepper/ProgressStepperStep',
  component: PuikProgressStepperStep,
  argTypes: {
    step: {
      description: 'Value of the step',
      control: 'text',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    text: {
      description: 'Text of the step',
      control: 'text',
    },
    'additional-text': {
      description: 'Additional text of the step',
      control: 'text',
    },
    click: {
      description: 'Event emitted on click step',
      control: 'none',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
  },
  args: {
    step: '1',
    text: 'Text',
    'additional-text': 'Additional text',
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikProgressStepper,
    PuikProgressStepperStep,
  },
  setup() {
    return { args }
  },
  template: `<puik-progress-stepper :model-value="args.step">
    <puik-progress-stepper-step :step="args.step">
      <template #text>{{ args.text }}</template>
      <template #additional-text>{{ args['additional-text'] }}</template>
    </puik-progress-stepper-step>
  </puik-progress-stepper>
  `,
})

export const Default = {
  render: Template,

  args: {},

  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-progress-stepper v-model="currentStep">
  <puik-progress-stepper-step :step="1">
    <template #text>Text step</template>
    <template #additional-text>Additional text step</template>
  </puik-progress-stepper-step>
</puik-progress-stepper>

<!--HTML/CSS Snippet-->
<div class="puik-progress-stepper">
  <div class="puik-progress-stepper-step">
    <button class="puik-button puik-button--success puik-button--sm puik-progress-stepper-step__button" aria-label="1" aria-live="polite">
      <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1rem;">check</div>
    </button>
    <span class="puik-progress-stepper-step__text">Text step</span>
    <span class="puik-progress-stepper-step__additional-text">Additional text step</span>
  </div>
</div>
      `,
        language: 'html',
      },
    },
  },
}
