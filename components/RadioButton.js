import { View, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import Reanimated, { BounceIn } from 'react-native-reanimated';

export default function RadioButton({
  selected = false,
  onSelect = () => null,
  radioBackground = '#006042',
  size = 24,
  label,
}) {
  return (
    <Reanimated.View entering={BounceIn}>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: 104 }}>
        <Pressable
          style={styles.radioButton(size, radioBackground)}
          onPress={() => onSelect()}
        >
          {selected && (
            <View style={styles.selected(size * 0.5, radioBackground)} />
          )}
        </Pressable>
        <Text style={{ marginLeft: 18 }}>{label}</Text>
      </View>
    </Reanimated.View>
  );
}

const styles = StyleSheet.create({
  radioButton: (size, radioBackground) => ({
    width: size || 24,
    height: size || 24,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: radioBackground,
  }),

  selected: (size, selectedColor) => ({
    width: size || 12,
    height: size || 12,
    alignSelf: 'center',
    margin: 4,
    padding: 5,
    borderRadius: 50,
    backgroundColor: selectedColor || 'blue',
  }),
});
