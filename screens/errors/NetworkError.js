/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  //Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { PageLayout } from '../../AppLayout';
import { IMAGES, DARK, LIGHT, RoutePaths } from '../../constants';
import { useTheme } from '../../components';
export default function ({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  //const styles = Styles();
  //const width = Dimensions.get('window').width;
  return (
    <PageLayout>
      <View style={styles.imageContainerStyle}>
        <Image
          source={
            isDarkMode ? IMAGES.ERROR.DARK.NETWORK : IMAGES.ERROR.LIGHT.NETWORK
          }
          style={{
            width: 344,
            height: 350,
            marginVertical: 45,
          }}
        />
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <View style={styles.titleContainerStyles}>
          <Text style={[styles.titleStyles, { color: theme.PRIMARY2 }]}>
            Something went wrong
          </Text>
        </View>

        <View style={styles.subTitleContainerStyle}>
          <Text style={[styles.subtitleStyles, { color: theme.PRIMARY2 }]}>
            We suspect your network connection is weak. Please check it and try
            again.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.PRIMARY }]}
        onPress={() => navigation.navigate(RoutePaths.NOT_FOUND_ERROR_PAGE)}
      >
        <Text
          style={{
            lineHeight: 22,
            fontSize: 18,
            fontWeight: '600',
            color: theme.BACKGROUND,
          }}
        >
          Retry
        </Text>
      </TouchableOpacity>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainerStyle: {
    alignSelf: 'center',
  },
  titleContainerStyles: {
    width: 251,
    height: 70,
  },
  titleStyles: {
    //fontFamily: 'Inter',
    //textAlign: 'left',
    fontSize: 33,
    lineHeight: 40,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  subTitleContainerStyle: {
    width: 280,
    height: 38,
  },
  subtitleStyles: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    color: '#00100B',
    //fontFamily: 'Inter',
  },
  button: {
    //backgroundColor: theme.PRIMARY,
    borderRadius: 50,
    alignItems: 'center',
    lineHeight: 22,
    padding: 14,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 140,
  },
});
