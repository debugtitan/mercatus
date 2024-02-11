import React from "react";
import { StyleSheet, View } from "react-native";
import DotPagination from "./DotPagination";

export const Pagination = ({
  currentPage,
  totalPages,
  paginationSelectedColor = "#07FFB1",
  paginationColor = "#5E6F6A",
  showSkip,
  showNext,
  showDone,
  onNext,
  onPrev,
  onSkip,
  onDone,
  skipLabel,
  allowFontScaling,
  SkipButtonComponent,
  BackButtonComponent,
  NextButtonComponent,
  DoneButtonComponent,
  DotComponent,
}) => {
  const isLastPage = currentPage + 1 === numPages;

  const SkipButtonFinal = showSkip && !isLastPage && (
    <SkipButtonComponent
      skipLabel={skipLabel}
      allowFontScaling={allowFontScaling}
      onPress={() => {
        if (typeof onSkip === "function") {
          onSkip();
        }
      }}
    />
  );

  const NextButtonFinal = showNext && !isLastPage && (
    <NextButtonComponent allowFontScaling={allowFontScaling} onPress={onNext} />
  );

  const BackButtonFinal = showNext && !isLastPage && (
    <BackButtonComponent allowFontScaling={allowFontScaling} onPress={onNext} />
  );

  const elements = [];
  for (let i = 0; i < totalPages; i++) {
    elements.push(
      <DotPagination
        paginationColor={paginationColor}
        paginationSelectedColor={paginationSelectedColor}
        key={i}
        selected={i === currentPage}
      />
    );
  }

  return (
    <View>
      <View style={styles.buttonLeft}>{BackButtonFinal}</View>
      <View style={styles.container}>{elements}</View>
      <View style={styles.buttonRight}>{NextButtonFinal}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    height: 16,
  },
  buttonLeft: {
    width: 200,
    flexShrink: 1,
    alignItems: 'flex-start',
  },
  buttonRight: {
    width: 200,
    flexShrink: 1,
    alignItems: 'flex-end',
  },
});
