import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ModalScreen from '@/src/screens/ModalScreen';
import TabsNavigator from '@/src/navigation/TabsNavigator';
import { RootStackParamList } from '@/src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="Modal"
        component={ModalScreen}
        options={{ presentation: 'modal', title: 'Modal' }}
      />
    </Stack.Navigator>
  );
}

