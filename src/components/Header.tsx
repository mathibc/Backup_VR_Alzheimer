import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>VR Alzheimer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#00009C',
        padding: 20,
    
    },

    titulo:{
        fontSize: 26,
        color: "#FFFFFF",
        alignItems:'center',
        marginTop:20
    }
})