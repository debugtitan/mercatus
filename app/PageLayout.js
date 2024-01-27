import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import { View, SafeAreaView, ScrollView } from "react-native";
import { DARK,LIGHT } from "./constants";
import {useTheme} from "./helpers/ThemeProvider"


NavigationBar.setVisibilityAsync("hidden");


export default function ({ children }) {
    NavigationBar.setBehaviorAsync('overlay-swipe')
    const { isDarkMode } = useTheme();
    const theme = isDarkMode ? DARK : LIGHT;
  return (
    <View
      className="flex relative h-full"
      style={{ backgroundColor: theme.BACKGROUND }}
    >
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <SafeAreaView className="mt-10 mx-4">
        <ScrollView >{children}</ScrollView>
      </SafeAreaView>
    </View>
  );
}
