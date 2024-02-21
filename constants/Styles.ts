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
    buttonText: {
      lineHeight: 22,
      fontSize: 18,
      fontWeight: '600',
      color: theme.BACKGROUND,
    },
    textLabel: {
      color: theme.PRIMARY2,
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 1,
      //fontFamily: 'Inter',
    },

    formContainer: {
      borderWidth: 2,
      borderColor: theme.PRIMARY,
      borderRadius: 4,
      height: 44,
      flexDirection: 'row',
      backgroundColor: isDarkMode ? '#F9FAF9' : '#FFFFFF',
    },
    textInput: {
      paddingVertical: 7,
      paddingLeft: 10,
      paddingRight: 12,
      color: theme.TABS_INACTIVE,
    },
    image: {
      width: 24,
      height: 24,
      //resizeMode: 'contain',
    },
    dropDown: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      marginTop: 10,
      overflow: 'hidden',
      backgroundColor: isDarkMode ? '#F9FAF9' : '#FFFFFF',
    },
    dropDownWrapper: {
      borderWidth: 2,
      borderRadius: 4,
      borderColor: theme.PRIMARY,
      paddingHorizontal: 18,
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: isDarkMode ? '#F9FAF9' : '#FFFFFF',
    },
    dropText: {
      color: theme.TABS_INACTIVE,
    },
    placeholderStyles: {
      color: theme.TABS_INACTIVE,
    },
  });
};
