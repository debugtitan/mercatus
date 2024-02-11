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
                  ? IMAGES.ERROR.DARK.NOT_FOUND
                  : IMAGES.ERROR.LIGHT.NOT_FOUND
              }
            />
          </View>
        </View>
        <View style={styles.ErrorContainer} className="mt-14">
          <View style={{ width: 240, height: 40 }}>
            <Text style={styles.title}>Item not found</Text>
          </View>
          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>
              Confirm that the item was spelt correctly.
            </Text>
          </View>
        </View>
        <View className=" mt-36">
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(RoutePaths.DECLINE_ERROR_PAGE)}
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
