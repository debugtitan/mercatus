/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from '../components';
import { IMAGES, DARK, LIGHT } from '../constants';
import {
  OnboardingScreen,
  NetworkError,
  DeclineError,
  NotFound,
  Login,
  CountryRadioPicker,
  Signup,
  SetPassword,
  OTPComponent,
} from '.';

const Stack = createNativeStackNavigator();

const AuthHeaderLeft = ({ isDarkMode }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('onboarding')}>
      <Image
        source={isDarkMode ? IMAGES.AUTH.DARK.CANCEL : IMAGES.AUTH.LIGHT.CANCEL}
        style={{ width: 24, height: 24, marginRight: 15 }}
      />
    </TouchableOpacity>
  );
};
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
        <Stack.Screen
          name="auth-login"
          component={Login}
          options={{
            headerShown: true,
            title: 'Log In',
            headerLeft: () => <AuthHeaderLeft isDarkMode={isDarkMode} />,
          }}
        />
        <Stack.Screen
          name="select-country"
          component={CountryRadioPicker}
          options={{
            headerShown: true,
            title: 'Select country',
          }}
        />

        <Stack.Screen
          name="auth-signup"
          component={Signup}
          options={{
            headerShown: true,
            title: 'Account details',
          }}
        />

        <Stack.Screen
          name="auth-setup-password"
          component={SetPassword}
          options={{
            headerShown: true,
            title: 'Set password',
          }}
        />
        <Stack.Screen
          name="otp"
          component={OTPComponent}
          options={{
            headerShown: true,
            title: 'Authorize Device',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
