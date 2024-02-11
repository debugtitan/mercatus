import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  isDarkMode: boolean;
  selectedTheme: string;
  toggleTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemColorScheme = useColorScheme();
  const [selectedTheme, setSelectedTheme] = useState<string>('automatic');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    selectedTheme === 'automatic'
      ? systemColorScheme === 'dark'
      : selectedTheme === 'dark'
  );

  useEffect(() => {
    if (selectedTheme === 'automatic' && systemColorScheme) {
      setIsDarkMode(systemColorScheme === 'dark');
    }
  }, [selectedTheme, systemColorScheme]);

  const toggleTheme = (theme: string) => {
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

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
