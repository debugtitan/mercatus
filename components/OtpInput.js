/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { Styles, DARK, LIGHT } from '../constants';
import { Keyboard, useTheme } from '.';

export const OTPInput = ({ onDone }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputRefs = useRef(otp.map(() => React.createRef()));
  const styles = Styles();
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;

  const handleKeyPress = key => {
    const index = otp.findIndex(entry => entry === '');
    console.log(index, focusedIndex);
    if (index === -1) {
      onDone(otp);
      return;
    } else {
      setFocusedIndex(index);
      const newOtp = [...otp];
      newOtp[index] = key;
      setOtp(newOtp);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].current.focus();
      }
    }
  };

  const clearInput = () => {
    const newOtp = [...otp];
    const index = otp.findIndex(entry => entry === '');
    console.log(index);
    if (index === -1) {
      newOtp[index] = '';
      inputRefs.current[1].current.focus();
      setOtp(newOtp);
      return;
    } else {
      if (index > 0) {
        newOtp[index - 1] = '';
        inputRefs.current[index - 1].current.focus();
        setOtp(newOtp);
        return;
      }
    }
  };
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs.current[index]}
            style={[
              styles.otpInput,
              {
                borderColor:
                  focusedIndex === index ? theme.PRIMARY : theme.NEUTRAL,
              },
            ]}
            value={digit}
            maxLength={1}
            keyboardType="numeric"
            editable={false}
          />
        ))}
      </View>
      <View style={{ marginTop: 70 }}>
        <Keyboard onClear={clearInput} onKeyPress={handleKeyPress} />
      </View>
    </View>
  );
};
