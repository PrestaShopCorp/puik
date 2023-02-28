<template>
  <div class="puik-button-group">
    <puik-button
      v-for="(button, key) in buttonListRef"
      :key="key"
      :variant="button.variant"
      :size="button.size"
      @click="puikButtonGroupClicked(key)"
    >
      {{ button.label }}
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

const buttonListRef = ref(props.buttonList)
const puikButtonGroupClicked = (key) => {
  buttonListRef.value.map(
    (btn, index) => (btn.variant = index == key ? 'primary' : 'tertiary')
  )
  emit('puikButtonGroupClicked')
}

// const buttonListRef = toRef(props, 'buttonList');
// const buttonComputed = computed({
//   get: () => buttonListRef.value,
//   set: (value) => buttonListRef.value = value
// });
// const puikButtonGroupClicked = (key) => {
//   // buttons_list.value.forEach( (btn, index) => btn.variant = (index == key) ? "primary" : "tertiary" )
//   // buttons_list.value.map((btn, index) => btn.variant = )
//   // for(const index in buttonList.value) {
//     //   buttonList.value[index]['variant'] = (index == key) ? "primary" : "tertiary";
//     //   console.log('OSKOUR DAMIAN:', buttonList.value[index]);
//     // }

//     // buttonListRef.value = buttonListRef.value.map((btn, index) => ({ ...btn, variant: (index == key) ? "primary" : "tertiary" }));
//     // buttonListRef.value.map((btn, index) => ({ ...btn, variant: (index == key) ? "primary" : "tertiary" }));
//     buttonComputed.value = buttonListRef.value.map((btn, index) => btn.variant = (index == key) ? "primary" : "tertiary" );
//   emit('puikButtonGroupClicked')
// };
</script>
