import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
} from "react-native";

const Dropdown = ({
    borderColor ,
    borderRadius,
    backgroundColor,
    height,
    borderWidth
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    //onSelect(item);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.container()}
      >
        <TextInput placeholder="Select gender" editable={false} />
      </TouchableOpacity>

      <Modal
        //transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text></Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (
    borderColor,
    borderRadius,
    backgroundColor,
    height,
    borderWidth
  ) => ({
    borderRadius: borderRadius,
    borderColor: borderColor,
    borderWidth: borderWidth,
    backgroundColor: backgroundColor,
    height: height,
  }),
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default Dropdown;
