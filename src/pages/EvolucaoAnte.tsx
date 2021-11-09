import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { EvolucaoAnterior } from "../components/EvolucaoAnterior";
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
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
        style={style.conteiner}
      >
      <EvolucaoAnterior/>

      <View>
        <View style={style.selecionarData}>
          <Text style={style.data}>2 Aug 2021</Text>
          {/*<DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />*/}

        </View>
      </View>

      <View style={style.box}>
      <ScrollView style={style.scrollview}>
        <Text style={style.inputBox}> Paciente refere alteração na marcha há cerca de 3 anos. O quadro foi precedido de perda gradual de destreza em ambas as mãos, em função do tremor ao tentar realizar atividades manuais finas.

Evoluiu com lentificação dos movimentos e dificuldade na marcha. Foi diagnosticado, na época, com Doença de Parkinson e prescrito levodopa, sem melhora.</Text>
      </ScrollView>
      </View>

      <View>
        <View style={style.selecionarData}>
        <Text style={style.data}>20 Aug 2021</Text>
          {/*<DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />*/}

        </View>
      </View>

      <View style={style.box}>
      <ScrollView style={style.scrollview}>
        <Text style={style.inputBox}> Paciente iniciou melhora no quadro de instabilidade postural, com marcha arrastada e lentificação dos movimentos, de evolução progressiva e com quedas.</Text>
      </ScrollView>
      </View>

      <View style={style.botao}>
        <ButtonCinza title={"Voltar"} onPress={handleStart}></ButtonCinza>
      </View>
    </KeyboardAvoidingView>
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
  data: {
    alignSelf:'center'
  },
});
