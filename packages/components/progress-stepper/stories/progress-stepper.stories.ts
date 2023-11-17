import { useArgs } from '@storybook/client-api'
import { PuikButton, PuikProgressStepper ,PuikProgressStepperStep, PuikStep } from "@prestashopcorp/puik-components"
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Components/ProgressStepper',
  component: PuikProgressStepper,
  argTypes: {
    modelValue: {
      description: 'v-model of the current step',
      control: 'select',
      options: [1, 2, 3],
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    default: {
      description:
        'Content of progress stepper (should be progress stepper steps)',
      control: 'none',
    },
    'update:modelValue': {
      description: 'event emitted of current step change',
      control: 'none',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
  },
  args: {
    modelValue: 2,
  },
} as Meta

const Template: StoryFn = () => {
  const [args, updateArgs] = useArgs()
  return {
    components: {
      PuikProgressStepper,
      PuikProgressStepperStep,
      PuikButton,
    },
    setup() {
      const nextStep = () =>
        updateArgs({
          modelValue: args.modelValue + 1,
        })
      const prevStep = () =>
        updateArgs({
          modelValue: args.modelValue - 1,
        })
      const stepChange = (step: PuikStep) => {
        updateArgs({
          modelValue: step,
        })
      }
      return { args, nextStep, prevStep, stepChange }
    },
    template: `<puik-progress-stepper v-bind="args" @update:model-value="stepChange">
    <puik-progress-stepper-step :step="1">
      <template #text>Text step 1</template>
      <template #additional-text>Additional-text step 1</template>
    </puik-progress-stepper-step>
    <puik-progress-stepper-step :step="2">
      <template #text>Text step 1</template>
      <template #additional-text>Additional-text step 1</template>
    </puik-progress-stepper-step>
    <puik-progress-stepper-step :step="3">
      <template #text>Text step 1</template>
      <template #additional-text>Additional-text step 1</template>
    </puik-progress-stepper-step>
  </puik-progress-stepper>
  <div class="mt-16 flex space-x-4">
    <puik-button :disabled="args.modelValue === 1" @click="prevStep">Previous step</puik-button>
    <puik-button :disabled="args.modelValue === 3" @click="nextStep">Next step</puik-button>
  </div>`,
  }
}

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
    <template #text>Text step 1</template>
    <template #additional-text>Additional text step 1</template>
  </puik-progress-stepper-step>
  <puik-progress-stepper-step :step="2">
    <template #text>Text step 1</template>
    <template #additional-text>Additional text step 1</template>
  </puik-progress-stepper-step>
  <puik-progress-stepper-step :step="3">
    <template #text>Text step 1</template>
    <template #additional-text>Additional text step 1</template>
  </puik-progress-stepper-step>
</puik-progress-stepper>

<!--HTML/CSS Snippet-->
<div class="puik-progress-stepper">
  <div class="puik-progress-stepper-step">
    <button class="puik-button puik-button--success puik-button--sm puik-progress-stepper-step__button" aria-label="1" aria-live="polite">
      <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1rem;">check</div>
    </button>
    <span class="puik-progress-stepper-step__text">Text step 1</span>
    <span class="puik-progress-stepper-step__additional-text">Additional text step 1</span>
  </div>
  <div class="puik-progress-stepper-step">
    <button class="puik-button puik-button--primary puik-button--sm puik-progress-stepper-step__button" aria-label="2" aria-live="polite" aria-current="step">
      2
    </button>
    <span class="puik-progress-stepper-step__text">Text step 1</span>
    <span class="puik-progress-stepper-step__additional-text">Additional text step 1</span>
  </div>
  <div class="puik-progress-stepper-step">
    <button class="puik-button puik-button--primary puik-button--sm puik-button--disabled puik-progress-stepper-step__button" aria-label="3" aria-live="polite" disabled="">
      3
    </button>
    <span class="puik-progress-stepper-step__text">Text step 1</span>
    <span class="puik-progress-stepper-step__additional-text">Additional text step 1</span>
  </div>
</div>
      `,
        language: 'html',
      },
    },
  },
}
