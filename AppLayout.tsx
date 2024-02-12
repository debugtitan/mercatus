import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { LayoutProps, Styles, DARK, LIGHT } from './constants';
import { useTheme } from './components';

export const PageLayout: React.FC<LayoutProps> = ({
  children,
}: LayoutProps) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  return (
    <SafeAreaView
      style={[Styles().appLayout, { backgroundColor: theme.PRIMARY }]}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.PRIMARY}
      />
      <View style={Styles().layoutContainer}>{children}</View>
    </SafeAreaView>
  );
};
