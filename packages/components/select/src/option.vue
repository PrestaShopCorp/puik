<template>
  <div
    :class="[
      'puik-option',
      { 'puik-option-single--selected' : isSelectedRef && !props.multiSelect},
      { 'puik-option--disabled' : props.disabled },
      { 'puik-option--rich' : props.description },
    ]"
    role="option"
    :aria-selected="isSelectedRef"
    :aria-disabled="props.disabled"
    :aria-label="ariaLabel"
    tabindex="-1"
    :data-test="props.dataTest"
    @click="selectOption"
    @keydown.space.prevent.stop="selectOption"
    @keydown.enter.prevent.stop="selectOption"
  >
    <template v-if="props.multiSelect">
      <PuikCheckbox
        v-model="isSelectedRef"
        :disabled="props.disabled"
        :sr-label="`${label}`"
      />
      <slot>
        <div class="puik-option__content">
          <div class="puik-option__header">
            <label class="puik-option__label">{{ label }}</label>
            <PuikTag
              v-if="props.tag"
              class="puik-option__tag"
              :content="`${props.tag}`"
              :variant="props.tagVariant || 'neutral'"
              :icon="props.tagIcon"
            />
          </div>
          <span
            v-if="props.description"
            class="puik-option__description"
          >
            {{ props.description }}
          </span>
        </div>
      </slot>
    </template>

    <template v-else>
      <slot>
        <div class="puik-option__content">
          <div class="puik-option__header">
            <label class="puik-option__label">{{ label }}</label>
            <PuikTag
              v-if="props.tag"
              class="puik-option__tag"
              :content="`${props.tag}`"
              :variant="props.tagVariant || 'neutral'"
              :icon="props.tagIcon"
            />
          </div>
          <span
            v-if="props.description"
            class="puik-option__description"
          >
            {{ props.description }}
          </span>
        </div>
      </slot>
    </template>
    <PuikIcon
      v-if="isSelectedRef && !props.multiSelect"
      class="puik-option__selected-icon"
      icon="check"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRaw, watch } from 'vue';
import { PuikCheckbox } from '../../checkbox';
import { PuikIcon } from '../../icon';
import { PuikTag } from '../../tag';
import type { OptionProps, OptionEmits } from './option';

defineOptions({
  name: 'PuikOption'
});

const props = withDefaults(defineProps<OptionProps>(), {
  disabled: false,
  multiSelect: false,
  isSelected: false
});

const emit = defineEmits<OptionEmits>();

const isSelectedRef = ref(props.isSelected);
const labelRef = ref(props.label);
const valueRef = ref(props.value);

const ariaLabel = computed(() => {
  const parts = [props.label];
  if (props.tag) parts.push(props.tag);
  if (props.description) parts.push(props.description);
  return parts.join(', ');
});

const selectOption = () => {
  if (!props.disabled) {
    emit('select', { label: toRaw(labelRef.value), value: toRaw(valueRef.value) });
    props.multiSelect ? emit('open', true) : emit('open', false);
  }
};

watch(() => props.isSelected, (newValue) => {
  isSelectedRef.value = newValue;
});
watch(() => props.label, (newValue) => {
  labelRef.value = newValue;
});
watch(() => props.value, (newValue) => {
  valueRef.value = newValue;
});

</script>
