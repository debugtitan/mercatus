/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { PageLayout } from '../../AppLayout';
import { useTheme } from '../../components';
import { DARK, LIGHT, Styles } from '../../constants';
export default function OTPComponent({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = Styles();

  const [otp, setOtp] = useState(null);
  return (
    <PageLayout>
      <View style={{ marginTop: 10, paddingHorizontal: 16 }}>
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>OTP Code</Text>
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Enter OTP"
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={OTP => setOtp(OTP)}
              style={styles.textInput}
            />
          </View>
        </View>
      </View>
    </PageLayout>
  );
}
