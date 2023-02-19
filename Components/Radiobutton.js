import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Styles } from "../Styles/Styles";


export default function Radiobutton({options,onPress}) {
  // State variable for value of the radiobutton
  const [value, setValue] = useState(null);

  function handlePress(selected) {
    setValue(selected);
    onPress(selected);
  }
  return (
    <>
      {options.map((item) => (
        <View key={item.value} style={Styles.buttonContainer}>
          <Text style={Styles.label}>{item.label}</Text>
          <Pressable
            style={Styles.circle}
            onPress={() => handlePress(item.value)}
          >
            {value === item.value && <View style={Styles.checkedCircle} />}
          </Pressable>
        </View>
      ))}
    </>
  );
}
