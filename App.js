import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from "./src/Drawer/index";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
