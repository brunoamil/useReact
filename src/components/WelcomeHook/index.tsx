import React from "react";

import { View, Text } from "react-native";

type props = {
  title: string;
};

export const WelcomeHook = ({ title }: props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
