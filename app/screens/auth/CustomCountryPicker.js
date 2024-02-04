import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import PageLayout from "../../PageLayout";
import RadioButton from "../../components/RadioButton";
import { useTheme } from "../../components/ThemeProvider";
import { DARK, LIGHT, countries,RoutePaths,STYLES } from "../../constants";

export default function CountryRadioPicker({navigation}) {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [countryCode, setCountryCode] = useState("+234");

  const handleSelect = (index,item) => {
    console.log(index,item)
    setSelectedCountry(index);
  };

  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;

  const styles = STYLES()

  return (
    <PageLayout>
      <View>
        {countries.map((item, index) => (
          <View key={index} style={styles.container}>
            <RadioButton
              selected={selectedCountry === index}
              onSelect={() => handleSelect(index,item)}
              radioBackground={theme.PRIMARY}
            />

            <View style={styles.countryInfo}>
              <View className=" w-24">
                <Text style={styles.label(theme.PRIMARY2)}>{item.label}</Text>
              </View>

              <Image source={item.flag} style={styles.image} />
            </View>
          </View>
        ))}
      </View>

      {/*BUTTON */}
      <View className="mt-8">
        <View className="my-5">
          <TouchableOpacity
            style={styles.button}
            className=""
            onPress={() => navigation.navigate(RoutePaths.SIGNUP)}
          >
            <Text style={(styles.paragraph, { color: theme.SHADES })}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageLayout>
  );
}

