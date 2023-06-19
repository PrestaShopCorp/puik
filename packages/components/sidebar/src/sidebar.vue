<template>
  <div class="puik-sidebar__container">
    <nav
      v-if="(mobile && isExpanded) || !mobile"
      class="puik-sidebar"
      :class="{
        'puik-sidebar--mobile': !isExpanded && mobile,
        'puik-sidebar--collapsed': !isExpanded,
      }"
    >
      <div class="puik-sidebar__header">
        <puik-button
          variant="text"
          :left-icon="expansionIcon"
          :aria-label="expandButtonAriaLabel"
          @click="setExpanded(!isExpanded)"
        ></puik-button>
      </div>
      <div class="puik-sidebar__content">
        <puik-accordion-group
          v-if="isExpanded"
          class="puik-sidebar-item"
          contained
          :model-value="openAccordionName"
          @update:model-value="openAccordion"
        >
          <slot></slot>
        </puik-accordion-group>
        <div v-else class="puik-sidebar-item">
          <slot></slot>
        </div>
      </div>
    </nav>
    <div
      v-if="mobile && isExpanded"
      class="puik-sidebar__backdrop"
      @click="setExpanded(false)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, provide, computed } from 'vue'
import { useLocale } from '@puik/hooks'
import PuikButton from '../../button'
import { PuikAccordionGroup } from '../../accordion'
import { sidebarProps, sidebarKey } from './sidebar'

defineOptions({
  name: 'PuikSidebar',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'update:name', value: string): void
}>()
const props = defineProps(sidebarProps)
const { t } = useLocale()

const isExpanded = ref(props.modelValue)
const openAccordionName = ref(props.name)

const expansionIcon = computed(() => {
  return isExpanded.value ? 'first_page' : 'last_page'
})

function setExpanded(value) {
  isExpanded.value = value
  emit('update:modelValue', value)
}

function openAccordion(name) {
  openAccordionName.value = name
  emit('update:name', openAccordionName.value)
}

watch(
  () => props.modelValue,
  () => {
    isExpanded.value = props.modelValue
  }
)

watch(
  () => props.name,
  () => {
    openAccordionName.value = props.name
  }
)

const expandButtonAriaLabel = computed(() => {
  return t(
    `puik.sidebar.expandButtonLabel.${
      isExpanded.value ? 'collapsed' : 'expanded'
    }`
  )
})

provide(sidebarKey, {
  extended: isExpanded,
})
</script>
