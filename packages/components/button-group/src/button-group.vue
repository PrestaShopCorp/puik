<template>
  <div class="puik-button-group">
    <!-- <slot /> -->
    <puik-button
      v-for="(button_item, key) in buttons_list"
      :key="key"
      ref="buttonGroupButton"
      :variant="button_item.variant"
      @click.prevent="puikButtonGroupClicked($event)"
    >
      <!-- @click.prevent="$emit('puikButtonGroupClicked')" -->
      {{ button_item.label }}
    </puik-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PuikButton } from '@puik/components'
import { buttonGroupProps, buttonGroupEmits } from './button-group'

defineOptions({
  name: 'PuikButtonGroup',
})

const props = defineProps(buttonGroupProps)
const emit = defineEmits(buttonGroupEmits)
const buttonGroupButton = ref()

const puikButtonGroupClicked = (event) => {
  // change variant of all buttons to tertiary
  // change clicked button to primary

  const boxes = event.target.parentNode.querySelectorAll('.puik-button')

  console.log(boxes)
  boxes.forEach((box) => {
    box.classList.remove('puik-button--primary')
    box.classList.add('puik-button--tertiary')
    console.log(box.className)
  })
  event.target.classList.add('puik-button--primary')

  //console.log(event.target.parentNode.getElementsByClassName('puik-button'));
  //  event.target.parentNode.getElementsByClassName('puik-button').classList.className = "tits-and-ass";
  // document.getElementsByClassName(".puik")
  emit('puikButtonGroupClicked')
}

// onMounted(() => {
// });
</script>
