import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import PageLayout from "../../PageLayout";
import { useTheme } from "../../components/ThemeProvider";
import { DARK, LIGHT, STYLES, RoutePaths } from "../../constants";
import Keyboard from "../../components/Keyboard";
import Password from "../../components/Password";
import CustomTextInput from "../../components/CustomTextInput";

export default function ({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [valid, setValid] = useState({
    email: true,
    password: true,
  });

  const handleKeyPress = (key) => {
    setPassword((prevInput) => prevInput + key);
  };

  const clearInput = () => {
    setPassword((prev) => prev.slice(0, -1));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  onHandleEmail = (e) => {
    setValid((prev) => ({
      ...prev,
      email: true,
    }));
    setEmail(e);
  };

  const handleNextView = () => {
    if (!email) {
      return setValid((prev) => ({
        ...prev,
        email: false,
      }));
    }
    if (!password){
      return alert('enter login password')
    }
    navigation.navigate(RoutePaths.HOME_PAGE);
  };

  return (
    <PageLayout>
      <View className="mt-5 flex-1">
        <View className="mb-4">
          <Text style={styles.textLabel} className='mb-1'>Email</Text>
          <CustomTextInput
            placeholder="Enter Email"
            inputMode="email"
            keyboardType="email-address"
            textStyle={styles.textInput}
            cursorColor={theme.TABS_INACTIVE}
            placeholderTextColor={theme.TABS_INACTIVE}
            onChangeText={onHandleEmail}
            validated={valid.email}
          />
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
        <View className="mt-6">
          <View>
            <TouchableOpacity
              style={styles.button}
              className=""
              onPress={handleNextView}
            >
              <Text style={(styles.paragraph, { color: theme.SHADES })}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ width: 300, height: 20, alignItems: "center", left: 0 }}
            className="mt-3"
          >
            <Text style={styles.paragraph}>
              Don't have an account?{" "}
              <Text
                onPress={() => navigation.navigate(RoutePaths.SIGNUP)}
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  fontWeight: "bold",
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
