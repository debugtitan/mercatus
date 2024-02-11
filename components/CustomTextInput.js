import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { DARK, LIGHT } from "../constants";

export default function CustomTextInput({
  placeholder,
  keyboardType,
  editable,
  autoCapitalize,
  cursorColor,
  enterKeyHint,
  inputMode,
  secureTextEntry,
  placeholderTextColor,
  validated = true,
  textStyle,
  value,
  onChangeText = () => null
}) {

  const {isDarkMode} = useTheme();
  const theme = isDarkMode ? DARK : LIGHT


  return (
    <View  style={[styles.formContainer(validated=validated, borderColor=theme.PRIMARY,isDarkMode)]}>
      <TextInput
        placeholder={placeholder || "Name"}
        placeholderTextColor={placeholderTextColor || ''}
        keyboardType={keyboardType || "name-phone-pad"}
        editable={editable || true}
        autoCapitalize={autoCapitalize || "none"}
        cursorColor={cursorColor || ''}
        enterKeyHint={enterKeyHint ||'next'}
        inputMode={inputMode ||'none'}
        secureTextEntry={secureTextEntry || false}
        style={textStyle}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    formContainer: (validated,borderColor,isDarkMode) => ({
      borderRadius: 4,
      borderColor: validated ? borderColor : '#a15243',
      borderWidth: 2,
      backgroundColor: isDarkMode ? "#F9FAF9" : "#FFFFFF",
      height:44
    })
})