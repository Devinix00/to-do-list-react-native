import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import RootNavigator from "@/src/navigation/RootNavigator";
import useThemeStore from "@/store/theme";
import { darkTheme, lightTheme } from "@/styles/theme";

export default function App() {
  const mode = useThemeStore((state) => state.mode);
  const appTheme = mode === "dark" ? darkTheme : lightTheme;
  const navTheme = mode === "dark" ? DarkTheme : DefaultTheme;

  return (
    <ReactQueryProvider>
      <ThemeProvider theme={appTheme}>
        <NavigationContainer theme={navTheme}>
          <StatusBar style={mode === "dark" ? "light" : "dark"} />
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
