import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./src/Routes/app.routes";
import { AppProvider } from "./src/context/app";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import * as Roboto from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { Platform, View } from "react-native";

export const App = () => {
  const [fontsLoaded] = Roboto.useFonts({
    Roboto_100Thin: Roboto.Roboto_100Thin,
    Roboto_300Light: Roboto.Roboto_300Light,
    Roboto_400Regular: Roboto.Roboto_400Regular,
    Roboto_500Medium: Roboto.Roboto_500Medium,
    Roboto_700Bold: Roboto.Roboto_700Bold,
    Roboto_900Black: Roboto.Roboto_900Black,
   
  });
  if (!fontsLoaded) {
    if (Platform.OS === "ios")
      return <View style={{ backgroundColor: "#fff", flex: 1 }} />;
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </AppProvider>
    </ThemeProvider>
  );
};
