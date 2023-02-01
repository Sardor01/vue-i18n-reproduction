import { type I18nScope, useI18n } from "vue-i18n";
import type { localeOptions } from "@/utils/config";

interface UseI18nSchema<T extends string = string> {
  message: Record<T, string | object>;
}
type UseI18nLocale = (typeof localeOptions)[number]["id"];

export const useTranslations = (props?: { scope?: I18nScope }) => {
  const { scope = "global" } = props || {};

  const { t } = useI18n<UseI18nSchema, UseI18nLocale>({
    useScope: scope,
    messages: {
      en: {
        helloMsg: "Hello Vue + Vue-i18n",
      },
      ru: {
        helloMsg: "Hello Vue + Vue-i18n",
      },
    },
  });

  return { t };
};
