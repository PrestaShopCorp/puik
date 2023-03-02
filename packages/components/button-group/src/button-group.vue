<template>
  <div class="puik-button-group">
    <puik-button
      v-for="(button, key) in buttonListRef"
      :key="key"
      :variant="button.variant"
      :size="size"
      :left-icon="button.leftIcon"
      @click="puikButtonGroupClicked(key)"
    >
      {{ button.label }}
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { PuikButton } from '@puik/components/button'
import { buttonGroupProps, buttonGroupEmits } from './button-group'

defineOptions({
  name: 'PuikButtonGroup',
})

const props = defineProps(buttonGroupProps)
const emit = defineEmits(buttonGroupEmits)

const buttonListRef = ref(props.buttonList)
const puikButtonGroupClicked = (key) => {
  buttonListRef?.value?.map(
    (btn, index) => (btn.variant = index == key ? 'primary' : 'tertiary')
  )
  emit('puikButtonGroupClicked')
}

onMounted(() => {
  buttonListRef?.value?.map(
    (btn, index) =>
      (btn.variant = index == props.selectedIndex ? 'primary' : 'tertiary')
  )
})
</script>
