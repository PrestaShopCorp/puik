import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PuikProgressStepper from '../src/progress-stepper.vue';
import PuikProgressStepperStep from '../src/progress-stepper-step.vue';
import type { VueWrapper } from '@vue/test-utils';

describe('ProgressStepperStep tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = () => {
    wrapper = mount({
      template: `
      <puik-progress-stepper v-model="currentStep">
        <puik-progress-stepper-step :step="1" data-test="test">
          <template #text>Text step 1</template>
          <template #additional-text>Additional text step 1</template>
        </puik-progress-stepper-step>
      </puik-progress-stepper>
      `,
      components: {
        PuikProgressStepper,
        PuikProgressStepperStep
      },
      setup() {
        const currentStep = ref(1);
        return { currentStep };
      }
    });
  };

  const getStep = () => wrapper.findComponent(PuikProgressStepperStep);
  const getButton = () => getStep().find('.puik-progress-stepper-step__button');
  const getText = () => getStep().find('.puik-progress-stepper-step__text');
  const getAdditionalText = () =>
    getStep().find('.puik-progress-stepper-step__additional-text');

  it('should have a step with data-test on button, text and additionnalText', () => {
    factory();
    const button = getButton();
    const text = getText();
    const additionalText = getAdditionalText();
    expect(button.attributes('data-test')).toBe('stepButton-test');
    expect(text.attributes('data-test')).toBe('text-test');
    expect(additionalText.attributes('data-test')).toBe('additionalText-test');
  });
});
