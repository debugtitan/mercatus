import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { PageLayout } from '../../AppLayout';
import { RadioButton, useTheme } from '../../components';
import { DARK, LIGHT, countries, RoutePaths, Styles } from '../../constants';

export default function CountryRadioPicker({ navigation }) {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [countryCode, setCountryCode] = useState('NG');

  const handleSelect = (index, item) => {
    //console.log(index,item.code)
    setSelectedCountry(index);
    setCountryCode(item.code);
  };

  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;

  const styles = Styles();

  return (
    <PageLayout>
      <View>
        {countries.map((item, index) => (
          <View key={index} style={styles.countryContainer}>
            <RadioButton
              selected={selectedCountry === index}
              onSelect={() => handleSelect(index, item)}
              radioBackground={theme.PRIMARY}
            />
            <View style={styles.countryInfo}>
              <View style={{ width: 24 }}>
                <Text style={styles.paragraph}>{item.label}</Text>
              </View>

              <Image source={item.flag} style={styles.image} />
            </View>
          </View>
        ))}
      </View>

      {/*BUTTON */}
      <View style={{ marginHorizontal: 15 }}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.PRIMARY }]}
          onPress={() =>
            navigation.navigate(RoutePaths.SIGNUP, {
              countryCode: countryCode,
            })
          }
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </PageLayout>
  );
}
