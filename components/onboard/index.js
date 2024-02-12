import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { DotPagination } from './Pagination';
import { Swiper } from './Swipper';
import Page from './Page';
export const Onboard = ({
  enableScroll = false,
  pages,
  titleStyle,
  subtitleStyle,
  PaginationComponent = DotPagination,
  currentPage,
  setCurrentPage,
  textStyle,
  ...props
}) => {
  const swipperViewRef = useRef();
  const [currentPageInternal, setCurrentPageInternal] = useState(0);
  const currentPageValue = currentPage ?? currentPageInternal;
  const setCurrentPageValue = setCurrentPage ?? setCurrentPageInternal;

  function goToNextPage() {
    if (currentPageValue >= pages?.length - 1) {
      //handleDone()
      return;
    }
    const nextIndex = swipperViewRef.current?.getCurrentIndex() + 1;
    setCurrentPageValue(nextIndex);
    swipperViewRef.current?.scrollToIndex({ index: nextIndex });
  }
  function goToPreviousPage() {
    const nextIndex = swipperViewRef.current?.getCurrentIndex() - 1;
    if (nextIndex < 0) {
      return;
    }
    setCurrentPageValue(nextIndex);
    swipperViewRef.current?.scrollToIndex({ index: nextIndex });
  }

  function handleIndexChange(item) {
    if (item.index !== currentPageValue) {
      setCurrentPageValue(item.index);
    }
    if (item.index > item.prevIndex) {
      //onNext && onNext()
      return;
    }
    if (item.index < item.prevIndex) {
      //onBack && onBack()
      return;
    }
  }

  return (
    <Swiper
      ref={swipperViewRef}
      disableGesture={enableScroll}
      onChangeIndex={handleIndexChange}
      index={currentPageValue}
    >
      {pages?.map((pageData, index) => (
        <View key={index}>
          <Page
            //formElementTypes={formElementTypes}
            //style={[pageStyle]}
            pageData={pageData}
            titleStyle={[titleStyle]}
            subtitleStyle={[subtitleStyle]}
            textStyle={[textStyle]}
            pageIndex={index}
            currentPage={currentPageValue}
            totalPages={pages?.length}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
          />
        </View>
      ))}
    </Swiper>
  );
};
