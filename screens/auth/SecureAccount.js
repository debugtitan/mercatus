/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { PageLayout } from '../../AppLayout';
import { useTheme, Keyboard, OTPInput } from '../../components';
import { DARK, LIGHT, Styles, RoutePaths } from '../../constants';

export default function SecureAccount({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = Styles();

  const [passcode, setPasscode] = useState('');
  const onPassCodeSet = e => {
    console.log(e);
  };

  const nextRoute = () => {
    if (passcode.length === 6) {
      navigation.navigate(RoutePaths.CONFIRM_SECURE_ACCOUNT);
      return;
    }
    alert('Setup PassCode!')
  };

  return (
    <PageLayout>
      <View style={{ marginTop: 10, paddingHorizontal: 16 }}>
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Enter 6-Digit PIN</Text>
        </View>
        <OTPInput onDone={onPassCodeSet} />
      </View>

      {/*BUTTON */}
      <View style={{ marginTop: 30, paddingHorizontal: 22 }}>
        <TouchableOpacity
          onPress={nextRoute}
          style={[styles.button, { backgroundColor: theme.PRIMARY }]}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginTop: 12 }}>
        <Text style={(styles.regularParagraph, { textAlign: 'center' })}>
          Skip
        </Text>
      </TouchableOpacity>
    </PageLayout>
  );
}
