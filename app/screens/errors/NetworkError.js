import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import PageLayout from "../../PageLayout";
import { IMAGES, DARK, LIGHT, STYLES,RoutePaths } from "../../constants";
import { useTheme } from "../../helpers/ThemeProvider";

export default function({navigation}) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();
  return (
    <PageLayout>
      <View className='mt-12'>
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
      <View style={styles.ErrorContainer} className='mt-14'>
        <View style={{width:240, height:80}}>
          <Text style={styles.title}>Something went wrong</Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>
            We suspect your network connection is weak. Please check it and try
            again.
          </Text>
        </View>
      </View>
      <View className=" mt-36">
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(RoutePaths.NOT_FOUND_ERROR_PAGE)}>
          <Text style={(styles.regularParagraph, { color: theme.SHADES })}>Retry</Text>
        </TouchableOpacity>
      </View>
      </View>
    </PageLayout>
  );
}
