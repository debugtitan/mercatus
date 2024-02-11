import React, { useState, useRef, useEffect } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  I18nManager,
  StatusBar,
  SafeAreaView,
  View,
  Platform,
} from 'react-native';



import Page from './Page';
import Pagination from './Pagination';
import DotPagination from './DotPagination';
import NextButton from "./buttons/Next"
import SkipButton from "./buttons/Skip"
import BackButton from "./buttons/Back"
//const itemVisibleHotfix = { itemVisiblePercentThreshold: 100 };

export const Onboarding = ({
  pages,
  showSkip,
  showNext,
  showBack,
  showPagination,
  onSkip,
  onDone,
  skipLabel,
  allowFontScalingButtons,
  SkipButtonComponent,
  BackButtonComponent,
  NextButtonComponent,
  DotComponent,
  flatlistProps,
  skipToPage,
  pageIndexCallback,
  transitionAnimationDuration,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    Animated.timing(backgroundColorAnim, {
      toValue: 1,
      duration: transitionAnimationDuration,
      useNativeDriver: false,
    }).start();
  }, [backgroundColorAnim, transitionAnimationDuration]);

  const onSwipePageChange = ({ viewableItems }) => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;

    setPreviousPage(currentPage);
    setCurrentPage(viewableItems[0].index);
    pageIndexCallback && pageIndexCallback(viewableItems[0].index);
    backgroundColorAnim.setValue(0);
  };

  const goNext = () => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index:
        currentPage + 1,
    });
  };

  const goPrev = () => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index:
        currentPage - 1,
    });
  };


  const goToPage = (index, animated = true) => {
    flatListRef.current.scrollToIndex({
      index,
      animated,
    });
  };

  const _onLayout = () => {
    const { width, height } = Dimensions.get('window');
    setWidth(width);
    setHeight(height);
  };

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => {
    const { image, title, subtitle, backgroundColor } = item;

    return (
      <Page
        title={title}
        subtitle={subtitle}
        width={width || Dimensions.get('window').width}
        height={height || Dimensions.get('window').height}
        containerStyles={containerStyles}
        imageContainerStyles={imageContainerStyles}
        allowFontScaling={allowFontScalingText}
        titleStyles={{
          ...titleStyles,
          ...item.titleStyles,
        }}
        subTitleStyles={{
          ...subTitleStyles,
          ...item.subTitleStyles,
        }}
      />
    );
  };

  const currentPageData = pages[currentPage];
  const currentBackgroundColor = currentPageData.backgroundColor;


  let backgroundColor = currentBackgroundColor;
  if (previousPage !== null && pages[previousPage] !== undefined) {
    const previousBackgroundColor = pages[previousPage].backgroundColor;
    backgroundColor = backgroundColorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [previousBackgroundColor, currentBackgroundColor],
    });
  }

  const skipFun =
    skipToPage != null
      ? () => {
          flatListRef.current.scrollToIndex({
            animated: true,
            index: skipToPage,
          });
        }
      : onSkip;

  return (
    <Animated.View
      onLayout={_onLayout}
      style={{ flex: 1, backgroundColor, justifyContent: 'center' }}
    >
      <FlatList
        ref={flatListRef}
        data={pages}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onViewableItemsChanged={onSwipePageChange}
        viewabilityConfig={itemVisibleHotfix}
        initialNumToRender={1}
        extraData={width} // ensure that the list re-renders on orientation change
        {...flatlistProps}
      />
      {showPagination && (
        <SafeAreaView style={bottomBarHighlight ? styles.overlay : {}}>
          <Pagination
            
            showSkip={showSkip}
            showNext={showNext}
            showDone={showDone}
            numPages={pages.length}
            currentPage={currentPage}
            controlStatusBar={controlStatusBar}
            onSkip={skipFun}
            onDone={onDone}
            onNext={goNext}
            skipLabel={skipLabel}
            nextLabel={nextLabel}
            allowFontScaling={allowFontScalingButtons}
            SkipButtonComponent={SkipButton}
            //DoneButtonComponent={DoneButton}
            NextButtonComponent={NextButton}
            DotComponent={DotPagination}
          />
        </SafeAreaView>
      )}
    </Animated.View>
  );
};


