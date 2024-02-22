/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CountryPicker from 'react-native-country-picker-modal';

import { PageLayout } from '../../AppLayout';
import { useTheme } from '../../components';
import { DARK, LIGHT, Styles, RoutePaths } from '../../constants';
export default function SetPassword({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = Styles();

  const [phone, setPhone] = useState(null);
  const [countryCode, setCountryCode] = useState('NG');
  const [country, setCountry] = useState(null);

  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSelect = userCountry => {
    setCountryCode(userCountry.cca2);
    setCountry(userCountry.callingCode);
  };

  return (
    <PageLayout>
      <View style={{ marginTop: 10, paddingHorizontal: 16 }}>
        {/* Phone Number */}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Phone</Text>
          <View style={styles.formContainer}>
            <View style={{ left: 5, top: 5 }}>
              <CountryPicker
                countryCode={countryCode}
                //withCountryNameButton={true}
                withCloseButton={false}
                onSelect={onSelect}
              />
            </View>
            <TextInput
              placeholder="Enter Phone number"
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
              keyboardType="number-pad"
              maxLength={10}
              //onChangeText={userName => setName(userName)}
              style={styles.textInput}
            />
          </View>
        </View>

        {/* Password */}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Password</Text>
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Set password"
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={userPassword => setPassword(userPassword)}
              style={styles.textInput}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={pass_styles.icon}
              onPress={toggleShowPassword}
            >
              <Icon
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                color={theme.TABS_INACTIVE}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/*Confirm Password */}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Confirm Password</Text>
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Confirm password"
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={userPassword => setConfirmPassword(userPassword)}
              style={styles.textInput}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={{ padding: 10, left: 190 }}
              onPress={toggleShowPassword}
            >
              <Icon
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                color={theme.TABS_INACTIVE}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/*BUTTON */}
        <View style={{ marginTop: 390, paddingHorizontal: 8 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePaths.OTP)}
            style={[styles.button, { backgroundColor: theme.PRIMARY }]}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageLayout>
  );
}

const pass_styles = StyleSheet.create({
  icon: {
    padding: 10,
    left: 215,
  },
});
