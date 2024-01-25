import { Image } from "react-native";
import { STYLES } from "./Styles";
import { useTheme } from "../helpers/ThemeProvider";

export const IMAGES = {
  LOGO: require("../../assets/media/Logo.png"),
  ONBOARDING: {
    DARK: {
      INVESTMENT: require("../../assets/media/onboarding/investment-data.png"),
      CONNECTED_WORLD: require("../../assets/media/onboarding/connected-world.png"),
      ENCRYPTION: require("../../assets/media/onboarding/amico.png"),
    },
    LIGHT: {
      INVESTMENT: require("../../assets/media/onboarding/invest-light.png"),
      CONNECTED_WORLD: require("../../assets/media/onboarding/connected-world.png"),
      ENCRYPTION: require("../../assets/media/onboarding/encrypt-light.png"),
    },
  },
  ICONS: {
    DARK: {
      TOGGLE_FORWARD: require("../../assets/icons/toggle-forward.png"),
      TOGGLE_BACK: require("../../assets/icons/toggle-back.png"),
    },
    LIGHT: {
      TOGGLE_FORWARD: require("../../assets/icons/light-toggle-right.png"),
      TOGGLE_BACK: require("../../assets/icons/light-toggle-left.png"),
    },
  },
};

export const Onboarding1 = () => {
  const { isDarkMode } = useTheme();
  return (
    <Image
      source={
        isDarkMode
          ? IMAGES.ONBOARDING.DARK.INVESTMENT
          : IMAGES.ONBOARDING.LIGHT.INVESTMENT
      }
      style={{
        alignSelf: "center",
        width: 310,
        height: 300,
        marginVertical: 55,
      }}
    />
  );
};

export const Onboarding2 = () => {
  const { isDarkMode } = useTheme();
  return (
    <Image
      source={
        isDarkMode
          ? IMAGES.ONBOARDING.DARK.ENCRYPTION
          : IMAGES.ONBOARDING.LIGHT.ENCRYPTION
      }
      style={{
        alignSelf: "center",
        width: 310,
        height: 315,
        marginVertical: 55,
      }}
    />
  );
};

export const Onboarding3 = () => {
  const { isDarkMode } = useTheme();
  return (
    <Image
      source={
        isDarkMode
          ? IMAGES.ONBOARDING.DARK.CONNECTED_WORLD
          : IMAGES.ONBOARDING.LIGHT.CONNECTED_WORLD
      }
      style={{
        alignSelf: "center",
        width: 310,
        height: 315,
        marginVertical: 55,
      }}
    />
  );
};
