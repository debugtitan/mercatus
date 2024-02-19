import { View, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import Reanimated, { BounceIn } from 'react-native-reanimated';

export default function RadioButton({
  selected = false,
  onSelect = () => null,
  radioBackground = '#006042',
  size = 24,
  label,
  image,
}) {
  return (
    <Reanimated.View entering={BounceIn}>
      <View style={styles.container}>
        <Pressable
          style={styles.radioButtonContainer}
          onPress={() => onSelect()}
        >
          <View style={styles.radioButton(size, radioBackground)}>
            {selected && (
              <View style={styles.selected(size * 0.5, radioBackground)} />
            )}
          </View>
        </Pressable>
        <Text style={styles.label}>{label}</Text>
      
      </View>
    </Reanimated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  radioButtonContainer: {
    marginRight: 8,
  },
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
