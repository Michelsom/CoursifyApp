import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Home } from "../screens/Home";
import { Products } from "../screens/Products";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setAppIsReady(true), 3000);
  }, [appIsReady]);
  if (!appIsReady) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/Icons/logo.png")}
          resizeMode="contain"
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  } else {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    );
  }
};
