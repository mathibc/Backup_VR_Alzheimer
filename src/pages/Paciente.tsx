// Instalar todos os comandos abaixo e depois dar "yarn start" ou "expo start"

// { expo install expo-linear-gradient }
// { npm i @react-native-community/checkbox }
// { yarn add react-native-paper }

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/core";
import logo from "../assets/VR_design.png";
import question from "../assets/question.png";
import { ButtonCinza, ButtonLaranja } from "../components/Button";

export default function Paciente() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("EvolucaoNova");
  }
  function handleStart2() {
    navigation.navigate("Menu");
  }
  function handleStart3() {
    navigation.navigate("EvolucaoAnte");
  }
  {
    /*
  Alert.alert(
    "Como usar?",
    "Para espelhar a tela em Android baixe: Screen Mirror | Para espelhar a tela em IOS baixe: Mirror MacPC.",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ],
    { cancelable: false }
  );
*/
  }
  const showAlert = () => {
    Alert.alert(
      "Clique em Assistir no video selecionado, selecione o modo cardboard do Youtube ,e então coloque o celular no VR Box 2.0."
    );
  };

  const remote =
    "https://i.pinimg.com/originals/54/27/10/542710e5150ee4f7340bea644f6c75f0.jpg";
  return (
    <View style={styles.telaPrincipal}>
      <LinearGradient
        colors={["rgba(2, 24, 88, 0.4)", "#0091F2"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 400,
        }}
      />

      <ScrollView style={styles.scrollview}>
        <View style={styles.viewlogo}>
          <Image source={logo} />
        </View>

        <View style={styles.telaTitulo}>
          <Text style={styles.usuario}>Pedro Fonseca</Text>
          <Text style={styles.descricao}>Alzheimer Leve</Text>
          <Text style={styles.descricao}>Postural e Velocidade</Text>

          <View style={styles.perfil}>
            <TouchableOpacity
              onPress={handleStart3}
              style={styles.verEvolucoes}
            >
              <Text style={styles.textoEvo}>Ver Evoluções</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showAlert} style={styles.comoUsar}>
              <Text style={styles.textoUsar}>Como usar?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.telaVideo}>
          <Text style={styles.usuario}>Valsa Venesiana</Text>
          <Text style={styles.info}>10 minutos</Text>

          <TouchableOpacity
            style={styles.assistir}
            onPress={() => {
              Linking.openURL("https://youtu.be/GsbimS_-CuM");
            }}
          >
            <Text style={styles.textoAssistir}>Assistir</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.telaVideo}>
          <Text style={styles.usuario}>Caminhada na Floresta</Text>
          <Text style={styles.info}>8 minutos</Text>
          <TouchableOpacity
            style={styles.assistir}
            onPress={() => {
              Linking.openURL("https://youtu.be/OkWVZa8mwog");
            }}
          >
            <Text style={styles.textoAssistir}>Assistir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.botao}>
          <ButtonCinza title={"Voltar"} onPress={handleStart2}></ButtonCinza>
          <ButtonLaranja
            title={"Evolução"}
            onPress={handleStart}
          ></ButtonLaranja>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    flex: 1,
    backgroundColor: "#0091F2",
    alignItems: "center",
  },

  viewlogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },

  usuario: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    width: 300,
  },

  info: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },

  telaTitulo: {
    backgroundColor: "white",
    marginTop: 35,
    marginBottom: 1,
    marginRight: 20,
    padding: 40,
    borderRadius: 20,
    width: 320,
  },

  telaVideo: {
    backgroundColor: "white",
    marginTop: 30,
    marginRight: 20,
    padding: 20,
    width: 320,
    borderRadius: 20,
  },

  video: {
    marginBottom: 5,
  },

  comoUsar: {
    backgroundColor: "#4ba37a",
    width: 110,
    borderRadius: 50,
    alignItems: "center",
    marginLeft: 150,
  },
  verEvolucoes: {
    backgroundColor: "#4a8ea8",
    width: 120,
    borderRadius: 50,
    alignItems: "center",
    marginRight: 150,
  },

  descricao: {
    fontSize: 14,
    color: "#000000",
    alignSelf: "flex-start",
  },

  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 16,
    width: 350,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },

  cardsTexto: {
    fontSize: 85,
    marginLeft: 10,
    fontWeight: "bold",
  },

  subTexto: {
    fontSize: 15,
    color: "#0080FF",
    marginLeft: 10,
  },

  textoAssistir: {
    fontSize: 16,
    color: "white",
    height: 20,
    alignItems: "center",
    alignSelf:"center"
  },

  imagens: {
    borderRadius: 25,
  },

  cards: {
    fontSize: 25,
    marginLeft: 10.5,
    width: 300,
    height: 250,
    marginBottom: 150,
    marginTop: 60,
    borderRadius: 25,
    justifyContent: "space-between",
  },

  scrollview: {
    width: 320,
    height: 200,
  },

  footer: {
    color: "#0080FF",
    marginLeft: 10,
  },
  botao: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  perfil: {
    width: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    padding: 20,
  },
  assistir: {
    backgroundColor: "#E59021",
    width: 110,
    borderRadius: 50,
    alignSelf:'flex-end'
  },
  textoUsar: {
    fontSize: 16,
    color: "white",
    height: 20,
    alignItems: "center",
    alignSelf:"center"
  },
  textoEvo: {
    fontSize: 16,
    color: "white",
    height: 20,
    alignItems: "center",
    alignSelf:"center"
  },
});
