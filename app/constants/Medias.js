import { Image } from "react-native";
import { STYLES } from "./Styles";
export const IMAGES = {
    LOGO: require("../../assets/media/Logo.png"),
    ONBOARDING: {
        INVESTMENT: require("../../assets/media/onboarding/investment-data.png"),
        CONNECTED_WORLD: require("../../assets/media/onboarding/connected-world.png"),
        ENCRYPTION: require("../../assets/media/onboarding/amico.png")
    }
}

export const Onboarding1 = () => {
    return (
      <Image
        source={IMAGES.ONBOARDING.INVESTMENT}
        style={STYLES.ImageContainer}
      />
    );
  };

export  const Onboarding2 = () => {
    return (
      <Image
        source={IMAGES.ONBOARDING.ENCRYPTION}
        style={STYLES.ImageContainer}
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

