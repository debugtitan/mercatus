import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import { View, SafeAreaView, ScrollView } from "react-native";
import { DARK,LIGHT } from "./constants";
import {useTheme} from "./components/ThemeProvider"


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
      <SafeAreaView className="mx-4">
        <ScrollView showsVerticalScrollIndicator={false} >{children}</ScrollView>
      </SafeAreaView>
    </View>
  );
}
