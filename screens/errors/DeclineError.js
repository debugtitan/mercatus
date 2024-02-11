import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import PageLayout from "../../PageLayout";
import { IMAGES, DARK, LIGHT, STYLES, RoutePaths } from "../../constants";
import { useTheme } from "../../components/ThemeProvider";

export default function ({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();
  return (
    <PageLayout>
      <View className="mt-12">
        <View className="flex flex-1 justify-center items-center mt-10">
          <View style={styles.ErrorImageContainer}>
            <Image
              source={
                isDarkMode
                  ? IMAGES.ERROR.DARK.DECLINED
                  : IMAGES.ERROR.LIGHT.DECLINED
              }
            />
          </View>
        </View>
        <View style={styles.ErrorContainer} className="mt-14">
          <View style={{ width: 338, height: 40 }}>
            <Text style={styles.title}>Transaction Declined</Text>
          </View>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Card rejected! Please enter your card details again, or use
              another card.
            </Text>
          </View>
        </View>
        <View className=" mt-36">
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(RoutePaths.LOGIN)}
          >
            <Text style={(styles.regularParagraph, { color: theme.SHADES })}>
              Retry
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageLayout>
  );
}
