import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

export default function ({
  pageData,
  imageContainerStyle,
  titleStyles,
  subtitleStyles,
  currentPage,
}) {
  const width = Dimensions.get('window').width;
  //console.log(pageData.titleContainerStyle);
  function ImageComponent() {
    if (pageData.imageComponent) {
      return pageData.imageComponent;
    }
    return null;
  }

  return (
    <View style={[styles.container, { width: width }]}>
      <View style={imageContainerStyle ?? styles.imageContainerStyle}>
        <ImageComponent />
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={pageData.titleContainerStyle ?? styles.titleContainerStyles}
        >
          <Text style={titleStyles ?? styles.titleStyles}>
            {pageData?.title}
          </Text>
        </View>

        <View
          style={
            pageData?.subtitleContainerStyle ?? styles.subTitleContainerStyle
          }
        >
          <Text style={subtitleStyles ?? styles.subtitleStyles}>
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
  },
  imageContainerStyle: {
    alignSelf: 'center',
  },
  titleContainerStyles: {
    width: 291,
    height: 80,
  },
  titleStyles: {
    //fontFamily: 'Inter',
    //textAlign: 'left',
    fontSize: 33,
    lineHeight: 40,
    color: '#00100B',
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
});
