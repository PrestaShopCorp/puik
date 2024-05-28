import { computed, inject, isRef, ref, unref } from 'vue';
import { configProviderContextKey } from '@prestashopcorp/puik-components';
import { debugWarn } from '@prestashopcorp/puik-utils';
import { locales } from '../lang';
import type { Ref } from 'vue';
import type { MaybeRef } from '@vueuse/core';
import type { Language } from '../lang';

export type TranslatorOption = Record<string, string | number>;
export type Translator = (path: string, option?: TranslatorOption) => string;
export type LocaleContext = {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
};

export const buildTranslator =
  (locale: MaybeRef<Language>): Translator =>
    (path, option) => {
      const unrefedLocale = unref(locale);
      let value = translate(path, option, unrefedLocale);
      if (!value) {
        debugWarn(
          'i18n',
        `Not found "${path}" key for "${unrefedLocale.name}" locale messages.`
        );
        value = translate(path, option, unrefedLocale);
      }
      return value || path;
    };

export const translate = (
  path: string,
  option: undefined | TranslatorOption,
  locale: Language
): string => {
  const keys = path.split('.');
  let value: any = locale;
  for (const key of keys) {
    value = value[key];
    if (!value) {
      break;
    }
  }

  return value?.replace(
    /\{(\w+)\}/g,
    (_: any, key: any) => `${option?.[key] ?? `{${key}}`}`
  );
};

export const buildLocaleContext = (
  locale: MaybeRef<Language>
): LocaleContext => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};

export const useLocale = () => {
  const config = inject(configProviderContextKey, null);
  return buildLocaleContext(
    computed(() => locales[config?.value.locale ?? 'en'])
  );
};
