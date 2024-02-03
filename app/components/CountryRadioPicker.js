import { View, Text } from "react-native";
import React from "react";

export default function CountryRadioPicker() {
  const countries = [
    {
      label: "Nigeria",
      flag: require("../../assets/icons/flags/ng.png"),
    },
    {
      label: "Angola",
      flag: require("../../assets/icons/flags/ng.png"),
    },
    {
      label: "Botswana",
      flag: require("../../assets/icons/flags/ng.png"),
    },
    {
      label: "Egypt",
      flag: require("../../assets/icons/flags/ng.png"),
    },
    {
      label: "Libya",
      flag: require("../../assets/icons/flags/ng.png"),
    },
    {
      label: "Namibia",
      flag: require("../../assets/icons/flags/ng.png"),
    },
    {
      label: "South Sudan",
      flag: require("../../assets/icons/flags/ng.png"),
    },
    {
      label: "Zambia",
      flag: require("../../assets/icons/flags/ng.png"),
    },
    {
      label: "Zimbabwe",
      flag: require("../../assets/icons/flags/ng.png"),
    },
  ];
  return (
    <View>
      <Text>CountryRadioPicker</Text>
    </View>
  );
}
