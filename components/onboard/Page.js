import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function ({
  style,
  titleContainerStyle,
  subtitleContainerStyle,
  titleStyles,
  subtitleStyles,
  pageData,
  pageIndex,
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
}) {
  return (
    <View>
      <View style={styles.imageContainerStyle}>
        <ImageComponent
          style={{ ...(imageComponentStyle ?? styles.imageComponentStyle) }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={[titleContainerStyles ?? styles.titleStyles]}>
          <Text style={[titleStyles ?? '']}>{title}</Text>
        </View>
        <View
          style={[subTitleContainerStyles ?? styles.subTitleContainerStyle]}
        >
          <Text style={[subTitleStyles ?? styles.subTitleStyles]}>
            {subTitle}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
