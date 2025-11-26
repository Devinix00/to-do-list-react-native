import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { TabsParamList } from "@/src/navigation/types";
import HomeScreen from "@/src/screens/Home/HomeScreen";

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
  const colorScheme = useColorScheme();
  const tint = Colors[colorScheme ?? "light"].tint;

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
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
