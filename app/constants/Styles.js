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


    textContainer: {
      width: 240,
      height: 80,
    },

    paragraphContainer: {
      width: 290,
      height: 38,
    },
    paragraph: {
      fontSize: 18,
      lineHeight: 19,
      fontWeight: "600",
      //fontFamily: 'Inter'
    },

    regularParagraph: {
      fontSize: 14,
      lineHeight: 14,
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
  });
};
