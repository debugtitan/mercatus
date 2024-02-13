import React, { useRef, useState } from 'react';
import { DotPagination } from './Pagination';
import { Swipper } from './Swipper';
import Page from './Page';
import { Text } from 'react-native';
import { Header } from './Header';
import { Footer } from './Footer';

export default function OnboardSwipper({
  //enableScroll = false,
  pages,
  titleStyle,
  subtitleStyle,
  imageContainerStyle,
  PaginationComponent,
  currentPage,
  setCurrentPage,
  HeaderComponent,
  headerTitle,
  FooterComponent,
  footerTitle,
  onHeaderClick,
  onFooterClick,
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

  return (
    <Swipper
      pageData={pages}
      titleStyles={titleStyle}
      subtitleStyles={subtitleStyle}
      HeaderComponent={HeaderComponent ?? Header}
      headerTitle={headerTitle}
      FooterComponent={FooterComponent ?? Footer}
      footerTitle={footerTitle}
      onFooterClick={onFooterClick}
      onHeaderClick={onHeaderClick}
      PaginationComponent={PaginationComponent ?? DotPagination}
    />
  );
}
