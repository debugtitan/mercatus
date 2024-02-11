/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import SystemNavigationBar from 'react-native-system-navigation-bar'; //to control navigation bar

import { ThemeProvider } from './components';
import { SplashScreenComponent } from './screens';

//SystemNavigationBar.stickyImmersive();

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SplashScreenComponent />
    </ThemeProvider>
  );
}

export default App;
