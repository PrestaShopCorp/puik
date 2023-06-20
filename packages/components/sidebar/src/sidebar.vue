<template>
  <div class="puik-sidebar__container">
    <nav
      v-if="!mobile || localExpanded"
      class="puik-sidebar"
      :class="{
        'puik-sidebar--mobile': !localExpanded && mobile,
        'puik-sidebar--collapsed': !localExpanded,
      }"
    >
      <div class="puik-sidebar__header">
        <puik-button
          variant="text"
          :left-icon="expansionIcon"
          :aria-label="expandButtonAriaLabel"
          @click="setExpanded(!localExpanded)"
        ></puik-button>
      </div>
      <puik-accordion-group
        contained
        class="puik-sidebar__content"
        :model-value="openAccordionName"
        @update:model-value="openAccordion"
      >
        <slot></slot>
      </puik-accordion-group>
    </nav>
    <div
      v-if="mobile && localExpanded"
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
  openAccordion: 'PuikSidebar',
})

const emit = defineEmits<{
  (e: 'update:expanded', value: boolean): void
  (e: 'update:openAccordion', value: string): void
}>()
const props = defineProps(sidebarProps)
const { t } = useLocale()

const localExpanded = ref(props.expanded)
const openAccordionName = ref(props.openAccordion)

const expansionIcon = computed(() => {
  return localExpanded.value ? 'first_page' : 'last_page'
})

function setExpanded(value) {
  localExpanded.value = value
  emit('update:expanded', value)
}

function openAccordion(value) {
  openAccordionName.value = value
  emit('update:openAccordion', openAccordionName.value)
}

watch(
  () => props.expanded,
  () => {
    localExpanded.value = props.expanded
  }
)

watch(
  () => props.openAccordion,
  () => {
    openAccordionName.value = props.openAccordion
  }
)

const expandButtonAriaLabel = computed(() => {
  return t(
    `puik.sidebar.expandButtonLabel.${
      localExpanded.value ? 'collapsed' : 'expanded'
    }`
  )
})

provide(sidebarKey, {
  extended: localExpanded,
})
</script>
