import { View, Text } from "react-native";
import React from "react";

const SkipButton = ({ SkipComponent }) => {
  return (
    SkipComponent ?? (
      <View className="justify-end items-end mt-3">
        <TouchableOpacity>
          <Text style={{ color: theme.NEUTRAL, fontSize: 14 }}>Skip</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default SkipButton;