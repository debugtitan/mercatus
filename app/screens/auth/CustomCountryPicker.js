import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import PageLayout from "../../PageLayout";
import RadioButton from "../../components/RadioButton";
import { useTheme } from "../../components/ThemeProvider";
import { DARK, LIGHT } from "../../constants";

export default function CountryRadioPicker() {
  const countries = [
    {
      label: "Nigeria",
      flag: require("../../../assets/icons/flags/ng.png"),
      code: "+234",
    },
    {
      label: "Angola",
      flag: require("../../../assets/icons/flags/an.png"),
      code: "+244",
    },
    {
      label: "Botswana",
      flag: require("../../../assets/icons/flags/botswana.png"),
      code: "+267",
    },
    {
      label: "Egypt",
      flag: require("../../../assets/icons/flags/egypt.png"),
      code: "+20",
    },
    {
      label: "Libya",
      flag: require("../../../assets/icons/flags/libya.png"),
      code: "+218",
    },
    {
      label: "Namibia",
      flag: require("../../../assets/icons/flags/namibia.png"),
      code: "+264",
    },
    {
      label: "South Sudan",
      flag: require("../../../assets/icons/flags/south-sudan.png"),
      code: "+211",
    },
    {
      label: "Zambia",
      flag: require("../../../assets/icons/flags/zambia.png"),
      code: "+260",
    },
    {
      label: "Zimbabwe",
      flag: require("../../../assets/icons/flags/zimbabwe.png"),
      code: "+263",
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(0);
  const handleSelect = (index) => {
    setSelectedCountry(index);
  };
  console.log(selectedCountry)
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  return (
    <PageLayout>
      <View>
        {countries.map((item, index) => (
          <View key={index} style={styles.container}>
            <RadioButton
              selected={selectedCountry === index}
              onSelect={() => handleSelect(index)}
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
    paddingVertical:10,
    height:56,
    gap: 15
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
    marginLeft:145
  },
  countryInfo: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    flexWrap:'wrap'
    //justifyContent: "center",
  },
});
