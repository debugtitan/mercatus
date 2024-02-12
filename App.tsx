/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from './components';
import { SplashScreenComponent, OnboardingScreen } from './screens';

SystemNavigationBar.navigationHide();
export default function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <ThemeProvider>
      <OnboardingScreen />
    </ThemeProvider>
  );
}
