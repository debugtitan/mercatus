import React from 'react';
import { Swipper } from './Swipper';
import { Header } from './Header';
import { Footer } from './Footer';
import { DotPagination } from './Pagination';

export default function OnboardSwipper({
  //enableScroll = false,
  pages,
  titleStyle,
  subtitleStyle,
  imageContainerStyle,
  HeaderComponent,
  headerTitle,
  FooterComponent,
  footerTitle,
  onHeaderClick = () => alert('header clicked now'),
  onFooterClick = () => alert('hello'),
  PaginationComponent = DotPagination,
  enableScroll = false,
}) {
  const component = {
    PaginationComponent,
  };

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
      Component={component}
      enableScroll={enableScroll}
    />
  );
}
