// src/store/theme.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import STORAGE_KEYS from "../constants/storageKeys";

interface ThemeState {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

const useThemeStore = create(
  persist<ThemeState>(
    (set, _get) => ({
      mode: "dark",
      setMode: (mode) => set({ mode }),
    }),
    {
      name: STORAGE_KEYS.THEME,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useThemeStore;

