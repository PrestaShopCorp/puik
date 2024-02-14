import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikProgressStepper from '../src/progress-stepper.vue'
import PuikProgressStepperStep from '../src/progress-stepper-step.vue'
import type { VueWrapper } from '@vue/test-utils'

describe('ProgressStepper tests', () => {
  let wrapper: VueWrapper<any>
  const factory = () => {
    wrapper = mount({
      template: `
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
      `,
      components: {
        PuikProgressStepper,
        PuikProgressStepperStep,
      },
      setup() {
        const currentStep = ref(2)
        return { currentStep }
      },
    })
  }
  const getSteps = () => wrapper.findAllComponents(PuikProgressStepperStep)
  const getStepButton = (step) => step.find('.puik-button')
  it('should be a vue instance', () => {
    factory()
    expect(wrapper).toBeTruthy()
  })
  it('should have 3 steps', () => {
    factory()
    const steps = getSteps()
    expect(steps.length).toBe(3)
  })
  it('should first step to be success', async () => {
    factory()
    await nextTick()
    const steps = getSteps()
    expect(getStepButton(steps[0]).classes()).toContain('puik-button--success')
  })
  it('should second step be current step', async () => {
    factory()
    await nextTick()
    const steps = getSteps()
    expect(getStepButton(steps[1]).classes()).toContain('puik-button--primary')
  })
  it('should third step to be disabled', async () => {
    factory()
    await nextTick()
    const steps = getSteps()
    const step = getStepButton(steps[2])
    expect(step.classes()).toContain('puik-button--primary')
    expect(step.attributes('disabled')).toBeFalsy()
  })
  it('should step emit click event', async () => {
    factory()
    await nextTick()
    const steps = getSteps()
    const step = steps[0]
    const stepButton = getStepButton(step)
    await stepButton.trigger('click')
    expect(step.emitted('click')).toBeTruthy()
  })
})
