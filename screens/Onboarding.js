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
      <View className="mt-10">
        <View className="">
          <View className="justify-end items-end mt-3">
            <TouchableOpacity
            //onPress={() => //navigation.navigate(RoutePaths.HOME_PAGE)}
            >
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: theme.NEUTRAL,
                  fontSize: 14,
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <OnboardSwipper
          enableScroll={true}
          paginationSelectedColor={theme.PRIMARY}
          pages={[
            {
              imageComponent: <Onboarding1 />,
              title: <Text>Keep up with investment trends</Text>,
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
              subtitle: (
                <Text>
                  Unrestricted access to the massive opportunities in the U.S.
                  stock market - the world’s largest stock market
                </Text>
              ),
            },
          ]}
        />

        {/*<View className="mb-2 justify-center items-center">
          <TouchableOpacity
            style={styles.button}
            className="w-full mb-4"
            onPress={() => navigation.navigate(RoutePaths.COUNTRY_PICKER)}
          >
            <Text style={(styles.paragraph, { color: theme.SHADES })}>
              Get started
            </Text>
          </TouchableOpacity>

          <Text style={styles.regularParagraph} className="text-center">
            Already have an account?{' '}
            <Text
              onPress={() => navigation.navigate(RoutePaths.LOGIN)}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 19,
                lineHeight: 19,
                fontWeight: 'bold',
                fontFamily: 'Inter',
                //color: theme.PRIMARY, //isDarkMode ? "#FFFFFF" : "#00100B",
              }}
            >
              Log in
            </Text>
          </Text>
        </View>*/}
      </View>
    </PageLayout>
  );
}
