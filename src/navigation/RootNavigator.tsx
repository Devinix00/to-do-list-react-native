import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import TabsNavigator from "@/src/navigation/TabsNavigator";
import { RootStackParamList } from "@/src/navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
