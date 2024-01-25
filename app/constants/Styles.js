import { StyleSheet } from "react-native";

export const STYLES = StyleSheet.create({

  ImageContainer: {
    alignSelf: "center",
    width: 350,
    height: 340,
    marginVertical:55
  },

  textContainer: {
    width: 271,
    height: 70,
  },

  paragraphContainer: {
    width: 290,
    height: 38,
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 19,
    fontWeight: "500",
    //fontFamily: 'Inter'
  },

  regularParagraph: {
    fontSize: 14,
    lineHeight: 14,
    color: "#FFFFFF",
    fontWeight: "400",
  },

  title: {
    //fontFamily: "Inter",
    fontSize: 33,
    lineHeight: 40,
    color: "#FFFFFF",
    fontWeight: "700",
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
