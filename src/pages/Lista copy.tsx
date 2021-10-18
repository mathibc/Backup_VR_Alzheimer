// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
// Photo by Sharefaith from Pexels
// Background image: https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/


import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');

const Paciente = [
  { id: 0, nome: 'Pedro' },
  { id: 1, nome: 'Abrilina Caçapavana Piratinhinga de Almeida' },
  { id: 2, nome: 'Silvia Santos Ribeiro Cordeiro' },
  { id: 3, nome: 'Flecha Roberto Pêra' },
  { id: 4, nome: 'Naomi Camp Bell' },
  { id: 5, nome: 'Antonio Rodriguez do Cruzeiro do Sul' },
  { id: 6, nome: 'Dolores Fuertes de Barriga' }
];

{/*
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.random.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});
*/}
const SPACING = 20;
const AVATAR_SIZE = 70;

export default () => {
    return <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar hidden/>
    </View>
}