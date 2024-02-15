import { Text, View } from 'react-native';
import React from 'react';
import { DARK, LIGHT, Styles } from '../../constants';
import { useTheme } from '..';

export function Footer({ footerTitle }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  return (
    <View
      style={[Styles().button, { marginHorizontal: 20, marginVertical: 10 }]}
    >
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          lineHeight: 22,
          fontSize: 18,
          fontWeight: '600',
          color: theme.BACKGROUND,
        }}
      >
        {footerTitle ?? 'Get Started'}
      </Text>
    </View>
  );
}
