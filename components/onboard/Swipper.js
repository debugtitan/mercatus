import React, { useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import Page from './Page';
import { DotPagination } from './Pagination';
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
  PaginationComponent,
}) => {
  const swipperRef = useRef();
  const [currentPageValue, setCurrentPageValue] = useState(0);

  function handleIndexChange(event) {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const pageWidth = layoutMeasurement.width;
    const currentPageIndex = Math.floor(contentOffset.x / pageWidth);
    setCurrentPageValue(currentPageIndex)
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
      <PaginationComponent totalPages={pageData} />
      <DotPagination
        totalPages={pageData.length}
        currentPage={currentPageValue}
      />
      <FooterComponent
        footerTitle={footerTitle}
        onFooterClick={onFooterClick}
      />
    </View>
  );
};
