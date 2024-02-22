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
import { PageLayout } from '../../AppLayout';
import { useTheme, Password } from '../../components';
import { DARK, LIGHT, Styles } from '../../constants';
export default function SetPassword() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = Styles();

  const [phone, setPhone] = useState(null);
  const [countryCode, setCountryCode] = '+234';
  const [country, setCountry] = useState('NG');

  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PageLayout>
      <View style={{ marginTop: 10, paddingHorizontal: 16 }}>
        {/* Phone Number */}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Phone</Text>
          <View style={styles.formContainer}>
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
            <TouchableOpacity style={pass_styles.icon}>
              <Icon
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                color={theme.TABS_INACTIVE}
                size={20}
              />
            </TouchableOpacity>
          </View>
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
