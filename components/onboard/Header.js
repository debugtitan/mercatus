import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export function Header({ headerTitle, onHeaderClick }) {
  return (
    <TouchableOpacity style={{ paddingHorizontal: 16, marginTop: 20 }} onPress={onHeaderClick ?? null}>
      <View>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: '#7F938D',
            fontSize: 14,
            lineHeight: 19,
            fontWeight: '500',
            textAlign: 'right',
          }}
        >
          {headerTitle ?? 'Get Started'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
