import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const Swiper = ({
  children,
  disableGesture,
  onChangeIndex,
  ref,
  index,
  autoplay,
}) => {
  return (
    <ScrollView
      //ref={ref}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEnabled={!disableGesture}
      onMomentumScrollEnd={event => {
        const pageIndex = Math.round(
          event.nativeEvent.contentOffset.x / SCREEN_WIDTH
        );
        onChangeIndex({ index: pageIndex, prevIndex: index });
      }}
      contentOffset={{ x: SCREEN_WIDTH * index, y: 0 }}
    >
      {children.map((child, id) => (
        <View key={id} style={styles.page}>
          {child}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    width: SCREEN_WIDTH,
  },
});
