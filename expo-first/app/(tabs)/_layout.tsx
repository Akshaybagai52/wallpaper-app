import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "For you",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default Layout;
