import { useStorage } from '@vueuse/core'

const currentSnippetLang = useStorage('currentSnippetLang', 'vue')

export const useSnippetSwitcher = () => {
  const changeSnippetLang = (lang: string) => {
    currentSnippetLang.value = lang
  }

  return { currentSnippetLang, changeSnippetLang }
}
