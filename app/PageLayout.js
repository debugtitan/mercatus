import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import { View, SafeAreaView, ScrollView } from "react-native";
import { COLOR } from "./constants";


NavigationBar.setVisibilityAsync("hidden");
export default function ({ children }) {
    NavigationBar.setBehaviorAsync('overlay-swipe')
  return (
    <View
      className="flex relative h-full"
      style={{ backgroundColor: COLOR.BACKGROUND }}
    >
      <StatusBar style="light" />
      <SafeAreaView className="mt-10">
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </View>
  );
}
