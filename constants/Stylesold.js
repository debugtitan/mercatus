import { StyleSheet } from "react-native";
import { useTheme } from "../components/ThemeProvider";
import { DARK, LIGHT } from "./Theme";

export const STYLES = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
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
      height: 78,
    },
    paragraph: {
      fontSize: 14,
      lineHeight: 17,
      fontWeight: "400",
      color: isDarkMode ? "#FFFFFF" : "#00100B",
      fontFamily: 'Inter'
    },

    regularParagraph: {
      fontSize: 16,
      lineHeight: 19,
      color: isDarkMode ? "#FFFFFF" : "#00100B",
      fontWeight: "600",
      fontFamily: 'Inter',
    },

    title: {
      fontFamily: "Inter",
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
    textLabel: {
      color: theme.PRIMARY2,
      fontSize: 14,
      fontWeight: "400",
      fontFamily: 'Inter',
    },
    textInputContainer: {
      borderRadius: 4,
      borderColor: theme.PRIMARY,
      borderWidth: 2,
      backgroundColor: isDarkMode ? "#F9FAF9" : "#FFFFFF",
      height:44
    },
    
    resetAccount: {
      fontSize: 16,
      lineHeight: 19,
      fontFamily: 'Inter',
      color: isDarkMode ? "#B2BEBB" : "#7F938D",
      fontWeight: "bold",
    },
    resetPassword:{
      fontSize: 16,
      lineHeight: 19,
      fontFamily: 'Inter',
      fontWeight: "600",
      color: theme.PRIMARY,
    },
    countryContainer: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      marginVertical: 3,
      paddingHorizontal: 0,
      paddingVertical: 10,
      height: 56,
      gap: 15,
    },
    label: (color) => ({
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 19,
      color: color,
    }),
    image: {
      width: 24,
      height: 24,
      marginLeft: 145,
    },
    countryInfo: {
      marginLeft: 15,
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      //justifyContent: "center",
    },
    terms:{
      fontSize: 14,
      lineHeight: 17,
      fontFamily: 'Inter',
      fontWeight: "bold",
      color: theme.PRIMARY,
      textDecorationLine: 'underline'
    },
  });
  
};
