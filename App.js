import React, { useState, useEffect, useCallback } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  OnboardingScreen,
  Profile,
  NetworkError,
  DeclineError,
  NotFound,
  Login,
  Signup,
  SplashScreenComponent,
} from "./app/screens";
import { ThemeProvider,useTheme } from "./app/components/ThemeProvider";
import CheckboxApp from "./app/components/CheckBox"
import { DARK, LIGHT, IMAGES, STYLES } from "./app/constants";

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

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

const MercatusStackNavigator = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.BACKGROUND,
          color: isDarkMode ? "#FFFFFF" : "#00100B",
        },
        headerTitleStyle: {
          color: isDarkMode ? "#FFFFFF" : "#00100B",
          fontSize: 19,
          fontWeight: "600",
        },
        headerShadowVisible: false,
        headerTintColor: isDarkMode ? "#FFFFFF" : "#00100B",
      }}
    >
      {/*     ONBOARDING NAVIGATION */}
      <Stack.Screen name="check" component={CheckboxApp} />
      <Stack.Screen name="onboarding" component={OnboardingScreen} />
      <Stack.Screen name="skip" component={MercatusBottomTabs} />

      {/*     ERROR NAVIGATION */}
      <Stack.Screen name="network-error" component={NetworkError} />
      <Stack.Screen name="not-found-error" component={NotFound} />
      <Stack.Screen name="decline-error" component={DeclineError} />

      {/*     AUTH NAVIGATION */}
      <Stack.Screen
        name="auth-login"
        component={Login}
        options={{
          headerShown: true,
          title: "Log In",
          headerLeft: (...props) => {
            //console.log(props);
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("onboarding")}
              >
                <Image
                  source={
                    isDarkMode
                      ? IMAGES.AUTH.DARK.CANCEL
                      : IMAGES.AUTH.LIGHT.CANCEL
                  }
                  style={{ width: 24, height: 24, marginRight: 15 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      {/* SIGNUP STACK */}

      <Stack.Screen
        name="auth-signup"
        component={Signup}
        options={{
          headerShown: true,
          title: "Account details",
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttf'),
  });
  const [isAppReady, setAppReady] = useState(false);
  const onImageLoaded = useCallback(async () => {
    //console.log("animation done");
    try {
      await SplashScreen.hideAsync();
      await new Promise(resolve => setTimeout(resolve, 4000));
    } catch (e) {
      //console.log(e);
    } finally {
      setAppReady(true);
    }
  }, []);

  return isAppReady ? (
    <ThemeProvider>
      <NavigationContainer>
        <MercatusStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  ) : (
    <SplashScreenComponent onLoadEnd={onImageLoaded} />
  );
}
