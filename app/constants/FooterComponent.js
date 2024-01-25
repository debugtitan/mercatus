import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { IMAGES } from "./Medias";

export const Footer = ({
  style,
  Components,
  paginationSelectedColor,
  paginationColor,
  currentPage,
  goToNextPage,
  pages,
  canContinue,
  setCanContinue,
  showFooter = true,
  primaryButtonStyle,
  primaryButtonTextStyle,
  ...props
}) => {
  const totalPages = pages?.length ?? 0;

  console.log(props)

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 70,
        paddingHorizontal: 1,
      }}
      {...props}
    >
      {currentPage === 1 ? (
        <TouchableOpacity
          style={styles.toggle_left}
        >
          <Image
            source={IMAGES.ICONS.TOGGLE_BACK}
            style={{ tintColor: "#ECEFEE" }}
          />
        </TouchableOpacity>
      ) : currentPage === 2 ? (
        <TouchableOpacity style={styles.toggle_left}>
          <Image source={IMAGES.ICONS.TOGGLE_BACK} />
        </TouchableOpacity>
      ) : null}

      <Components.PaginationComponent
        paginationColor={paginationColor}
        paginationSelectedColor={paginationSelectedColor}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      {currentPage !== totalPages - 1 && (
        <TouchableOpacity style={styles.toggle_right} onPress={goToNextPage}  activeOpacity={0.3}>
            <Image source={IMAGES.ICONS.TOGGLE_FORWARD} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    toggle_right:{
        position: 'absolute',
        bottom:32,
        right:35
    },
    toggle_left:{
        position: 'absolute',
        bottom:30,
        left:35
    }
});
