import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IMAGES, DARK, LIGHT } from '../../constants';
import { useTheme } from '..';

export const CustomPaginatorComponent = ({
  Component,
  paginationSelectedColor,
  paginationColor,
  currentPage,
  goToNextPage,
  pages,
  goToPreviousPage,
}) => {
  const totalPages = pages?.length ?? 0;
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        //height: 50,
        //paddingHorizontal: 1,
      }}
    >
      {currentPage === 1 ? (
        <TouchableOpacity
          style={styles.toggle_left}
          onPress={goToPreviousPage}
          activeOpacity={0.3}
        >
          <Image
            source={
              isDarkMode
                ? IMAGES.ICONS.DARK.TOGGLE_BACK
                : IMAGES.ICONS.LIGHT.TOGGLE_BACK
            }
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ tintColor: isDarkMode ? '#ECEFEE' : '#B2BEBB' }}
          />
        </TouchableOpacity>
      ) : currentPage === 2 ? (
        <TouchableOpacity
          style={styles.toggle_left}
          onPress={goToPreviousPage}
          activeOpacity={0.3}
        >
          <Image
            source={
              isDarkMode
                ? IMAGES.ICONS.DARK.TOGGLE_BACK
                : IMAGES.ICONS.LIGHT.TOGGLE_BACK
            }
          />
        </TouchableOpacity>
      ) : null}

      <Component.PaginationComponent
        paginationColor={paginationColor}
        paginationSelectedColor={paginationSelectedColor}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      {currentPage !== totalPages - 1 && (
        <TouchableOpacity
          style={styles.toggle_right}
          onPress={goToNextPage}
          activeOpacity={0.3}
        >
          <Image
            source={
              isDarkMode
                ? IMAGES.ICONS.DARK.TOGGLE_FORWARD
                : IMAGES.ICONS.LIGHT.TOGGLE_FORWARD
            }
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  toggle_right: {
    position: 'absolute',
    bottom: 22,
    right: 35,
  },
  toggle_left: {
    position: 'absolute',
    bottom: 20,
    left: 35,
  },
});
