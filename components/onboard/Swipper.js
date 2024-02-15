import React, { useRef, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Animated, { BounceInDown, FadeInRight } from 'react-native-reanimated';
import Page from './Page';
import { CustomPaginatorComponent } from './FooterComponent';
export const Swipper = ({
  pageData,
  titleStyles,
  subtitleStyles,
  imageContainerStyle,
  HeaderComponent,
  headerTitle,
  FooterComponent,
  footerTitle,
  onHeaderClick,
  onFooterClick,
  Component,
  enableScroll,
}) => {
  const swipperRef = useRef();
  const [currentPageValue, setCurrentPageValue] = useState(0);

  function handleIndexChange(event) {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const pageWidth = layoutMeasurement.width;
    const currentPageIndex = Math.floor(contentOffset.x / pageWidth);
    setCurrentPageValue(currentPageIndex);
  }
  //console.log(currentPageValue)

  function goToNextPage() {
    const nextIndex = currentPageValue + 1;
    setCurrentPageValue(nextIndex);
    swipperRef.current?.scrollToIndex({ index: nextIndex });
  }

  function goToPreviousPage() {
    const nextIndex = currentPageValue - 1;
    if (nextIndex < 0) {
      // can't go back again
      return;
    }
    setCurrentPageValue(nextIndex);
    swipperRef.current?.scrollToIndex({ index: nextIndex });
  }

  return (
    <View>
      <HeaderComponent
        headerTitle={headerTitle}
        onHeaderClick={onHeaderClick}
      />
      <FlatList
        ref={swipperRef}
        onScroll={handleIndexChange}
        entering={FadeInRight}
        data={pageData}
        renderItem={({ item, index }) => (
          <Page
            currentPage={currentPageValue}
            pageData={item}
            titleStyles={titleStyles}
            subtitleStyles={subtitleStyles}
            imageContainerStyle={imageContainerStyle}
            //totalPages={pageData.length}
          />
        )}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={enableScroll}
      />
      <CustomPaginatorComponent
        Component={Component}
        currentPage={currentPageValue}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        totalPages={pageData.length}
      />

      <TouchableOpacity onPress={onFooterClick}>
        <FooterComponent footerTitle={footerTitle} />
      </TouchableOpacity>
    </View>
  );
};
