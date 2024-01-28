import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DARK, LIGHT, STYLES } from "../constants";
import { useTheme } from "./ThemeProvider";
import { EyeSlashIcon, EyeIcon } from "react-native-heroicons/outline";

export default function ({ label, value, placeholder, hide, onToggle }) {
  const styles = STYLES();
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const securedValue = hide ? "*".repeat(value.length) : value;
  return (
    <View className="mb-2">
      <Text style={styles.textLabel}>{label}</Text>
      <View
        style={{
          borderWidth: 2,
          borderColor: theme.PRIMARY,
          borderRadius: 4,
          flexDirection: "row",
          backgroundColor: isDarkMode ? "#F9FAF9" : "#FFFFFF",
        }}
      >
        <Text style={{...styles.textInput,width:'90%'}}>
          {value.length == 0 ? placeholder : securedValue}
        </Text>
        <View style={{top:8,right:0}}>
          {hide ? (
            <TouchableOpacity onPress={onToggle}>
              <EyeIcon color={theme.TABS_INACTIVE} size={16} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onToggle}>
              <EyeSlashIcon color={theme.TABS_INACTIVE} size={16} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
