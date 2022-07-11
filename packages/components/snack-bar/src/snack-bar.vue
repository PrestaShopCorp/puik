<template>
  <div
    v-if="shown"
    :class="[
      'puik-snack-bar',
      props.variant ? `puik-snack-bar--${props.variant}` : '',
    ]"
  >
    <span class="puik-snack-bar__text">{{ props.text }}</span>
    <span class="puik-snack-bar__right">
      <span
        v-if="props.action"
        class="puik-snack-bar__right__action"
        @click.prevent="onAction()"
        >{{ props.action }}</span
      >
      <svg
        class="puik-snack-bar__close-button"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click.prevent="onClose()"
      >
        <path
          d="M11.2496 0.758297C11.0939 0.602253 10.8825 0.514559 10.6621 0.514559C10.4417 0.514559 10.2303 0.602253 10.0746 0.758297L5.99961 4.82496L1.92461 0.749964C1.76892 0.59392 1.55754 0.506226 1.33711 0.506226C1.11668 0.506226 0.905302 0.59392 0.749609 0.749964C0.424609 1.07496 0.424609 1.59996 0.749609 1.92496L4.82461 5.99996L0.749609 10.075C0.424609 10.4 0.424609 10.925 0.749609 11.25C1.07461 11.575 1.59961 11.575 1.92461 11.25L5.99961 7.17496L10.0746 11.25C10.3996 11.575 10.9246 11.575 11.2496 11.25C11.5746 10.925 11.5746 10.4 11.2496 10.075L7.17461 5.99996L11.2496 1.92496C11.5663 1.6083 11.5663 1.07496 11.2496 0.758297Z"
          fill="white"
        />
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { snackBarProps, snackBarEmits } from './snack-bar'
defineOptions({
  name: 'PuikSnackBar',
})
const shown = ref(true)

const props = defineProps(snackBarProps)
const emits = defineEmits(snackBarEmits)

const onClose = () => {
  shown.value = false
}

const onAction = () => {
  emits('on-action')
}
</script>
