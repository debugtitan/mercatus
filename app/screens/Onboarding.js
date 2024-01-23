import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import PageLayout from "../PageLayout";
import { COLOR, IMAGES, STYLES } from "../constants";

export default function Onboarding() {
  return (
    <PageLayout>
      <View className="mx-4">
        <View className="justify-end items-end mt-4">
          <TouchableOpacity onPress={() => alert("Skip pressed")}>
            <Text style={{ color: COLOR.NEUTRAL, fontSize: 14 }}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="justify-center items-stretch mt-20">
        <Image
          source={IMAGES.ONBOARDING.INVESTMENT}
          style={STYLES.ImageContainer}
        />
      </View>
      <View className="mx-4 my-9">
        <View style={STYLES.textContainer}>
          <Text style={STYLES.Heading}>Keep up with investment trends</Text>
        </View>
        <View style={STYLES.paragraphContainer}>
          <Text style={STYLES.paragraph} className="text-white">
            No more switching between apps to stay updated, it's all right here
          </Text>
        </View>
      </View>
      <View className="mx-4 my-5">
        <TouchableOpacity style={STYLES.button} className="">
          <Text>Get started</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 300, height: 20,alignItems:'center', left:25}}>
        <Text style={STYLES.regularParagraph}>
          Already have an account?{" "}
          <Text style={STYLES.paragraph} className="text-[#07FFB1]">
            Log in
          </Text>
        </Text>
      </View>
    </PageLayout>
  );
}
