import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Header } from "../components/Header";
import { ButtonCinza, ButtonLaranja } from "../components/Button";

export default function Registro() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("EvolucaoNova");
  }
  function handleStart2() {
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
        style={style.conteiner}
      >
        <Header />

        <Text style={style.texto}>Altura do passo</Text>
        <TextInput style={style.box} />

        <Text style={style.texto}>Largura do passo</Text>
        <TextInput style={style.box} />

        <Text style={style.texto}>Comprimento do passo</Text>
        <TextInput style={style.box} />

        <Text style={style.texto}>Quantidade de passos</Text>
        <TextInput style={style.box} />

        <Text style={style.texto}>Data</Text>
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

        <View style={style.botao}>
          <ButtonCinza title={"Voltar"} onPress={handleStart}></ButtonCinza>
          <ButtonLaranja
            title={"Salvar"}
            onPress={handleStart2}
          ></ButtonLaranja>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    height: 45,
    width: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 20,
  },
  texto: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 5,
  },
  scrollview: {
    width: 320,
    height: 200,
  },
  selecionarData: {
    backgroundColor: "white",
    width: 116,
  },
});
