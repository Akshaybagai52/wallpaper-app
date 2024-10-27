import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Explore = () => {
  return (
    <View>
      <Link href={"/accountInfo"}>
        <Text>explore</Text>
      </Link>
    </View>
  );
};

export default Explore;
