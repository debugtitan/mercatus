
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const IconButton = ({ size, onPress, allowFontScaling, style, children }) => (
  <View style={{ flex: 0, paddingHorizontal: 10, ...style }}>
    <TouchableOpacity
      style={{ flex: 0 }}
      onPress={onPress}
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
    >
      <View allowFontScaling={allowFontScaling} style={{ fontSize: size / 2.5 }}>{children}</View>
    </TouchableOpacity>
  </View>
);

