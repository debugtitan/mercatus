import {
  View,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Easing,
  BounceInDown,
} from "react-native-reanimated";
import { IMAGES } from "../constants";

NavigationBar.setVisibilityAsync("hidden");
export default function SplashScreenComponent ({onLoadEnd}) {
  NavigationBar.setBehaviorAsync("overlay-swipe");
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, {
      duration: 2000, 
      easing: Easing.inOut(Easing.ease),
    });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      progress.value,
      [0, 1],
      [200, 0] 
    );
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <View className="flex-1 justify-center items-center bg-[#006042]">
      <StatusBar style="light" />
      <Animated.Image source={IMAGES.LOGO} entering={BounceInDown} style={[animatedStyle]} onLoadEnd={onLoadEnd}/>
    </View>
  );
}
