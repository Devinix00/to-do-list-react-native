import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import STORAGE_KEYS from "../constants/storageKeys";
import i18n from "../i18n";

type Lang = "ko" | "en";

interface LangState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const initialLang: Lang = i18n.language.startsWith("ko") ? "ko" : "en";

const useLangStore = create(
  persist<LangState>(
    (set) => ({
      lang: initialLang,
      setLang: (lang) => set({ lang }),
    }),
    {
      name: STORAGE_KEYS.LANG,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useLangStore;
