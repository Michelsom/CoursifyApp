import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Home } from "../screens/Home";
import { Products } from "../screens/Products";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};
