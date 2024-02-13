import React, { useRef, useState } from 'react';
import { DotPagination } from './Pagination';
import { Swipper } from './Swipper';
import Page from './Page';
import { Text } from 'react-native';

export default function OnboardSwipper({
  //enableScroll = false,
  pages,
  titleStyle,
  subtitleStyle,
  imageContainerStyle,
  PaginationComponent = DotPagination,
  currentPage,
  setCurrentPage,
}) {
  //console.log(enableScroll, pages);
  /*const swipperViewRef = useRef();
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
  }*/

  return <Swipper pageData={pages} titleStyles={titleStyle} subtitleStyles={subtitleStyle}></Swipper>;
}