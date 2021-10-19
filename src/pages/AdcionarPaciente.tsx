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
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CadastroPaciente } from "../components/CadastroPaciente";
import { ButtonCinza, ButtonLaranja } from "../components/Button";

export default function Registro() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("Menu");
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
        <CadastroPaciente/>
        <ScrollView style={style.scrollview}>
          <Text style={style.texto}>Nome</Text>
          <TextInput style={style.box} />

          <Text style={style.texto}>Data de Nascimento</Text>
          <View style={style.selecionarData}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          </View>

          <Text style={style.texto}>Estágio da DA</Text>
          <TextInput
            placeholder="Leve, Moderada ou Avançada"
            style={style.box}
          />

          <Text style={style.texto}>Comprometimento da Marcha</Text>
          <TextInput
            placeholder="Velocidade, Cadência, Postura,..."
            style={style.box}
          />

          <Text style={style.texto}>QP e HDA</Text>
          <TextInput
            placeholder="Digite aqui"
            multiline={true}
            numberOfLines={10}
            style={style.inputBox}
          />

          <View style={style.botao}>
            <ButtonCinza title={"Voltar"} onPress={handleStart}></ButtonCinza>
            <ButtonLaranja
              title={"Salvar"}
              onPress={handleStart2}
            ></ButtonLaranja>
          </View>
        </ScrollView>
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
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent:"center",
    alignSelf:"center",
    marginBottom:100,
    marginTop:20
  },

  box: {
    height: 45,
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: 30,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  texto: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 20,
    alignSelf: "flex-start",
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  scrollview: {
    width: "100%",
    height: "100%",
  },
  selecionarData: {
    backgroundColor: "white",
    width: 116,
    alignSelf: "flex-start",
    borderRadius: 10,
    marginLeft: 30,
  },
  inputBox: {
    height: "20%",
    width: 300,
    maxHeight: 300,
    marginLeft: 30,
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderRadius: 10,
    lineHeight: 20,
    textAlign: "justify",
    fontSize: 16,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
