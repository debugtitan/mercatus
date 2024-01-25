import { Image } from "react-native";
import { STYLES } from "./Styles";
export const IMAGES = {
  LOGO: require("../../assets/media/Logo.png"),
  ONBOARDING: {
    INVESTMENT: require("../../assets/media/onboarding/investment-data.png"),
    CONNECTED_WORLD: require("../../assets/media/onboarding/connected-world.png"),
    ENCRYPTION: require("../../assets/media/onboarding/amico.png"),
  },
  ICONS: {
    TOGGLE_FORWARD: require("../../assets/icons/toggle-forward.png"),
    TOGGLE_BACK: require("../../assets/icons/toggle-back.png"),
  },
};

export const Onboarding1 = () => {
  return (
    <Image
      source={IMAGES.ONBOARDING.INVESTMENT}
      style={STYLES.ImageContainer}
    />
  );
};

export const Onboarding2 = () => {
  return (
    <Image
      source={IMAGES.ONBOARDING.ENCRYPTION}
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
  return (
    <Image
      source={IMAGES.ONBOARDING.CONNECTED_WORLD}
      style={STYLES.ImageContainer}
    />
  );
};
