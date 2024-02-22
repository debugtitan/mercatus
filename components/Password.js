import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { DARK, LIGHT, Styles } from '../constants';
import { useTheme } from './ThemeProvider';

import Icon from 'react-native-vector-icons/Ionicons';
export default function ({ label, value, placeholder, hide, onToggle }) {
  const styles = Styles();
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const securedValue = hide ? '*'.repeat(value.length) : value;
  return (
    <View style={{ marginBottom: 2 }}>
      <Text style={styles.textLabel}>{label}</Text>

      <View style={viewStyles.container(isDarkMode, theme.PRIMARY)}>
        <Text style={viewStyles.placeholder(theme.TABS_INACTIVE)}>
          {value.length == 0 ? placeholder : securedValue}
        </Text>
        <View style={{ top: 8, right: 0, padding: 4 }}>
          <TouchableOpacity onPress={onToggle}>
            <Icon
              name={hide ? 'eye-outline' : 'eye-off-outline'}
              color={theme.TABS_INACTIVE}
              size={20}
            />
          </TouchableOpacity>
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
    flexDirection: 'row',
    backgroundColor: isDarkMode ? '#F9FAF9' : '#FFFFFF',
  }),

  placeholder: color => ({
    width: '90%',
    paddingVertical: 12,
    paddingLeft: 10,
    color: color,
  }),
});
