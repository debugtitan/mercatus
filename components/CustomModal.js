/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

export default function CustomModal({
  isVisble = false,
  coverScreen = true,
  children,
}) {
  return (
    <View>
      <Modal isVisible={isVisble} coverScreen={coverScreen}>
        <View style={{ flex: 1 }}>{children}</View>
      </Modal>
    </View>
  );
}
