import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Landing, OtherProfile } from "@screens";
import React from "react";

const Stack = createNativeStackNavigator();

export const RequestsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="OtherProfile" component={OtherProfile} />
    </Stack.Navigator>
  );
}