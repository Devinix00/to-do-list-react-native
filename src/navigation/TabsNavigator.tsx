import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { useTranslation } from "react-i18next";
import { Colors } from "../../constants/theme";
import { useColorScheme } from "../../hooks/use-color-scheme";
import { HapticTab } from "../components/HapticTab";
import { IconSymbol } from "../components/IconSymbol";
import HomeScreen from "../screens/Home/HomeScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import { TabsParamList } from "./types";

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
  const colorScheme = useColorScheme();
  const tint = Colors[colorScheme ?? "light"].tint;
  const { t } = useTranslation("tab");

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: tint,
        headerShown: false,
        tabBarButton: (props) => <HapticTab {...props} />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t("home"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: t("settings"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gearshape.fill" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
