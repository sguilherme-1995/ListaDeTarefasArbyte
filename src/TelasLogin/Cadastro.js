import { View, Text, Button, StyleSheet, TextInput, Image } from "react-native"
import React from 'react';
import arbyte from './../../assets/arbyte.png'

export default TelaCadastro=({navigation})=>{
    return(
        <View style={styles.container}>
        <Image source={arbyte} style={styles.image}/>
        <TextInput style={styles.input} placeholder='Nome / Desabilitado temporariamente'/>
        <TextInput style={styles.input} placeholder='E-mail / Desabilitado temporariamente'/>
        <View style={styles.buttons}>
        <Button color='#1631be'  onPress={()=>navigation.navigate('TelaTarefas')} title="Cadastrar"/>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center', 
        justifyContent:'center',
        backgroundColor: '#edcf4a'
    },
    
    input: {
        width: '90%',
        height: 40,
        marginTop: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6,
        textAlign: 'center'

    },
    
    image:{
        width:250, height:60, marginBottom:50

    },
    buttons:{
        
        width: "90%", 
        margin: 20 
    
    }
})