import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";
import PageLayout from "../../PageLayout";
import { useTheme } from "../../helpers/ThemeProvider";
import { DARK, LIGHT, STYLES } from "../../constants";

export default function ({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();
  return (
    <PageLayout>
      <KeyboardAvoidingView  behavior='height'
      style={{ flex: 1 }}>
        <View className="mt-5">
          <View className="mb-4">
            <Text style={styles.textLabel}>Email</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Enter Email"
                inputMode="email"
                keyboardType="email-address"
                style={styles.textInput}
                cursorColor={theme.TABS_INACTIVE}
                placeholderTextColor={theme.TABS_INACTIVE}
              />
            </View>
          </View>

          <View className="mb-2">
            <Text style={styles.textLabel}>Password</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Enter Your Password"
                keyboardType="visible-password"
                style={styles.textInput}
                cursorColor={theme.TABS_INACTIVE}
                placeholderTextColor={theme.TABS_INACTIVE}
              />
            </View>
          </View>

          <Text style={styles.resetAccount}>
            Trouble logging in?
            <Text style={styles.resetPassword}> Reset password</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </PageLayout>
  );
}
