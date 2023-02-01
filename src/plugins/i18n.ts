import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";
import { defaultLocale, localeOptions } from "@/utils/config";
import { getCurrentLocale } from "@/utils/language";

declare global {
  interface UseI18nSchema<T extends string = string> {
    message: Record<T, string | object>;
  }
  type UseI18nLocale = (typeof localeOptions)[number]["id"];
}

const locale =
  getCurrentLocale() &&
  localeOptions.filter((opt) => opt.id === getCurrentLocale()).length > 0
    ? getCurrentLocale()
    : defaultLocale;

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: defaultLocale,
  messages,
});

export default i18n;
