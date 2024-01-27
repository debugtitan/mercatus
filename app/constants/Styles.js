import { StyleSheet } from "react-native";
import { useTheme } from "../helpers/ThemeProvider";

export const STYLES = () => {
  const { isDarkMode } = useTheme();
  return StyleSheet.create({
    ImageContainer: {
      alignSelf: "center",
      width: 290,
      height: 270,
      marginVertical: 55,
    },

    ErrorImageContainer: {
      width: 380.39,
      height: 364,
      alignSelf: "center",
    },

    ErrorContainer: {
      flex: 1,
      width: 288.59,
      height: 80,
      paddingHorizontal: 8,
      paddingVertical: 0,
    },

    textContainer: {
      width: 240,
      height: 80,
    },

    paragraphContainer: {
      width: 290,
      height: 38,
    },
    paragraph: {
      fontSize: 14,
      lineHeight: 19,
      fontWeight: "400",
      color: isDarkMode ? "#FFFFFF" : "#00100B",
      //fontFamily: 'Inter'
    },

    regularParagraph: {
      fontSize: 19,
      lineHeight: 19,
      color: isDarkMode ? "#FFFFFF" : "#00100B",
      fontWeight: "400",
    },

    title: {
      //fontFamily: "Inter",
      fontSize: 33,
      lineHeight: 40,
      color: isDarkMode ? "#FFFFFF" : "#00100B",
      fontWeight: "700",
    },

    button: {
      border: "none",
      backgroundColor: isDarkMode ? "#07FFB1" : "#006042",
      borderRadius: 50,
      alignItems: "center",
      lineHeight: 22,
      padding: 14,
      paddingHorizontal: 20,
    },
    shadow: {
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      elevation: 5,
    },
  });
};
