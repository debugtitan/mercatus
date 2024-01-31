import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [selectedTheme, setSelectedTheme] = useState('automatic');
  const [isDarkMode, setIsDarkMode] = useState(
    selectedTheme === 'automatic' ? systemColorScheme === 'dark' : selectedTheme === 'dark'
  );

  useEffect(() => {
    if (selectedTheme === 'automatic' && systemColorScheme) {
      setIsDarkMode(systemColorScheme === 'dark');
    }
  }, [selectedTheme, systemColorScheme]);

  const toggleTheme = (theme) => {
    setSelectedTheme(theme);
    if (theme === 'automatic' && systemColorScheme) {
      setIsDarkMode(systemColorScheme === 'dark');
    } else {
      setIsDarkMode(theme === 'dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, selectedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
