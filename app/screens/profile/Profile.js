import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../components/ThemeProvider";
import PageLayout from "../../PageLayout";

export default function () {
  const { toggleTheme,selectedTheme  } = useTheme();
  return (
    <PageLayout>
      <View className="mt-10">
        <View>
          <Button title="Dark" onPress={() => toggleTheme("dark")} />
          <Button title="Light" onPress={() => toggleTheme("light")} />
          <Button title="Automatic" onPress={() => toggleTheme("automatic")} />
          <Text>Selected Theme: {selectedTheme}</Text>
        </View>
      </View>
    </PageLayout>
  );
}
