import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ko: {
    translation: {
      home_title: "홈 화면",
      settings_title: "설정",
      dark_mode: "다크 모드",
      language: "언어",
      language_ko: "한국어",
      language_en: "영어",
    },
  },
  en: {
    translation: {
      home_title: "Home",
      settings_title: "Settings",
      dark_mode: "Dark mode",
      language: "Language",
      language_ko: "Korean",
      language_en: "English",
    },
  },
};

const locales = getLocales();
const deviceLanguageTag = locales[0]?.languageTag ?? "en";

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguageTag.startsWith("ko") ? "ko" : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
