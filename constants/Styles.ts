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
    imageContainer: {
      alignSelf: 'center',
    },
    paragraphContainer: {
      width: 290,
      height: 78,
    },

    ErrorContainer: {
      flex: 1,
      width: 288.59,
      height: 80,
      paddingHorizontal: 8,
      paddingVertical: 0,
    },

    paragraph: {
      fontSize: 16,
      lineHeight: 19,
      fontWeight: '500',
      color: theme.PRIMARY2,
      // fontFamily: 'Inter'
    },
    regularParagraph: {
      fontSize: 14,
      lineHeight: 17,
      fontWeight: '400',
      color: theme.NEUTRAL,
    },

    button: {
      backgroundColor: theme.PRIMARY,
      borderRadius: 50,
      alignItems: 'center',
      lineHeight: 22,
      padding: 14,
      paddingHorizontal: 20,
    },
    textLabel: {
      color: theme.PRIMARY2,
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 1,
      //fontFamily: 'Inter',
    },
  });
};
