import React, { useState, useEffect, useCallback } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from '../components';
import { IMAGES, DARK, LIGHT, Styles } from '../constants';
import {
  OnboardingScreen,
  NetworkError,
  DeclineError,
  NotFound,
  Login,
} from '.';

const Stack = createNativeStackNavigator();

export const MercatusStackNavigator = () => {
  //const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.BACKGROUND,
            color: theme.PRIMARY2,
          },
          headerTitleStyle: {
            color: theme.PRIMARY2,
            fontSize: 19,
            fontWeight: '600',
          },
          headerShadowVisible: false,
          headerTintColor: theme.PRIMARY2,
        }}
      >
        {/*     ONBOARDING NAVIGATION */}
        <Stack.Screen name="onboarding" component={OnboardingScreen} />

        {/*     ERROR NAVIGATION */}
        <Stack.Screen name="network-error" component={NetworkError} />
        <Stack.Screen name="not-found-error" component={NotFound} />
        <Stack.Screen name="decline-error" component={DeclineError} />
        <Stack.Screen name="auth-login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
