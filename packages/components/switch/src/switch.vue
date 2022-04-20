<template>
  <SwitchGroup>
    <div class="puik-switch__group">
      <Switch
        v-model="value"
        :class="{ 'puik-switch--enabled': value }"
        class="puik-switch"
        :disabled="disabled"
      >
        <span class="puik-switch__screen-readers">Enable notifications</span>
        <span
          :class="{ 'puik-switch__toggle--enabled': value }"
          class="puik-switch__toggle"
        />
      </Switch>
      <SwitchLabel v-if="$slots.default || label" class="puik-switch__label"
        ><slot>{{ label }}</slot></SwitchLabel
      >
    </div>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { switchEmits, switchProps } from './switch'
defineOptions({
  name: 'Switch',
})

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: boolean) {
    emit('update:modelValue', value)
  },
})
</script>
