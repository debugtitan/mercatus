import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import PageLayout from "./PageLayout";
import { useTheme } from "./helpers/ThemeProvider";
import { DARK, IMAGES, LIGHT } from "./constants";

export default function ({ onKeyPress }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();
  return (
    <PageLayout>
      <View style={styles.keyboardContainer}>
        <View style={styles.textContainer}>
          <View>
            <TouchableOpacity style={styles.borderContainer}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.borderContainer}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.borderContainer}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View>
            <TouchableOpacity style={styles.borderContainer}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.borderContainer}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.borderContainer}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*  FINGERPRINT SECTION */}
        <View style={styles.textContainer}>
          <View>
            <TouchableOpacity>
              <Image
                source={
                  isDarkMode
                    ? IMAGES.AUTH.DARK.FINGERPRINT
                    : IMAGES.AUTH.LIGHT.FINGERPRINT
                }
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={
                  isDarkMode
                    ? IMAGES.AUTH.DARK.KEYPAD_CANCEL
                    : IMAGES.AUTH.LIGHT.KEYPAD_CANCEL
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </PageLayout>
  );
}

const STYLES = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  return StyleSheet.create({
    keyboardContainer: {
      flex: 1,
      height: 376,
      marginTop: 12,
      padding: 24,
    },
    borderContainer: {
      width: 56,
      borderBottomWidth: 1,
      borderColor: "#C5CECC",
    },
    textContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    text: {
      fontWeight: "500",
      fontSize: 20,
      lineHeight: 24,
      alignSelf: "center",
      color: theme.PRIMARY2,
      marginVertical: 25,
    },
  });
};
