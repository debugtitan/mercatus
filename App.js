import { View } from "react-native";
import { OnboardingScreen } from "./app/screens";
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter': require("./assets/fonts/Inter.ttf"),
  });
  return (
    <View>
      <OnboardingScreen />
    </View>
  );
}
