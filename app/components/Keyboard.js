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
      <View style={styles.keyboardContainer}>
        <View style={styles.textContainer}>
          <TouchableOpacity
            style={styles.borderContainer}
            onPress={() => handleKeyPress("1")}
          >
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.borderContainer}
            onPress={() => handleKeyPress("2")}
          >
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.borderContainer}
            onPress={() => handleKeyPress("3")}
          >
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity
            style={styles.borderContainer}
            onPress={() => handleKeyPress("4")}
          >
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.borderContainer}
            onPress={() => handleKeyPress("5")}
          >
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.borderContainer}
            onPress={() => handleKeyPress("6")}
          >
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity
            style={styles.borderContainer}
            onPress={() => handleKeyPress("7")}
          >
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.borderContainer}
            onPress={() => handleKeyPress("8")}
          >
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.borderContainer}
            onPress={() => handleKeyPress("9")}
          >
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
        </View>

        {/*  FINGERPRINT SECTION */}
        <View style={styles.textContainer}>
          <TouchableOpacity>
            <Image
              source={
                isDarkMode
                  ? IMAGES.AUTH.DARK.FINGERPRINT
                  : IMAGES.AUTH.LIGHT.FINGERPRINT
              }
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 56,
              borderBottomWidth: 1,
              borderColor: "#C5CECC",
            }}
            onPress={() => handleKeyPress('0')}
          >
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onClear()}>
            <Image
              source={
                isDarkMode
                  ? IMAGES.AUTH.DARK.KEYPAD_CANCEL
                  : IMAGES.AUTH.LIGHT.KEYPAD_CANCEL
              }
              style={{ width: 24, height: 24, marginVertical: 25 }}
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
    keyboardContainer: {
      //height: 376,
      marginTop: 22,
      //padding: 24,
    },
    borderContainer: {
      width: 45,
      borderBottomWidth: 1,
      borderColor: "#C5CECC",
    },
    textContainer: {
      flexDirection: "row",
      justifyContent: 'space-around',
    },
    text: {
      fontWeight: "700",
      fontSize: 20,
      lineHeight: 24,
      alignSelf: "center",
      color: theme.PRIMARY2,
      marginVertical: 35,
    },
    image: {
      marginVertical: 25,
      width: 24,
      height: 26.69,
    },
  });
};
