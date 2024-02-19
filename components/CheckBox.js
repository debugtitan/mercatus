import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { CheckIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/'

export default function Checkbox({
  checked = false,
  onSelect = () => null,
  size = 24,
  boxOutlineColor = '#006042',
  checkedImage = null,
}) {
  const checkImage = () => {
    if (checkedImage) {
      return checkedImage;
    }
    return <Icon color={boxOutlineColor} size={size} name=''/>;
  };
  return (
    <Pressable
      style={!checked ? styles.CheckBoxSquare(size, boxOutlineColor) : {}}
      onPress={() => onSelect()}
    >
      {checked && checkImage()}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  CheckBoxSquare: (size, checkColor) => ({
    width: 24 || size,
    height: 24 || size,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: checkColor,
  }),
});
