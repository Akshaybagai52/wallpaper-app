import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <GestureHandlerRootView>{children}</GestureHandlerRootView>;
};

export default Layout;
