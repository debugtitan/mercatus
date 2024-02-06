import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
      <Text style={styles.textLabel} className="mb-1">
        {label}
      </Text>

      <View style={viewStyles.container(isDarkMode, theme.PRIMARY)}>
        <Text style={viewStyles.placeholder(theme.TABS_INACTIVE)}>
          {value.length == 0 ? placeholder : securedValue}
        </Text>
        <View style={{ top: 8, right: 0, padding: 4 }}>
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

const viewStyles = StyleSheet.create({
  container: (isDarkMode, borderColor) => ({
    borderWidth: 2,
    borderColor: borderColor,
    borderRadius: 4,
    height: 44,
    flexDirection: "row",
    backgroundColor: isDarkMode ? "#F9FAF9" : "#FFFFFF",
  }),

  placeholder: (color) => ({
    width: "90%",
    paddingVertical: 12,
    paddingLeft: 10,
    color: color,
  }),
});
