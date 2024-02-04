import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import PageLayout from "../../PageLayout";
import RadioButton from "../../components/RadioButton";
import { useTheme } from "../../components/ThemeProvider";
import { DARK, LIGHT, countries,RoutePaths } from "../../constants";

export default function CountryRadioPicker({navigation}) {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [countryCode, setCountryCode] = useState("+234");
  con
  const handleSelect = (index,item) => {
    console.log(index,item)
    setSelectedCountry(index);
  };

  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 3,
    paddingHorizontal: 0,
    paddingVertical: 10,
    height: 56,
    gap: 15,
  },
  label: (color) => ({
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: color,
  }),
  image: {
    width: 24,
    height: 24,
    marginLeft: 145,
  },
  countryInfo: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    //justifyContent: "center",
  },
});
