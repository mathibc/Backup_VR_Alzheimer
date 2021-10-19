import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Header } from "../components/Header";
import { ButtonCinza } from "../components/Button";

export default function EvolucaoAnte() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("Paciente");
  }

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView style={style.conteiner}>
      <Header />

      <View>
        <View style={style.selecionarData}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        </View>
      </View>

      <View style={style.box}>
        <Text style={style.inputBox}> Lorem ipsum bla bla bla bla</Text>
      </View>

      <View>
        <View style={style.selecionarData}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        </View>
      </View>

      <View style={style.box}>
        <Text style={style.inputBox}> Lorem ipsum bla bla bla bla</Text>
      </View>

      <View style={style.botao}>
        <ButtonCinza title={"Voltar"} onPress={handleStart}></ButtonCinza>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#0091F2",
    alignItems: "center",
    justifyContent: "space-between",
  },
  botao: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  box: {
    height: "15%",
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    fontSize: 20,
  },
  texto: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
  },
  scrollview: {
    width: 320,
    height: 200,
  },
  selecionarData: {
    backgroundColor: "white",
    width: 116,
    borderRadius: 10,
  },
  inputBox: {
    justifyContent: "flex-start",
    lineHeight:30,
    textAlign:'justify',
    fontSize:16,
    padding: 10,
    paddingTop:10,
    paddingBottom:10
  },
});
