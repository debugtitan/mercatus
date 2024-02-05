import React, { useState } from "react";
import { ChevronDownIcon } from "react-native-heroicons/solid";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
} from "react-native";
import RadioButton from "./RadioButton";
import { useTheme } from "./ThemeProvider";
import { DARK, LIGHT } from "../constants";
const Dropdown = ({
  borderColor = "#07FFB1",
  borderRadius = 4,
  backgroundColor = "#F9FAF9",
  height = 44,
  borderWidth = 2,
  options = ["Yes", "No"],
  onOptionSelect = () => null
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState()


  const handleSelect = (item) => {
    onOptionSelect(item)
    setValue(item)
    setModalVisible(!modalVisible)
  };
  const {isDarkMode} = useTheme();
  const theme = isDarkMode ? DARK : LIGHT

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.container(
          borderColor,
          borderRadius,
          backgroundColor,
          height,
          borderWidth
        )}
      >
        <TextInput placeholder="Select gender" editable={false} value={value} />
        <ChevronDownIcon size={14} color="black" style={styles.chevron} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              width: 70,
              height: "auto",
              width: "70%",
              backgroundColor: "#FFFFFF",
            }}
          >
            <FlatList
              data={options}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                  <TouchableOpacity  onPress={() => handleSelect(item)}  style={styles.option}>
                    <Text style={{margin: 3}}>{item}</Text>
                    </TouchableOpacity >
             
              )}
            />
          </View>
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
    flexDirection: "row",
    padding: 10,
  }),

  chevron: {
    marginLeft: 210,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    padding: 20,
  },
});

export default Dropdown;
