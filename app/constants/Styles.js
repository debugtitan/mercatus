import { StyleSheet } from "react-native";

export const STYLES = StyleSheet.create({
  ImageContainer: {
    alignSelf: "center",
    width: 300,
    height: 290,
  },
  textContainer: {
    width: 291,
    height: 80,
  },
  paragraphContainer: {
    width: 290,
    height: 38,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
  },

  regularParagraph: {
    fontSize: 14,
    lineHeight: 14,
    color: "#FFFFFF",
    fontWeight: "400",
  },


  Heading: {
    //fontFamily: "Inter",
    fontSize: 33,
    lineHeight: 40,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  button: {
    border: "none",
    backgroundColor: "#07FFB1",
    borderRadius: 50,
    alignItems: "center",
    fontWeight: "600",
    color: "#00100B",
    fontSize: 18,
    lineHeight: 22,
    padding: 14,
    paddingHorizontal: 20,
  },
});
