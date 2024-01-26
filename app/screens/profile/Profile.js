import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../helpers/ThemeProvider";
import PageLayout from "../../PageLayout";

export default function () {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <PageLayout>
      <View className='mx-4'>
        <Text>profile</Text>
        <Switch value={isDarkMode} onValueChange={() => toggleTheme()} />
      </View>
    </PageLayout>
  );
}
