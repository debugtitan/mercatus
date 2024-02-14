import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { useTheme } from '..';
import { DARK, LIGHT } from '../../constants';
function Dot({ selected, paginationSelectedColor, paginationColor }) {
  const sizeAnim = useRef(new Animated.Value(8)).current;
  //const [isSelected, setIsSelected] = useState(selected);

  /*useEffect(() => {
    if (selected) {
      Animated.timing(sizeAnim, {
        toValue: 11,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    } else {
      Animated.timing(sizeAnim, {
        toValue: 8,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }
    //setIsSelected(selected);
  }, []);*/

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          width: sizeAnim,
          height: sizeAnim,
          backgroundColor: selected ? paginationSelectedColor : paginationColor,
        },
      ]}
    />
  );
}

export const DotPagination = ({
  currentPage,
  totalPages,
  paginationSelectedColor,
  paginationColor,
}) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const elements = [];
  for (let i = 0; i < totalPages; i++) {
    elements.push(
      <Dot
        paginationColor={paginationColor ?? theme.NEUTRAL}
        paginationSelectedColor={paginationSelectedColor ?? theme.PRIMARY}
        key={i}
        selected={i === currentPage}
      />
    );
  }

  return <View style={styles.container}>{elements}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 16,
    height: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 32,
    marginHorizontal: 4,
  },
});
