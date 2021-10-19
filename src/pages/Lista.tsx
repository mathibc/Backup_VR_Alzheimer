import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Icon } from 'react-native-elements';
import { Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/core";
import { ListaPacientes } from "../components/ListaPacientes";
import logo from "../assets/VR_design.png";
import add from "../assets/Add.png";
import list from "../assets/Lista.png";

export default function Lista() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("Menu");
  }
  function handleStart2() {
    navigation.navigate("Paciente");
  }

  const mockData = [
    { id: "1", text: "Expo 💙" },
    { id: "2", text: "is" },
    { id: "3", text: "Awesome!" },
  ];
  

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.header}>
          <Icon
          raised
          name='arrow-left'
          type='font-awesome'
          color='#000000'
          tvParallaxProperties={undefined}  
          onPress={handleStart} 
          style={styles.icon}/>
        <Text style={styles.textfooter}>Lista de Pacientes</Text>
      </View>

      <ScrollView style={styles.scrollview}>
        {/*Aqui jás um searchzinho

    <View><FlatList
      data={mockData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 22 }}>
          {item.id} - {item.text}
        </Text>
      )}
    /></View>

*/}
        <TouchableOpacity onPress={handleStart2}>
        
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Pedro Fonseca</Text>

          </View>
        </TouchableOpacity>
        

        <TouchableOpacity>
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Paciente 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Paciente 2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Paciente 3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Paciente 4</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Paciente 5</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Paciente 6</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Paciente 7</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.telaTitulo}>
            <Text style={styles.usuario}>Paciente 8</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    flex: 1,
    backgroundColor: "#0091F2",
    alignItems: "center",
  },
  background: {
    alignItems: "center",
    backgroundColor: "#0087E2",
    height: "100%",
  },
  btnsubmit: {
    backgroundColor: "#FFFFFF",
    width: "60%",
    borderRadius: 20,
    alignItems: "center",
    padding: 70,
    marginTop: 20,
  },
  textsubmit: {
    fontSize: 18,
    textAlignVertical: "center",
  },
  header: {
    backgroundColor: "#00009C",
    paddingTop: 30,
    paddingRight:50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent:"center",
    alignSelf:"center",
    
  },
  textfooter: {
    color: "white",
    fontSize: 25,
    alignSelf:"center"
  },
  body: {
    alignItems: "center",
    height: "80%",
    justifyContent: "center",
  },
  scrollview: {
    width: 320,
    height: 200,
  },
  viewlogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  telaTitulo: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 35,
    marginBottom: 1,
    marginRight: 20,
    borderRadius: 20,
    width: 320,
  },

  telaVideo: {
    backgroundColor: "white",
    marginTop: 30,
    marginRight: 20,
    padding: 20,
    width: 320,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  video: {
    marginBottom: 5,
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
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  comoUsar: {
    backgroundColor: "#4ba37a",
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 15,
    marginLeft: 150,
  },

  verPerfil: {
    fontSize: 25,
    color: "lightblue",
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

  assistirTexto: {
    fontSize: 25,
    color: "white",
    height: 50,
    marginTop: 11,
    alignItems: "center",
  },

  imagens: {
    borderRadius: 25,
  },

  assistir: {
    width: 200,
    height: 50,
    backgroundColor: "#81BEF7",
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 46,
    alignSelf: "flex-start",
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

  footer: {
    color: "#0080FF",
    marginLeft: 10,
  },
  icon: {
    
    },


  
});
