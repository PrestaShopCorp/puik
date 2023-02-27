<template>
  <div class="puik-button-group">
    <puik-button
      v-for="(button_item, key) in buttons_list"
      :key="key"
      :variant="button_item.variant"
      @click="puikButtonGroupClicked(key)"
    >
      {{ button_item.label }}
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef } from 'vue'
import { PuikButton } from '@puik/components'
import { buttonGroupProps, buttonGroupEmits } from './button-group'

defineOptions({
  name: 'PuikButtonGroup',
})

const props = defineProps(buttonGroupProps)
const emit = defineEmits(buttonGroupEmits)
const buttons_list = ref(props.buttons_list)

const puikButtonGroupClicked = (key) => {
  buttons_list.value.forEach( (btn, index) => btn.variant = (index == key) ? "primary" : "tertiary" )
  emit('puikButtonGroupClicked')
}

</script>
