import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { OnboardFlow } from "react-native-onboard";
import PageLayout from "../PageLayout";
import {
  DARK,
  LIGHT,
  STYLES,
  Onboarding1,
  Onboarding2,
  Onboarding3,
  Footer,
  RoutePaths
} from "../constants";
import { useTheme } from "../helpers/ThemeProvider";

export default function OnboardingScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();

  return (
    <PageLayout>
      <View className="">
        <View className="justify-end items-end mt-3">
          <TouchableOpacity onPress={() => navigation.navigate(RoutePaths.HOME_PAGE)}>
            <Text style={{ color: theme.NEUTRAL, fontSize: 14 }}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-1 ">
        <OnboardFlow
          textStyle={styles.textContainer}
          //autoPlay={true}

          paginationSelectedColor={isDarkMode ? "#07FFB1" : "#006042"}
          textAlign="left"
          FooterComponent={Footer}
          pages={[
            {
              imageComponent: <Onboarding1 />,
              title: (
                <Text style={styles.title}>Keep up with investment trends</Text>
              ),
              titleStyle: styles.textContainer,
              subtitleStyle: styles.paragraphContainer,
              subtitle: (
                <Text style={styles.paragraph}>
                  No more switching between apps to stay updated, it's all right
                  here
                </Text>
              ),
            },
            {
              imageComponent: <Onboarding2 />,
              title: <Text style={styles.title}>Bank - Grade Security</Text>,
              titleStyle: { width: 200, height: 70 },
              subtitleStyle: { width: 310, height: 57, marginBottom: 25 },
              subtitle: (
                <Text style={styles.paragraph}>
                  256-bit encryption, 2FA & Biometrics, all to ensure only 1
                  person has access - that’s YOU!
                </Text>
              ),
            },
            {
              imageComponent: <Onboarding3 />,
              title: <Text style={styles.title}>Unlock the Global Market</Text>,
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
      </View>

      <View className="mb-5">
        <TouchableOpacity style={styles.button} className="" onPress={()=> navigation.navigate(RoutePaths.NETWORK_ERROR_PAGE)}>
          <Text style={(styles.paragraph, { color: theme.SHADES })}>
            Get started
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 300, height: 20, alignItems: "center", left: 0 }} className='mb-2'>
        <Text style={styles.regularParagraph}>
          Already have an account?{" "}
          <Text
          onPress={() => navigation.navigate(RoutePaths.LOGIN)}
            style={{
              fontSize: 19,
              lineHeight: 19,
              fontWeight: "600",
              color: theme.PRIMARY//isDarkMode ? "#FFFFFF" : "#00100B",
            }}
          >
            Log in
          </Text>
        </Text>
      </View>
    </PageLayout>
  );
}
