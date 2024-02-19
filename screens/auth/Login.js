/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { PageLayout } from '../../AppLayout';
import { useTheme, Keyboard, Password } from '../../components';
import { DARK, LIGHT, Styles, RoutePaths } from '../../constants';

export default function ({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [valid, setValid] = useState({
    email: true,
    password: true,
  });

  const handleKeyPress = key => {
    setPassword(prevInput => prevInput + key);
  };

  const clearInput = () => {
    setPassword(prev => prev.slice(0, -1));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onHandleEmail = e => {
    setValid(prev => ({
      ...prev,
      email: true,
    }));
    setEmail(e);
  };

  const handleNextView = () => {
    if (!email) {
      return setValid(prev => ({
        ...prev,
        email: false,
      }));
    }
    if (!password) {
      return alert('enter login password');
    }
    navigation.navigate(RoutePaths.HOME_PAGE);
  };
  const styles = Styles();

  return (
    <PageLayout>
      <View style={{ marginBottom: 5, paddingHorizontal: 14, marginTop: 20 }}>
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Email</Text>
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Enter Email"
              inputMode="email"
              keyboardType="email-address"
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
              onChangeText={onHandleEmail}
              style={styles.textInput}
            />
          </View>
        </View>

        {/*Password*/}
        <Password
          label="Password"
          value={password}
          placeholder="Enter Your Password"
          hide={showPassword}
          onToggle={toggleShowPassword}
        />

        <Text style={styles.resetAccount}>
          Trouble logging in?
          <Text style={styles.resetPassword}> Reset password</Text>
        </Text>

        {/*CUSTOM KEYBOARD */}
        <Keyboard onKeyPress={handleKeyPress} onClear={clearInput} />

        {/*LOGIN BUTTON */}
        <View style={{ marginTop: 28 }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.PRIMARY }]}
            onPress={() => navigation.navigate(RoutePaths.COUNTRY_PICKER)}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <View
            style={{
              width: 300,
              height: 20,
              alignItems: 'center',
              left: 0,
              marginVertical: 10,
            }}
          >
            <Text style={(styles.paragraph, { color: theme.NEUTRAL })}>
              Don't have an account?{' '}
              <Text
                onPress={() => navigation.navigate(RoutePaths.SIGNUP)}
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  fontWeight: 'bold',
                  color: theme.PRIMARY, //isDarkMode ? "#FFFFFF" : "#00100B",
                }}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </PageLayout>
  );
}
