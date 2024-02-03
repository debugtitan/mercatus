import { useState } from "react";
import { Pressable, StyleSheet, View, Image } from "react-native";
import { CheckIcon } from "react-native-heroicons/outline";
import RadioButton from "./RadioButton";
import { IMAGES } from "../constants";
function Checkbox({
  checked = false,
  onSelect = () => null,
  size = 24,
  boxOutlineColor = "#006042",
  checkedImage = null,
}) {
  const checkImage = () => {
    if (checkedImage) {
      return checkedImage;
    }
    return <CheckIcon color={boxOutlineColor} size={size} />;
  };
  return (
    <Pressable
      style={!checked ? styles.CheckBoxSquare(size, boxOutlineColor) : {}}
      onPress={() => onSelect()}
    >
      {checked && checkImage()}
    </Pressable>
  );
}

export default function CheckboxApp() {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const onSelect = () => {
    setChecked(!checked);
  };

  onCheckSelect = () => {
    setSelected(!selected);
  };

  const data = [
    {
      label: "data 1",
    },
    {
      label: "data 2",
    },
  ];

  const handleSelect = (index) => {
    setSelectedItem(index);
  };

  return (
    <View>
      <Checkbox
        onSelect={onSelect}
        checked={checked}
        checkedImage={
          <Image source={IMAGES.CHECKBOX} style={{ width: 28, height: 28 }} />
        }
      />
      <View>
        {data.map((item, index) => (
          <View key={index}>
            <RadioButton
              selected={selectedItem === index}
              onSelect={() => handleSelect(index)}
              label={item.label}
            />
            {/* You can also display the label if needed */}
            {/* <Text>{item.label}</Text> */}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBoxSquare: (size, checkColor) => ({
    width: 24 || size,
    height: 24 || size,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: checkColor,
  }),
});
