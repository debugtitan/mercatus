import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import PageLayout from "../../PageLayout";
import { useTheme } from "../../helpers/ThemeProvider";
import { DARK, LIGHT, STYLES, RoutePaths } from "../../constants";
import Keyboard from "../../helpers/Keyboard";
import Password from "../../helpers/Password";
export default function ({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();
  const [input, setInput] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleKeyPress = (key) => {
    setInput((prevInput) => prevInput + key);
  };

  const clearInput = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PageLayout>
      <View className="mt-5 flex-1">
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

        {/*Password*/}
        <Password
          label="Password"
          value={input}
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
        <View className="mt-8">
          <View className="my-5">
            <TouchableOpacity
              style={styles.button}
              className=""
              onPress={() => navigation.navigate(RoutePaths.HOME_PAGE)}
            >
              <Text style={(styles.paragraph, { color: theme.SHADES })}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ width: 300, height: 20, alignItems: "center", left: 0 }}
            className="mb-2"
          >
            <Text style={styles.paragraph}>
              Don't have an account?{" "}
              <Text
                onPress={() => navigation.navigate(RoutePaths.SIGNUP)}
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  fontWeight: "500",
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
