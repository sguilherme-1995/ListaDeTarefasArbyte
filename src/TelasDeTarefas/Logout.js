import { View, Text, Alert, Button, StyleSheet, AsyncStorage } from "react-native"
import React from 'react';
import loginUsuario from './../API/Logar'

export default Logout = ({navigation})=>{

    const nome = AsyncStorage.getItem('nome')
    const nomeUsuario = JSON.parse(nome)
    
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
    
    console.log(nomeUsuario)
    return(
        
        <View style={styles.container}>
            <Text style={styles.text}>{nomeUsuario}</Text>
            <View style={styles.buttons}>
            <Button color='#1631be' title="Sair da Conta" onPress={()=>alertaSair()}/>
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

const mapToStateProps = (store) => {
    return {
        tarefaRed: store.tasks,
        token: store.token
    }
}