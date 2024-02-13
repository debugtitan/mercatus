import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Page from './Page';
export const Swipper = ({ pageData, titleStyles, subtitleStyles }) => {
  return (
    <View>
      <FlatList
        data={pageData}
        renderItem={({ item }) => (
          <Page pageData={item} titleStyles={titleStyles} subtitleStyles={subtitleStyles}/>
        )}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
