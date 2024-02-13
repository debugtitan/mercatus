import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { PageLayout } from '../AppLayout';

import { useTheme, OnboardSwipper } from '../components';
import {
  DARK,
  LIGHT,
  RoutePaths,
  Onboarding1,
  Onboarding2,
  Onboarding3,
  //styles,
} from '../constants';

export default function OnboardingScreen() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;

  return (
    <PageLayout>
      <OnboardSwipper
        // eslint-disable-next-line react-native/no-inline-styles
        titleStyle={{
          fontSize: 33,
          lineHeight: 40,
          color: theme.PRIMARY2,
          fontWeight: '600',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        subtitleStyle={{
          fontSize: 16,
          lineHeight: 19,
          fontWeight: '400',
          color: theme.PRIMARY2,
        }}
        pages={[
          {
            imageComponent: <Onboarding1 />,
            title: <Text>Keep up with investment trends</Text>,
            titleContainerStyle: { width: 291, height: 80 },
            subtitle: (
              <Text>
                No more switching between apps to stay updated, it's all right
                here
              </Text>
            ),
          },
          {
            imageComponent: <Onboarding2 />,
            title: <Text>Bank - Grade Security</Text>,
            titleContainerStyle: { width: 200, height: 80 },
            subtitleContainerStyle: { width: 298, height: 38 },
            subtitle: (
              <Text>
                256-bit encryption, 2FA & Biometrics, all to ensure only 1
                person has access - that’s YOU!
              </Text>
            ),
          },
          {
            imageComponent: <Onboarding3 />,
            title: <Text>Unlock the Global Market</Text>,
            titleContainerStyle: { width: 200, height: 80 },
            subtitleContainerStyle: { width: 298, height: 48 },
            subtitle: (
              <Text>
                Unrestricted access to the massive opportunities in the U.S.
                stock market - the world’s largest stock market
              </Text>
            ),
          },
        ]}
      />
    </PageLayout>
  );
}
