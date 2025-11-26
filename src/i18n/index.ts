import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  ko: {
    tab: {
      home: "홈",
      settings: "설정",
    },
    home: { title: "홈 화면" },
    settings: {
      title: "설정",
      dark_mode: "다크 모드",
      language: "언어",
      language_ko: "한국어",
      language_en: "영어",
    },
  },
  en: {
    tab: {
      home: "Home",
      settings: "Settings",
    },
    home: { title: "Home" },
    settings: {
      title: "Settings",
      dark_mode: "Dark mode",
      language: "Language",
      language_ko: "Korean",
      language_en: "English",
    },
  },
} as const;

export type I18nResources = typeof resources;

const locales = getLocales();
const deviceLanguageTag = locales[0]?.languageTag ?? "en";

i18n.use(initReactI18next).init({
  resources,
  ns: ["tab", "home", "settings"],
  lng: deviceLanguageTag.startsWith("ko") ? "ko" : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
