import React from "react";
import { Image, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  OnboardingScreen,
  Profile,
  NetworkError,
  DeclineError,
  NotFound,
  Login,
} from "./app/screens";
import { ThemeProvider } from "./app/helpers/ThemeProvider";
import { useTheme } from "./app/helpers/ThemeProvider";
import { DARK, LIGHT, IMAGES, STYLES } from "./app/constants";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MercatusBottomTabs = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingHorizontal: 24,
          paddingTop: 12,
          paddingBottom: 16,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: theme.BOTTOM_TABS,
          //...styles.shadow,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center ">
              <Image
                source={IMAGES.ICONS.BOTTOM_TABS.HOME}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? theme.PRIMARY : theme.TABS_INACTIVE,
                }}
              />
              <Text
                style={{
                  color: focused ? theme.PRIMARY : theme.TABS_INACTIVE,
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 14,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center ">
              <Image
                source={IMAGES.ICONS.BOTTOM_TABS.MARKET}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? theme.PRIMARY : theme.TABS_INACTIVE,
                }}
              />
              <Text
                style={{
                  color: focused ? theme.PRIMARY : theme.TABS_INACTIVE,
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 14,
                }}
              >
                Market
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Learn"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center ">
              <Image
                source={IMAGES.ICONS.BOTTOM_TABS.LEARN}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? theme.PRIMARY : theme.TABS_INACTIVE,
                }}
              />
              <Text
                style={{
                  color: focused ? theme.PRIMARY : theme.TABS_INACTIVE,
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 14,
                }}
              >
                Learn
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center ">
              <Image
                source={IMAGES.ICONS.BOTTOM_TABS.PROFILE}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? theme.PRIMARY : theme.TABS_INACTIVE,
                }}
              />
              <Text
                style={{
                  color: focused ? theme.PRIMARY : theme.TABS_INACTIVE,
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 14,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="auth-login">
          {/*     ONBOARDING NAVIGATION */}
          <Stack.Screen name="onboarding" component={OnboardingScreen} />
          <Stack.Screen name="skip" component={MercatusBottomTabs} />

          {/*     ERROR NAVIGATION */}
          <Stack.Screen name="network-error" component={NetworkError} />
          <Stack.Screen name="not-found-error" component={NotFound} />
          <Stack.Screen name="decline-error" component={DeclineError} />
          {/*     AUTH NAVIGATION */}
          <Stack.Screen name="auth-login" component={Login} options={{headerShown:true,}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
