import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { CheckIcon } from "react-native-heroicons/outline";
import RadioButton from "./RadioButton";
function Checkbox({
  checked = false,
  onSelect = () => null,
  size = 24,
  boxOutlineColor = "#006042",
}) {
  return (
    <Pressable
      style={styles.CheckBoxSquare(size,boxOutlineColor)}
      onPress={() => onSelect()}
    >
      {checked && <CheckIcon color={boxOutlineColor} size={size} />}
    </Pressable>
  );
}

export default function CheckboxApp() {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState(true)

  const onSelect = () => {
    setChecked(!checked);
  };

  onCheckSelect = () => {
    setSelected(!selected)
  }
  return (
    <View>
      <Checkbox onSelect={onSelect} checked={checked} />
      <RadioButton selected={selected} onSelect={onCheckSelect}/>
    </View>
  );
}


const styles = StyleSheet.create({
  CheckBoxSquare: (size , checkColor) => ({
    width: 24  || size,
    height: 24  || size,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: checkColor,
  })
})
