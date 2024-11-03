import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";

const Layout = () => {
  return (
    <GestureHandlerRootView>
      {/* <Slot /> */}
      <Stack screenOptions={{headerShown: true}}>
        <Stack.Screen name="(notabs)/accountInfo" options={{headerShown: false, headerTitle: "Account Info", headerBackTitle: "Go Back"}} />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default Layout;
