import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import RootNavigator from "@/src/navigation/RootNavigator";
import useThemeStore from "@/src/store/theme";
import { darkTheme, lightTheme } from "@/src/styles/theme";

export default function App() {
  const mode = useThemeStore((state) => state.mode);
  const appTheme = mode === "dark" ? darkTheme : lightTheme;
  const navTheme = mode === "dark" ? DarkTheme : DefaultTheme;

  return (
    <SafeAreaProvider>
      <ReactQueryProvider>
        <ThemeProvider theme={appTheme}>
          <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
            <NavigationContainer theme={navTheme}>
              <StatusBar style={mode === "dark" ? "light" : "dark"} />
              <RootNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </ThemeProvider>
      </ReactQueryProvider>
    </SafeAreaProvider>
  );
}
