<template>
    <div class="flex flex-col items-center justify-center">
      <puik-progress-stepper v-model="currentStep" @update:model-value="stepChange">
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
      <div class="mt-16 flex gap-x-4">
        <puik-button :disabled="currentStep === 1" @click="prevStep">Previous step</puik-button>
        <puik-button :disabled="currentStep === 3" @click="nextStep">Next step</puik-button>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentStep = ref(1);

const nextStep = () =>
currentStep.value < 3
  ? currentStep.value++
  : currentStep.value;

const prevStep = () =>
  currentStep.value > 1
  ? currentStep.value--
  : currentStep.value;

const stepChange = () => {
  console.log('Step changed to:', currentStep.value);
};

</script>

