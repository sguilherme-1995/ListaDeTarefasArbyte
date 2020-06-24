import { View, Text, Alert, Button, StyleSheet } from "react-native"
import React from 'react';

export default Logout = ({navigation})=>{
    const alertaSair = ()=> {
        Alert.alert(
            'Você deseja sair da sua conta?', 
            'Logout',
            [
                {text: 'Não', onPress: ()=>{navigation.navigate('TelaTarefas')}},
                {text: 'Sim', onPress: ()=>{navigation.navigate('TelaLogin')}},
            ]
            )    
    }    
    const alertaExcluir = ()=> {
        Alert.alert(
            'Você excluir sua conta?', 
            'Exclude',
            [
                {text: 'Não', onPress: ()=>{navigation.navigate('TelaTarefas')}},
                {text: 'Sim', onPress: ()=>{navigation.navigate('TelaLogin')}},
            ]
            )    
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>'Nome do Usuário'</Text>
            <View style={styles.buttons}>
            <Button color='#1631be' title="Sair da Conta" onPress={()=>alertaSair()}/>
            <Button color='#1631be' title="Excluir a Conta" onPress={()=>alertaExcluir()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center', 
        justifyContent:'space-around',
        backgroundColor: '#edcf4a',

    },
    buttons:{
        
        width: "90%", 
        margin: 20 
    
    }, 
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }

})