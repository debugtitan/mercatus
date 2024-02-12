import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function ({
  style,
  titleContainerStyle,
  subtitleContainerStyle,
  imageContainerStyle,
  titleStyles,
  subtitleStyles,
  pageData,
  pageIndex,
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
}) {
  console.log(pageData);
  function ImageComponent() {
    if (pageData.imageComponent) {
      return pageData.imageComponent;
    }
    return null;
  }
  return (
    <View style={[styles.container]}>
      <View>
        <ImageComponent />
      </View>

      <View style={styles.bottomContainer}>
        <View style={[styles.titleContainerStyles, titleContainerStyle]}>
          <Text style={[styles.titleStyles, titleStyles]}>
            {pageData?.title}
          </Text>
        </View>

        <View style={[styles.subTitleContainerStyle, subtitleContainerStyle]}>
          <Text style={[styles.subTitleStyles, subtitleStyles]}>
            {pageData?.subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainerStyle: {
    alignItems: 'center',
  },
  imageComponentStyle: {
    alignSelf: 'center',
    width: 310,
    height: 300,
    marginVertical: 55,
  },
  titleContainerStyles: {
    width: 200,
    height: 70,
  },
  titleStyles: {
    fontFamily: 'Inter',
    fontSize: 33,
    lineHeight: 40,
    color: '#00100B',
    fontWeight: '700',
  },
  subTitleContainerStyle: {
    width: 290,
    height: 57,
  },
  subTitleStyles: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '400',
    color: '#00100B',
    fontFamily: 'Inter',
  },
});
