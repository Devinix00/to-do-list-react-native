import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { useColorScheme } from "@/hooks/use-color-scheme";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import RootNavigator from "@/src/navigation/RootNavigator";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <ReactQueryProvider>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <StatusBar style="auto" />
        <RootNavigator />
      </NavigationContainer>
    </ReactQueryProvider>
  );
}
