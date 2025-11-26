// App.tsx
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { useColorScheme } from "@/hooks/use-color-scheme";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import RootNavigator from "@/src/navigation/RootNavigator";
import { darkTheme, lightTheme } from "@/src/theme/color";

export default function App() {
  const colorScheme = useColorScheme();

  const appTheme = colorScheme === "dark" ? darkTheme : lightTheme;
  const navTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <ReactQueryProvider>
      <ThemeProvider theme={appTheme}>
        <NavigationContainer theme={navTheme}>
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
