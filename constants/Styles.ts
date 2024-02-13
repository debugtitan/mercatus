import { StyleSheet } from 'react-native';
import { useTheme } from '../components';
import { DARK, LIGHT } from '.';

export const Styles = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  return StyleSheet.create({
    appLayout: {
      flex: 1,
      height: '100%',
      position: 'relative',
    },

    layoutContainer: {
      marginHorizontal: 8,
    },

    centerImage: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    paragraph: {
      fontSize: 16,
      lineHeight: 19,
      fontWeight: '400',
      color: theme.PRIMARY2,
      // fontFamily: 'Inter'
    },
  });
};
