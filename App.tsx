import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import ReactQueryProvider from "./providers/ReactQueryProvider";
import i18n from "./src/i18n";
import RootNavigator from "./src/navigation/RootNavigator";
import useLangStore from "./src/store/lang";
import useThemeStore from "./src/store/theme";
import { darkTheme, lightTheme } from "./src/styles/theme";

export default function App() {
  const mode = useThemeStore((state) => state.mode);
  const lang = useLangStore((state) => state.lang);
  const appTheme = mode === "dark" ? darkTheme : lightTheme;
  const navTheme = mode === "dark" ? DarkTheme : DefaultTheme;

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <SafeAreaProvider>
      <ReactQueryProvider>
        <ThemeProvider theme={appTheme}>
          <SafeAreaView
            style={{ flex: 1, backgroundColor: appTheme.colors.background }}
            edges={["top"]}
          >
            <NavigationContainer theme={navTheme}>
              <StatusBar
                style={mode === "dark" ? "light" : "dark"}
                backgroundColor="transparent"
              />
              <RootNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </ThemeProvider>
      </ReactQueryProvider>
    </SafeAreaProvider>
  );
}
