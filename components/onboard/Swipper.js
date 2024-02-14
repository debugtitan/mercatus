import React, { useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
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
}) => {
  const swipperRef = useRef();
  const [currentPageValue, setCurrentPageValue] = useState(0);

  function handleIndexChange(event) {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const pageWidth = layoutMeasurement.width;
    const currentPageIndex = Math.floor(contentOffset.x / pageWidth);
    setCurrentPageValue(currentPageIndex);
  }

  function goToNextPage() {
    if (currentPageValue >= pageData?.length - 1) {
      //pages finished
      return;
    }
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
        data={pageData}
        renderItem={({ item, index }) => (
          <Page
            currentPage={index}
            HeaderComponent={HeaderComponent}
            pageData={item}
            titleStyles={titleStyles}
            subtitleStyles={subtitleStyles}
            imageContainerStyle={imageContainerStyle}
            headerTitle={headerTitle}
            //totalPages={pageData.length}
          />
        )}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
      <CustomPaginatorComponent
        Component={Component}
        currentPage={currentPageValue}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        pages={pageData}
      />
      {/*<FooterComponent
        footerTitle={footerTitle}
        onFooterClick={onFooterClick}
        />*/}
    </View>
  );
};
