import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./src/Routes/app.routes";
import { AppProvider } from "./src/context/app";

import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </NavigationContainer>
    </AppProvider>
  );
}
