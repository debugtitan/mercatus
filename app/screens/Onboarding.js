import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { OnboardFlow } from "react-native-onboard";
import Reanimated, {
  BounceIn,
  useSharedValue,
  Easing,
  interpolate,
  withTiming,
  useAnimatedStyle,
  FlipOutEasyY,
  BounceInLeft,
  BounceInRight,
} from "react-native-reanimated";
import PageLayout from "../PageLayout";
import {
  DARK,
  LIGHT,
  STYLES,
  Onboarding1,
  Onboarding2,
  Onboarding3,
  Footer,
  Header,
  RoutePaths,
} from "../constants";
import { useTheme } from "../components/ThemeProvider";

export default function OnboardingScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();

  const progress = useSharedValue(0);
  useEffect(() => {
    console.log("Updating progress for page");
    progress.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [200, 0]);
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <PageLayout>
      <View className="mt-10" >
        <View className="">
          <View className="justify-end items-end mt-3">
            <TouchableOpacity
              onPress={() => navigation.navigate(RoutePaths.HOME_PAGE)}
            >
              <Text style={{ color: theme.NEUTRAL, fontSize: 14 }}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Reanimated.View className="flex flex-1 " entering={BounceInRight} style={[animatedStyle]} >
          <OnboardFlow
            textStyle={styles.textContainer}
            paginationSelectedColor={isDarkMode ? "#07FFB1" : "#006042"}
            textAlign="left"
            enableScroll={false}
            FooterComponent={Footer}
            pages={[
              {
                imageComponent: <Onboarding1 />,
                title: (
                  <Text style={styles.title}>
                    Keep up with investment trends
                  </Text>
                ),
                titleStyle: styles.textContainer,
                subtitleStyle: styles.paragraphContainer,
                subtitle: (
                  <Text style={styles.paragraph}>
                    No more switching between apps to stay updated, it's all
                    right here
                  </Text>
                ),
              },
              {
                imageComponent: <Onboarding2 />,
                title: <Text style={styles.title}>Bank - Grade Security</Text>,
                titleStyle: { width: 200, height: 70 },
                subtitleStyle: { width: 310, height: 58, marginBottom: 25 },
                subtitle: (
                  <Text style={styles.paragraph}>
                    256-bit encryption, 2FA & Biometrics, all to ensure only 1
                    person has access - that’s YOU!
                  </Text>
                ),
              },
              {
                imageComponent: <Onboarding3 />,
                title: (
                  <Text style={styles.title}>Unlock the Global Market</Text>
                ),
                titleStyle: { width: 200, height: 70 },
                subtitleStyle: { width: 350, height: 57 },
                subtitle: (
                  <Text style={styles.paragraph}>
                    Unrestricted access to the massive opportunities in the U.S.
                    stock market - the world’s largest stock market
                  </Text>
                ),
              },
            ]}
            type="inline"
          />
        </Reanimated.View>

        <View className="mb-2 justify-center items-center">
          <TouchableOpacity
            style={styles.button}
            className="w-full mb-8"
            onPress={() => navigation.navigate(RoutePaths.COUNTRY_PICKER)}
          >
            <Text style={(styles.paragraph, { color: theme.SHADES })}>
              Get started
            </Text>
          </TouchableOpacity>

          <Text style={styles.regularParagraph} className="text-center">
            Already have an account?{" "}
            <Text
              onPress={() => navigation.navigate(RoutePaths.LOGIN)}
              style={{
                fontSize: 19,
                lineHeight: 19,
                fontWeight: "600",
                fontFamily: 'Inter',
                color: theme.PRIMARY, //isDarkMode ? "#FFFFFF" : "#00100B",
              }}
            >
              Log in
            </Text>
          </Text>
        </View>
      </View>
    </PageLayout>
  );
}
