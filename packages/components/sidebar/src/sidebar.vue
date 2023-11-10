<template>
  <div class="puik-sidebar__container">
    <transition
      enter-active-class="puik-sidebar__transition__enter--active"
      enter-from-class="puik-sidebar__transition__enter--from"
      enter-to-class="puik-sidebar__transition__enter--to"
      leave-active-class="puik-sidebar__transition__leave--active"
      leave-from-class="puik-sidebar__transition__leave--from"
      leave-to-class="puik-sidebar__transition__leave--to"
    >
      <nav
        v-if="!mobile || localExpanded"
        class="puik-sidebar"
        :class="{
          'puik-sidebar--mobile': !localExpanded && mobile,
          'puik-sidebar--collapsed': !localExpanded,
        }"
      >
        <div v-if="!mobile" class="puik-sidebar__header">
          <puik-button
            class="puik-sidebar__header__button"
            variant="text"
            :left-icon="expansionIcon"
            :aria-label="expandButtonAriaLabel"
            @click="setExpanded(!localExpanded)"
          ></puik-button>
        </div>
        <div v-else class="puik-sidebar__header puik-sidebar__header--mobile">
          <puik-button
            variant="text"
            left-icon="close"
            :aria-label="t('puik.sidebar.expandButtonLabel.close')"
            @click="setExpanded(false)"
          ></puik-button>
        </div>
        <puik-accordion-group
          contained
          class="puik-sidebar__content lul"
          :model-value="openAccordionName"
          @update:model-value="openAccordion($event as string)"
        >
          <slot></slot>
        </puik-accordion-group>
      </nav>
    </transition>
    <div
      v-if="mobile && localExpanded"
      class="puik-sidebar__backdrop"
      aria-hidden="true"
      @click="setExpanded(false)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, provide, computed } from 'vue'
import { useLocale } from '@prestashopcorp/puik-locale'
import PuikButton from '../../button'
import { PuikAccordionGroup } from '../../accordion'
import { type SidebarProps, sidebarKey } from './sidebar'

defineOptions({
  name: 'PuikSidebar',
})

const emit = defineEmits<{
  'update:expanded': [value: boolean]
  'update:openAccordion': [value: string]
}>()
const props = defineProps<SidebarProps>()
const { t } = useLocale()

const localExpanded = ref(props.expanded)
const openAccordionName = ref(props.openAccordion)

const expansionIcon = computed(() =>
  localExpanded.value ? 'first_page' : 'last_page',
)

function setExpanded(value: boolean) {
  localExpanded.value = value
  emit('update:expanded', value)
}

function openAccordion(value: string) {
  openAccordionName.value = value
  emit('update:openAccordion', value)
}

watch(
  () => props.expanded,
  () => {
    localExpanded.value = props.expanded
  },
)

watch(
  () => props.openAccordion,
  () => {
    openAccordionName.value = props.openAccordion
  },
)

const expandButtonAriaLabel = computed(() => {
  return t(
    `puik.sidebar.expandButtonLabel.${
      localExpanded.value ? 'collapsed' : 'expanded'
    }`,
  )
})

provide(sidebarKey, {
  extended: localExpanded,
})
</script>
