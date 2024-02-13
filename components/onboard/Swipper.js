import React from 'react';
import { View, FlatList } from 'react-native';
import Page from './Page';
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
}) => {
  return (
    <View>
      <HeaderComponent
        headerTitle={headerTitle}
        onHeaderClick={onHeaderClick}
      />
      <FlatList
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
          />
        )}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
      <FooterComponent
        footerTitle={footerTitle}
        onFooterClick={onFooterClick}
      />
    </View>
  );
};
