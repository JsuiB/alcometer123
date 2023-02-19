import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
  Alert,
  ScrollView,
  SafeAreaView
} from "react-native";
import { useState, useEffect } from "react";
import { Styles, SpecialStyles } from "./Styles/Styles";
import Radiobutton from "./Components/Radiobutton";
import NumericInput from "react-native-numeric-input";



export default function App() {
  // useStates
  const [paino, setPaino] = useState(0);
  const [pullot, setPullot] = useState(0);
  const [aika, setAika] = useState(0);
  const [sukupuoli, setSukupuoli] = useState("mies");
  const [tulos, setTulos] = useState(0);
  

  // Switch
  const [IsSpecial, setSpecial] = useState(false);
  const myStyle = IsSpecial ? SpecialStyles : Styles;
  const toggleSwitch = () => setSpecial((previousState) => !previousState);

  
  

  // Radiobutton options
  const options = [
    {
      label: "Male",
      value: "mies",
    },
    {
      label: "Female",
      value: "nainen",
    },
  ];

  // Formula for calculating blood alcohol
  const litra = Number(pullot) * 0.33;
  const gramma = Number(litra) * 8 * 4.5;
  const poltto = Number(paino) / 10;
  const gramma2 = gramma - poltto * aika;

  const Calculate = () => {
    let määrä = 0;
    if (sukupuoli === "mies") {
      määrä = gramma2 / (paino * 0.7);
    } else {
      määrä = gramma2 / (paino * 0.6);
    }
    setTulos(määrä);
  };




  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={myStyle.container}>
        <Text style={myStyle.Text}>Alcometer</Text>

        <Text>Weight</Text>
        <TextInput
          style={myStyle.input}
          placeholder="Put your Weight here"
          numeric
          keyboardType={"numeric"}
          type="number"
          setValue={paino}
          onChangeText={(text) => setPaino(text)}
        />

        <Text> Bottles </Text>
        <NumericInput
          rightButtonBackgroundColor="#00A3FF"
          leftButtonBackgroundColor="#00A3FF"
          rounded
          setValue={pullot}
          onChange={(v) => setPullot(v)}
        />

        <Text> Hours </Text>
        <NumericInput
          style={myStyle.NumericInput}
          rightButtonBackgroundColor="#00A3FF"
          leftButtonBackgroundColor="#00A3FF"
          rounded
          setValue={aika}
          onChange={(v) => setAika(v)}
        />

        <Radiobutton
          options={options}
          onPress={(value) => {
            setSukupuoli(value);
          }}
        />

        <Switch
          style={myStyle.Switch}
          value={IsSpecial}
          onValueChange={toggleSwitch}
        />

        <Button style={myStyle.button} title="Calculate" onPress={Calculate} />

        <Text style={myStyle.container}>{tulos.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
}
