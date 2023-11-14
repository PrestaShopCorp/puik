import { computed, inject, isRef, ref, unref } from 'vue'
import { get } from 'lodash-unified'
import { configProviderContextKey } from '@prestashopcorp/puik-components'
import { locales } from '../lang'
import type { Ref, InjectionKey } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import type { Language } from '../lang'

export type TranslatorOption = Record<string, string | number>
export type Translator = (path: string, option?: TranslatorOption) => string
export type LocaleContext = {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export const buildTranslator =
  (locale: MaybeRef<Language>): Translator =>
  (path, option) =>
    translate(path, option, unref(locale))

export const translate = (
  path: string,
  option: undefined | TranslatorOption,
  locale: Language,
): string =>
  (get(locale, path, path) as string).replace(
    /\{(\w+)\}/g,
    (_, key) => `${option?.[key] ?? `{${key}}`}`,
  )

export const buildLocaleContext = (
  locale: MaybeRef<Language>,
): LocaleContext => {
  const lang = computed(() => unref(locale).name)
  const localeRef = isRef(locale) ? locale : ref(locale)
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale),
  }
}

export const localeContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol('localeContextKey')

export const useLocale = () => {
  const config = inject(configProviderContextKey)
  return buildLocaleContext(
    computed(() => locales[config?.value.locale || 'en']),
  )
}
