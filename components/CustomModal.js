import { View, Text } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal'

export default function CustomModal({
    isVisble = false,
    coverScreen = true
    data
}) {
  return (
    <View>
      <Modal isVisible={isVisble} coverScreen={coverScreen}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
