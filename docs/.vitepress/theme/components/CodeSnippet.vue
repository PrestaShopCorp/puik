<template>
  <div class="code-container">
    <iframe
      ref="iframe"
      class="mb-4"
      :src="storyUrl"
      width="100%"
      :height="height"
    ></iframe>
    <div class="flex space-x-2 border rounded-t-lg border-border-main">
      <puik-button
        v-for="lang in theme.snippetLangs"
        :key="lang"
        :class="{
          'text-primary-purple-500': String(currentSnippetLang) === lang,
        }"
        variant="text"
        @click="changeSnippetLang(lang)"
        >{{ capitalize(lang) }}</puik-button
      >
    </div>
    <div
      v-for="lang in theme.snippetLangs"
      v-show="String(currentSnippetLang) === lang"
      :key="lang"
    >
      <slot :name="lang"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { capitalize } from 'lodash-unified'
import { useSnippetSwitcher } from '../composables/useSnippetSwitcher'

interface CodeSnippetProps {
  story: string
  height?: string
  args?: string
}

const { theme } = useData()

const props = withDefaults(defineProps<CodeSnippetProps>(), {
  height: '200px',
  args: '',
})

const { changeSnippetLang, currentSnippetLang } = useSnippetSwitcher()

const storyUrl = computed(
  () =>
    `${import.meta.env.VITE_STORYBOOK_URL}/iframe.html?args=${props.args}&id=${
      props.story
    }&viewMode=story`
)
</script>

<style scoped></style>
