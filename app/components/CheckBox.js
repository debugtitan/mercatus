import { useState } from "react";
import { Pressable, View } from "react-native";
import { CheckCircleIcon, CheckIcon } from "react-native-heroicons/outline";

function Checkbox({
  checked = false,
  onSelect = null,
  boxOutlineColor = "#006042",
}) {
  return (
    <Pressable
      style={{
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: boxOutlineColor,
        borderColor: boxOutlineColor,
        //backgroundColor: "transparent",
      }}
      onPress={() => onSelect()}
    >
      {checked && <CheckIcon color={boxOutlineColor} size={24} />}
    </Pressable>
  );
}

export default function CheckboxApp() {
  const [checked, setChecked] = useState(true);

  const onSelect = () => {
    setChecked(!checked);
  };
  return (
    <View>
      <Checkbox onSelect={onSelect} checked={checked} />
    </View>
  );
}
