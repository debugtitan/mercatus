import { View, Text, Switch } from "react-native";
import React, {useState} from "react";
import {useTheme} from "../../helpers/ThemeProvider"

export default function () {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <View>
      <Text>profile</Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => toggleTheme()}
      />
    </View>
  );
}
