<template>
  <transition name="puik-alert">
    <div
      v-show="visible"
      class="puik-alert"
      :class="[`puik-alert--${variant}`]"
    >
      <div class="puik-alert__content">
        <span class="puik-alert__icon">{{ icon }}</span>
        <div class="puik-alert__text">
          <p v-if="title" class="puik-alert__title">{{ title }}</p>
          <span
            v-if="$slots.default || description"
            ref="alertDescription"
            class="puik-alert__description"
            :class="{ 'puik-alert__description--view-more': viewMoreState }"
            ><slot>{{ description }}</slot></span
          >
          <span
            v-if="viewMore"
            class="puik-alert__collapse"
            @click="toggleViewMore"
            >{{
              viewMoreState
                ? t('puik.alert.viewLess')
                : t('puik.alert.viewMore')
            }}</span
          >
        </div>
      </div>
      <button v-if="buttonLabel" class="puik-alert__button" @click="click">
        {{ buttonLabel }}
      </button>
      <span v-if="closable" class="puik-alert__close" @click="close"
        >close</span
      >
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '@puik/hooks'
import { alertEmits, alertProps, ICONS } from './alert'
defineOptions({
  name: 'Alert',
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)
const { t } = useLocale()

const icons = {
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
  info: 'info',
}

const visible = ref(true)
const viewMoreState = ref(false)
const alertDescription = ref<HTMLSpanElement | null>(null)
const icon = computed(() => ICONS[props.variant])

const viewMore = computed(() => {
  if (
    (props.description && props?.description?.length > 50) ||
    alertDescription.value?.textContent?.length! > 50
  ) {
    return true
  }
  return false
})

const toggleViewMore = () => (viewMoreState.value = !viewMoreState.value)

const click = (event: Event) => emit('click', event)

const close = (event: Event) => {
  visible.value = false
  emit('close', event)
}
</script>
