import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useTheme } from '../components';

export const IMAGES = {
  LOGO: require('../assets/media/Logo.png'),
  CHECKBOX: require('../assets/icons/checkbox.png'),
  ONBOARDING: {
    DARK: {
      INVESTMENT: require('../assets/media/onboarding/investment-data.png'),
      CONNECTED_WORLD: require('../assets/media/onboarding/connected-world.png'),
      ENCRYPTION: require('../assets/media/onboarding/amico.png'),
    },
    LIGHT: {
      INVESTMENT: require('../assets/media/onboarding/invest-light.png'),
      CONNECTED_WORLD: require('../assets/media/onboarding/connected-world.png'),
      ENCRYPTION: require('../assets/media/onboarding/encrypt-light.png'),
    },
  },
  ICONS: {
    DARK: {
      TOGGLE_FORWARD: require('../assets/icons/toggle-forward.png'),
      TOGGLE_BACK: require('../assets/icons/toggle-back.png'),
    },
    LIGHT: {
      TOGGLE_FORWARD: require('../assets/icons/light-toggle-right.png'),
      TOGGLE_BACK: require('../assets/icons/light-toggle-left.png'),
    },
    BOTTOM_TABS: {
      HOME: require('../assets/icons/home.png'),
      MARKET: require('../assets/icons/market.png'),
      LEARN: require('../assets/icons/learn.png'),
      PROFILE: require('../assets/icons/profile.png'),
    },
  },
  ERROR: {
    DARK: {
      NETWORK: require('../assets/media/error/network-error-dark.png'),
      NOT_FOUND: require('../assets/media/error/not-found-dark.png'),
      DECLINED: require('../assets/media/error/declined-dark.png'),
    },
    LIGHT: {
      NETWORK: require('../assets/media/error/network-error-light.png'),
      NOT_FOUND: require('../assets/media/error/not-found-light.png'),
      DECLINED: require('../assets/media/error/declined-light.png'),
    },
  },
  AUTH: {
    DARK: {
      CANCEL: require('../assets/media/auth/cancel.png'),
      KEYPAD_CANCEL: require('../assets/media/auth/keypad-cancel-dark.png'),
      FINGERPRINT: require('../assets/media/auth/fingerprint-dark.png'),
    },
    LIGHT: {
      CANCEL: require('../assets/media/auth/cancel-light.png'),
      KEYPAD_CANCEL: require('../assets/media/auth/keypad-cancel-light.png'),
      FINGERPRINT: require('../assets/media/auth/fingerprint-light.png'),
    },
  },
};

export const Onboarding1 = () => {
  const { isDarkMode } = useTheme();
  return (
    <Image
      source={
        isDarkMode
          ? IMAGES.ONBOARDING.DARK.INVESTMENT
          : IMAGES.ONBOARDING.LIGHT.INVESTMENT
      }
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 364,
        height: 353,
        marginVertical: 45,
      }}
    />
  );
};

export const Onboarding2 = () => {
  const { isDarkMode } = useTheme();
  return (
    <Image
      source={
        isDarkMode
          ? IMAGES.ONBOARDING.DARK.ENCRYPTION
          : IMAGES.ONBOARDING.LIGHT.ENCRYPTION
      }
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 344,
        height: 350,
        marginVertical: 45,
      }}
    />
  );
};

export const Onboarding3 = () => {
  const { isDarkMode } = useTheme();
  return (
    <Image
      source={
        isDarkMode
          ? IMAGES.ONBOARDING.DARK.CONNECTED_WORLD
          : IMAGES.ONBOARDING.LIGHT.CONNECTED_WORLD
      }
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 354,
        height: 345,
        marginVertical: 45,
      }}
    />
  );
};
