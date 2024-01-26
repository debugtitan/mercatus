import { View, Text, Image } from "react-native";
import React from "react";
import PageLayout from "../../PageLayout";
import { IMAGES, DARK, LIGHT, STYLES } from "../../constants";
import { useTheme } from "../../helpers/ThemeProvider";

export default function NetworkError() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();
  return (
    <PageLayout>
      <View className="flex flex-1 justify-center items-center mt-10">
        <View style={styles.ErrorImageContainer}>
          <Image
            source={
              isDarkMode
                ? IMAGES.ERROR.DARK.NETWORK
                : IMAGES.ERROR.LIGHT.NETWORK
            }
          />
        </View>
      </View>
      <View style={styles.ErrorContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Something went wrong</Text>
        </View>
      </View>
    </PageLayout>
  );
}
