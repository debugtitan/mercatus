/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { XMarkIcon, PaperAirplaneIcon } from 'react-native-heroicons/solid';
import { PageLayout } from '../../AppLayout';
import { useTheme, Keyboard } from '../../components';
import { DARK, LIGHT, Styles, RoutePaths } from '../../constants';
const DELAY = 30;
export default function OTPComponent({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = Styles();

  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(true);
  const [delay, setDelay] = useState(30);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
      setOtpSent(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [delay]);

  const sendOtp = () => {
    setOtpSent(true);
    setDelay(DELAY);
  };

  const handleKeyPress = key => {
    setOtp(prevInput => prevInput + key);
  };

  const clearInput = () => {
    setOtp(prev => prev.slice(0, -1));
  };

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
              editable={false}
              value={otp}
            />
            <View
              style={{ padding: 10, left: 240 }}
              //onPress={toggleShowPassword}
            >
              {otpSent ? (
                <XMarkIcon size={18} color={theme.TABS_INACTIVE} />
              ) : (
                <TouchableOpacity onPress={sendOtp}>
                  <PaperAirplaneIcon size={18} color={theme.TABS_INACTIVE} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        <Text
          style={{
            textAlign: 'right',
            lineHeight: 17,
            fontWeight: '600',
            fontSize: 14,
            color: theme.PRIMARY2,
            marginBottom: 28,
          }}
        >
          ({minutes}:{seconds})
        </Text>

        <Keyboard onKeyPress={handleKeyPress} onClear={clearInput} />

        {/*BUTTON */}
        <View style={{ marginTop: 90, paddingHorizontal: 18 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePaths.SECURE_ACCOUNT)}
            style={[styles.button, { backgroundColor: theme.PRIMARY }]}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageLayout>
  );
}
