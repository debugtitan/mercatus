import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import PageLayout from "../PageLayout";
import { useTheme } from "./ThemeProvider";
import { DARK, IMAGES, LIGHT } from "../constants";

export default function ({ onKeyPress, onClear }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();

  const handleKeyPress = (key) => {
    onKeyPress(key);
  };

  return (
    <View className="m-3 mt-20">
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => handleKeyPress("1")}>
            <Text style={styles.buttonLabel}>1</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => handleKeyPress("2")}>
            <Text style={styles.buttonLabel}>2</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleKeyPress("3")}>
            <Text style={styles.buttonLabel}>3</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => handleKeyPress("4")}>
            <Text style={styles.buttonLabel}>4</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => handleKeyPress("5")}>
            <Text style={styles.buttonLabel}>5</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleKeyPress("6")}>
            <Text style={styles.buttonLabel}>6</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => handleKeyPress("7")}>
            <Text style={styles.buttonLabel}>7</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => handleKeyPress("8")}>
            <Text style={styles.buttonLabel}>8</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleKeyPress("9")}>
            <Text style={styles.buttonLabel}>9</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*  FINGERPRINT SECTION */}
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={
              isDarkMode
                ? IMAGES.AUTH.DARK.FINGERPRINT
                : IMAGES.AUTH.LIGHT.FINGERPRINT
            }
            style={{width:24,height:26.69}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          
          onPress={() => handleKeyPress("0")}
        >
          <Text style={styles.buttonLabel}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onClear()}>
          <Image
            source={
              isDarkMode
                ? IMAGES.AUTH.DARK.KEYPAD_CANCEL
                : IMAGES.AUTH.LIGHT.KEYPAD_CANCEL
            }
            style={{ width: 22, height: 16}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const STYLES = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },

    buttonLabel: {
      fontWeight: "500",
      fontSize: 20,
      fontFamily: 'Inter',
      lineHeight: 24,
      alignSelf: "center",
      color: theme.PRIMARY2,
      borderBottomWidth: 0.5,
      borderColor: "#C5CECC",
      padding: 10,
      textAlign: "center",
      justifyContent: "center",
      paddingTop: 29,
      paddingBottom: 29,
    },
  });
};
