<template>
  <div>
    <nav
      class="puik-sidebar"
      :class="{
        'puik-sidebar--temporary': !isExpanded && temporary,
        'puik-sidebar--collapsed': !isExpanded,
      }"
    >
      <div class="puik-sidebar__header">
        <puik-button variant="text" @click="setExpanded(!isExpanded)">
          <puik-icon :icon="expansionIcon" font-size="1.25rem"></puik-icon>
        </puik-button>
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
        <div v-else>
          <div v-if="!temporary" class="puik-sidebar-item">
            <slot></slot>
          </div>
        </div>
      </div>
    </nav>
    <div
      v-if="temporary && isExpanded"
      class="puik-sidebar__backdrop"
      @click="setExpanded(false)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, provide, computed } from 'vue'
import PuikIcon from '../../icon'
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

provide(sidebarKey, {
  extended: isExpanded,
})
</script>
