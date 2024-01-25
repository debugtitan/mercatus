import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { OnboardFlow } from "react-native-onboard";
import PageLayout from "../PageLayout";
import { COLOR, IMAGES, STYLES,Onboarding1,Onboarding2,Onboarding3,Footer } from "../constants";


export default function OnboardingScreen({navigation}) {
  return (
    <PageLayout>
      <View className="mx-4">
        <View className="justify-end items-end mt-4">
          <TouchableOpacity onPress={() => navigation.navigate("skip")}>
            <Text style={{ color: COLOR.NEUTRAL, fontSize: 14 }}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-1 mx-4">
        <OnboardFlow
        textStyle={STYLES.textContainer}
        //autoPlay={true}
        
        paginationSelectedColor="#07FFB1"
        textAlign="left"
        FooterComponent={Footer}
        
          pages={[
            {
              imageComponent: <Onboarding1/>,
              title: <Text style={STYLES.title}>Keep up with investment trends</Text>,
              titleStyle:STYLES.textContainer,
              subtitleStyle:STYLES.paragraphContainer,
              subtitle:
                <Text style={STYLES.paragraph}>No more switching between apps to stay updated, it's all right here</Text>,
                
            },
            {
              imageComponent: <Onboarding2/>,
              title: <Text  style={STYLES.title}>Bank - Grade Security</Text>,
              titleStyle:{width:200,height:70},
              subtitleStyle:{width:310,height:57,marginBottom:25},
              subtitle:
                <Text style={STYLES.paragraph}>256-bit encryption, 2FA & Biometrics, all to ensure only 1 person has access - that’s YOU!</Text>,
               
            },
            {
              imageComponent: <Onboarding3/>,
              title: <Text  style={STYLES.title}>Unlock the Global Market</Text>,
              titleStyle:{width:200,height:70},
              subtitleStyle:{width:310,height:57},
              subtitle:
                <Text style={STYLES.paragraph}>Unrestricted access to the massive opportunities in the U.S. stock market - the world’s largest stock market</Text>,
                
            },
          ]}
          type="inline"
        />
      </View>

      <View className="mx-4 my-5">
        <TouchableOpacity style={STYLES.button} className="">
          <Text style={STYLES.paragraph}>Get started</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 300, height: 20, alignItems: "center", left: 40 }}>
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
